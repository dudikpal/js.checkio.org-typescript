import {splitPairs} from "./splitPairs";

describe('Split string to pairs', () => {

    it('even items to pairs', () => {
        expect(splitPairs('abcd')).toEqual(['ab', 'cd']);
    })

    it('odd items to pairs', () => {
        expect(splitPairs('abc')).toEqual(['ab', 'c_']);
    })

    it('empty string', () => {
        expect(splitPairs('')).toEqual([]);
    })
})