export const hello = (name) => {
  return `Hello, ${name}!`;
};

export const sum = (nums) => {
  let total = 0;
  for (const num of nums) {
    total += num;
  }
};
