function Person(name) {
    this.name = name;
}
Person.prototype.greet = function () {
    console.log(`My name is ${this.name}`);
};

const person = new Person("Deepa");
person.greet(); 
