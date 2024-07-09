// src/mocks/handlers.js
import { http, HttpResponse } from "msw";

export const handlers = [
  http.get("http://localhost:3000/scoops", () => {
    return HttpResponse.json([
      { name: "Chocolate", imagePath: "/images/chocolate.png" },
      { name: "Vanilla", imagePath: "/images/vanilla.png" },
    ]);
  }),
];

/**
 * http.get("https://example.com/user", () => {
 * Handler Type: http of graphql
 * HTTP method to mock: get,post ...
 * full URL to mock: https://example.com/user
 * () =>{ return } : json등의 메서드도 제공 / request, parameter등을 활용해서 response생성할 수 있음
 *
 */
