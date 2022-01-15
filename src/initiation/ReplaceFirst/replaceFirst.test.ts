import {replaceFirst} from "./replaceFirst";

describe('first item to last', () => {

    it('test 1', () => {
        expect(replaceFirst([1, 2, 3, 4])).toEqual([2, 3, 4, 1]);
    })

    it('1 length array', () => {
        expect(replaceFirst([1])).toEqual([1]);
    })

    it('empty array', () => {
        expect(replaceFirst([])).toEqual([]);
    })
})