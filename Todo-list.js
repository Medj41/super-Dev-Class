

const todoList = [
  {name:'make dinner ',
dueDate: '2022-12-22'
},
{name:'make dinner ', 
dueDate: '2022-12-22'
},
{
name:'wash dishes ',
dueDate:'2022-12-22',
},
];


function addtodo(){
  const inputElement = document.querySelector('.js-name-input');
 const name = inputElement.value;
 const dateInput = document.querySelector('.js-due-date-input');
const dueDate = dateInput.value;
 todoList.push({
  name,dueDate
 });
console.log(todoList)
rendertoDolist()
inputElement.value= '';

}






function rendertoDolist(){
  let inputElementHTML = '';

for (let i = 0; i < todoList.length; i++) {
  let toDoObject = todoList[i];

  // let name = toDoObject.name;
  // let dueDate = toDoObject.dueDate;
  let {name, dueDate}= toDoObject

  let html = `<p>
  ${name} ${dueDate} 
  <button onclick = "todoList.splice(${i},1)
  rendertoDolist()
  "> delete </button>
  </p>`

  inputElementHTML+=html;
}
const inputElement = document.querySelector('.js-todo-list').innerHTML = inputElementHTML
}

console.log(todoList);