import localStorageController from './__mocks__/localStorage-controller';
import taskController from './add-and-remove-task';

jest.mock('./localStorage-controller');

describe('to do list testing', () => {
  test('Add new task', () => {
    const tasksArr = localStorageController.getDataFromLocalStorage('dum');
    expect(taskController.addTask(`task${tasksArr.length + 1}`)).toHaveLength(3);
  });
  test('Delete task', () => {
    expect(taskController.deleteTask(0)).toHaveLength(2);
  });
});
