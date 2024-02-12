export function setDefault(){
    let todos = JSON.parse(localStorage.getItem('todos')) || [];   
    if (todos.length === 0) {
        todos.push({
            title: 'Default Project',
            index : 0,
            task : [{
                title : 'Default title',
                description : 'Default description',
                importance : 'High'
            }]
        });
        localStorage.setItem('todos', JSON.stringify(todos));
    }
}