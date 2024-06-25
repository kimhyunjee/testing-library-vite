import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";

test("버튼 색상,라벨 확인", () => {
  //render app
  render(<App />);

  //find the button
  const buttonElement = screen.getByRole("button", { name: /blue/i });
  // check initial color
  expect(buttonElement).toHaveClass("red");
});

test("클릭한 버튼 텍스트 확인", () => {
  //click the button
  fireEvent.click(buttonElement);
});
test("버튼 색상 확인", () => {});
test("버튼 클릭 이후 색상 확인", () => {
  /red/i;
});
//check button text

//  check  the button color
expect(buttonElement).toHaveClass("blue");
test("버튼 클릭 이후 텍스트 확인", () => {});
