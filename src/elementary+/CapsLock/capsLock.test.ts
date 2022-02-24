import {CapsLock} from "./capsLock";

const testCases = [
    {input: 'Why are you asking me that?', expected: 'Why RE YOU sking me thT?'},
    {input: 'Always wanted to visit Zambia.', expected: 'AlwYS Wnted to visit ZMBI.'},
    {input: 'Aloha from Hawaii', expected: 'Aloh FROM HwII'},
];

testCases.forEach(({input, expected}) => {

    const solution = new CapsLock(input);

    it(`expected :${expected}`, () => {
        expect(solution.solution()).toEqual(expected)
    });
});