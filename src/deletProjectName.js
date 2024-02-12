import { renderTodoProjectName } from "./renderTodoProjectName";
export function deleteProject(i){
    let todoItems = JSON.parse(localStorage.getItem('todos')) || [];
    let indexToRemove = todoItems.findIndex(item => item.index === parseInt(i));
    todoItems.splice(indexToRemove, 1);
    localStorage.setItem('todos', JSON.stringify(todoItems));
    
    // il faut mettre a jour les index du todos qui sont au localStorage
    let todos = JSON.parse(localStorage.getItem('todos')) || [];
    var j = 0;
    todos.forEach(todo => {
        todo.index = j;
        j+=1
    });
    localStorage.setItem('todos', JSON.stringify(todos));
    location.reload();
    renderTodoProjectName();
}