function averagePair(arr, goalAverage) {
  let pointer2 = arr.length - 1;
  for (let pointer1 = 0; pointer1 < pointer2; ) {
    let average = Number(arr[pointer1] + arr[pointer2]) / 2;
    console.log(
      "number1: " +
        arr[pointer1] +
        " |number2: " +
        arr[pointer2] +
        " |average: " +
        average
    );
    if (average === goalAverage) {
      return true;
    } else if (average >= goalAverage) {
      pointer2--;
    } else {
      pointer1++;
    }
  }
  return false;
}

console.log(averagePair([1, 2, 3], 2.5)); // true
console.log(averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8)); // true
console.log(averagePair([-1, 0, 3, 4, 5, 6], 4.1)); // false
console.log(averagePair([], 4)); // false
/*
Multiple Pointers - averagePair
Write a function called averagePair.
 Given a sorted array of integers and a target average, 
 determine if there is a pair of values in the array where the average of the pair equals the target average. 
 There may be more than one pair that matches the average target.

Bonus Constraints:

Time: O(N)

Space: O(1)


*/
