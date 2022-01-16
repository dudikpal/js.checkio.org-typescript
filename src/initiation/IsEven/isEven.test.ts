import {isEven} from "./isEven";

describe('Is even number', () => {
    it.each`
        input  | expected
        ${2}   |${true}
        ${3}   |${false}
    `
    ("expected $input here", ({input, expected}) => {
        expect(isEven(input)).toEqual(expected);
    })
})