export function sumNumbers(test: string): number {
    // your code here
    const regex = test.match(/\b\d+\b/g);
    if (regex === null) {
        return 0;
    }
    const numbers: number[] = regex.map(Number);
    return numbers.reduce((a, b) => a + b);
}