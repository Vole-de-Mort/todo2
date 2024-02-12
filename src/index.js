import { initializeMainSide } from "./loadPage";
import { deleteProject } from "./deletProjectName";
import { renderMainPage } from "./renderMainPage";
import { addProject } from "./addProject";
import { setDefault } from "./setDefault";
import { renderTodoProjectName } from "./renderTodoProjectName";
import { defaultMainPage } from "./defaultMain";

setDefault();
defaultMainPage();
function resetLocalStorage() {
    const container = document.querySelector(".left-side");
    const resetBtn = document.createElement('div');
    resetBtn.textContent = "Reset Local storage";
    resetBtn.className = "reset";
    container.appendChild(resetBtn);
    resetBtn.addEventListener("click",()=>{
        localStorage.clear();
        initializeMainSide();
        setDefault();
        renderTodoProjectName();
        defaultMainPage();
    });
}
document.addEventListener('DOMContentLoaded', () => {
    
    //renderMainPage();
    renderTodoProjectName();
    resetLocalStorage();
    const addBtn = document.getElementById('add');
    addBtn.addEventListener('click', () =>{
        addProject();
        
    });
    const hoverDiv = document.querySelector(".title")
    hoverDiv.addEventListener('mouseenter', () =>{
        hoverDiv.style.cursor = 'pointer';
        hoverDiv.addEventListener('click', ()=>{
            defaultMainPage();
        });
    });

    //const todosNames = document.querySelectorAll('.project');
    const todosNames = document.querySelectorAll('.projectName');
    todosNames.forEach(todoName => {
        todoName.addEventListener('click', () =>{
            renderMainPage();
            initializeMainSide();
        });
    });
    const deleteNames = document.querySelectorAll('.delete');
    deleteNames.forEach(deleteName => {
        deleteName.addEventListener('click', () =>{
            deleteProject(deleteName.getAttribute('data-index'));
        });
    });
});