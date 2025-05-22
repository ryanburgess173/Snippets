INSERT INTO Series(SeriesName)
VALUES ('NASCAR Cup Series'),
('NASCAR Busch Series'),
('IndyCar Series'),
('IMSA'),
('Formula 1');

INSERT INTO TrackTypes(TrackTypeName, TrackTypeDesc)
VALUES ('Super Speedway', '> 2 miles'),
('Short Track', '< 1 mile'),
('Cookie-Cutter Oval', '1.3-1.5 mile tri-oval'),
('Street-Course', ''),
('Road-Course', ''),
('Intermediate Oval', '1-1.99 mile oval thats not a trioval'),
('Large Oval', '2 mile oval'),
('Dirt Oval', '');

INSERT INTO Tracks (TrackName, TrackTypeID, YearBuilt)
VALUES ('Charlotte Speedway', 8, 1949),
('Daytona Beach & Road Course', 8, 1949),
('Orange Speedway', 2, 1949),
('Langhorne Speedway', 2, 1949),
('Hamburg Fairgrounds', 8, 1949),
('Martinsville Speedway', 2, 1949),
('Heidelberg Raceway', 8, 1949),
('North Wilkesboro Speedway', 2, 1949);

INSERT INTO Events(EventName, TrackID, SeriesID, EventDate)
VALUES ('Race 1 at Charlotte Speedway', 1, 1, DATE('1949-06-19')),
('Race 1 at Daytona Beach', 2, 1, DATE('1949-07-10')),
('Race 1 at Orange Speedway', 3, 1, DATE('1949-08-07')),
('Race 1 at Langhorne Speedway', 4, 1, DATE('1949-09-11')),
('Race 1 at Hamburg Fairgrounds', 5, 1, DATE('1949-09-18')),
('Race 1 at Martinsville Speedway', 6, 1, DATE('1949-09-25')),
('Race 1 at Heidelberg Raceway', 7, 1, DATE('1949-10-02')),
('Race 1 at North Wilkesboro Speedway', 8, 1, DATE('1949-10-16'));