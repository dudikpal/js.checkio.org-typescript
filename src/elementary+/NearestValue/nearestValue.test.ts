import {nearestValue} from "./nearestValue";

describe('Nearest value from array', () => {

    it.each`
        inputArray                  |inputNumber    | expectedValue
        ${[4, 7, 10, 11, 12, 19]}   |${9}           | ${10}
        ${[4, 7, 10, 11, 12, 19]}   |${8}           | ${7}
        ${[4, 8, 10, 11, 12, 19]}   |${9}           | ${8}
        ${[4, 9, 10, 11, 12, 19]}   |${9}           | ${9}
        ${[4, 7, 10, 11, 12, 19]}   |${0}           | ${4}
    `
    ("expected $inputArray here", ({inputArray, inputNumber, expectedValue}) => {
        expect(nearestValue(inputArray, inputNumber)).toEqual(expectedValue);
    })
})