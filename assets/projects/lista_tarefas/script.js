var btn = document.getElementById("addTaskBtn");
var input = document.getElementById("taskInput");
var lista = document.getElementById("taskList")

btn.addEventListener ("click", function(){
    if (input.value == ""){
        alert("Digita a tarefa!");
    } else {
        addTask()
    }
})

function addTask(){
    var tarefa = document.createElement("li")
    var btnNew = document.createElement("button")

    tarefa.textContent = input.value
    tarefa.style.wordBreak = "break-word"
    lista.appendChild(tarefa)
    input.value = ""
    btnNew.textContent = "X"
    tarefa.appendChild(btnNew)

    btnNew.addEventListener ("click",function(){
        tarefa.parentNode.removeChild(tarefa)
})
}