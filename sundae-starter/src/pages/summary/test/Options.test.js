import { render, screen } from "@testing-library/react";
import Options from "../Options";

test("서버에서 반환한 scoop가 종류별로 이미지가 나오는지", async () => {
  render(<Options optionType="scoops" />);

  // 이미지 찾기
  const scoopImages = await screen.findAllRole("img", { name: /scoop$/i });
  expect(scoopImages).toHaveLength(2);

  //  alt text 확인
  const altText = scoopImages.map((element) => element.alt);
  expect(altText).toEqual(["Chocolate scoop", "Vanilla scoop"]);
});

test("서버에서 반환한 topping이 종류별로 이미지가 나오는지", async () => {
  // msw를 사용하여 서버 응답을 설정
  render(<Options optionType="toppings" />);

  // 이미지 찾기
  const toppingImages = await screen.findAllRole("img", { name: /topping$/i });
  expect(toppingImages).toHaveLength(3);

  //  alt text 확인
  const altText = toppingImages.map((element) => element.alt);
  expect(altText).toStrictEqual([
    "Cherries topping",
    "M&Ms topping",
    "Hot fudge topping",
  ]);
});
