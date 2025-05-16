function add(numbers) {
  if (!numbers) return 0;
  const nums = numbers.replace(/\n/g, ",").split(",");
  return nums.reduce((sum, n) => sum + parseInt(n, 10), 0);
}

console.assert(add("1\n2,3") === 6, "Handles new lines as delimiters");
