const numbers = [1, 2, 3, 4, 5];

// Using arrow function with map to square each number
const squaredNumbers = numbers.map(num => num ** 2);

// Using arrow function with filter to get even numbers
const evenNumbers = numbers.filter(num => num % 2 === 0);

// Using arrow function with reduce to sum all numbers
const sum = numbers.reduce((acc, num) => acc + num, 0);

console.log('Squared Numbers:', squaredNumbers); // [1, 4, 9, 16, 25]
console.log('Even Numbers:', evenNumbers);       // [2, 4]
console.log('Sum:', sum);                        // 15
