export function splitList(values: number[]):number[][] {

    return [values.splice(0, Math.ceil(values.length / 2)), values];
}