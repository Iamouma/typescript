import { Task, addTask, deleteTask, toggleTaskCompletion } from "../src/taskManager";

describe("Task Manager", () => {
  let tasks: Task[];

  beforeEach(() => {
    tasks = [];
  });

  it("should add a new task", () => {
    addTask("Test Task", tasks);
    expect(tasks.length).toBe(1);
    expect(tasks[0].title).toBe("Test Task");
    expect(tasks[0].completed).toBe(false);
  });

  it("should delete a task", () => {
    addTask("Test Task", tasks);
    deleteTask(tasks[0].id, tasks);
    expect(tasks.length).toBe(0);
  });

  it("should toggle task completion", () => {
    addTask("Test Task", tasks);
    toggleTaskCompletion(tasks[0].id, tasks);
    expect(tasks[0].completed).toBe(true);
    toggleTaskCompletion(tasks[0].id, tasks);
    expect(tasks[0].completed).toBe(false);
  });
});
