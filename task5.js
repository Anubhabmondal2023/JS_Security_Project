
const products = [
  { id: 1, name: "Laptop" },
  { id: 2, name: "Mobile" },
  { id: 3, name: "Tablet" }
];

const product = products.find(item => item.id === 2);

console.log(product);
