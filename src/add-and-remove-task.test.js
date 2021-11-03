jest.mock('./localStorage-controller');

import localStorageController from './__mocks__/localStorage-controller';
import taskController from './add-and-remove-task.js';

describe('to do list add and delete', () => {
  test('Add new task', () => {
    let tasksArr = localStorageController.getDataFromLocalStorage('dum');

    expect(taskController.addTask('task'+(tasksArr.length+1))).toHaveLength(tasksArr.length + 1);
  });
});