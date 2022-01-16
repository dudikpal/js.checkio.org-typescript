import {sumNumbers} from "./sumNumbers";

describe('Sum numbers from string', () => {
    it.each`
        input     | expected
        ${'who is 1st here'}   	|${0}
        ${'my numbers is 2'}   	|${2}
        ${'This picture is an oil on canvas '+
    'painting by Danish artist Anna '+
    'Petersen between 1845 and 1910 year'}   	|${3755}
        ${'5 plus 6 is'}   	|${11}
        ${''}   	|${0}
    `
    ("expected $expected here", ({input, expected}) => {
        expect(sumNumbers(input)).toEqual(expected);
    })
})