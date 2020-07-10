import {ArrayAddition} from './ArrayAdditon';

describe('Addititon',()=>{
    it('should return addition of numbers',()=>{
        expect(ArrayAddition([1,2,-3])).toEqual(0);
    });
});