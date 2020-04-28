// Extract values from objects
const person = {
  name: 'John Doe',
  age: 30,
  city: 'Boston',
  job: 'Software Developer',
};
const person2 = {
  name: 'Jane Doe',
  age: 25,
  city: 'NY',
  job: 'Team Lead',
};

console.log(person.name + ' is a ' + person.job + ' from ' + person.city);

const { name, job, city, age } = person; // Destructring

const { name: p2Name } = person2;

console.log(name + ' is a ' + job + ' from ' + city);
console.log(`${name} is a ${job} from ${city}`); // Template literals
console.log(`${person2.name} is a ${person2.job} from ${person2.city}`);

const person3 = {
  name: 'Michael',
  age: 40,
  address: {
    city: 'Scranton',
    state: 'NY',
  },
  job: 'Manager',
};
const {
  name: p3Name,
  job: p3Job,
  address: { city: p3City },
} = person3;

console.log(`${p3Name} is a ${p3Job} from ${p3City}`);

// Extract values from arrays
const arr = [33, 45, 67, 78];
const [age1, age2] = arr;
console.log(age1, age2);

const utility = [(n) => n * n, (n) => n * n * n];

const [square, cube] = utility;
console.log(square(4));
console.log(cube(3));

console.clear();
// Practical usage
function printInfo(ob) {
  console.log(ob.name + ' is a ' + ob.job + ' from ' + ob.city);
}
function printInfo2(ob) {
  const { name, job, city } = ob;
  console.log(name + ' is a ' + job + ' from ' + city);
}
function printInfo3({ name, job, city }) {
  console.log(name + ' is a ' + job + ' from ' + city);
}

printInfo(person);
printInfo2(person);
printInfo3(person);
