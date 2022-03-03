export class AllUpperII {

    constructor(
        private input: string
    ) {
    }

    solution() {

        return (this.input.trim().match(/[A-Z]+/g) || [''])[0].length > 0
            && (this.input.trim().match(/[a-z]+/g) || [''])[0].length < 1;
    }
}