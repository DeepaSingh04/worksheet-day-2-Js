//output based question

const users = [
    { name: "Alice", age: 25 },
    { name: "Bob", age: 30 }
];
users.sort((a, b) => b.age - a.age); 
console.log(users);
