import {firstWord} from "./firstWord";

describe('First word in a string', () => {
    it.each`
        input     | expected
        ${'Hello. world'}   	|${'Hello'}
        ${'Hel, world'}   	|${'Hel'}
        ${"Hel'ya world"}   	|${"Hel'ya"}
        ${"world"}   	|${"world"}
    `
    ("expected $expected here", ({input, expected}) => {
        expect(firstWord(input)).toEqual(expected);
    })
})