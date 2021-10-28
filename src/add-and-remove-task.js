import localStorageController from './localStorage-controller';

const updateListIndexes = () => {
  const toDoTasks = localStorageController.getDataFromLocalStorage('toDoTasks');
  toDoTasks.sort((task1, task2) => task1.index - task2.index);

  for (let i = 0; i < toDoTasks.length; i += 1) {
    toDoTasks[i].index = i + 1;
  }
  localStorageController.createTheLocalStorage('toDoTasks', toDoTasks);
};

const addTask = (taskDescription) => {
  if (taskDescription === '') {
    return;
  }

  const toDoTasks = localStorageController.getDataFromLocalStorage('toDoTasks');

  const task = {
    description: taskDescription,
    completed: false,
    index: toDoTasks.length + 1,
  };

  toDoTasks.push(task);

  localStorageController.createTheLocalStorage('toDoTasks', toDoTasks);

  updateListIndexes();
};

const editTask = (taskDescription, index) => {
  if (taskDescription === '') {
    return;
  }

  const toDoTasks = localStorageController.getDataFromLocalStorage('toDoTasks');

  toDoTasks[index].description = taskDescription;

  localStorageController.createTheLocalStorage('toDoTasks', toDoTasks);
};

const deleteTask = (index) => {
  let toDoTasks = localStorageController.getDataFromLocalStorage('toDoTasks');

  toDoTasks = toDoTasks.filter((task) => task.index !== toDoTasks[index].index);

  localStorageController.createTheLocalStorage('toDoTasks', toDoTasks);
  updateListIndexes();
};

const clearCompletedTasks = () => {
  let toDoTasks = localStorageController.getDataFromLocalStorage('toDoTasks');

  toDoTasks = toDoTasks.filter((task) => !task.completed);

  localStorageController.createTheLocalStorage('toDoTasks', toDoTasks);
  updateListIndexes();
};

const renderEditAndDeleteArea = (e) => {
  const taskDescription = e.currentTarget.parentNode.querySelector('.checkbox-task p');
  const taskDescriptionInput = e.currentTarget.parentNode.querySelector('.checkbox-task input[type="text"]');
  const editIcon = e.currentTarget.parentNode.querySelector('.fa-ellipsis-v');
  const deleteIcon = e.currentTarget.parentNode.querySelector('.fa-trash-alt');

  taskDescription.classList.add('display-none');
  taskDescriptionInput.classList.remove('display-none');
  taskDescriptionInput.focus();
  editIcon.classList.add('display-none');
  deleteIcon.classList.remove('display-none');
};

export default {
  addTask, editTask, deleteTask, clearCompletedTasks, renderEditAndDeleteArea,
};