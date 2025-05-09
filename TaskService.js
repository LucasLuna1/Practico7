class TaskService {
  constructor(taskRepository) {
    this.taskRepository = taskRepository;
  }

  listTasks() {
    return this.taskRepository.getAll();
  }

  createTask(description) {
    const task = { description, createdAt: new Date() };
    this.taskRepository.add(task);
    return task;
  }
}

module.exports = TaskService;
