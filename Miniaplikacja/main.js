document.addEventListener("DOMContentLoaded", function(event) {  //Będzie się ładowało dopiero po załadowaniu się html
    const emhyr = {
        name: 'Emhyr',
        description: 'Emhyr var Emreis, the Imperator of Nilfgaard'
    };
    const dandelion = {
        name: 'Dandelion',
        description: 'Dandelion, best friend and the biggest problem for Geralt'
    };
    const vernon = {
        name: 'Vernon',
        description: 'Vernon Rosche, temerian chief spy'
    };
    const vesemir = {
        name: 'Vesemir',
        description: 'Vesemir, one of the most famous witchers and Geralts stepfather'
    };
    const foltest = {
        name: 'Foltest',
        description: 'Foltesest, the king of Temeria'
    };
    const geralt = {
        name: 'Geralt',
        description: 'Geralt of Rivia, the most famous wither that ever lived'
    };
    const ciri = {
        name: 'Ciri',
        description: 'Cirilla von Rianon, child of The Elder Blood'
    };
    const franciska = {
        name: 'Franciska',
        description: 'Franciska Findabair, Queen of elves'
    };
    const keira = {
        name: 'Keira',
        description: 'Keira Metz, advisor of Foltest'
    };
    const philippa = {
        name: 'Philippa',
        description: 'Philippa Eilhart, nasty sorceress'
    };
    const tissaia = {
        name: 'Tissaia',
        description: 'Tissaia de Vries, one of the rectors of Aretuza'
    };
    const triss = {
        name: 'Triss',
        description: 'Triss Merigold, lover of Geralt'
    };
    const yen = {
        name: 'Yen',
        description: 'Yennifer of Vengerberg, the love of Geralts life'
    };
    const heroes = [ciri, franciska, keira, philippa, tissaia, triss, yen, emhyr, dandelion, vernon, vesemir, foltest, geralt];
    console.log("Page is ready");
});
//Stan aplikacji powinien być zapisywany i przechowywany (dane)

const store = {
    heroes: [],

    addHero: function(hero){
        this.heroes.push(hero);
        console.warn('store: hero has been added: ' + hero);
        console.warn('store: hero state of store is like: ' + this.heroes);
    },
    removeHero: function(hero){
        this.heroes = this.heroes
        .filter(storedHero => storedHero.name !== this.hero.name);
        console.warn('store: hero has been removed: ' + hero);
        console.warn('store: hero state of store is like: ' + this.heroes);
    },
    showHeroes: function(){
        return this.heroes; //odwołuje się do zmiennej, która znajduje się w store, a nie poza nim
    },
    synchToLocalStorage: function(){},
    synchFromLocalStorage: function(){} 
};


console.log('ok');


//Możliwość dodania bohatera
//Podgląd bohatera powinien pokazywać jego zdjęcie, opis i moc


//Po wejściu do aplikacji powinniśmy od razu zobaczyć wybranych bohaterów

//Każdego bohatera można dodać tylko raz

//Moc powinna być walidowana

//Po dodaniu bohatera pojawia się komunikat, że udało się go dodać. Jeśli nie, pojawia się
//komunikat, że się nie udało

//Możliwość ukrycia komunikatów przez użytkownika

//Kiedy dodajemy bohatera, formularz powinien wrócić do stanu początkowego (domyślnego)

//Możliwość usunięcia każdego z bohaterów
//Kliknięcie na bohatera powinno pokazywać przycisk do usunięcia, po ponownym kliknięciu na
//zdjęcie przycisk powinien się schować
//Każda zmiana jest odzwierciedlana w stanie aplikacji (każde dodanie lub usunięcie zmienia
//stan aplikacji)




