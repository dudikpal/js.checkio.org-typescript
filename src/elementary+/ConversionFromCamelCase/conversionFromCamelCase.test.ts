import {ConversionFromCamelCase} from "./conversionFromCamelCase";

const testCases = [
    {input: 'MyFunctionName', expected: 'my_function_name'},
    {input: 'IPhone', expected: 'i_phone'},
    {input: 'hone', expected: 'hone'},
];

testCases.forEach(({input, expected}) => {
    const solution = new ConversionFromCamelCase(input);
    it(`expected :${expected}`, () => {
        expect(solution.solution()).toEqual(expected)
    });
});