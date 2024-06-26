import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";

test("버튼 색상,라벨 확인", () => {
  //render app
  render(<App />);

  // 버튼 요소 찾기
  const buttonElement = screen.getByRole("button", { name: /blue/i });

  // 버튼의 색상 확인
  expect(buttonElement).toHaveClass("red");

  // 버튼 클릭
  fireEvent.click(buttonElement);

  //버튼의 text 확인
  expect(buttonElement).toHaveTextContent(/red/i);

  // 버튼 색상 확인
  expect(buttonElement).toHaveClass("blue");
});
