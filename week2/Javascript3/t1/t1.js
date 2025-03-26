'use strict';
// array for todo list
const todoList = [
  {
    id: 1,
    task: 'Learn HTML',
    completed: true,
  },
  {
    id: 2,
    task: 'Learn CSS',
    completed: true,
  },
  {
    id: 3,
    task: 'Learn JS',
    completed: false,
  },
  {
    id: 4,
    task: 'Learn TypeScript',
    completed: false,
  },
  {
    id: 5,
    task: 'Learn React',
    completed: false,
  },
];

function toDo(list){
  const ulList = document.getElementById("ulList");

  for (let i = 0; i < list.length; i++){
    let ulElement = document.createElement('li');
    ulElement.classList.add('ulList')

    let liString = `
    <input type="checkbox" id="todo-"${list[i]['id']} ${list[i]['completed'] ? 'checked' :''}>
    <label for="todo-"${i+1}> ${list[i]['task']} </label>
    `;

    
    ulElement.insertAdjacentHTML('afterbegin', liString);
    
    ulList.appendChild(ulElement);
  }
}

toDo(todoList);

