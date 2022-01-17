import {backwardStringByWord} from "./backwardEachWord";

describe('Each word reverse', () => {
    it.each`
        input     | expected
        ${'world'}   	|${'dlrow'}
        ${'hello   world'}   	|${'olleh   dlrow'}
    `
    ("expected $expected here", ({input, expected}) => {
        expect(backwardStringByWord(input)).toEqual(expected);
    })
})