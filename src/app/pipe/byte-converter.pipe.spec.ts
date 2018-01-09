import { ByteConverterPipe } from './byte-converter.pipe';

describe('ByteConverterPipe', () => {
  it('create an instance', () => {
    const pipe = new ByteConverterPipe();
    expect(pipe).toBeTruthy();
  });
});
