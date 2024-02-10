import { initializeMainSide } from "./loadPage";

export function renderMainPage(){
    console.log('renderMainPage');
    initializeMainSide();
    const mainContainer = document.getElementById('main-side');
    const panel = document.createElement('div');
    const projectInfoContainer = document.createElement('div');
    const div = document.createElement('div');
    const horizntaleLine = document.createElement('hr');
    const toDo = document.createElement('div');
    const taskInfo = document.createElement('div');
    const trashContainer = document.createElement('div');
    const taskContainer = document.createElement('div');
    const trash = document.createElement('i');
    const btn = document.createElement('button');

    btn.textContent = 'Add task';

    taskContainer.classList= "taskContainer";
    panel.classList = "taskPanel";
    projectInfoContainer.classList= "projectInfoContainer";
    toDo.classList= "task";
    taskInfo.classList= "taskInfo";
    trashContainer.classList= "delete";
    trash.classList= "fas fa-trash";
    
    trashContainer.appendChild(trash);
    div.appendChild(horizntaleLine);
    const todosNames = document.querySelectorAll('.project');
    //console.log(todosNames[0].textContent)
    todosNames.forEach(todoName => {
        todoName.addEventListener('click', () =>{
            initializeMainSide();
            
            var storedTodos = JSON.parse(localStorage.getItem('todos'));
            var index = todoName.dataset.index
            projectInfoContainer.textContent = storedTodos[index].title;

            taskInfo.textContent = storedTodos[index].task
            toDo.appendChild(taskInfo);
            toDo.appendChild(trashContainer);

            taskContainer.appendChild(toDo);
            taskContainer.appendChild(btn);
            panel.appendChild(projectInfoContainer);
            panel.appendChild(div);
            panel.appendChild(taskContainer);
            mainContainer.appendChild(panel);
        });
    });
}