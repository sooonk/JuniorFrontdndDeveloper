// pamiętajcie, ze wartość słowa "this" zawsze zalezy od kontekstu wywołania danej funkcji bądź metody

// pamiętajcie, ze wywołanie metody apply(), lub call() jest jednorazowym zdarzeniem, umoliwiającym zmianę kontekstu a następnie wykonanie danej funkcji

// natomiast metoda bind(), która zwraca nam kopie istniejącej funkcji, z nastałe przypisanym kontekstem, który został podany jako argument metody bind()

// metoday call() przyjmuje argeumnty pojedyńczo po przecinku, natomiast aplly() w postaci tablicy

// pamiętajcie, pole prototype jest własnością metody konstruktora, po utworzeniu nowego obiektu za pomocą konstruktora, referencja do tego obiektu przechowywa jest w polu __proto__ nowo utworzonego obiektu

// pamiętajcie proszę:
// 1. najpierw tworzymy konstruktor
// 2. później uzywając słowa kluczowego "new" wywołujemy konstruktor tak samo jak zwykłą funkcję podając ewentualnie parametry, wynik tego wywołania zapisujemy do zmiennej.
// 3. Następnie dopiero wtedy mozemy korzystać z metod i pól danego obiektu oraz nimi manipulować

// pamiętajcie proszę o wzorcu DRY (Don't repeat your self)

// pamiętajcie aby formatować kod, i przywiązywać znaczenie do nazewnictwa zmiennych oraz funcji



var object = {
    pole1: wartość,
    pole2: wartość,
    pole3: metoda()
};
function Cat(name, age) {
    this.name = name;
    this.age = age;
    this.sound = 'Meeeeow!';
}

Cat.prototype.makeSound = function () {
    console.log(this.sound);
}
Cat.prototype.speak = function () {
    console.log('Sorry cats can’t speak');
}
// 1. tworząc obiekt za pomocą {} klamer, nie uzywamy słowa "this", uzywamy schematu "pole: wartość,"
// 2. tworząc obiekty za pomocą konstruktora uzywamny "this.pole = wartosc"; metody definiujemy w prototype



Circle.prototype = Object.create(Shape.prototype);
// oto najczęstszy sposób na przekazywanie prototypów między konstruktorami (dziedziczenie prototypu)


const obj1 = { a: 1, b: 2, c: 3 }
const obj2 = {c: 4, d: 5} 
const obj3 = Object.assign(obj1, obj2)
console.log(obj3) // { a: 1, b: 2, c: 4, d: 5} 
// tworząc nowo połączony obiekt za pomocą Object.assign() pamiętajmy, ze pola o takich samych nazwach są nadpisywane według kolejności parametrów przekazanych do wywołania funkcji assign()