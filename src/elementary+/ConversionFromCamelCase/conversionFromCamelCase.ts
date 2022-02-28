export class ConversionFromCamelCase {

    constructor(
        private input: string
    ) {
    }

    solution() {

        const regexUpperCaseLetter = /[A-Z][a-z]*/g;
        let result = '';
        let separator = '';
        const words = this.input.match(regexUpperCaseLetter);

        if (!words) {
            return this.input;
        }

        for (const word of words) {
            result += separator;
            result += word.toLowerCase();
            separator = '_';
        }

        return result;
    }
}