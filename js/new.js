let addMessage = document.querySelector('.message'),
    addButton = document.querySelector('.add'),
    todo = document.querySelector('.todo');

let todoList = [];

addButton.addEventListener('click', function () {

    let newToDo = {
        todo: addMessage.value,
        checked: false,
        important: false
    };

    todoList.push(newToDo);
    displayMessage();
});

function displayMessage() {
    let displayMessage = '';
    todoList.forEach(function (item, i) {
        displayMessage += `
        <li>
        <input type='checkbox' id='item_${i}'>
        <label for='item_${i}'>${item.todo}</label>
        </li>`;
        todo.innerHTML = displayMessage;
        console.log(displayMessage);
    });
}