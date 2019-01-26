console.log("Task 2");

function showAnimal(animal, color, name){
    console.log(arguments);
    console.log(this);
};

let cat = {
    animal: "cat",
    color: "white",
    name: "Bob"
};

let dog = {
    animal: "dog",
    color: "black",
    name: "Fred"
};

showAnimal();

showAnimal.call(cat, "angry", "mean"); 
showAnimal.call(dog, 'friendly', "nice");

showAnimal.apply(cat, ["mean", "devil"]); // apply przekazuje elementy jako tablicę
showAnimal.apply(dog, ["sweet", "good boy"]);


