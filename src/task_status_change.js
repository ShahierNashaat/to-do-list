import localStorageController from './localStorage-controller';

export default function taskStatusChange(index, checked) {
  const toDoTasks = localStorageController.getDataFromLocalStorage('toDoTasks');

  toDoTasks[index].completed = checked;

  localStorageController.createTheLocalStorage('toDoTasks', toDoTasks);

  return toDoTasks;
}
