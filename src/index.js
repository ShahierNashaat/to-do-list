/* eslint-disable import/extensions */

import localStorageController from './localStorage-controller.js';
import taskStatusChange from './task_status_change.js';
import addAndRemoveTask from './add-and-remove-task';
import './style.css';

let toDoTasks = [];

const renderList = () => {
  if (localStorageController.getDataFromLocalStorage('toDoTasks') == null) {
    localStorageController.createTheLocalStorage('toDoTasks', toDoTasks);
  }

  toDoTasks = localStorageController.getDataFromLocalStorage('toDoTasks');

  toDoTasks.sort((task1, task2) => task1.index - task2.index);

  const toDoListUL = document.querySelector('ul');
  toDoListUL.innerHTML = '';

  for (let i = 0; i < toDoTasks.length; i += 1) {
    const li = document.createElement('li');
    toDoListUL.appendChild(li);

    const checkboxAndTaskDiv = document.createElement('div');
    checkboxAndTaskDiv.classList.add('checkbox-task');
    li.appendChild(checkboxAndTaskDiv);

    const checkBox = document.createElement('input');
    checkBox.setAttribute('type', 'checkbox');
    checkBox.checked = toDoTasks[i].completed;
    checkBox.addEventListener('change', taskStatusChange);
    checkboxAndTaskDiv.appendChild(checkBox);

    const taskParagraph = document.createElement('p');
    taskParagraph.textContent = toDoTasks[i].description;
    checkboxAndTaskDiv.appendChild(taskParagraph);
    if (toDoTasks[i].completed) {
      taskParagraph.classList.add('completed');
    }

    const editTaskDescriptionInput = document.createElement('input');
    editTaskDescriptionInput.value = toDoTasks[i].description;
    editTaskDescriptionInput.classList.add('display-none');
    editTaskDescriptionInput.setAttribute('type', 'text');
    editTaskDescriptionInput.addEventListener('blur', (e) => {
      addAndRemoveTask.editTask(e.currentTarget.value, i);
    });
    checkboxAndTaskDiv.appendChild(editTaskDescriptionInput);

    const moreIcon = document.createElement('i');
    moreIcon.classList.add('fas');
    moreIcon.classList.add('fa-ellipsis-v');
    moreIcon.addEventListener('click', (e) => {
      addAndRemoveTask.renderEditAndDeleteArea(e);
    });
    li.appendChild(moreIcon);

    const deleteIcon = document.createElement('i');
    deleteIcon.classList.add('fas');
    deleteIcon.classList.add('fa-trash-alt');
    deleteIcon.classList.add('display-none');
    deleteIcon.addEventListener('click', () => {
      addAndRemoveTask.deleteTask(i);
      renderList();
    });
    li.appendChild(deleteIcon);
  }
};

renderList();

const addButton = document.querySelector('.fa-plus');
addButton.addEventListener('click', () => {
  addAndRemoveTask.addTask(addButton.previousElementSibling.value);
  addButton.previousElementSibling.value = '';
  renderList();
});

const clearCompletedTasksButton = document.querySelector('.container button');
clearCompletedTasksButton.addEventListener('click', () => {
  addAndRemoveTask.clearCompletedTasks();
  renderList();
});

document.addEventListener('click', (e) => {
  if (e.target == null) {
    return;
  }
  if (e.target !== e.target.parentNode.querySelector('.checkbox-task input[type="text"]') && e.target !== e.target.parentNode.querySelector('.fa-trash-alt') && e.target !== e.target.parentNode.querySelector('.fa-ellipsis-v') && e.target !== e.target.parentNode.querySelector('input[type="checkbox"]')) {
    renderList();
  }
});