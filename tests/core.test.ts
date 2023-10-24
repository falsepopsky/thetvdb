import { Base } from '../src/core.js';

describe('constructor token validation tests', () => {
  it('throws an error if no token is provided', () => {
    // @ts-expect-error: Cannot create an instance of an abstract class.
    expect(() => new Base()).toThrow('Token is required');
  });

  it('throws an error if an empty string is provided', () => {
    // @ts-expect-error: Cannot create an instance of an abstract class.
    expect(() => new Base('')).toThrow('Token is required');
  });

  it('throws error when non-string token is provided', () => {
    // @ts-expect-error: Cannot create an instance of an abstract class.
    expect(() => new Base(1234)).toThrow('Token is required');
  });

  it('creates an instance when a valid token is provided', () => {
    // @ts-expect-error: Cannot create an instance of an abstract class.
    expect(() => new Base('fake token')).not.toThrow();
  });
});
