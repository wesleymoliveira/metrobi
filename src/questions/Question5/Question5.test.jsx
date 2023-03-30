import { eggDrop } from "./Question5";

describe('<Question5 />', () => {
	test("should display minimum number of 14 attempts using 2 eggs and 100 floors", () => {
    const { testEggDrop } = eggDrop();
    const result = testEggDrop(2, 100);
    expect(result).toBe(14);
  });

	test("should display minimum number of 4 attempts using 2 eggs and 10 floors", () => {
    const { testEggDrop } = eggDrop();
    const result = testEggDrop(2, 10);
    expect(result).toBe(4);
  });

	test("should display minimum number of 5 attempts using 3 eggs and 20 floors", () => {
    const { testEggDrop } = eggDrop();
    const result = testEggDrop(3, 20);
    expect(result).toBe(5);
  });
});
