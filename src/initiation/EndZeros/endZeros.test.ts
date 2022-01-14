import {endZeros} from "./endZeros";


describe('Number of zeros at the end of the number', () => {
    it('is 1', () => {
        expect(endZeros(0)).toEqual(1);
    })

    it('is 2', () => {
        expect(endZeros(100)).toEqual(2);
    })

    it('is 3', () => {
        expect(endZeros(999000)).toEqual(3);
    })

    it('is 0', () => {
        expect(endZeros(90909)).toEqual(0);
    })

    it('is 0', () => {
        expect(endZeros(10001)).toEqual(0);
    })

    it('is 0', () => {
        expect(endZeros(999)).toEqual(0);
    })
});