export class SecretMessage {

    constructor(
        private input: string
    ) {
    }

    solution() {

        return this.input.match(/[A-Z]/g)?.join('') || '';
    }
}