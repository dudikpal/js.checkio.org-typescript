import {sumNumbers} from "../SumNumbers/sumNumbers";
import {countDigits} from "./countDigits";

describe('Count digits in string', () => {
    it.each`
        input     | expected
        ${'who is 1st here'}   	|${1}
        ${'my numbers is 2'}   	|${1}
        ${'This picture is an oil on canvas '+
    'painting by Danish artist Anna '+
    'Petersen between 1845 and 1910 year'}   	|${8}
        ${'5 plus 6 is'}   	|${2}
        ${''}   	|${0}
    `
    ("expected $expected here", ({input, expected}) => {
        expect(countDigits(input)).toEqual(expected);
    })
})