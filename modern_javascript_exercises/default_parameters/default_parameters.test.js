import { sayHello } from "./default_parameters";

test("returns a greeting and a name", () => {
  expect(sayHello("Laura")).toBe("Hello, Laura!");
});
