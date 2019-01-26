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
    //Stan aplikacji powinien być zapisywany i przechowywany (dane)
    const store = {
        heroes: [],
        addHero: function(hero){
            this.heroes.push(hero);
    
            this.doLogState('Hero has been added: ', hero);
        },
       
        removeHero: function(hero){
            this.heroes = this.heroes
                .filter(storedHero => storedHero.name !== hero.name);
    
            this.doLogState('Hero has been removed: ', hero);
        },
        //odwołuje się do zmiennej, która znajduje się w storze, a nie poza nim
        getHeroes: function(){
            return this.heroes; 
        },
    
        synchToLocalStorage: function(){
            localStorage.clear();
    
            this.heroes.forEach(hero => {
                localStorage.setItem(hero.name, JSON.stringify(hero));
            });
            console.warn('Store: local storage state is like: ', localStorage);
        },
    
        synchFromLocalStorage: function(knownHeroes){
            knownHeroes.forEach(knownHero => {
                const storedHero = localStorage.getItem(knownHero.name);
    
                if((storedHero !== null) && (storedHero !== undefined)){
                        this.heroes.push(storedHero);
                    } 
            });
            console.warn('Store: state of store after synch is like: ', this.heroes); 
        }, 
    
        doLogState: function(message, hero){
            console.warn('Store: '+ message, hero);
            console.warn('Store: state of store is like: ', this.heroes); 
        }    
    };
    /*
    store.addHero(triss);
    
    store.addHero(ciri);
    store.synchFromLocalStorage(heroes);
    console.log(store.getHeroes());

    store.removeHero(triss);
    console.log(store.getHeroes());
    */
    
    //Możliwość dodania bohatera
    function buildOptionTag(hero){
        return `<option value="${hero.name}">${hero.name}</option>`;
    }

    function buildOptions(heroes){
        let options = '';

        heroes.forEach(hero => {
            options += buildOptionTag(hero);
        });   
        return options;
    }
    function appendOptions(heroes){
        document.querySelector('#heroesSelect')
            .innerHTML = buildOptions(heroes);       
    }  
    appendOptions(heroes);
    
});


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




