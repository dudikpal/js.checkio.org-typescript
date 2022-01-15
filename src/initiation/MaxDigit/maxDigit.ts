export function maxDigit(value: number): number {
    // your code here
    let biggestDigit: number = 0;
    value.toString().split('')
        .map(Number)
        .forEach(digit => {
            if (digit > biggestDigit) {
                biggestDigit = digit;
            }
        });

    return biggestDigit;
}