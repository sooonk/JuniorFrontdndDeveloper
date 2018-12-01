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






