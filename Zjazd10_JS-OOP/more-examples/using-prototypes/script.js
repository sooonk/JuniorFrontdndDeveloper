function Dog(name) {
    this.name = name;
}

Dog.prototype.makeSound = function () {
    console.log('Dog ' + this.name + ' does ' + this.sound)
}

Dog.prototype.sound = 'Woof'

const dog1 = new Dog('Puszek')
const dog2 = new Dog('Kłębuszek')

dog1.__proto__ === Dog.prototype // true
dog2.__proto__ === Dog.prototype // true
dog2.__proto__ === dog1.__proto__ // true
dog1.__proto__ === Dog.__proto__ // false
Dog.__proto__ === Function.prototype //true

dog1.makeSound() // 'Dog Puszek does Woff'