import {CheckPassword} from './CheckPassword';

describe('checkpassword',()=>{
    it('should return true if password valid',()=>{
        expect(CheckPassword('ab123')).toBe(true);
    });
});