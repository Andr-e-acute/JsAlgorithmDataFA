function sameFrequency(num1, num2) {
  const counter = {};
  for (const digit of num1.toString()) {
    counter[digit] = (counter[digit] ?? 0) + 1;
  }
  for (const digit of num2.toString()) {
    if (!counter[digit]) return false;
    else counter[digit]--;
  }
  return true;
}
console.log(sameFrequency(182, 281)); // true
console.log(sameFrequency(34, 14)); // false
console.log(sameFrequency(3589578, 5879385)); // true
console.log(sameFrequency(22, 222)); // false
