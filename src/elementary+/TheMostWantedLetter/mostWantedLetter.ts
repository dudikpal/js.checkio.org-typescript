export class MostWantedLetter {

    constructor(
        private input: string
    ) {
    }


    solution() {

        let letters = new Map<string, number>();

        for (let letter of this.input) {

            if (this.isLetter(letter)) {

                letter = letter.toLowerCase();

                if (!letters.has(letter)) {

                    letters.set(letter, 0);
                }

                letters.set(letter, letters.get(letter)! + 1);
            }

        }

        return [...letters.entries()]
            .sort((a, b) =>
            a[1] !== b[1] ? b[1] - a[1] :
            b[0] < a[0] ? 1 : -1)[0][0];
    }


    isLetter(letter: string): boolean {

        const letterCode = letter.charCodeAt(0);

        return (letterCode >= 65 && letterCode <= 90)
            || (letterCode >= 97 && letterCode <= 122);
    }
}