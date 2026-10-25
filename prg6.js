const numbers = [10, 20, 30, 40, 50];
let sum = 0;
sum = numbers.reduce((total, num) => total + num, 0);
console.log(sum);
module.exports = sum;