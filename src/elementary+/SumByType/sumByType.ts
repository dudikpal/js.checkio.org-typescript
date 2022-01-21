export function sumByTypes(values: Array<number|string>): [string, number] {

    let result: [string, number] = ['', 0];
    values
        .forEach(item => Number.isFinite(item) ? result[1] += +item : result[0] += item);

    return result;
}