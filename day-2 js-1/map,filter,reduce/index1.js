// output based

const numbers = [1, 2, 3, 4, 5];
const result = numbers
    .filter((n) => n % 2 === 0) 
    .map((n) => n * 2) 
    .reduce((sum, n) => sum + n, 0);
console.log(result); 