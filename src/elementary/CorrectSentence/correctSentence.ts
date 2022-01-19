export function correctSentence(text: string): string {
    // your code here
    const firstChar = text[0];
    if (firstChar !== firstChar.toUpperCase()) {
        text = firstChar.toUpperCase().concat(text.slice(1));
    }

    const lastChar = text[text.length - 1];
    if (lastChar !== '.') {
        text += '.';
    }

    return text;
}