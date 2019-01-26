console.log("Task 7");

function kitten(name) {
    this.name = name;
    this.sound = "Purrrr";
    this.speak = "Nope";
};

kitten.prototype.makeSound = function () {
    console.log(this.sound)
};

kitten.prototype.makeSpeak = function () {
    console.log(this.speak)
};

let kitten1 = new kitten("Bob"); // słowo new jest kluczowe, abyv utworzyć nową zmienną opartą na naszej funkcji konstruktora
kitten1.makeSound();
kitten1.makeSpeak();
