export class CapsLock {

    private uppercaseOn: boolean = false;

    constructor(
        private input: string
    ) {
    }

    solution() {

        let result = '';

        for (const letter of this.input) {

            if (this.isLowercaseA(letter)) {

                this.uppercaseOn = !this.uppercaseOn;
                continue;
            }

            result += this.uppercaseOn ? letter.toUpperCase() : letter;
        }

        return result;
    }


    private isLowercaseA(letter: string) {

        return letter === 'a';
    }
}