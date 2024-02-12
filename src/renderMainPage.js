import { initializeMainSide } from "./loadPage";
import { addTask } from "./addTask";
export function renderMainPage(){
    initializeMainSide();

    const mainContainer = document.getElementById('main-side');
    const panel = document.createElement('div');
    const projectInfoContainer = document.createElement('div');
    const div = document.createElement('div');
    const horizntaleLine = document.createElement('hr');
    const taskContainer = document.createElement('div');
    const btn = document.createElement('button');
    btn.textContent = 'Add task';
    btn.id = "addTask";
    taskContainer.classList= "taskContainer";
    panel.classList = "taskPanel";
    panel.id = "taskPanel";
    projectInfoContainer.classList= "projectInfoContainer";
    div.appendChild(horizntaleLine);

    const todosNames = document.querySelectorAll('.project');
    todosNames.forEach(todoName => {
        todoName.addEventListener('click', () =>{
            console.log("Asdaffsd");
            initializeMainSide();
            //seeting up the Project name and the <hr>
            //taking out the project name from the local storage
            var storedTodos = JSON.parse(localStorage.getItem('todos'));
            var index = todoName.dataset.index
            projectInfoContainer.textContent = storedTodos[index].title;
            //start constructing the panel 
            panel.appendChild(projectInfoContainer);
            panel.appendChild(div);

            //rendering each task block ;
            let tasks = storedTodos[index].task ;
            tasks.forEach(task =>{
                //creating one task block to display
                const toDo = document.createElement('div');
                toDo.classList= "task";
                const taskInfo = document.createElement('div');
                taskInfo.classList= "taskInfo";
                const trashContainer = document.createElement('div');
                trashContainer.classList= "delete";
                const trash = document.createElement('i');
                trash.classList= "fas fa-trash";
                trashContainer.appendChild(trash);

                // dividiing the task info into this 3 sections  not yet done       !!!
                const title = document.createElement('div');
                const description = document.createElement('div');
                const importance = document.createElement('div');
                if (task.importance === 'High'){
                    importance.classList = 'red';
                }else if (task.importance === 'Low'){
                    importance.classList = 'green';
                }else{
                    importance.classList = 'yellow';
                }
            
                //fill out the block
                title.textContent = `${task.title}`;
                description.textContent = `${task.description}`;
                importance.textContent = `${task.importance}`;
                taskInfo.appendChild(title);
                taskInfo.appendChild(description);
                taskInfo.appendChild(importance);

                btn.setAttribute('data-index', index);
                /* 
                    here should be getting fildes from localStorage to the task info 
                    then adding the to the local storeg
                */

                //display the task block "toDo"
                toDo.appendChild(taskInfo);
                toDo.appendChild(trashContainer);
                taskContainer.appendChild(toDo);
            }); 
            panel.appendChild(taskContainer);
            panel.appendChild(btn);
            mainContainer.appendChild(panel); 
            
        });
    });
    btn.addEventListener("click", e=>{addTask(e.currentTarget.getAttribute('data-index'));});
}