export function threeWords(text: string): boolean {
    /*const regex = text.match(/(\b[^\d][a-zA-Z]+\b){3}/g);
    if (regex === null) {
        return false;
    }

    return regex[0] !== null;*/
    return /(\b[^\d][a-zA-Z]+\b){3}/.test(text);
}