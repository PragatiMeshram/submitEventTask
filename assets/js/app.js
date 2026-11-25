 const cl = console.log;

//submit is a form event

const todoForm = document.getElementById("todoForm")

const todoItemControl = document.getElementById('todoItemControl')
const todoContainer = document.getElementById('todoContainer')
//cl(todoItemControl)

let todoArr = [
    {
        todoItem : "JS"
    },
    {
        todoItem : "TS"
    }
];

function createList(arr){
    let result = ' ';
    arr.forEach(ele => {
        result += `
        <li class="list-group-item d-flex justify-content-between">
                        <strong>
                            ${ele.todoItem}
                        </strong>

                        <div>
                            <button class="btn btn-sm btn-outline-info">Edit</button>
                            <button class="btn btn-sm btn-outline-danger">Remove</button>
                        </div>
                    </li>`;
    });
    todoContainer.innerHTML = result
}
createList(todoArr)

// submit events default behavour to reload the page

function onTodoAdd(eve){
    eve.preventDefault()

    let todoObj = {
         todoItem : todoItemControl.value
    };

    todoForm.reset()
    todoArr.push(todoObj)  //create API success :: Create a new LI for new todoObj
   createList(todoArr) //instead of creating li,we have to create only one LI and add in UL
     
   
}

todoForm.addEventListener('submit', onTodoAdd)

createList(todoArr);
