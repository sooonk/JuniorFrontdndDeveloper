//PRZETWARZANIE DANYCH


//sprawdzić statyczne metody przetwarzania danych
/*
const obj = {name:'Bob', age:30};

     for(const prop in obj){
        console.log(prop);
        console.log(obj[prop]);   
        
     }

console.log(Object.entries(obj));

console.log(Object.keys(obj));
console.log(Object.values(obj));


//zamiana danych na string i odwrócenie operacji
const x = {name:'Kasia', age:22};

console.log(JSON.stringify(x));
console.log(JSON.parse('{"name":"Kasia","age":22}'));
let y = JSON.stringify(x); //dobrą praktyką jest zapisywanie takich operacji od razu do zmiennych
console.log(JSON.parse(y));

//Math

console.log(Math.round(0.4));
console.log(Math.round(0.7));
console.log(Math.floor(0.7));
console.log(Math.ceil(0.3));

//Daty - korzystać z frameworków, np. moment.js
*/
//Local storage
/*
localStorage.setItem('Ania', 'age: 33');
localStorage.setItem('Kasia', 'age: 34');

console.log(localStorage);

let local = localStorage.getItem('Ania');
console.log(local);

localStorage.removeItem('Kasia');
console.log(localStorage);

localStorage.clear();
*/
//Task - dodać obiekt, zamienić go na string, zapisać w localStorage, następnie pobrać i przywrócić do poprzedniej postaci
const hero = {Hero: 'Batman', Power: 'money'};
console.log(hero);

let heroStr = JSON.stringify(hero);
console.log('Po zmianie na string: '+ heroStr);

localStorage.setItem('Hero', heroStr);
console.log(localStorage);

console.log(JSON.parse(localStorage.getItem('Hero')));


