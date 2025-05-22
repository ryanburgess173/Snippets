import random
import json

class JsonReader:
    fileName = ""
    openFile = None
    data = None

    def __init__(self, filename):
        self.fileName = filename
        self.openFile = open(self.fileName)
        self.data = json.load(self.openFile)
        self.openFile.close()

class Driver:
    name = ""
    points = 0
    wins = 0

    def __init__(self, name, points, wins):
        self.name = name
        self.points = points
        self.wins = wins

    def addPoints(self, points):
        self.points += points

pointsStandings = []

chanceArray = []

driversCount = 20

racesCount = 36

pointsAwarded = [36, 31, 26, 21, 18, 15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1]

def main():
    #populateChanceArray()
    getJsonChanceArray()
    for i in range(racesCount):
        print("\nRace number "+str(i+1)+"!!!")
        print("-------------------------")
        runRace(chanceArray)

    print("========================================================")
    print("STANDINGS:")
    print("\tDriver\t\t\tPoints\t\tWins")
    print("========================================================")
    pointsStandings.sort(key=lambda x: x.points, reverse=True)
    count = 1
    for driver in pointsStandings:
        print(str(count) +
               "\t" +str(driver.name) + "\t\t" +
                 str(driver.points) + "\t\t" + str(driver.wins))
        count+=1

def populateChanceArray():
    pointsToBeGiven = driversCount
    for i in range(driversCount):
        driverName = input("Enter Driver Name: ")
        driverWins = int(input("Enter Driver Wins: "))
        driverPoints = pointsToBeGiven

        for i in range(driverPoints):
            chanceArray.append(driverName)

        for i in range(driverWins):
            chanceArray.append(driverName)

        pointsToBeGiven -= 1
    

def runRace(chanceArray):
    raceChanceArray = chanceArray # copy of the array we can modify just for an individual race

    results = []

    driversToFinish = 0

    while(driversToFinish < driversCount):
        roll = random.randint(0, len(raceChanceArray)-1)
        driver = raceChanceArray[roll]
        win = False
        if driver not in results:
            results.append(driver)
            driversToFinish += 1
            points = pointsAwarded[driversToFinish - 1]
            if driversToFinish == 1:
                win = True
            found = False
            for driverEntry in pointsStandings:
                if driverEntry.name == driver:
                    driverEntry.points += points
                    if win == True:
                        driverEntry.wins += 1
                    found = True
            if found==False:
                if win == True:
                    newDriver = Driver(driver, points, 1)
                else:
                    newDriver = Driver(driver, points, 0)
                pointsStandings.append(newDriver)

    print(results)


def getJsonChanceArray():
    pointsToBeGiven = driversCount
    jsonReader = JsonReader("1981W.json")
    entries = jsonReader.data["entries"]
    for i in range(driversCount):
        entry = entries[i]
        driverName = entry['name']
        driverWins = entry['wins']
        driverPoints = pointsToBeGiven

        for i in range(driverPoints):
            chanceArray.append(driverName)

        for i in range(driverWins):
            chanceArray.append(driverName)

        pointsToBeGiven -= 1

main()
print("None:")
print(None)