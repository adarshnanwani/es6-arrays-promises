const arrNum = [22, 1, 3, 18, 9, 2, 44, 98, 45];

// Sort
// arr.sort() --- mutates the original array // UNSAFE - React
arrNum.sort(function (a, b) {
  if (a < b) {
    return 1;
  } else {
    return -1;
  }
});

console.log('After sort', arrNum);

// Filter

// Find

// Some

// forEach

// Join

// Slice

// Splice

// Map

// Reduce
