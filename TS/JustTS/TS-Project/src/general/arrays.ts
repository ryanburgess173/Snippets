const names: string[] = [];
names.push("Dylan");

const names2: readonly string[] = ["Dylan"];
// will throw error: names2.push("Jack");

const numbers = [1,2,3];
numbers.push(4);