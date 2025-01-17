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