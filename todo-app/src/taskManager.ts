export interface Task {
  id: number;
  title: string;
  completed: boolean;
}
  
export const addTask = (title: string, tasks: Task[]): void => {
  if (title.trim() === "") return; // Prevent emepty tasks
  const newTask: Task = {
    id: Date.now(),
    title,
    completed: false,
  };
  tasks.push(newTask);
};
  
export const deleteTask = (id: number, tasks: Task[]): void => {
  const index = tasks.findIndex((task) => task.id === id);
    if (index !== -1) tasks.splice(index, 1);
};
  
export const toggleTaskCompletion = (id: number, tasks: Task[]): void => {
  const task = tasks.find((task) => task.id === id);
    if (task) task.completed = !task.completed;
};
  