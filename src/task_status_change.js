import localStorageController from './localStorage-controller';

export default function taskStatusChange(e) {
  const toDoTasks = localStorageController.getDataFromLocalStorage('toDoTasks');
  const taskDescription = e.currentTarget.nextElementSibling;
  const toDoTask = toDoTasks.filter((task) => task.description === taskDescription.textContent)[0];
  const taskindex = toDoTasks.indexOf(toDoTask);

  toDoTasks[taskindex].completed = e.target.checked;

  if (e.target.checked) {
    taskDescription.classList.add('completed');
  } else {
    taskDescription.classList.remove('completed');
  }

  localStorageController.createTheLocalStorage('toDoTasks', toDoTasks);
}