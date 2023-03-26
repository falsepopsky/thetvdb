import { TheTVDB } from './index.js';

describe('TheTVDB class', () => {
  describe('when constructed with a token', () => {
    it('throws an error if no token is provided', () => {
      expect(
        // @ts-expect-error: expect a parameter token
        () => new TheTVDB()
      ).toThrow('Token is required');
    });

    it('throws an error if an empty string is provided', () => {
      expect(() => new TheTVDB('')).toThrow('Token is required');
    });

    it('throws error when non-string token is provided', () => {
      expect(
        // @ts-expect-error: expect a parameter token with type 'string'
        () => new TheTVDB(1234)
      ).toThrow('Token is required');
    });

    it('creates an instance when a valid token is provided', () => {
      expect(() => new TheTVDB('valid_token')).not.toThrow();
    });
  });
});
