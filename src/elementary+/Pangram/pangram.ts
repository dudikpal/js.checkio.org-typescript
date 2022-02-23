export class Pangram {

    private letters = 'abcdefghijklmnopqrstuvwxyz';

    constructor(
        private text: string
    ) {
    }


    solution(): boolean {

        let counter: number = 0;

        for (const letter of this.letters) {

            if (!this.text.toLowerCase().includes(letter)) {
                console.log(letter)
                return false;
            }
        }

        return true;
    }
}