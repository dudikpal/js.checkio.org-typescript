export function beginningZeros(text: string): number {
    // your code here
    let countOfZeros = 0;

    for (let i = 0; i < text.length; i++) {
        if (text[i] !== '0') {
            return countOfZeros;
        }
        countOfZeros++;
    }

    return countOfZeros;
}