const inputBox = document.getElementById("input-box")
const task = document.getElementById("task")

function addtask(){
    if(inputBox.value === ""){
        alert("you must write something!")
    }
    else{
        let li = document.createElement("li")
        li.innerHTML = inputBox.value
        task.appendChild(li)

        let span = document.createElement("span")
        span.innerHTML = "\u00d7"
        li.appendChild(span)
    }
    inputBox.value = ""
    savedata()
}

task.addEventListener('click', function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        savedata()
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove()
        savedata()
    }
}, false)

function savedata(){
    localStorage.setItem("data",task.innerHTML)
}
function showtask(){
    task.innerHTML=localStorage.getItem("data")
}
showtask()