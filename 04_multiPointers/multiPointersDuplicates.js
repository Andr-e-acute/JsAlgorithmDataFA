function areThereDuplicates(...arr) {
  const counter = {};
  for (const element of arr) {
    if (!counter[element]) {
      counter[element] = 1;
    } else {
      return true;
    }
  }
  return false;
  // good luck. (supply any arguments you deem necessary.)
}
console.log(areThereDuplicates(1, 2, 3)); // false
console.log(areThereDuplicates(1, 2, 2)); // true
console.log(areThereDuplicates("a", "b", "c", "a")); // true

/*Frequency Counter / Multiple Pointers - areThereDuplicates
Implement a function called, areThereDuplicates which accepts a variable number of arguments, 
and checks whether there are any duplicates among the arguments passed in.
  You can solve this using the frequency counter pattern OR the multiple pointers pattern.

Time - O(n)
Space - O(n)

Bonus:

Time - O(n log n)

Space - O(1)*/
