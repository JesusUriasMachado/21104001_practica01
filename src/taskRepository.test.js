const tasksRepository = require("./taskRepository");

describe("pruebas", () => {
  // prueba unitaria
  test("Get all tasks", () => {
    // Arrage
    let tasks = [];

    // Act
    tasks = tasksRepository.getAll();

    // Assert
    expect(tasks.length).toBe(2);
    expect(tasks.length == 2).toBe(false);
    expect(typeof task == "array");
  });

  test("Get one task by id", () => {
    // Arrage
    let tasks = {};

    // Act
    task = tasksRepository.getById(1);

    // Assert
    expect(task.title == "Task 1").toBe(true);
    expect(task.title == "Task 100").toBe(false);
  });

  test("Create task", () => {
    //Arrange
    let tasks = [];

    //Act
    tasksRepository.createTask({
      id: 3,
      description: "description",
      title: "title",
    });

    //Assert
    expect(tasksRepository.getAll().length).toBe(3);
  });

  test("Delete task", ()=>{
    //Arrange
    let tasks = [];
    //Act
    tasksRepository.deleteTask(2);

    //Assert
    expect(tasksRepository.getAll().length).toBe(2);
  });

  test("Update a task", () => {
    // Arrage
    let tasks = [];
    // Act 
    task = tasksRepository.updateTask(3, { id: 3, title: 'title', description: 'description' })
    // Assert
    expect(task.title == 'title').toBe(true)
})
});
