let addMessage = document.querySelector('.message'),
    addButton = document.querySelector('.add'),
    todo = document.querySelector('.todo');

let todoList = [];

if (localStorage.getItem('todo')) {
    todoList = JSON.parse(localStorage.getItem('todo'));
    displayMessage();
}

addButton.addEventListener('click', function () {

    let newToDo = {
        todo: addMessage.value,
        checked: false,
        important: false
    };

    todoList.push(newToDo);
    displayMessage();
    localStorage.setItem('todo', JSON.stringify(todoList));
});

function displayMessage() {
    let displayMessage = '';
    todoList.forEach(function (item, i) {
        displayMessage += `
        <li>
        <input type='checkbox' id='item_${i}' ${item.checked ? 'checked' : ''}>
        <label for='item_${i}'>${item.todo}</label>
        </li>`;
        todo.innerHTML = displayMessage;
    });
}

todo.addEventListener('change', function (event) {
    let valueLabel = todo.querySelector('[for=' + idInput + ']').innerHTML + event.target.getAttribute('id');

})