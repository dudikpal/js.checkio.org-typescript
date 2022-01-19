import {isAllUpper} from "./allUpperI";

describe('All letter is uppercase', () => {

    it('all uppercase', () => {
        expect(isAllUpper('ALL UPPER')).toBe(true);
    })

    it('some lowercase', () => {
        expect(isAllUpper('AlL UpPER')).toBe(false);
    })

    it('all lowercase', () => {
        expect(isAllUpper('all lower')).toBe(false);
    })

    it('empty string', () => {
        expect(isAllUpper('')).toBe(true);
    })
})