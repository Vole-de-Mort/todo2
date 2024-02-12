export function addTask(index){
    console.log("i'm not ready yet to add a task");
    const container = document.querySelector('.taskContainer');

    const task = document.createElement('div');
    const taskInfo = document.createElement('div');
    const delet = document.createElement('div');
    const i = document.createElement('i');

    const dialog = document.createElement('dialog');
    const titl = document.createElement('input');
    const discription = document.createElement('textarea');
    const radio1 = document.createElement('input');
    const radio2 = document.createElement('input');
    const radio3 = document.createElement('input');
    const choix = document.createElement('div');
    const p1 = document.createElement('p');
    const label0 = document.createElement('label');
    const label1 = document.createElement('label');
    const label2 = document.createElement('label');
    const label3 = document.createElement('label');
    const cancelBtn = document.createElement('button');
    const addBtnToLocalStorage = document.createElement('button');

    p1.textContent = "Add task ici :) ";
    label0.textContent = "How important is it ¿?";
    label1.textContent = "High";
    label2.textContent = "Medium";
    label3.textContent = "Low";
    cancelBtn.textContent = "Cancel";
    addBtnToLocalStorage.textContent = "Add to local storage";
    cancelBtn.setAttribute('type', 'button');
    addBtnToLocalStorage.setAttribute('type', 'submit');

    titl.type = 'text';
    
    radio1.type = 'radio';
    radio2.type = 'radio';
    radio3.type = 'radio';
    radio1.id='r1';
    radio2.id='r2';
    radio3.id='r3';
    radio1.name = "option";
    radio2.name = "option";
    radio3.name = "option";
    radio1.value="High";
    radio2.value="Medium";
    radio3.value="Low";
    label1.setAttribute("for" , "r1");
    label2.setAttribute("for" , "r2");
    label3.setAttribute("for" , "r3");

    titl.setAttribute('placeholder', "titl ...");
    discription.setAttribute('placeholder',"Amy thing to note ...");
    titl.required = true;
    discription.required = true;

    choix.appendChild(label1);
    choix.appendChild(radio1);
    choix.appendChild(label2);
    choix.appendChild(radio2);
    choix.appendChild(label3);
    choix.appendChild(radio3);

    dialog.appendChild(p1);
    dialog.appendChild(titl);
    dialog.appendChild(discription);
    dialog.appendChild(label0);
    dialog.appendChild(choix);
    dialog.appendChild(cancelBtn);
    dialog.appendChild(addBtnToLocalStorage);

    container.appendChild(dialog);
    dialog.showModal();

    addBtnToLocalStorage.addEventListener("click", (event)=>{
        event.preventDefault();

        // storing the input filde into th elocal storage titl / discription and the VALUE of the selected choice 

        let todos = JSON.parse(localStorage.getItem('todos')) || [];
        console.log(todos.length);
        let newTask = {
            title : titl.value,
            description : discription.value,
            importance : document.querySelector('input[name="option"]:checked').value
        };
        todos[index].task.push(newTask);
        localStorage.setItem('todos', JSON.stringify(todos));

        task.classList = 'task';
        taskInfo.classList = 'taskInfo';
        delet.classList = 'delete';
        i.classList = "fas fa-trash";

        const title = document.createElement('div');
        const description = document.createElement('div');
        const impo = document.createElement('div');

        title.textContent = titl.value;
        description.textContent = discription.value;
        impo.textContent = newTask.importance;
        taskInfo.appendChild(title);
        taskInfo.appendChild(description);
        taskInfo.appendChild(impo);

        delet.appendChild(i);
        task.appendChild(taskInfo);
        task.appendChild(delet);
        container.appendChild(task);
        dialog.close();
        dialog.remove();
        console.log("item added successfully");

    });
    cancelBtn.addEventListener("click", () => {
        dialog.close();
        dialog.remove();
    });
}