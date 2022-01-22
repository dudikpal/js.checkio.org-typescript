import {commonWords} from "./commonWords";

const testCases = [
    {input1: 'hello,world', input2: 'hello,earth', expected: 'hello'},
    {input1: 'one,two,three', input2: 'four,five,six', expected: ''},
    {input1: 'one,two,three', input2: 'four,five,one,two,six,three', expected: 'one,three,two'},
    {input1: 'mega,cloud,two,website,final', input2: 'window,penguin,literature,network,fun,cloud,final,sausage', expected: 'cloud,final'},
];
testCases.forEach(({input1, input2, expected}) => {
    it(`expected :${expected}`, () => {
        expect(commonWords(input1, input2)).toEqual(expected)
    })
});