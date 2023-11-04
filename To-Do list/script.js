const taskName = document.getElementById("list-text");
const addBtn = document.getElementById("add-btn");
const list = document.querySelector(".tasks-added");
const clearAll = document.querySelector(".clear");

addBtn.addEventListener("click", () => {
    
    if(taskName.value === ""){
        alert("The entry is empty. Please enter a valid task.");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = taskName.value;
        list.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7"
        li.appendChild(span);
    }
    taskName.value = '';
    saveData()
})

list.addEventListener("click", (e) => {
    if(e.target.tagName === "LI"){
        e.target.classList.toggle('checked');
        saveData()
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData()
    }

})

clearAll.addEventListener("click", () => {
    list.innerHTML = '';
})

function saveData(){
    localStorage.setItem("data", list.innerHTML);
}

function loadData(){
    list.innerHTML = localStorage.getItem("data");
}

loadData();
