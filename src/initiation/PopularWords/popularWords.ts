export function popularWords(text: string, words: string[]) {

    const result = words.reduce(
        (acc:{[key: string]: number}, curr) => (acc[curr] = 0, acc), {}
    );

    text.split(/\s/)
        .filter(word => words.includes(word.toLowerCase()))
        .forEach(word => result[word.toLowerCase()]++);

    return result;
}