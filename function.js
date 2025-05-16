function add(numbers) {
  if (!numbers) return 0;
  const nums = numbers.split(",");
  return nums.reduce((sum, n) => sum + parseInt(n, 10), 0);
}

console.assert(add("1,2") === 3, "Sum of two numbers");
