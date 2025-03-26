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

    let checkbox = document.createElement('input');
    let labelBox = document.createElement('label');

    checkbox.type = 'checkbox';
    checkbox.id = list[i]['id']
    checkbox.checked = list[i]['completed'];

    labelBox.type = 'label';
    labelBox.setAttribute('for', checkbox.id);
    labelBox.textContent = list[i]['task']

    ulElement.appendChild(checkbox);
    ulElement.appendChild(labelBox);
    
    ulList.appendChild(ulElement);
  }
}

toDo(todoList);
