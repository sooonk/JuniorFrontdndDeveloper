let store = JSON.parse(localStorage.getItem('tasks')) || [];


function render() {
    let result = store
        .map((task, index)  => {
            return `<li>${task}  <button data-id="${index}">Usuń</button></li>`
    }).join('');
    document.querySelector('ul').innerHTML = result;
}
render();

document.querySelector('ul').addEventListener('click', event => {
    
    if(event.target.tagName === 'BUTTON'){
        let index = +event.target.dataset.id;
        store.splice(index, 1);
        render();
        localStorage.setItem('tasks', JSON.stringify(store));
    }
});

document.querySelector('form').addEventListener('submit', event => {
    event.preventDefault();
    const taskNodes = document.querySelector('input[name="task"]');
    const task = taskNodes.value.trim();
    taskNodes.value = '';
    
    if(task !== ''){
        store.push(task);
        render();
        localStorage.setItem('tasks', JSON.stringify(store));
    }
});
