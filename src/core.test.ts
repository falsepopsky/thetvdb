import { Base } from './core.js';

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

  it('throws error when non-string timeout is provided', () => {
    // @ts-expect-error: Cannot create an instance of an abstract class.
    expect(() => new Base('fake token', 'lala')).toThrow('timeout must be of type number');
  });

  it('throws error when the timeout provided is 0', () => {
    // @ts-expect-error: Cannot create an instance of an abstract class.
    expect(() => new Base('fake token', 0)).toThrow('timeout must be a positive number');
  });

  it('creates an instance when a valid token is provided', () => {
    // @ts-expect-error: Cannot create an instance of an abstract class.
    expect(() => new Base('fake token')).not.toThrow();
  });

  it('returns the default custom timeout', () => {
    // @ts-expect-error: Cannot create an instance of an abstract class.
    const client = new Base('fake token');
    expect(client.getTime()).toBe(5000);
  });

  it('returns the custom timeout set by the user', () => {
    // @ts-expect-error: Cannot create an instance of an abstract class.
    const client = new Base('fake token', 500);
    expect(client.getTime()).toBe(500);
  });

  it('returns the updated custom timeout after it is modified', () => {
    // @ts-expect-error: Cannot create an instance of an abstract class.
    const client = new Base('fake token', 1000);
    expect(client.getTime()).toBe(1000);

    client.setTime(400);
    expect(client.getTime()).toBe(400);
  });

  it('sets the default timeout and allows updating it later', () => {
    // @ts-expect-error: Cannot create an instance of an abstract class.
    const client = new Base('fake token');
    expect(client.getTime()).toBe(5000);

    client.setTime(100);
    expect(client.getTime()).toBe(100);
  });
});

describe('abort controller', () => {
  it('aborts the request when the timeout is reached', async () => {
    const abortSpy = jest.spyOn(global.AbortController.prototype, 'abort');
    // @ts-expect-error: Cannot create an instance of an abstract class.
    const client = new Base('fake token', 1);

    await expect(async () => await client.fetcher('https://delay.com/delay')).rejects.toThrow(
      'This operation was aborted'
    );
    expect(abortSpy).toHaveBeenCalled();
  });
});
