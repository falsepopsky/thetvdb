import { TheTVDB } from '../src/index.js';

describe('TheTVDB constructor token validation tests', () => {
  it('throws an error if no token is provided', () => {
    expect(
      // @ts-expect-error: Expected token argument.
      () => new TheTVDB()
    ).toThrow('Token is required');
  });

  it('throws an error if an empty string is provided', () => {
    expect(() => new TheTVDB('')).toThrow('Token is required');
  });

  it('throws error when non-string token is provided', () => {
    expect(
      // @ts-expect-error: Argument of type 'number' is not assignable to parameter of type 'string'.
      () => new TheTVDB(1234)
    ).toThrow('Token is required');
  });

  it('creates an instance when a valid token is provided', () => {
    expect(() => new TheTVDB('fake token')).not.toThrow();
  });
});

describe('updateToken()', () => {
  it('should update the token', () => {
    const client = new TheTVDB('phase');

    // @ts-expect-error: Property '_token' is private and only accessible within class 'TheTVDB'.ts(2341)
    expect(client._token).toBe('phase');

    client.updateToken('untidy');

    // @ts-expect-error: Property '_token' is private and only accessible within class 'TheTVDB'.ts(2341)
    expect(client._token).toBe('untidy');
  });
});
