const TaskRepository = require('./TaskRepository');

class InMemoryTaskRepository extends TaskRepository {
  constructor() {
    super();
    this.tasks = [];
  }

  getAll() {
    return this.tasks;
  }

  add(task) {
    this.tasks.push(task);
  }
}

module.exports = InMemoryTaskRepository;
