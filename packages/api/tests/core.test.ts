import { TheTVDB } from '../src/index.js';

describe('TheTVDB constructor token validation tests', () => {
  it('throws an error if no token is provided', () => {
    // @ts-expect-error: Expected token argument.
    expect(() => new TheTVDB()).toThrow('Token is required');
  });

  it('throws an error if an empty string is provided', () => {
    expect(() => new TheTVDB('')).toThrow('Token is required');
  });

  it('throws error when non-string token is provided', () => {
    // @ts-expect-error: Argument of type 'number' is not assignable to parameter of type 'string'.
    expect(() => new TheTVDB(1234)).toThrow('Token is required');
  });

  it('creates an instance when a valid token is provided', () => {
    expect(() => new TheTVDB('fake token')).not.toThrow();
  });
});
