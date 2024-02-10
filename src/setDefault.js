export function setDefault(){
    let todos = JSON.parse(localStorage.getItem('todos')) || [];   
    if (todos.length === 0) {
        todos.push({
            title: 'Default Project',
            index : 0,
            task : ["default Task"],
        });
        localStorage.setItem('todos', JSON.stringify(todos));
    }
}