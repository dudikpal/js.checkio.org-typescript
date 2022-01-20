import {timeConverter} from "./timeConverter";

const testCases = [
    {input: '12:30', expected: '12:30 p.m.'},
    {input: '09:00', expected: '9:00 a.m.'},
    {input: '23:15', expected: '11:15 p.m.'},
];
testCases.forEach(({input, expected}) => {
    it(`expected :${expected}`, () => {
        expect(timeConverter(input)).toEqual(expected)
    })
});