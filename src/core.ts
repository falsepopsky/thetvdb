import { URL } from 'node:url';

export class Base {
  private readonly _token;
  protected readonly api = 'https://api4.thetvdb.com';

  constructor(token: string) {
    this.validateInput(token, 'Token is required');
    this._token = token;
  }

  protected async fetcher<T>(url: string | URL): Promise<T> {
    const response = await fetch(url, {
      headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${this._token}` },
    });

    return (await response.json()) as T;
  }

  protected validateInput(input: string, message: string): void {
    if (typeof input !== 'string' || input.length === 0) {
      throw new Error(message);
    }
  }

  protected createQuery<T extends Record<string, string>>(endpoint: string, obj: T): string {
    const target = new URL(endpoint, this.api);
    for (const [key, value] of Object.entries(obj)) {
      if (typeof value === 'string' && value.length >= 1) {
        target.searchParams.set(key, value);
      }
    }
    return target.href;
  }
}
