export function goesAfter(word: string, first: string, second: string): boolean {

    if (first === second
    || (!word.includes(first) || !word.includes(second))) {
        return false;
    }

    return word.indexOf(second) - word.indexOf(first) === 1;
}