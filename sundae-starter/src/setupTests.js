import "@testing-library/jest-dom";

import { beforeAll, afterEach, afterAll } from "vitest";
import { server } from "./mocks/server";

// 모든 테스트 전에 api mocking
beforeAll(() => server.listen());
// 테스트 후에 핸들러 리셋
afterEach(() => server.resetHandlers());
// 모든 테스트 후 서버 종료
afterAll(() => server.close());
