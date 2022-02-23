import {Pangram} from "./pangram";

const testCases = [
    {input: 'Bored? Craving a pub quiz fix? Why, just come to the Royal Oak!', expected: true},
    {input: "As quirky joke, chefs won't pay devil magic zebra tax.", expected: true},
    {input: "Six big devils from Japan quickly forgot how to walt.", expected: false},

];

testCases.forEach(({input, expected}) => {

    const pangram = new Pangram(input);

    it(`expected :${expected}`, () => {
        expect(pangram.solution()).toEqual(expected)
    });
});