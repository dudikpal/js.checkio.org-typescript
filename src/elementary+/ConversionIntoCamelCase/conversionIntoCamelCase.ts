export class ConversionIntoCamelCase {

    constructor(
        private input: string
    ) {
    }

    solution() {

        const words = this.input.split('_');
        let result = '';

        for (const word of words) {
            result += word.charAt(0).toUpperCase().concat(word.substr(1));
        }

        return result;
    }
}