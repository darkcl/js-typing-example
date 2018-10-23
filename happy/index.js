/**
 *
 * @param {Person} p
 */
function sayHello(p) {
  console.log(`Hello ${p.firstName} ${p.lastName}`);
}

class Person {
  /**
   *
   * @param {string} firstName
   * @param {string} lastName
   */
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
}

sayHello(new Person("some", "guy"));

/** @typedef {import('./schema/json').RootObject} RootObject */

const fs = require("fs");
const path = require("path");

/** @type {RootObject} */
const res = JSON.parse(
  fs.readFileSync(path.join(__dirname, "testing.json")).toString()
);

console.log(res.message);
