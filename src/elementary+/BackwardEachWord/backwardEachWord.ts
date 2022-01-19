export function backwardStringByWord(text: string): string {
    // your code here
    const words = text.split(/(\s+)/);
    for (let i = 0; i < words.length; i++) {
        words[i] = Array.from(words[i]).reverse().join('');
    }

    return words.join('');
}