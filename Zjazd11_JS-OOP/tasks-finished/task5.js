var kotek = {
    makeSound: function() {
        console.log(this.sound)
    }
};

var superKot = Object.create(kotek);
superKot.sound = 'Miau';

superKot.makeSound();
