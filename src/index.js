
//import { initializeMainSide } from "./loadPage";
/*import { initializeLeftSide } from "./initializeLeftSide";*/
import { renderMainPage } from "./renderMainPage";
import { addProject } from "./addProject";
import { setDefault } from "./setDefault";
import { renderTodoProjectName } from "./renderTodoProjectName";
//localStorage.clear();
setDefault();

document.addEventListener('DOMContentLoaded', () => {
    renderTodoProjectName();
    const addBtn = document.getElementById('add');
    addBtn.addEventListener('click', () =>{
        addProject();
    });
    renderMainPage();
    
});