export function replaceFirst(values: number[]): number[] {
    // your code here
    if (values.length === 0) {
        return values;
    }
    const result: number[] = values.slice(1, values.length);
    result.push(values[0]);

    return result;
}