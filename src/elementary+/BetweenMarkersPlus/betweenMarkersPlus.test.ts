import {betweenMarkers} from "./betweenMarkersPlus";

describe('String between markers', () => {
    it.each`
        input   |starter    |ender     | expected
        ${'What is >apple<'}   	|${'>'}     |${'<'}     |${'apple'}
        ${'No[/b] hi'}   	    |${'[b]'}   |${'[/b]'}  |${'No'}
        ${'No [b]hi'}   	    |${'[b]'}   |${'[/b]'}  |${'hi'}
        ${'No hi'}   	        |${'[b]'}   |${'[/b]'}  |${'No hi'}
        ${'No >hi<'}   	        |${'<'}     |${'>'}     |${''}
    `
    ("expected $expected here", ({input, starter, ender, expected}) => {
        expect(betweenMarkers(input, starter, ender)).toEqual(expected);
    })
})