// 1. Konstruktor ToDoUIBuilder:
//  - tasksToDo - tablica z wpisanymi zadaniami (obiektami)
//  - tasksDone[]
//  - metoda render UI() - ma wiedzieć jaką listę zadań wyrenderować
//      - renderList()
//      - addTasksToDo()
//      - addDoneTasks()
//      - removeTasks()
//      - moveTaskToDone()
// 2. Task
//  - TEXT


function ToDoApp() {
    this.tasks = [];
    this.tasksDone = [];

    this.inputElement = (function() {
        let input = document.createElement('input');
        input.type = 'text';
        return input;
    })()//metoda zwracająca element input - wywołanie funkcji natychmiastowej wymaga dodatkowych nawiasów na końcu, aby ją wywołać
};

ToDoApp.prototype.addTaskToDo = function (event) {
}

function Task(text) {
    this.text = text;
}


const apka = new ToDoApp();
console.log(apka);

