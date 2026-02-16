
let numbers = [1, 2, 3, 4, 5, 6, 7, 8];

let evenNumbers = numbers.filter(function(num) {
    return num % 2 === 0;
});

console.log(evenNumbers);
