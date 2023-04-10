import { Base } from './core.js';

describe('constructor token validation tests', () => {
  it('throws an error if no token is provided', () => {
    expect(
      // @ts-expect-error: expect a parameter token
      () => new Base()
    ).toThrow('Token is required');
  });

  it('throws an error if an empty string is provided', () => {
    expect(() => new Base('')).toThrow('Token is required');
  });

  it('throws error when non-string token is provided', () => {
    expect(
      // @ts-expect-error: expect a parameter token with type 'string'
      () => new Base(1234)
    ).toThrow('Token is required');
  });

  it('creates an instance when a valid token is provided', () => {
    expect(() => new Base('valid_token')).not.toThrow();
  });
});
