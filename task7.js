
const users = [
  { name: "Irfan", role: "user" },
  { name: "Ali", role: "admin" }
];

const adminExists = users.some(user => user.role === "admin");

console.log(adminExists);
