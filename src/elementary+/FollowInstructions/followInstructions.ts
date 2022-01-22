type coordinate = {
    x: number;
    y: number;
}


export function follow(instructions: string): [number, number] {

    let coord: coordinate = {x: 0, y: 0};
    instructions.split('')
        .forEach(direction => coord = move(direction, coord));

    return [coord.x, coord.y];
}

function move(direction: string, coord: coordinate): coordinate {
    switch (direction) {
        case 'f': coord.y++; break;
        case 'b': coord.y--; break;
        case 'r': coord.x++; break;
        case 'l': coord.x--; break;
    }

    return coord;
}