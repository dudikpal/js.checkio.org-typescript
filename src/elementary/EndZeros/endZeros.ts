export function endZeros(value: number): number {
    // your code here
    if (value == 0) {
        return 1;
    }
    const originalLength = value.toString().length;
    const lengthWithoutZeros = parseInt(
        Array
        .from(value.toString())
        .reverse().join('')
    ).toString().length;

    return originalLength - lengthWithoutZeros;
}