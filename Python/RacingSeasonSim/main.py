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

driversCount = 13

series = "indycar"

racesCount = 20

nascarCupSchedule1 = [
    "Daytona 500",
    "Rockingham Goodwrench 500",
    "Atlanta Motorcraft 500",
    "Richmond Pontiac Excitement 400",
    "Darlington Transouth 400",
    "Bristol Food City 500",
    "NASCAR 300 at Hickory",
    "Martinsville STP 500",
    "North Wilkesboro First Union 400",
    "Nashville Busch 420",
    "Talladega Diehard 500",
    "Coca-Cola 600",
    "Dover 500",
    "Pocono 500",
    "Texas World Speedway 400",
    "Michigan 400",
    "Sonoma 350",
    "Daytona Pepsi 400",
    "NASCAR at South Boston Speedway 300",
    "Watkins Glen 300",
    "New River Valley Speedway 300",
    "Indianapolis Raceway Park 400",
    "Nashville Music City 400",
    "Bristol Night Race",
    "Darlington Southern 500",
    "Richmond Chevy Rock N' Roll 400",
    "Texas World Speedway NRA 500",
    "Dover Marlboro 400",
    "Milwaukee Mile 400",
    "North Wilkesboro Tyson Holly-Farms 400",
    "Charlotte Mello Yello 500",
    "Talladega Winston 500",
    "Martinsville Goody's 500",
    "Phoenix Subway 500k",
    "Rockingham ACDelco 500",
    "Atlanta NAPA 500"
]
nascarCupSchedule2 = [
    "Daytona 500",
    "Rockingham Goodwrench 500",
    "Atlanta Motorcraft 500",
    "Richmond Pontiac Excitement 400",
    "Darlington Transouth 400",
    "Bristol Food City 500",
    "NASCAR at Circuit of The Americas",
    "Martinsville STP 500",
    "North Wilkesboro First Union 400",
    "Nashville Busch 420",
    "Talladega Diehard 500",
    "Coca-Cola 600",
    "Dover 500",
    "Pocono 500",
    "Texas World Speedway 400",
    "Michigan 400",
    "Sonoma 350",
    "Daytona Pepsi 400",
    "NASCAR on The Streets of Chicago",
    "Watkins Glen 300",
    "New Hampshire 300k",
    "Indianapolis Brickyard 400",
    "Nashville Music City 400",
    "Bristol Night Race",
    "Darlington Southern 500",
    "Richmond Chevy Rock N' Roll 400",
    "Texas NRA 500",
    "Dover Autism Speaks 400",
    "Milwaukee Mile 400",
    "North Wilkesboro Tyson Holly-Farms 400",
    "Charlotte Mello Yello 500",
    "Talladega Winston 500",
    "Martinsville Goody's 500",
    "Phoenix Subway 500k",
    "Iowa ACDelco 500",
    "Homestead-Miami NAPA 500"
]
indycarSchedule1 = [
    "Trenton International Speedway 500",
    "Mid-Ohio Sports Car Course",
    "Canadian Tire Raceway Park",
    "Michigan US 500",
    "Pocono American 500",
    "Indianapolis 500",
    "Long Beach Grand Prix",
    "Road America",
    "Pikes Peak Highway",
    "Streets of Toronto Grand Prix",
    "Langhorne Speedway 500",
    "Grand Prix of Alabama at Barber Park",
    "Milwaukee Mile",
    "Streets of Cleveland Grand Prix",
    "Illinois State Fairgrounds",
    "Laguna Seca California Grand Prix",
    "Streets of Detroit Grand Prix",
    "Virginia International Raceway",
    "DuQoin State Fairgrounds",
    "California State Fairgrounds",
    "Phoenix Raceway",
    "Watkins Glen",
    "Arizona State Fairgrounds"
]
indycarSchedule2 = [
    "Grand Prix of St. Petersburg",
    "Mid-Ohio Sports Car Course",
    "Canadian Tire Raceway Park",
    "Michigan US 500",
    "Pocono American 500",
    "Indianapolis 500",
    "Long Beach Grand Prix",
    "Road America",
    "Gateway",
    "Streets of Toronto Grand Prix",
    "Texas Motor Speedway",
    "Grand Prix of Alabama at Barber Park",
    "Milwaukee Mile",
    "Streets of Cleveland Grand Prix",
    "Iowa Speedway",
    "Laguna Seca California Grand Prix",
    "Streets of Detroit Grand Prix",
    "Virginia International Raceway",
    "Charlotte Motor Speedway",
    "Sonoma Raceway",
    "Phoenix Raceway",
    "Watkins Glen",
    "Nashville Grand Prix"
]

nascarPointsAwarded = [185, 170, 165, 160, 155, 150, 146, 142, 138, 134, 130, 127, 124, 121, 118, 115, 112, 109, 106, 103]
indycarPointsAwarded = [100, 90, 80, 70, 60, 50, 45, 40, 35, 30, 25, 22, 19, 16, 13, 10, 9, 8, 7, 6]

pointsAwarded = indycarPointsAwarded
schedule = indycarSchedule1

def main(yearStr):
    print("Season: " + str(yearStr))
    getJsonChanceArray(yearStr)
    for i in range(racesCount):
        print("\n-------------------------")
        print(schedule[i])
        print("-------------------------")
        runRace(chanceArray, i)
        print("========================================================")
        print("STANDINGS:")
        print("\tDriver\t\t\tPoints\t\tWins")
        print("========================================================")
        pointsStandings.sort(key=lambda x: x.points, reverse=True)
        count = 1
        for driver in pointsStandings:
            print(str(count) + "\t" + str(driver.name) + "\t\t" + str(driver.points) + "\t\t" + str(driver.wins))
            count += 1
        input()

def populateChanceArray():
    pointsToBeGiven = driversCount
    for i in range(driversCount):
        driverName = input("Enter Driver Name: ")
        driverWins = int(input("Enter Driver Wins: "))
        driverPoints = pointsToBeGiven

        for i in range(driverPoints):
            chanceArray.append(driverName)
            chanceArray.append(driverName)
            chanceArray.append(driverName)

        for i in range(driverWins):
            chanceArray.append(driverName)
            chanceArray.append(driverName)
            chanceArray.append(driverName)
            chanceArray.append(driverName)
            chanceArray.append(driverName)

        pointsToBeGiven -= 1
    

def runRace(chanceArray, eventNumber):
    raceChanceArray = chanceArray # copy of the array we can modify just for an individual race

    results = []

    driversToFinish = 0

    while(driversToFinish < driversCount):
        print("Finding next car to finish")
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
        print("Driver finished!")
        driversToFinishStr = str(driversToFinish)
        print("Drivers finished: "+driversToFinishStr)
        print(results)

    print("Event Number "+str(eventNumber+1))
    print("----------------------------")
    count = 1
    for driver in results:
        print(str(count)+". "+driver)
        count+=1
    print("----------------------------")
    print("")


def getJsonChanceArray(yearStr):
    print(yearStr)
    pointsToBeGiven = driversCount
    fileString = "data/"+str(yearStr)+"I.json"
    print(fileString)
    jsonReader = JsonReader(fileString)
    entries = jsonReader.data["entries"]
    print(driversCount)
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

def runSimulation(startYear, endYear): 
    global chanceArray 
    for year in range(startYear, endYear + 1): 
        # Reset for new season 
        pointsStandings.clear() 
        chanceArray = [] 
        main(year) 
        
runSimulation(1972, 1981)

print("None Below:")
print(None)