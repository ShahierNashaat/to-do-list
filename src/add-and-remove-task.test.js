import localStorageController from './__mocks__/localStorage-controller';
import taskController from './add-and-remove-task';
import taskStatusChange from './task_status_change';

jest.mock('./localStorage-controller');

describe('to do list testing', () => {
  test('Add new task', () => {
    const tasksArr = localStorageController.getDataFromLocalStorage('dum');
    expect(taskController.addTask(`task${tasksArr.length + 1}`)).toHaveLength(3);
  });
  test('Delete task', () => {
    expect(taskController.deleteTask(0)).toHaveLength(2);
  });
  test('Edit task', () => {
    expect(taskController.editTask('task1', 0)).toBe('task1');
  });
  test('Clear completed tasks', () => {
    let tasksArr = taskController.clearCompletedTasks();
    let filteredArr = tasksArr.filter((task) => task.completed);
    expect(filteredArr).toHaveLength(0);
  });
  test('Complete task true or false', () => {
    let tasksArr = taskStatusChange(0, true);
    let filteredArr = tasksArr.filter((task) => task.completed);
    expect(filteredArr).toHaveLength(1);

    tasksArr = taskStatusChange(0, false);
    filteredArr = tasksArr.filter((task) => task.completed);
    expect(filteredArr).toHaveLength(0);
  });
});

