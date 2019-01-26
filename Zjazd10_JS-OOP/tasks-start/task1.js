console.log("Task 1");

this.name = "Thor";

function hello() {

    console.log(this.name + " is a hero");
}

let nowaOsoba = { name: "Hulk" };
let newPerson = hello;

newPerson();

let boundNewPerson = newPerson.bind(nowaOsoba);
boundNewPerson();


