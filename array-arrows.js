const arrNum = [22, 1, 3, 18, 9, 2, 44, 98, 45];
//              0   1  2   3  4  5  6   7   8
// Sort
// arr.sort() --- mutates the original array // UNSAFE - React
arrNum.sort((a, b) => (a < b ? 1 : -1));

console.log('After sort', arrNum);

// Filter
// arr.filter() --- does not mutate the original array // SAFE - React
const filteredArr = arrNum.filter((item) => item > 30);
console.log('After filter - filteredArr', filteredArr);

// Find
const findArr = arrNum.find((item) => item > 30);
console.log('findArr', findArr);

// Some
const arrSome = arrNum.some((item) => item > 100);
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
arrPersons.forEach((ob) => {
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
const doubledArrNum2 = arrNum2.map((item) => item * 2);
console.log('doubledArrNum2', doubledArrNum2);

const oddEvenArrNum2 = arrNum2.map((item) => (item % 2 === 0 ? 'Even' : 'Odd'));

console.log('oddEvenArrNum2', oddEvenArrNum2);

const oddEvenObjArrNum2 = arrNum2.map((item) => {
  return item % 2 === 0
    ? {
        val: item,
        type: 'Even',
      }
    : {
        val: item,
        type: 'Odd',
      };
});
console.log('(oddEvenObjArrNum2', oddEvenObjArrNum2);

// Reduce
// arr.reduce() -- does not mutate the data // SAFE - React
// const arrNum2 = [22, 1, 3, 18, 9, 2, 44, 98, 45];
const arrNum2Sum = arrNum2.reduce((sum, item) => item + (sum || 0));
console.log('arrNum2Sum', arrNum2Sum);

//  i  sum   item  return
//  0  0      22   22
//  1  22     1    23
//  2  23     3    26
//  3  26     18   44
//  ..  ..    ..   ..
//  8  197     45   242

const nameArrConcat = nameArr.reduce((str, item) => (str || '') + item);
console.log('nameArrConcat', nameArrConcat);

// Array method chaining example
const sumOfTripledOdd = arrNum2
  .map((num) => num * 3)
  .filter((num) => num % 2 !== 0)
  .reduce((sum, num) => (sum || 0) + num);

console.log('sumOfTripledOdd', sumOfTripledOdd);
