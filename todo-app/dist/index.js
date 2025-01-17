"use strict";
const taskForm = document.getElementById("taskForm");
const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");
let tasks = [];
const addTask = (title) => {
    const newTask = {
        id: Date.now(),
        title,
        completed: false,
    };
    tasks.push(newTask);
    renderTasks();
};
const renderTasks = () => {
    taskList.innerHTML = "";
    tasks.forEach((task) => {
        const li = document.createElement("li");
        li.textContent = task.title;
        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.checked = task.completed;
        checkbox.addEventListener("change", () => {
            task.completed = checkbox.checked;
        });
        const taskTitle = document.createElement("span");
        taskTitle.textContent = task.title;
        if (task.completed) {
            taskTitle.style.textDecoration = "line-through";
        }
        const editButton = document.createElement("button");
        editButton.textContent = "Edit";
        editButton.addEventListener("click", () => {
            const newTitle = prompt("Edit task:", task.title);
            if (newTitle) {
                task.title = newTitle.trim();
                renderTasks();
            }
        });
        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.addEventListener("click", () => {
            tasks = tasks.filter((t) => t.id !== task.id);
            renderTasks();
        });
        li.appendChild(checkbox);
        li.appendChild(taskTitle);
        li.appendChild(editButton);
        li.appendChild(deleteButton);
        taskList.appendChild(li);
    });
};
taskForm.addEventListener("submit", (event) => {
    event.preventDefault();
    if (taskInput.value.trim()) {
        addTask(taskInput.value.trim());
        taskInput.value = "";
    }
});
