// gebruikte variabelen
const postTask = document.getElementById("add-task"); 
const inputTask = document.getElementById("input-field");
const taskButton = document.getElementById("add-input-button");
const toDoList = document.getElementById("todo-list");

// stuurt een taak naar de Post functie in de api-client.js
postTask.addEventListener('submit', async (i) => {
    i.preventDefault();
    console.log(inputTask.value);
    const description = inputTask.value;
    const toDo = { description }
    const res = await postData();
    getData().then(data => addToDom(data));
});

// voegt de data toe aan de DOM
const addToDom = async (data) => {

    toDoList.innerHTML = '';

    data.forEach((task) => {
        const item = document.createElement("li");
        const deleteImage = document.createElement('img');
        deleteImage.id = task._id;
        deleteImage.src = 'delete.png';
        
        item.innerHTML = task.description;
        toDoList.appendChild(item);
        item.appendChild(deleteImage);
        
        deleteImage.addEventListener("click", (event) => {

            const idToDelete = event.target.id;
            toDoList.removeChild(item);
            item.innerHTML = '';
            deleteData(idToDelete);
            getData();
        });
    
    });
}; 

// zorgt ervoor dat alle toegevoegde data wordt weergeveven
getData().then(data => addToDom(data));


