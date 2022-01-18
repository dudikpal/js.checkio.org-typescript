import {nonUniqueElements} from "./nonUniqueElements";

describe('Cut off unique elements', () => {
    it.each`
        input     | expected
        ${[1, 2, 3, 2, 1]}   	|${[1, 2, 2, 1]}
        ${[1, 2, 3, 4]}   	|${[]}
        ${[1, 1, 1, 1]}   	|${[1, 1, 1, 1]}
    `
    ("expected $expected here", ({input, expected}) => {
        expect(nonUniqueElements(input)).toEqual(expected);
    })
})