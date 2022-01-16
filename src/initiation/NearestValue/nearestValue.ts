export function nearestValue(values: number[], search: number): number {
    // your code here
    let differences: number[] = [];
    for (let i = 0; i < values.length; i++) {
        differences.push(Math.abs(values[i] - search));
    }

    const minDifference = Math.min(...differences);
    const firstIndex = differences.indexOf(minDifference);
    const lastIndex = differences.lastIndexOf(minDifference);

    if (firstIndex === lastIndex) {
        values[firstIndex];
    }

    return Math.min(values[firstIndex], values[lastIndex]);
}