let cols: number = 5;
let rows: number = 5;

let grid: Array<number> = new Array(cols);

let openSet: number[] = [];
let closedSet: number[] = [];

let start: GridPoint;
let end: GridPoint;
let path: GridPoint[] = [];

// manhattan distance - heuristics look at game programming from theory.stanford.edu
function heuristic(position0: GridPoint, position1: GridPoint): number {
    let d1: number = Math.abs(position1.x - position0.x);
    let d2: number = Math.abs(position1.y - position0.y);

    return d1+d2;
}

class GridPoint{
    x: number;
    y: number;
    f: number;
    g: number;
    h: number;
    neighbors: number[];
    parent: undefined;

    constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
        this.f = 0;
        this.g = 0;
        this.h = 0;
        this.neighbors = [];
        this.parent = undefined;
    }

    updateNeighbors(grid: Array<number>): void{
        let i = this.x;
        let j = this.y;
        if (i < cols - 1){
            this.neighbors.push(grid[i + 1][j]);
        }
        if (i > 0){
            this.neighbors.push(grid[i][j + 1]);
        }
        if (j < rows - 1){
            this.neighbors.push(grid[i][j + 1]);
        }
        if (j > 0){
            this.neighbors.push(grid[i][j - 1]);
        }
    };
}

function init(): void {
    for (let i:number = 0; i<cols; i++){
        grid[i] = new Array(rows);
    }
}