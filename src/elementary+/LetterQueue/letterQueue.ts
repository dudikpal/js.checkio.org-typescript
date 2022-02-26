export class LetterQueue {

    private queue: string[];

    constructor(
        private input: string[]
    ) {
        this.queue = [];
    }

    solution() {

        for (const line of this.input) {

            this.parseLine(line);
        }

        return this.queue.join('');
    }


    parseLine(line: string) {

        const command = line.match(/^\w+/)![0];
        const param = line.match(/\w$/)![0];

        this.processCommand(command, param);
    }


    private processCommand(command: string, param: string) {

        command === 'PUSH' ? this.queue.push(param) : this.queue.shift();
    }
}