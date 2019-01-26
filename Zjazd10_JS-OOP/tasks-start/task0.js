console.log("Task 0");

this.name = "Superman";
console.log(window.name);

function hello() {
   
    console.log(this.name + " is a hero");
}

let osoba = { name: "Batman", hello: hello };

osoba.hello();
hello();






