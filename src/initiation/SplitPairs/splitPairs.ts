export function splitPairs(text: string): string[] {
    // your code here
    let result: string[] = [];
    for (let i = 0; i < text.length - 1; i += 2) {
        result.push(text[i].concat(text[i + 1]));
    }

    if (text.length % 2 !== 0) {
        result.push(text[text.length - 1].concat('_'));
    }

    return result;
}