export const addTask = (title, tasks) => {
    if (title.trim() === "")
        return; // Prevent emepty tasks
    const newTask = {
        id: Date.now(),
        title,
        completed: false,
    };
    tasks.push(newTask);
};
export const deleteTask = (id, tasks) => {
    const index = tasks.findIndex((task) => task.id === id);
    if (index !== -1)
        tasks.splice(index, 1);
};
export const toggleTaskCompletion = (id, tasks) => {
    const task = tasks.find((task) => task.id === id);
    if (task)
        task.completed = !task.completed;
};
