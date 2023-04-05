import { URL } from 'node:url';

export interface FetchResult<T> {
  status: number;
  result: T;
}

/**
 * Base class for TheTVDB.
 */
export class Base {
  /**
   * Authorization token used in API requests.
   * @private
   * @readonly
   */
  private readonly _token;

  /**
   * The base API URL.
   * @protected
   * @readonly
   */
  protected readonly api = 'https://api4.thetvdb.com';

  /**
   * Creates a new instance of the Base class.
   * @param {string} token - Authorization token used in API requests.
   */
  constructor(token: string) {
    this.validateInput(token, 'Token is required');
    this._token = token;
  }

  /**
   * Makes a GET request to the specified URL and returns the response as a Promise.
   * @protected
   * @async
   * @template T
   * @param {string|URL} url - The URL to make the GET request to.
   * @returns {Promise<FetchResult<T>>} - A Promise that resolves with the response object.
   */
  protected async fetcher<T>(url: string | URL): Promise<FetchResult<T>> {
    const response = await fetch(url, {
      headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${this._token}` },
    });

    const { status } = response;
    const result = (await response.json()) as T;

    return { status, result };
  }

  /**
   * Validates that the input is a non-empty string.
   * @protected
   * @param {string} input - The input to validate.
   * @param {string} errorMessage - The error message to use if the input is invalid.
   * @throws {Error} - Throws an error if the input is invalid.
   */
  protected validateInput(input: string, errorMessage: string): void {
    if (typeof input !== 'string' || input.length === 0) {
      throw new Error(errorMessage);
    }
  }

  /**
   * Creates a query string from the specified object and appends it to the specified endpoint.
   * @protected
   * @template T
   * @param {string} endpoint - The endpoint to append the query string to.
   * @param {T extends Record<string, string>} obj - The object to create the query string from.
   * @returns {string} - The endpoint with the query string appended.
   */
  protected createQuery<T extends Record<string, string>>(endpoint: string, obj: T): string {
    const search = new URL(endpoint, this.api);
    for (const [key, value] of Object.entries(obj)) {
      if (typeof value === 'string' && value.length >= 1) {
        search.searchParams.set(key, value);
      }
    }
    return search.href;
  }
}
