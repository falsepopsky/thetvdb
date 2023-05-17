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

  it('throws error when non-string timeout is provided', () => {
    expect(
      // @ts-expect-error: expect a parameter token with type 'string'
      () => new Base('fake token', 'lala')
    ).toThrow('timeout must be of type number');
  });

  it('throws error when the timeout provided is 0', () => {
    expect(() => new Base('fake token', 0)).toThrow('timeout must be a positive number');
  });

  it('creates an instance when a valid token is provided', () => {
    expect(() => new Base('fake token')).not.toThrow();
  });

  it('returns the default custom timeout', () => {
    const client = new Base('fake token');
    expect(client.getTime()).toBe(5000);
  });

  it('returns the custom timeout set by the user', () => {
    const client = new Base('fake token', 500);
    expect(client.getTime()).toBe(500);
  });

  it('returns the updated custom timeout after it is modified', () => {
    const client = new Base('fake token', 1000);
    expect(client.getTime()).toBe(1000);

    client.setTime(400);
    expect(client.getTime()).toBe(400);
  });

  it('sets the default timeout and allows updating it later', () => {
    const client = new Base('fake token');
    expect(client.getTime()).toBe(5000);

    client.setTime(100);
    expect(client.getTime()).toBe(100);
  });
});

describe('abort controller', () => {
  it('aborts the request when the timeout is reached', async () => {
    const abortSpy = jest.spyOn(global.AbortController.prototype, 'abort');
    const client = new Base('fake token', 1);

    // @ts-expect-error: Property 'fetcher' is protected and only accessible within class 'Base' and its subclasses.
    await expect(async () => await client.fetcher('https://delay.com/delay')).rejects.toThrow(
      'This operation was aborted'
    );
    // Verify that the abort method was called
    expect(abortSpy).toHaveBeenCalled();
  });
});
