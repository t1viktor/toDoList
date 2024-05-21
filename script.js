document.addEventListener('DOMContentLoaded',() =>{
  
    const newTaskInput = document.querySelector('.digitar');
    const addTaskBtn = document.querySelector('.add');
    const taskList = document.querySelector('.result');

    const addTask = () => {
        const taskText = newTaskInput.value.trim();
        if (taskText != ''){
        const li = document.createElement('li');  
        li.innerHTML = `<span>${taskText}</span> <button class="delete-btn">Delete</button>`;
        taskList.appendChild(li)

        li.querySelector('.delete-btn').addEventListener("click", () =>{
            li.remove()
        });

        li.addEventListener('click', () => {
            li.classList.toggle('completed')
          })



        newTaskInput.value = '';

        }
    }

    addTaskBtn.addEventListener('click', addTask)

    newTaskInput.addEventListener('keypress', (e) =>{
        if (e.key === 'Enter') {
            addTask()
        }
        })
      
    

});
