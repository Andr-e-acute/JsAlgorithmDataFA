//blind solution for this
function countUniqueValues(arr) {
  if (arr.length == 0) {
    return;
  }
  let pointer1 = 0;
  let pointer2 = 1;
  let count = 1;
  while (pointer1 < arr.length && pointer2 < arr.length) {
    console.log(
      "pointer1: " + pointer1 + " pointer2: " + pointer2 + " count: " + count
    );

    if (arr[pointer1] == arr[pointer2]) {
      pointer2++;
    } else {
      count++;
      pointer1 = pointer2;
      pointer2++;
    }
  }
  console.log("count:" + count);
  return count;
}

// countUniqueValues([1, 1, 1, 1, 1, 2]); // 2
countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13]); // 7
// countUniqueValues([]); // 0
// countUniqueValues([-2, -1, -1, 0, 1]); // 4
