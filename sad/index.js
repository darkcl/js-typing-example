function sayHello(p) {
  console.log(`Hello ${p.firstName} ${p.lastName}`);
}

class Person {
  constructor(name) {
    this.name = name;
  }
}

sayHello(new Person("World"));

const fs = require("fs");
const path = require("path");

const res = JSON.parse(
  fs.readFileSync(path.join(__dirname, "testing.json")).toString()
);

console.log(res.messages);
