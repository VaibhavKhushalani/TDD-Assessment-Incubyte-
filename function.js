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

  return nums.reduce((sum, n) => sum + parseInt(n, 10), 0);
}

try {
  add("1,-2");
} catch (e) {
  console.assert(
    e.message === "Negatives not allowed: -2",
    "Negative number throws error"
  );
}
