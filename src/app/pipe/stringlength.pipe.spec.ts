import { StringlengthPipe } from './stringlength.pipe';

describe('StringlengthPipe', () => {
  it('create an instance', () => {
    const pipe = new StringlengthPipe();
    expect(pipe).toBeTruthy();
  });
});
