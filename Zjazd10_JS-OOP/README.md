# jfdzs3-materialy-js-oop

var name = Object.assign(name); - tworzy kopię obiektu, na której powinniśmy pracować w funkcji

W programowaniu prototypowym obiekty dziedziczą po parencie.
W programowaniu klasowym dziedziczą po klasie. Klasa również może dziedziczyć po innej klasie.

## this

Przy funkcji strzałkowej nie ma możliwości manipulowania kontekstem. This zawsze jest przypisane do jednego obiektu, nie możemy 
manipulować kontekstem.

Execution context - manipulowanie kontekstem

this.name = 'Ala';

function hello(){
    console.log(this.name + 'mówi cześć!');
}

var osoba = {name: 'Zenek', hello: hello}

osoba.hello() // Zenek mówi cześć!
hello() // Ala mówi cześć!


## funkcja BIND

tworzy kopię, nową zmienną, która ma takie samo ciało i parametry, ale kontekst jest inny.
Tworzy kopię, która jest przywiązana na stałe do nowego obiektu.

Child zmienia stan parenta.

## funkcja CALL

umożliwia jednorazowe wywołanie funkcji w kontekscie innym niż domyślny





