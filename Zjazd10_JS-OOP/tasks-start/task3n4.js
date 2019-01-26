console.log("Task 3&4");


function catFactory(name, sound) {

    return {
        name: name,
        sound: sound,
        makeSound: function () {
            console.log(this.sound);
        }
    }
    
}
const cat1 = catFactory("Bob", "Meow");
const cat2 = catFactory("Ron", "Purr");
const cat3 = catFactory("Greg", "Mrrrr")


console.log(cat1, cat2, cat3);
