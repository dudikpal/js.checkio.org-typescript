export function countDigits(text: string): number {
    // your code here
    const regex = /\d/g;
    const result: string[] = text.match(regex)!;
    if (!result) {
        return 0;
    }

    return result.length;
}