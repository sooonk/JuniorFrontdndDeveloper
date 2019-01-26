console.log("Task 5");

function catFact(sound) {
    return{
        sound: sound,
        makeSound: function() {
            console.log("Sound: " + this.sound);
        }
    }
}
const kot = catFact("purr");

const kot1 = Object.create(kot);
console.log(kot1);
