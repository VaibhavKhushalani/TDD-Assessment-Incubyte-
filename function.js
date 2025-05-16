function add(numbers) {
  if (!numbers) return 0;
  return parseInt(numbers, 10);
}
console.assert(add("5") === 5, "Single number returns itself");
