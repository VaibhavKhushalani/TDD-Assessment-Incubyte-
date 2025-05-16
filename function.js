function add(numbers) {
  if (!numbers) return 0;

  let delimiter = ",";
  if (numbers.startsWith("//")) {
    delimiter = numbers.charAt(2);
    numbers = numbers.slice(4);
  }

  const nums = numbers.replace(/\n/g, delimiter).split(delimiter);
  return nums.reduce((sum, n) => sum + parseInt(n, 10), 0);
}

console.assert(add("//;\n1;2") === 3, 'Custom delimiter ";"');
