function addOne(){
    var data = document.getElementById("intext").value;
    var data2 = "<div class='con'><div class='con_text'>"+data+"</div><div class='cross' onclick='completed(this);'>X</div></div>";
    let task = document.getElementById("to-do").innerHTML;
    task = task + data2;
    document.getElementById("to-do").innerHTML = task;
    document.getElementById("intext").value = "";
}
function completed(elem){
    var data3 = elem.parentElement.innerText.split("\n")[0];
    var data2 = "<div class='con'><div class='con_text'>"+data3+"</div><div class='cross' onclick='deleted(this);'>X</div></div>";
    let task1 = document.getElementById("completed").innerHTML;
    task1 = task1 + data2;
    document.getElementById("completed").innerHTML = task1;
    elem.parentElement.remove();
}
function deleted(ele){
    ele.parentElement.remove();
}