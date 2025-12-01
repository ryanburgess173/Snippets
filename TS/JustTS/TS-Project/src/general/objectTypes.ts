const car: { type: string, model: string, year: number } = {
    type: 'Toyota',
    model: 'Corolla',
    year: 2009
};

car.type = "Ford";
car.model = "Fusion";
car.year = 2012;

// index signatures
const nameAgeMap: { [index: string]: number } = {};
nameAgeMap.Jack = 25;
nameAgeMap.Mark = 50;

console.log(nameAgeMap);