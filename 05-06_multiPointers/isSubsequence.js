function isSubsequence(subStr, str) {
  let pointer = 0;
  for (const char of str) {
    if (char === subStr[pointer]) {
      pointer++;
    }
  }
  return subStr.length === pointer;
}

console.log(isSubsequence("hello", "hello world")); // true
console.log(isSubsequence("sing", "sting")); // true
console.log(isSubsequence("abc", "abracadabra")); // true
console.log(isSubsequence("abc", "acb")); // false (order matters)
console.log(isSubsequence("abc", "abc"));
/*
  Multiple Pointers - isSubsequence
Write a function called isSubsequence which takes in two strings and 
checks whether the characters in the first string form a subsequence of the characters in the second string.
 In other words, the function should check whether the characters 
 in the first string appear somewhere in the second string, without their order changing.
Time Complexity - O(N + M)

Space Complexity - O(1
  */
