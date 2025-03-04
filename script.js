//inits an empty array element called tasks
let tasks = [];

//function updates task counter 
function updateTaskCounter() {
    document.getElementById('taskCounter').innerText = `Tasks Remaining: ${tasks.length}`;
}

//adds on click event listener to the add task button that calls a function
document.getElementById('addTaskBtn').addEventListener('click', function () {
    //get the value of the input box and store it in a variable called task input
    let taskInput = document.getElementById("taskInput").value;
    
    //checks if task input has something in it
    if (taskInput) {
        //adds new tasks to the array
        tasks.push(taskInput);

        document.getElementById('taskInput').value = '';

        displayTasks();
    }

    console.log(tasks);
});

//function that will display lists 
function displayTasks() {
    let taskList = document.getElementById('taskList');
    taskList.innerHTML = '';

    //loop through every task in the array and create a new list item
    tasks.forEach((task, index) => {
        let li = document.createElement('li');

        //css classes for styling 
        li.classList.add(
            'list-group-item', 'd-flex', 'justify-content-between', 'align-items-center'
        );

        li.innerHTML = `${task} <button class='btn btn-dark btn-sm' onclick='removeTask(${index})'> √ </button>`;

        taskList.appendChild(li);
    });
// task counter update
    updateTaskCounter();  
}

//removes task from list when check button is clicked 
function removeTask(index) {
    tasks.splice(index, 1);
    displayTasks();
}

//event listener for clear all tasks button 
document.getElementById('clearTaskBtn').addEventListener('click', function () {
    tasks = []; //Empty tasks array to remove all tasks
    displayTasks();
});

//press enter to add a task  
document.getElementById('taskInput').addEventListener('keypress', function (event) {
    if (event.key === 'Enter') {
        document.getElementById('addTaskBtn').click();
    }
});

// counter diplays
updateTaskCounter();
