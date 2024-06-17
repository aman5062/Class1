function addOne(){
    let val = document.getElementById("elements").innerHTML;

    val = val + " <div class='box'>Hello <div onclick='closed(this);'>X</div> </div> ";
    document.getElementById("elements").innerHTML = val;
}

function closed(elem){  
    let valu = document.getElementById("deleted").innerHTML;

    valu = valu + "<div class='box'>"+  elem.parentElement.innerText.split("\n")[0]+"<div onclick='removal(this);'>X</div></div>";
    document.getElementById("deleted").innerHTML = valu;
    elem.parentElement.remove();
  

}

function removal(ele){
    ele.parentElement.remove();
}