var input = document.querySelector("#myText");
var ul = document.querySelector("ul");
var addBtn = document.querySelector(".addBtn");
var lis = document.querySelectorAll("li");
var deleteBtns = document.querySelectorAll(".deleteBtn");

//добавляем слушателя, который ориентирован на клик
addBtn.addEventListener("click", () => {
    addLi()
});

//добавляем поддержку нажатия ввода энтером
input.addEventListener("keypress", (e) => {
    if (e.keyCode === 13 || e.which === 13) {
        addLi();
    }
});

//сама функция по добавлению Элемента списка
var addLi = () => {
    var trimmedText = input.value.trim();
    if (!trimmedText == "" || !trimmedText == 0) {

        var li = document.createElement("li");
        li.classList.add("list-group-item", "d-flex", "align-items-center");
        li.textContent = input.value + " ";
        li.addEventListener("click", () => {
            li.classList.toggle("list-group-item-danger");
        });

        var deleteBtn = document.createElement("button");
        deleteBtn.classList.add("deleteBtn", "btn", "btn-danger", "btn-sm", "ml-auto");
        deleteBtn.textContent = "Delete";
        deleteBtn.addEventListener("click", function () {
            this.parentElement.remove();
        });

        li.appendChild(deleteBtn);
        ul.appendChild(li);

        input.value = "";
    } else return;
};

// Toggle danger class on li when li is clicked
lis.forEach((li) => {
    li.addEventListener("click", () => {
        li.classList.toggle("list-group-item-danger");
    });
});

//Remove li when delete button is clicked
deleteBtns.forEach((deleteBtn) => {
    deleteBtn.addEventListener("click", function () {
        this.parentElement.remove();
    });
});