// Spread operator --->    ...

// Copy/Create a new object
const employee = {
  name: 'Kevin',
  designation: 'Accountant',
  salary: 40000,
};
console.log('employee', employee);

// copy - Safely copy an object
const empCopy = { ...employee };
console.log('empCopy', empCopy);

// new
const empNew = { ...employee, name: 'Oscar', incentive: 4000 };
console.log('empNew', empNew);

// Spread operator for arrays

const arr1 = [1, 2, 3];
const arr2 = [4, ...arr1, 5];
console.log('arr2', arr2);
// concat two arrays
const arr3 = [...arr1, ...arr2];
console.log('arr3', arr3);

// Copy an array -- Safe copy an array
const copyArr = [...arr1];
console.log('copyArr', copyArr);

const copyArr2 = arr1;
console.log('copyArr2', copyArr2);
