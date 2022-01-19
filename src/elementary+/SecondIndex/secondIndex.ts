export function secondIndex(text: string, symbol: string): number | undefined {
    // your code here
    const index = text.slice(text.indexOf(symbol) + 1).indexOf(symbol);

    return index === -1 ? undefined : index + text.indexOf(symbol) + 1;
}