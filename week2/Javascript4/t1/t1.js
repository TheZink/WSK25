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

function toDo(){
  const ulList = document.getElementById("ulList");
  const modal = document.querySelector('dialog');
  const openMod = document.querySelector('#openMod');

  const inputMod = document.querySelector('form input');
  const saveMod = document.querySelector("form button");

  for (let i = 0; i < todoList.length; i++){
    let ulElement = document.createElement('li');
    ulElement.classList.add('ulList')

    let checkbox = document.createElement('input');
    let labelBox = document.createElement('label');
    let deleteButton = document.createElement('button');

    // Luodaan Chechbox
    checkbox.type = 'checkbox';
    checkbox.id = todoList[i]['id']
    checkbox.checked = todoList[i]['completed'];

    // Luodaan Label
    labelBox.type = 'label';
    labelBox.setAttribute('for', checkbox.id);
    labelBox.textContent = todoList[i]['task'];

    // Luodaan Delete-button
    deleteButton.textContent = 'Del';

    ulElement.appendChild(checkbox);
    ulElement.appendChild(labelBox);
    ulElement.appendChild(deleteButton);
    
    ulList.appendChild(ulElement);

    // Poistaa elementin toDoList
    deleteButton.addEventListener('click', function() {
      ulList.removeChild(ulElement);
      delete todoList[i];
      console.log(todoList);
    })

    // ToDolist checkbox
    checkbox.addEventListener('change', function() {
      if (checkbox.checked == true) {
        todoList[i].completed = true;
        console.log(todoList[i].completed)
      } else if (checkbox.checked === false){
        todoList[i].completed = false;
        console.log(todoList[i].completed)
      }
      console.log(todoList)
    });
  }

  openMod.addEventListener('click', function(){
    modal.showModal();
  })

  // Save modal input (WIP)
  saveMod.addEventListener('click', function (event) {
    event.preventDefault();
    const newTask = inputMod.value.trim();
    if (newTask) {
      todoList.push({
        id: todoList.length + 1,
        task: newTask,
        completed: false,
      });
      console.log(`New task added: ${newTask}`);
      modal.close();
      inputMod.value = '';
    }
  });
}

toDo();
