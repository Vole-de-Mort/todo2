
import { initializePage } from "./loadPage";
import { addProject } from "./addProject";

const addBtn = document.getElementById('add')
addBtn.addEventListener('click', () =>{
    initializePage();
    addProject();
});
