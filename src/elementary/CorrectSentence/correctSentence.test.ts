import {correctSentence} from "./correctSentence";

describe('Nearest value from array', () => {
    it.each`
        input                    | expected
        ${'greetings, friends'}   |${'Greetings, friends.'}
        ${'Greetings, friends'}   |${'Greetings, friends.'}
        ${'Greetings, friends.'}   |${'Greetings, friends.'}        
    `
    ("expected $expected here", ({input, expected}) => {
        expect(correctSentence(input)).toEqual(expected);
    })
})