import { MarvellousChkPipe } from './marvellous-chk.pipe';

describe('MarvellousChkPipe', () => {
  const pipe = new MarvellousChkPipe();
  it('check for even', () => {
    expect(pipe.transform(10,"even")).toEqual("It is even");
  });

  it('check for odd',()=>{
    expect(pipe.transform(11,"odd")).toEqual("It is odd");
  })

  
  it('check for prime',()=>{
    expect(pipe.transform(2,"prime")).toEqual("It is prime");
  })

  
  it('check for not perfect',()=>{
    expect(pipe.transform(14,"perfect")).toEqual("It is not Perfect");
  })
});
