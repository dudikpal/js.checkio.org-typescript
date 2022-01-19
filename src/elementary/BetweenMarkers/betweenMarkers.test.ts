import {betweenMarkers} from "./betweenMarkers";

describe('String between markers', () => {
    it.each`
        inputString             |startMarker        |endMarker  |expectString
        ${'What is >apple<'}    |${'>'}             | ${'<'}    |${'apple'}
        ${'What is [apple]'}    |${'['}             | ${']'}    |${'apple'}
        ${'What is ><'}         |${'>'}             | ${'<'}    |${''}
        ${'[an apple]'}         |${'['}             | ${']'}    |${'an apple'}
    `
    ("expected $expectString here", ({inputString, startMarker, endMarker, expectString}) => {
        expect(betweenMarkers(inputString, startMarker, endMarker)).toEqual(expectString);
    })
})