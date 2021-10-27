export default function taskStatusChange(e) {
  const toDoTasks = JSON.parse(localStorage.getItem('toDoTasks'));
  const taskDescription = e.currentTarget.nextElementSibling.textContent;
  const toDoTask = toDoTasks.filter((task) => task.description === taskDescription)[0];
  const taskindex = toDoTasks.indexOf(toDoTask);

  toDoTasks[taskindex].completed = e.target.checked;

  localStorage.setItem('toDoTasks', JSON.stringify(toDoTasks));
}