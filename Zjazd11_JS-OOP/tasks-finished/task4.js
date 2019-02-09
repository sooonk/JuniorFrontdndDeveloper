function Cat2(name, sound) {
    return {
        name: name,
        sound: sound,
        makeSound: function() {
            console.log(this.sound)
        }
    }
}

var kot1 = Cat2('zenek', 'wrrr');
kot1.makeSound();
