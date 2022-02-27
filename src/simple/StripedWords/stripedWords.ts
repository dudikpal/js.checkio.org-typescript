export class StripedWords {

    constructor(
        private input: string
    ) {
    }

    solution() {

        const regexDoubleVowels = /[aeiouy]{2,}/ig;
        const regexVowels = /[aeiouy]/ig;
        const regexDoubleConsonants = /[BCDFGHJKLMNPQRSTVWXZ]{2,}/ig;
        const regexConsonants = /[BCDFGHJKLMNPQRSTVWXZ]/ig;
        const anyDigit = /[\d]/g;
        let counter = 0;
        const words: string[] = this.input.split(/\W+/);

        for (const word of words) {
            if (!word.match(regexDoubleVowels) && !word.match(regexDoubleConsonants)
                && (word.match(regexVowels) || word.match(regexConsonants))
                && word.length > 1
                && !word.match(anyDigit)) {

                counter++;
            }
        }

        return counter;
    }
}