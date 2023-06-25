import axios from 'axios';

const routes = {
  tasksPath: () => '/api/tasks',
};

// BEGIN
export default async () => {

  const todoItemsList = document.querySelector('#tasks');
  const addNewItemButton = document.querySelector('button');
  const inputNewItem = document.querySelector('input');

  if (!todoItemsList) return 'element not found';
  if (!addNewItemButton) return 'element not found';
  if (!inputNewItem) return 'element not found';


  const createTodoListItem = (todoListItemName) => {
    const newTodoListItem = document.createElement('li');
    newTodoListItem.innerHTML = todoListItemName;
    newTodoListItem.className = 'list-group-item';
    todoItemsList.prepend(newTodoListItem);
  }   

  const startWithThisTasks = await axios.get(routes.tasksPath())
  .then(result => result.data.items.reverse())
  .catch(error => {throw new Error(error)});
  for (let i = 0; i <= startWithThisTasks.length; i++) {
    if (startWithThisTasks[i]) {
      createTodoListItem(startWithThisTasks[i].name);
    }
  }

  addNewItemButton.addEventListener('click', async (event) => {
    event.preventDefault();
    const response = await axios.post(routes.tasksPath(), {name: inputNewItem.value});
    if (!response) {
      return 'error';
    }
    createTodoListItem(inputNewItem.value);
  })

}
// END