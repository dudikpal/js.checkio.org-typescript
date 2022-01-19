export function removeAllBefore(values: number[], b: number): number[] {
    // your code here
    if (values.indexOf(b) == -1) {
        return values;
    }

    return values.slice(values.indexOf(b), values.length);
}