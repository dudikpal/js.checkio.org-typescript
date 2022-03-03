export class AllUpperII {

    constructor(
        private input: string
    ) {
    }

    solution() {

        return this.input.match(/^[A-Z+0-9\s]*$/);
    }
}