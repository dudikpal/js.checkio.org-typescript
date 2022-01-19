import {popularWords} from "./popularWords";

const testCases = [
    {
        input: `When I was One
I had just begun
When I was Two
I was nearly new`,
        words: ['i', 'was', 'three', 'near'],
        expected: {
            'i': 4,
            'was': 3,
            'three': 0,
            'near': 0
        }
    },
    {
        input: `When I was One
I had just begun
When I was Two
I was nearly new`,
        words: ['when', 'just'],
        expected: {
            'when': 2,
            'just': 1
        }
    },
];

testCases.forEach(({input, words, expected}) => {
    it(`words :${words}`, () => {
        expect(popularWords(input, words)).toMatchObject(expected)
    })
});