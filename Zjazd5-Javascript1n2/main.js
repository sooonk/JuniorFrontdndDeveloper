//alert("Hello world!");

//let str1 = "String 1";

//console.log(str1);

//let num = 23;

//console.log(num);

//typeof(str1);

//console.log("str1 to " + typeof(str1));
//console.log("num to " + typeof(num));

/*
const x = 10;
console.log(x);

let x = 20;
console.log(x);
*/
/*
let a = 2;
let b = 2;
*/
/*
console.log(a++); 
console.log(a++); //jeśli operator jest umieszczony po zmiennej to najpierw jest element wylogowany, a póxniej dopiero jest dokonana inkrementacja
console.log(a);
console.log(++a);
console.log(a);
console.log(-a);
*/
/*
console.log(a == b);
console.log(a === b);

b = 4;

console.log(a != b);
console.log(a !== b);

console.log( a < b);

a = 6;

console.log(a > b);
console.log(a >= b);

b = 6;
console.log(a <= b);

a = 2;

console.log(a == b);
console.log(a === b);

b = 2;
console.log(a != b);
console.log(a !== b);

a = 3;
console.log(a < b);
console.log(a <= b);

a = 1;
console.log(a > b);
console.log(a >= b);


*/
/*
let a = 10;
let b = 15;
let c = 20;

console.log( ((a == b) || (a < b) ) || (a > c));
console.log( ((a !== b) || (a > b) && (a < c) ));
console.log( ((a !== b) && (a < b) ));


console.log( (a == b) && (a > b) || (a > c)); 
console.log( !(a == b) && (a != b) && (a > c));
console.log( (a != b) && (a >= b) && (b <= c));


console.log( (!(a != b) || (a > b) || !(a > c)) || (a <= c)) ;
*/
/*
let a = 10;
let b = 15;

if ( a === 10 && b === 10){
    console.log("a i b jest równe 10")
} else if ( a === 10 && b === 20 ){
    console.log("a jest równe 10, a b jest równe 20");
} else{
    console.log("Żaden z warunków nie spełnia wymagań")
}

//ternary shape
console.log("Stwierdzenie A jest mniejsze od B to " + (a > b ? true : false));
*/
/*
let date = '2018';

switch (date){
    case '2018': console.log("Mamy 2018 rok");
    case '2019': console.log("Data jest w przyszłości"); break
    default: console.log("Poza zakresem kalendarza");

}
*/

//Array
/*
let names = ["Ania", "Ewelina", "Karina", "Elina"];
console.log(names);

names.push("Andromeda", "Natasha");
console.log(names);

let indexOfEwelina = names.indexOf("Ewelina");
console.log(indexOfEwelina);
newIndexOfEwelina = indexOfEwelina + 2;
console.log(newIndexOfEwelina);


let newArray = (names.slice(newIndexOfEwelina, names.indexOf("Natasha")));
console.log(newArray);

newArray.unshift("Shepard");
console.log(newArray);



if(names[3] == newArray[1]){
    console.log(true);
}else{
    console.log(false);
}*/

//For loops

let start = 1;
let end = 35;
let array = [];

for (let i = 0; i <= 35; i++){

    array.push(i); 

}
console.log(array);

for (let i = 0; i <= array.length; i++ ){
    if (i <= 15){
    
    //console.log(i, "First if");
    
    }
   
    if (i >= 15 && i <= 25){

        console.log("continue");
        continue;
    }

    if (i >= 25 && i <= 30){

        console.log('second if')
        let result = i % 2;


        if (result == 0)
        {
            console.log('third if');
            console.log(i, result); 
        }
        
    }

    if (i === 31)
    {
        break;
    }

    console.warn('warn', i);
}







