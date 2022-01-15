import {removeAllBefore} from "./removeAllBefore";
import exp from "constants";

describe('remove all item before given one', () => {

    it('test 1', () => {
        expect(removeAllBefore([1, 2, 3, 4, 5], 3)).toEqual([3, 4, 5]);
    })

    it('test 2', () => {
        expect(removeAllBefore([1, 1, 2, 2, 3, 3], 2)).toEqual([2, 2, 3, 3]);
    })

    it('given item not present', () => {
        expect(removeAllBefore([1, 2, 5, 6, 7], 3)).toEqual([1, 2, 5, 6, 7]);
    })

    it('empty array', () => {
        expect(removeAllBefore([], 0)).toEqual([]);
    });
})