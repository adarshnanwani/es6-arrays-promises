// Arrow Functions

function sum(n1, n2) {
  return n1 + n2;
}
const sum56 = sum(5, 6);
console.log(sum56);

const sumArrow = (n1, n2) => {
  return n1 + n2;
};
const sum56Arrow = sumArrow(5, 6);
console.log('sum56Arrow', sum56Arrow);

const sumArrow2 = (n1, n2) => n1 + n2;
const sum56Arrow2 = sumArrow2(12, 6);
console.log('sum56Arrow2', sum56Arrow2);

// CONST & LET
// NEVER USE var
// ALWAYS USE const
// USE let WHERE YOU CANNOT USE const

const name = 'Adarsh';
console.log('name using const', name);
// name = 'Jane';

let username = 'Adarsh';
console.log('username using let', username);
username = 'Jane';
console.log('username using let', username);

var nameOfUser = 'Adarsh';
console.log('nameOfUser using var', nameOfUser);
nameOfUser = 'Jane';
console.log('nameOfUser using var', nameOfUser);
var nameOfUser = 'Kevin';
