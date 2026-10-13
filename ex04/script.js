let count = 0;

const input = document.getElementById("taskInput");
const add = document.getElementById("addButton");
const list = document.getElementById("taskList");
const total = document.getElementById("taskCount");

function addTask() {
    if (input.value.trim() === "") {
        return;
    }

    const li = document.createElement("li");
    li.textContent = input.value;

    li.addEventListener("click", function () {
        li.classList.toggle("completed");
    });

    const btn = document.createElement("button");
    btn.textContent = "Delete";

    btn.addEventListener("click", function (event) {
        event.stopPropagation();
        li.remove();
        count--;
        total.textContent = count;
    });

    li.appendChild(btn);
    list.appendChild(li);

    count++;
    total.textContent = count;
    input.value = "";
}

add.addEventListener("click", addTask);

input.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        addTask();
    }
});
