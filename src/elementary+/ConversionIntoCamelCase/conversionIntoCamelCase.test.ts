import {ConversionIntoCamelCase} from "./conversionIntoCamelCase";

const testCases = [
    {input: 'my_function_name', expected: 'MyFunctionName'},
    {input: 'i_phone', expected: 'IPhone'},
];

testCases.forEach(({input, expected}) => {
    const solution = new ConversionIntoCamelCase(input);
    it(`expected :${expected}`, () => {
        expect(solution.solution()).toEqual(expected)
    });
});