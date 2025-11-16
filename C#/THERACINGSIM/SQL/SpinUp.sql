CREATE DATABASE TheRacingSim;
USE TheRacingSim;

CREATE TABLE Series(
	SeriesID TINYINT UNSIGNED PRIMARY KEY AUTO_INCREMENT NOT NULL,
    SeriesName VARCHAR(50) NOT NULL
);

/* Drivers */
CREATE TABLE Drivers(
	DriverID SMALLINT UNSIGNED PRIMARY KEY AUTO_INCREMENT NOT NULL,
    DriverName VARCHAR(50) NOT NULL
);
CREATE INDEX Drivers_DriverName_idx
ON Drivers(DriverName);

/* Track Types */
CREATE TABLE TrackTypes(
	TrackTypeID SMALLINT UNSIGNED PRIMARY KEY AUTO_INCREMENT NOT NULL,
    TrackTypeName VARCHAR(50) NOT NULL,
    TrackTypeDesc VARCHAR(256)
);
CREATE INDEX TrackTypes_TrackTypeID_idx
ON TrackTypes(TrackTypeID);

/* Tracks */
CREATE TABLE Tracks(
	TrackID SMALLINT UNSIGNED PRIMARY KEY AUTO_INCREMENT NOT NULL,
    TrackName VARCHAR(75) NOT NULL,
    TrackTypeID SMALLINT UNSIGNED NOT NULL,
    YearBuilt SMALLINT,
    FOREIGN KEY (TrackTypeID) REFERENCES TrackTypes(TrackTypeID)
		ON DELETE RESTRICT
        ON UPDATE RESTRICT
);
CREATE INDEX Tracks_TrackName_idx
ON Tracks(TrackName);

/* Events */
CREATE TABLE Events(
	EventID INT UNSIGNED PRIMARY KEY AUTO_INCREMENT NOT NULL,
    EventName VARCHAR(100) NOT NULL,
    TrackID SMALLINT UNSIGNED NOT NULL,
    SeriesID TINYINT UNSIGNED NOT NULL,
    EventDate DATE,
    FOREIGN KEY (TrackID) REFERENCES Tracks(TrackID)
		ON DELETE RESTRICT
        ON UPDATE CASCADE,
	FOREIGN KEY (SeriesID) REFERENCES Series(SeriesID)
		ON DELETE RESTRICT
        ON UPDATE CASCADE
);
CREATE INDEX Events_EventNameTrackID_idx
ON Events(EventName, TrackID);

CREATE INDEX Events_EventName_idx
ON Events(EventName);

/* Historical Seasons */
CREATE TABLE HistoricalSeasons(
	HistoricalSeasonsID INT UNSIGNED PRIMARY KEY AUTO_INCREMENT NOT NULL,
    Year INT NOT NULL,
    SeriesID TINYINT UNSIGNED NOT NULL,
    DriverID SMALLINT UNSIGNED NOT NULL,
    Position INT NOT NULL,
    Wins INT NOT NULL,
    FOREIGN KEY (SeriesID) REFERENCES Series(SeriesID)
		ON DELETE RESTRICT
        ON UPDATE CASCADE,
	FOREIGN KEY (DriverID) REFERENCES Drivers(DriverID)
		ON DELETE RESTRICT
        ON UPDATE CASCADE
);

CREATE INDEX HistoricalSeasons_idx
ON HistoricalSeasons(Year, SeriesID, DriverID);

/* Views */
CREATE VIEW SeriesView AS
SELECT SeriesName FROM Series;

/* Views */
CREATE VIEW EventListView AS
SELECT E.EventDate, E.EventName, T.TrackName, S.SeriesName
FROM Events E
INNER JOIN Tracks T
ON E.TrackID = T.TrackID
INNER JOIN Series S
ON S.SeriesID = E.SeriesID
ORDER BY E.EventDate ASC;

/* Stored Procs */
DELIMITER //
CREATE PROCEDURE GetAllDrivers()
BEGIN
	SELECT * FROM Drivers;
END //
DELIMITER ;

DELIMITER //
CREATE PROCEDURE GetAllTracks()
BEGIN
	SELECT * FROM Tracks;
END //
DELIMITER ;

DELIMITER //
CREATE PROCEDURE GetAllSeries()
BEGIN
	SELECT * FROM Series;
END //
DELIMITER ;

DELIMITER //
CREATE PROCEDURE GetSeasonSchedule(
	IN year INT,
    IN seriesID INT
)
BEGIN
	SELECT E.EventDate, E.EventName, S.SeriesName, T.TrackName FROM Events E
    INNER JOIN Series S
    ON E.SeriesID = S.SeriesID
    INNER JOIN Tracks T
    ON E.TrackID = T.TrackID
    WHERE YEAR(EventDate) = year
    AND SeriesID = seriesID
    ORDER BY EventDate;
END //
DELIMITER ;

DELIMITER //
CREATE PROCEDURE AddHistoricalSeason(
	IN driverid VARCHAR(50),
    IN wins INT,
    IN position INT,
    IN year INT,
    IN seriesid VARCHAR(50)
)
BEGIN
	INSERT INTO HistoricalSeasons(
		Year,
        SeriesID,
        DriverID,
        Position,
        Wins
    ) VALUES (
		year,
        seriesid,
        driverid,
        position,
        Wins
    );
END //
DELIMITER ;
