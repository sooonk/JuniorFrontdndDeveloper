function Dog() {
    this.sound = 'Woof'
}

const dog0 = Dog()
const dog1 = new Dog()
const dog2 = new Dog()

dog1.__proto__ === Dog.prototype // true
dog2.__proto__ === Dog.prototype // true
dog2.__proto__ === dog1.__proto__ // true
dog1.__proto__ === Dog.__proto__ // false
Dog.__proto__ === Function.prototype //true