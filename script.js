//Init an empty array element called tasks
let tasks = []

//Add on ON CLICK event listener to the "add task button" that calls a function
document.getElementById('addTaskBtn').addEventListener('click', function () {
    //Get the value of the input box and store it in a variable called task input
    let taskInput = document.getElementById("taskInput").value
    //check if task input has something in it
    if (taskInput) {
        //add new tasks to the array
        tasks.push(taskInput)

        document.getElementById('taskInput').value = ''

        displayTasks()
    }

    console.log(tasks)

})

// function that will display lists 
function displayTasks() {

    let taskList = document.getElementById('taskList')

    taskList.innerHTML = ''

    //loop through every task in the array for each item in the array it will create a new list item
    tasks.forEach((task, index) => {
        //make new <li> element for each task
        let li = document.createElement('li')

        //Add css classes for styling 
        li.classList.add(
            'list-group-item', 'd-flex', 'justify-content-between', 'align-items-center'
        )

        li.innerHTML = `${task} <button class='btn btn-dark btn-sm' onclick='removeTask(${index})'> √ </button>`

        taskList.appendChild(li)
    }

    )

}


//remove task from list when check button is clicked 
function removeTask(index){
    tasks.splice(index, 1)

    displayTasks()
}

//event listener for clear all tasks button 
document.getElementById('clearTaskBtn').addEventListener('click', function () {


//empty tasks array to remove all tasks
tasks = []
//call the function to update task list display
displayTasks()
})