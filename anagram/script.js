function validAnagram(str1, str2) {
  console.log(`${str1} is an anagram of ${str2}:`);
  if (str1.length !== str2.length) {
    return false;
  }
  let charCounter1 = {};
  let charCounter2 = {};
  for (const char of str1) {
    charCounter1[char] = (charCounter1[char] ?? 0) + 1;
  }
  for (const char of str2) {
    if (!charCounter1[char]) {
      return false;
    } else {
      charCounter1[char]--;
    }
    return true;
    // charCounter2[char] = (charCounter2[char] ?? 0) + 1;
  }
  // for (let letter in charCounter1) {
  //   if (charCounter2[letter] !== charCounter1[letter]) {
  //     return false;
  //   }
  // }
  // return true;
}
// !! when running in the udemy need to change
// console.log(validAnagram("", "")); // true
// console.log(validAnagram("aaz", "zza")); // false
// console.log(validAnagram("anagram", "nagaram")); // true
// console.log(validAnagram("rat", "car")); // false) // false
console.log(validAnagram("awesome", "awesom")); // false
console.log(validAnagram("amanaplanacanalpanama", "acanalmanplanpamana")); // false
console.log(validAnagram("qwerty", "qeywrt")); // true
console.log(validAnagram("texttwisttime", "timetwisttext")); // true
