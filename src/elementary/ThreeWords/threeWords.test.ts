import {threeWords} from "./threeWords";

describe('Three words in succession', () => {
    it.each`
        input     | expected
        ${'321 Hello World hello 123'}   	|${true}
        ${'He is 123 man'}   	|${false}
        ${'1 2 3 4'}   	|${false}
        ${'bla bla bla bla'}   	|${true}
        ${'Hi'}   	|${false}
    `
    ("expected $expected here", ({input, expected}) => {
        expect(threeWords(input)).toEqual(expected);
    })
})