import './style.css';
import taskStatusChange from './task_status_change.js';

var toDoTasks = [
  {
    description: 'Wash the dishes',
    completed: false,
    index: 2,
  },
  {
    description: 'Finish To Do List project',
    completed: false,
    index: 1,
  },
  {
    description: 'Atted The Standup Team',
    completed: false,
    index: 0,
  },
];

const createTheLocalStorage = (dataName, data) => {
  const strdata = JSON.stringify(data);
  localStorage.setItem(dataName, strdata);
};

const getDataFromLocalStorage = (dataName) => {
  if(localStorage.getItem(dataName) == null) {
    return null;
  }
  return JSON.parse(localStorage.getItem(dataName));
}

const renderList = () => {
  if(getDataFromLocalStorage('toDoTasks') == null)
  {
    createTheLocalStorage('toDoTasks', toDoTasks);
  }

  toDoTasks = getDataFromLocalStorage('toDoTasks');

  toDoTasks.sort((task1, task2) => task1.index - task2.index);

  const toDoListUL = document.querySelector('ul');

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

    const moreIcon = document.createElement('i');
    moreIcon.classList.add('fas');
    moreIcon.classList.add('fa-ellipsis-v');
    li.appendChild(moreIcon);
  }
};

renderList();