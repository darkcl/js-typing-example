function sayHello(p) {
  console.log(`Hello ${p.firstName} ${p.lastName}`);
}

class Person {
  constructor(name) {
    this.name = name;
  }
}

sayHello(new Person("World"));
