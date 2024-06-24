import { render, screen } from "@testing-library/react";
import App from "./App";

test("버튼 색상 확인", () => {
  render(<App />);
  const buttonElement = screen.getByRole("button", { name: /blue/i });
  expect(buttonElement).toHaveClass("red");
});

test("버튼 텍스트 확인", () => {});
test("버튼 색상 확인", () => {});
test("버튼 클릭 이후 색상 확인", () => {});
test("버튼 클릭 이후 텍스트 확인", () => {});
