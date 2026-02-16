
const employees = [
  { name: "Irfan", salary: 60000 },
  { name: "Ali", salary: 40000 },
  { name: "Sara", salary: 80000 }
];

const highSalaryNames = employees
  .filter(emp => emp.salary > 50000)
  .map(emp => emp.name);

console.log(highSalaryNames);
