import {numberLength} from "./numberLength";

describe('Number of digit in number', () => {

    it('is 2', () => {
        expect(numberLength(10)).toEqual(2);
    })

    it('is 1', () => {
        expect(numberLength(0)).toEqual(1);
    })

    it('is 3', () => {
        expect(numberLength(999)).toEqual(3);
    })
});