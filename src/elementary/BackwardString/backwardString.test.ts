import {backwardString} from "./backwardString";


describe('Number of zeros at the end of the number', () => {

    it('test 1', () => {
        expect(backwardString('lav')).toEqual('val');
    })

    it('test 2', () => {
        expect(backwardString('')).toEqual('');
    })

    it('test 3', () => {
        expect(backwardString('ohho')).toEqual('ohho');
    })

    it('test 4', () => {
        expect(backwardString('123456789')).toEqual('987654321');
    })
});