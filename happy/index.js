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

sayHello(new Person("World"));
