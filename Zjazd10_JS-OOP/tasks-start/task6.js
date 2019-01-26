console.log("Task 6");
/*
const obj1 = { a: 1, b: 2, c: 3 }
const obj2 = { c: 4, d: 5 }
const obj3 = Object.assign(obj1, obj2); //ważne! aby c było podmienione, dodawana wartość musi się znajdować po obj1

console.log(obj3); // { a: 1, b: 2, c: 4, d: 5}
*/

const obj1 = {a: "red", c: 20, f: 50};
const obj2 = {b: "blue", d: 100, g: 100};
const obj3 = {c: "green", e: 200, h: 150};

const objects = Object.assign(obj1, obj2, obj3);
console.log(objects);
