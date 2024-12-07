//error-based

const obj = {
    name: "Alice",
    greet() {
        console.log(`Hello, ${this.name}`);
    }
};

obj.greet(); 
