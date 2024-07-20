import { render, screen } from "@testing-library/react";
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

  render(<OrderEntry />);

  const alerts = await screen.findAllByRole("alert", {
    name: "An unexpected error occurred. Please try again later.",
  });

  expect(alerts).toHaveLength(2);
});
