export function firstWord(text: string): string {
    // your code here
    const regex = /[\w']+/;

    return text.match(regex)![0];
}