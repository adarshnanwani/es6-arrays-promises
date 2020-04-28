const arrNum = [22, 1, 3, 18, 9, 2, 44, 98, 45];
//              0   1  2   3  4  5  6   7   8
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
// arr.filter() --- does not mutate the original array // SAFE - React
const filteredArr = arrNum.filter(function (item) {
  if (item > 30) {
    return true;
  } else {
    return false;
  }
});
console.log('After filter - filteredArr', filteredArr);

// Find
const findArr = arrNum.find(function (item) {
  if (item > 30) {
    return true;
  } else {
    return false;
  }
});
console.log('findArr', findArr);

// Some
const arrSome = arrNum.some(function (item) {
  if (item > 100) {
    return true;
  } else {
    return false;
  }
});
console.log('arrSome', arrSome);

// indexOf
const indexOf98 = arrNum.indexOf(98);
console.log('indexOf98', indexOf98); // 0

const indexOf3 = arrNum.indexOf(3);
console.log('indexOf3', indexOf3); // 6

const indexOf101 = arrNum.indexOf(101);
console.log('indexOf101', indexOf101); // -1

// forEach
// arr.forEach -- mutates the original array - UNSAFE - React
const arrPersons = [
  {
    name: 'John',
    age: 26,
    city: 'Boston',
  },
  {
    name: 'Mary',
    age: 22,
    city: 'NY',
  },
];
arrPersons.forEach(function (ob) {
  ob.age = ob.age * 2;
  ob.profile = '';
});
console.log(arrPersons);

// Join

// Slice

// Splice

// Map

// Reduce
