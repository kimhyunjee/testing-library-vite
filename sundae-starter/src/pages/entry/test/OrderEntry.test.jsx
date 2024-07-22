import { render, screen, logRoles } from "@testing-library/react";
import OrderEntry from "../OrderEntry";
import { http, HttpResponse } from "msw";
import { server } from "../../../mocks/server";

test("scoops 와 toppings로 에러 반환하도록", async () => {
  server.resetHandlers(
    http.get("http://localhost:3030/scoops", (req, res, ctx) => {
      return new HttpResponse(null, { status: 500 });
    }),
    http.get("http://localhost:3030/toppings", (req, res, ctx) => {
      return new HttpResponse(null, { status: 500 });
    })
  );

  const { container } = render(<OrderEntry />);

  // test 시 error 해결 : alert만 확인하거나 name을 뺀다 ( react-bootstrap의 alert은 name값이 빈 문자열이어서)
  // const alerts = await screen.findAllByRole("alert");
  // https://mswjs.io/ 디버깅

  const alerts = await screen.findAllByText(
    "An unexpected error occurred. Please try again later."
  );
  logRoles(container);

  expect(alerts).toHaveLength(2);
});
