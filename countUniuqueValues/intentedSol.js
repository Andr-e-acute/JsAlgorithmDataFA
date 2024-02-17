function countUniqueValues(arr) {
  if (arr.length == 0) {
    return;
  }
  let pointer1 = 0;

  for (let pointer2 = 0; pointer2 < arr.length; pointer2++) {
    if (arr[pointer1] !== arr[pointer2]) pointer1++;
    //changes the value of the array at the index
    // so we can have one less variable for counting
    arr[pointer1] = arr[pointer2];
  }

  console.log(" count: " + Number(pointer1 + 1));
  return pointer1 + 1;
}

// countUniqueValues([1, 1, 1, 1, 1, 2]); // 2
countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13]); // 7
// countUniqueValues([]); // 0
// countUniqueValues([-2, -1, -1, 0, 1]); // 4
console.log(countUniqueValues([-2, -1, -1, 0, 1]));
