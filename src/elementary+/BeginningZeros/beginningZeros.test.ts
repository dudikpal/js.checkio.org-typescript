import {beginningZeros} from "./beginningZeros";

describe('Count of beginning zeros', () => {

    it('0', () => {
        expect(beginningZeros('100')).toEqual(0);
    })

    it('2', () => {
        expect(beginningZeros('00100')).toEqual(2);
    })

    it('4', () => {
        expect(beginningZeros('0000')).toEqual(4);
    })
})