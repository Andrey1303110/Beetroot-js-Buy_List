let addMessage = document.querySelector('.message'),
    addButton = document.querySelector('.add');

let todoList = [];

addButton.addEventListener('click', function () {
    let newToDo = {
        todo: addMessage.value,
        checked: false,
        important: false
    };

    todoList.push(newToDo);
    console.log(todoList);
})