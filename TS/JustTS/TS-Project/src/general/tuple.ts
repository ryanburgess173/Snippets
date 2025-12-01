let ourTuple: [number, boolean, string];

ourTuple = [5, false, 'Coding God was here'];

ourTuple.push('Something new');
console.log(ourTuple);

const ourReadOnlyTuple: readonly [number, boolean, string] = [5, true, 'The Real Coding God'];

console.log(ourReadOnlyTuple);

// destructuring tuples:
const graph: [x: number, y: number] = [55.2, 41.3];
const [x,y] = graph;

console.log(x);