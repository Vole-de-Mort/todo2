import { initializeLeftSide } from "./initializeLeftSide";
import { initializeMainSide } from "./loadPage"; 
export function renderTodoProjectName(){
    initializeLeftSide();
    initializeMainSide();
    var index = 0;
    console.log("tood to render");
    const container = document.querySelector(".projectListe");
    const todosJson = localStorage.getItem('todos');
    const todos = JSON.parse(todosJson) || [];
    todos.forEach(todo => {
        const block = document.createElement('div');
        const name = document.createElement("div");
        const trashContainer = document.createElement("div");
        const trash = document.createElement("i");
        trashContainer.classList.add("delete");
        trash.classList = "fas fa-trash";
        trashContainer.appendChild(trash);
        //: ${todo.description}

        name.textContent = `${todo.title}`;
        block.setAttribute("data-index",index);
        block.classList.add("project");
        name.classList.add("projectName");
        block.appendChild(name);
        block.appendChild(trashContainer);
        container.appendChild(block);
        index+=1;
    });
}