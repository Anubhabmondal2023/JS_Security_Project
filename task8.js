
const users = [
  { name: "A", age: 25 },
  { name: "B", age: 30 },
  { name: "C", age: 18 }
];

const allAdults = users.every(user => user.age >= 18);

console.log(allAdults);
