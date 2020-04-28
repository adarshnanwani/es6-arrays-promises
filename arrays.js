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
const nameArr = ['a', 'd', 'a', 'r', 's', 'h'];
const name = nameArr.join('');
console.log('name', name);

// Slice
// arr.slice() -- does not mutate the array --- SAFE - React
const nameSection = nameArr.slice(2);
const negativeNameSection = nameArr.slice(-4);
const nameSection2 = nameArr.slice(2, 5);
const copyNameArr = nameArr.slice();
console.log('nameSection', nameSection);
console.log('negativeNameSection', negativeNameSection);
console.log('nameSection2', nameSection2);
console.log('copyNameArr', copyNameArr);

// Splice
const fruitsArr = ['Mango', 'Apple', 'Banana', 'Avocado'];
console.log('fruitsArr', fruitsArr);
const deletedFruits = fruitsArr.splice(1, 2, 'Pineapple', 'Orange');
console.log('deletedFruits', deletedFruits);
console.log('fruitsArr', fruitsArr);

const arrNum2 = [22, 1, 3, 18, 9, 2, 44, 98, 45];
// Map
// arr.map() -- does not mutate the data // SAFE - React
const doubledArrNum2 = arrNum2.map(function (item) {
  return item * 2;
});
console.log('doubledArrNum2', doubledArrNum2);

const oddEvenArrNum2 = arrNum2.map(function (item) {
  if (item % 2 === 0) {
    return 'Even';
  } else {
    return 'Odd';
  }
});
console.log('oddEvenArrNum2', oddEvenArrNum2);

const oddEvenObjArrNum2 = arrNum2.map(function (item) {
  if (item % 2 === 0) {
    return {
      val: item,
      type: 'Even',
    };
  } else {
    return {
      val: item,
      type: 'Odd',
    };
  }
});
console.log('oddEvenObjArrNum2', oddEvenObjArrNum2);

// Reduce
