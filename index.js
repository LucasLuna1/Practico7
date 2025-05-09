const InMemoryTaskRepository = require('./InMemoryTaskRepository');
const TaskService = require('./TaskService');

const repository = new InMemoryTaskRepository();
const service = new TaskService(repository);

service.createTask('Estudiar el patrón Repository');
service.createTask('Aplicar el patrón en un proyecto real');

console.log('Tareas:');
console.log(service.listTasks());
