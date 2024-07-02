let num = 0;
function addOne(){
    var task = document.getElementById("task_value").value;
    let data = "<div class='box_con'><div class='box_name'>"+task+"</div><div class='box_com' onclick='del(this)'>X</div></div>";
    document.cookie="data"+num+"="+task;

    document.getElementById("todo_box").innerHTML += data; 
    document.getElementById("task_value").value = "";
    num++;
}
function del(elem){
    var task_com = elem.parentElement.innerText.split("\n")[0];
    let data2 = "<div class='box_con'><div class='box_name'>"+task_com+"</div><div class='box_com' onclick='com(this)'>X</div></div>";

    document.getElementById("completed_box").innerHTML += data2; 

    elem.parentElement.remove();
}

function com(el){
    el.parentElement.remove();
}