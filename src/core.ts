import { URL } from 'node:url';

export interface FetchResult<T> {
  status: number;
  result: T;
}

export class Base {
  private readonly _token;
  protected readonly api = 'https://api4.thetvdb.com';

  constructor(token: string) {
    this.validateInput(token, 'Token is required');
    this._token = token;
  }

  protected async fetcher<T>(url: string | URL): Promise<FetchResult<T>> {
    const response = await fetch(url, {
      headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${this._token}` },
    });

    const { status } = response;
    const result = (await response.json()) as T;

    return { status, result };
  }

  protected validateInput(input: string, errorMessage: string): void {
    if (typeof input !== 'string' || input.length === 0) {
      throw new Error(errorMessage);
    }
  }

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
