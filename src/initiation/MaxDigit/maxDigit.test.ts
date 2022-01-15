import {maxDigit} from "./maxDigit";

describe('get biggest digit', () => {

    it('1', () => {
        expect(maxDigit(1)).toEqual(1);
    })

    it('5', () => {
        expect(maxDigit(51)).toEqual(5);
    })

    it('9', () => {
        expect(maxDigit(689)).toEqual(9);
    })

    it('1', () => {
        expect(maxDigit(1000)).toEqual(1);
    })
})