import { renderTodoProjectName } from "./renderTodoProjectName";
import { initializeMainSide } from "./loadPage";
import { renderMainPage } from "./renderMainPage";
export function addProject(){
    initializeMainSide();
    const main = document.getElementById('main-side');

    const container = document.createElement('div');
    const title = document.createElement('label');
    const inp1 = document.createElement('input');
    
    const addBtn = document.createElement("button");
    const cancelBtn = document.createElement("button");
    const btns = document.createElement("div");

    inp1.id = "projectTitle";
    inp1.setAttribute("placeholder", "project name ici ...");

    title.classList.add("titre");
    container.classList.add('addContainer');
    inp1.classList.add("champsDeSaisie");
    addBtn.classList = "addBtn bouton";
    cancelBtn.classList = "cancelBtn bouton";
    btns.classList.add("btns");

    addBtn.setAttribute("type", "submit");
    cancelBtn.setAttribute("type", "button");

    title.textContent = "Titre du projet";
    title.setAttribute("for", "projectTitle");
    addBtn.textContent = "Add";
    cancelBtn.textContent = "Cancel";
    container.appendChild(title);
    container.appendChild(inp1);
    btns.appendChild(addBtn);
    btns.appendChild(cancelBtn);
    container.appendChild(btns);

    main.appendChild(container);
    inp1.focus();
    function add(){
        if (inp1.value !==''){
            let todos = JSON.parse(localStorage.getItem('todos')) || [];
            todos.push({
                title: `${inp1.value}`,
                index: todos.length,
                task : [{
                    title : 'Default title',
                    description : 'Default description',
                    importance : 'High'
                }]
            });
            localStorage.setItem('todos', JSON.stringify(todos));
            inp1.value ='';
            initializeMainSide();
            renderTodoProjectName();
            renderMainPage();
        }else{
            alert("saise un project d'abord ");
        }
    };
    function cancel(){
        renderTodoProjectName();
        renderMainPage();
    };
    addBtn.addEventListener("click", add);
    cancelBtn.addEventListener("click", cancel);
}
