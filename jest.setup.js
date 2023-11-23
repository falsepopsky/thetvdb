import { server } from './packages/thetvdb/tests/mocks/server.js';

beforeAll(() => {
  server.listen();
});

afterEach(() => {
  server.resetHandlers();
});

afterAll(() => {
  server.close();
});
