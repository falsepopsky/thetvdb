import { clearTimeout, setTimeout } from 'node:timers';
import { URL } from 'node:url';

export abstract class Base {
  private readonly _token;
  protected readonly api = 'https://api4.thetvdb.com';
  private _timeout: number;

  constructor(token: string, timeout = 5000) {
    this.validateInput(token, 'Token is required');
    this.validateTimeout(timeout);
    this._token = token;
    this._timeout = timeout;
  }

  public getTime(): number {
    return this._timeout;
  }

  public setTime(value: number): void {
    this.validateTimeout(value);
    this._timeout = value;
  }

  protected async fetcher<T>(url: string | URL): Promise<T> {
    const controller = new AbortController();
    const { signal } = controller;
    const timeout = setTimeout(() => {
      controller.abort();
    }, this._timeout);

    try {
      const response = await fetch(url, {
        headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${this._token}` },
        signal,
      });

      return (await response.json()) as T;
    } finally {
      clearTimeout(timeout);
    }
  }

  protected validateInput(input: string, message: string): void {
    if (typeof input !== 'string' || input.length === 0) {
      throw new Error(message);
    }
  }

  protected validateTimeout(input: number): void {
    if (typeof input !== 'number' || isNaN(input)) {
      throw new TypeError('timeout must be of type number');
    }
    if (input <= 0) {
      throw new RangeError('timeout must be a positive number');
    }
  }

  protected createURL(path: string): URL {
    return new URL(path, this.api);
  }

  protected createQuery(target: URL, obj: object): string {
    for (const [key, value] of Object.entries(obj)) {
      if (typeof value === 'string' && value.length >= 1) {
        target.searchParams.set(key, value);
      }
    }
    return target.href;
  }
}
