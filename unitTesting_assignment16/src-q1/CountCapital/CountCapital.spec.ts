import {CountCapital} from './CountCapital';

describe('Countcapital',()=>{
    it('Should return no. of capital letters',()=>{
        expect(CountCapital('yAsH')).toEqual(2);
    });
});