function sum(a, b, c) {
    return a + b + c;
}

const nums = { a: 1, b: 2, c: 3 };
console.log(sum.call(null, nums.a, nums.b, nums.c));
console.log(sum.apply(null, [nums.a, nums.b, nums.c])); 
