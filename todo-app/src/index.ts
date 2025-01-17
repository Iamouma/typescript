interface Task {
    id: number;
    title: string;
    completed: boolean;
}

const taskForm = document.getElementById("taskForm") as HTMLFormElement;
const taskInput = document.getElementById("taskInput") as HTMLInputElement;
const taskList = document.getElementById("taskList") as HTMLDataListElement;

let tasks: Task[] = [];

const addTask = (title: string): void => {
    const newTask: Task = {
        id: Date.now(),
        title,
        completed: false,
    };

    tasks.push(newTask);
    renderTasks();
};

const renderTasks = (): void => {
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

const saveTasks = (): void => {
    localStorage.setItem("tasks", JSON.stringify(tasks)); 
};

const loadTasks = (): void => {
    const tasksJSON = localStorage.getItem("tasks");
    if (tasksJSON) {
        tasks = JSON.parse(tasksJSON);
        renderTasks();
    }
};

taskForm.addEventListener("submit", (event) => {
    event.preventDefault();
    if (taskInput.value.trim()) {
        addTask(taskInput.value.trim());
        taskInput.value = "";
        saveTasks();
    }
});

window.addEventListener("load", loadTasks);