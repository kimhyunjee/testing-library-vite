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
