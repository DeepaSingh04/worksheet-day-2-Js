function countOddEven(numbers) {
    return numbers.reduce(
        (acc, num) => {
            num % 2 === 0 ? acc.even++ : acc.odd++;
            return acc;
        },
        { odd: 0, even: 0 }
    );
}
console.log(countOddEven([1, 2, 3, 4, 5])); 
