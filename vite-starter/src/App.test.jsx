import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";
import { kebabCaseToTitleCase } from "./helpers";

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
  // expect(buttonElement).toHaveClass("blue");
  expect(buttonElement).toHaveStyle({ "background-color": "rgb(0,0,255)" });
  /*
    expect(buttonElement).toHaveStyle({ "background-color": "blue" });
  Error: expect(element).toHaveStyle()
- Expected
- background-color: blue;
+ background-color: rgb(0, 0, 255);
 ❯ src/App.test.jsx:22:25
 */

  test("체크박스 테스트", () => {
    render(<App />);

    // 요소 찾기
    const buttonElement = screen.getByRole("button", { name: /blue/i });
    const checkboxElement = screen.getByRole("checkbox", {
      name: /disable button/i,
    });

    // 초기 체크
    expect(buttonElement).toBeEnabled();
    expect(checkboxElement).not.toBeChecked();

    // 체크박스를 클릭하면 버튼이 비활성화됨
    fireEvent.click(checkboxElement);
    expect(buttonElement).toBeDisabled();
    expect(buttonElement).toHaveClass("gray");

    // 체크박스를 다시 클릭하면 버튼이 활성화됨
    fireEvent.click(checkboxElement);
    expect(buttonElement).toBeEnabled();
    expect(buttonElement).toHaveClass("red");
  });

  test("버튼 클릭 후 체크박스 테스트", () => {
    // App 컴포넌트 렌더링
    render(<App />);

    // 요소 찾기
    const buttonElement = screen.getByRole("button", { name: /blue/i });
    const checkboxElement = screen.getByRole("checkbox", {
      name: /disable button/i,
    });

    // 버튼을 눌러서 파란색으로 색상 변경
    fireEvent.click(buttonElement);

    // 체크박스 클릭하여 버튼 비활성화
    fireEvent.click(checkboxElement);
    expect(buttonElement).toBeDisabled();
    expect(buttonElement).toHaveClass("gray");

    // 체크박스를 다시 눌러서 버튼 활성화
    fireEvent.click(checkboxElement);
    expect(buttonElement).toBeEnabled();
    expect(buttonElement).toHaveClass("blue");
  });
});

describe("kebabCaseToTitleCase", () => {
  test("-이 없을 때", () => {
    expect(kebabCaseToTitleCase("red")).toBe("Red");
  });
  test("-이 1개일 때", () => {
    expect(kebabCaseToTitleCase("midnight-blue")).toBe("Midnight Blue");
  });
  test("-이 여러개일 때", () => {
    expect(kebabCaseToTitleCase("medium-violet-red")).toBe("Medium Violet Red");
  });
});
