// //grab all the necessary DOM elements

// //form and relevant input fields
// const newTaskForm = document.getElementById("create-task-form"); //form parent element
// const newTaskDescription = document.getElementById("new-task-description"); //form input element
// const newTaskPriority = document.getElementById("new-task-priority");

// //ul where new tasks will live on the DOM
// const newTaskUl = document.getElementById("tasks");

// const createNewTask = event => {
//     event.preventDefault();
//     //stop form from trying to submit
//     const newTask = document.createElement("li");
//     newTask.innerText = newTaskDescription.value;

//     const ul = document.getElementById("tasks");
//     ul.appendChild(newTask);
//     event.target.reset();
// };

// const appendNewTask = task => {
// };

// //attach event listeners
// newTaskForm.addEventListener("submit", createNewTask);
// // });


// Create DOM References
const taksForm = document.getElementById('create-task-form');
const taskInput = document.getElementById("new-task-description")

//Create function to add input to list
function addInputToList() {
    const taskList = document.getElementById('tasks');
    let li = document.createElement('li');
    li.innerHTML = taskInput.value
    taskList.appendChild(li)
}

taksForm.addEventListener('submit', function (event) {
    event.preventDefault()
    addInputToList()
    event.target.reset()
})