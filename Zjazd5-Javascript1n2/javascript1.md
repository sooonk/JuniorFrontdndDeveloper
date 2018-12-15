# JAVASCRIPT

Sprawdzić:
Brandon Eich - twórcę JS.
clean code



[State of JS](www.stateofjs.com)


## Sposoby deklarowania zmiennych

var x - stara metoda
let x - zmienna tymczasowa
const x - zmienna stała

let x - deklaracja zmiennej
let x = 10; - deklaracja zmiennej i przypisanie do niej wartości
let x = x + 10;

Obecnie w branży obowiązuje camelCase - nazywanie zmiennej z zaznaczaniem nowego słowa dużą literą - np. newVariableForMyProject.

## Console objects

console.log - niebieski objekt
console.warn - żółty objekt 
console.error - czerwony objekt
console.table([1,2,3,4]); - pokazuje tabelę

Przydaje się, aby wyłapać dany console

## Boolean

True/false

## Arrays

Deep copy
Osobne kopie

Shallow copy
Jedna kopia do pracy

Push - dodanie elementu na koniec tablicy
Pop - wyrzucenie ostatniego elementu 
Shift - wyrzucenie pierwszego elementu
Unshift - dodanie elementu na początek tablicy
Slice - zwrócenie części tablicy - (start, end) - element end się nie wlicza
Umożliwia stworzenie shallow copy.

indexOf - wyrzuca index danej wartości

## Objects

Obiekt łączy pewne wartości i akcje.

let cat = {
    size: "average",
    color: "black",
    name: "Kitty",
    favouriteThings:{
        toys: ["Mouse", "Big Mouse"],
        meals: ["Whiskas"]
    }
};

W obiektach można umieszczać nastęne obiekty, tablice itp.

Oprócz własności mamy rówinież metody w obiektach.

let cat = {
    ...,
    meow: function(){
        console.log("I am a cat!")
    }
};

Odczytywanie wartości obiektów:

- poprzez kropkę: cat.color;
- poprzez klamry: cat['color'];


W drugim sposobie bardzo ważne jest, aby poprawnie wpisać wartość.
Stosowany jest on w przypadkach, gdy nie możemy się bezpośrednio odwołać do wartości, np. cat['@type'] - do @ nie można się odwołać, bo JS wyrzuci błąd.

przykład: cat.favouriteThings['toys'][1] - odwołujemy się do pierwszego elementu tablicy toys - wchodzimy w kolejne zagnieżdżenia obiektu

Dopisywanie danych do obiektów:

- cat.color = "Red";
- cat['color'] = "Red";
- cat.tailColor = 'Red'; - w każdej chwili możemy dorzucić dodatkowe własności, ale trzeba od razu ją zdefiniować i dodać wartość

### Metody

Gdy chcemy odwołać się do metody na samym końcu musimy dodać nawiasy!!!

- cat.meow();
- cat['meow']();


### String object

let a = 'a';
let b = 'a';

a === b //true


let a1 = new String('a');
let b1 = new String('a');

a1 === b1 //false

Ważne!!!
W takim przypadku a1 nie jest równe b1, ponieważ new generuje nowy obiekt, o innych referencjach.

Metody string object

.indexOf(arg) - zwraca index, na którym wartość, której poszukujemy jest spotkana po raz pierwszy

.length - zwraca długość stringa

.slice(start, stop) - wycina część stringa
np. 'asd'.slice(1,2) //s

.substring(start, stop)
np. 'asd'.substring(2,-1) // as




