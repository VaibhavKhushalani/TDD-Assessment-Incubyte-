function add(numbers) {
  if (!numbers) return 0;

  let delimiter = ",";
  if (numbers.startsWith("//")) {
    delimiter = numbers.charAt(2);
    numbers = numbers.slice(4);
  }

  const nums = numbers.replace(/\n/g, delimiter).split(delimiter);
  const negatives = nums.filter((n) => parseInt(n, 10) < 0);
  if (negatives.length > 0) {
    throw new Error(`Negatives not allowed: ${negatives.join(", ")}`);
  }

  return nums.reduce((sum, n) => {
    const num = parseInt(n, 10);
    return num <= 1000 ? sum + num : sum;
  }, 0);
}

console.assert(add("2,1001") === 2, "Ignores numbers greater than 1000");
