// Instructions can be found in rest_parameters.md

export function add(...numbers) {
  let result = 0;
  numbers.forEach((number) => {
    result += number;
  });
  return result;
}
