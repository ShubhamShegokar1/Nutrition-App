let div = document.getElementById("details");
let box0 = document.querySelector(".box0");
let box1 = document.querySelector(".box1");
let box2 = document.querySelector(".box2");
let box3 = document.querySelector(".box3");
let pay = document.querySelector("#pay");
let arrow = document.getElementById("arrow");

let flag = 0;

function displaydiv(){
    if(flag == 0){
        div.style.display = "block";
        arrow.setAttribute("class","fa fa-caret-up");
        moveboxesdown();
        flag = 1;
    }
    else{
        div.style.display = "none";
        arrow.setAttribute("class","fa fa-caret-down");
        moveboxesup();
        flag = 0;
    }
    
}

function moveboxesdown(){
    box0.style.height = "170px";
    box1.style.top = "500px";
    box2.style.top = "560px";
    box3.style.top = "620px";
    pay.style.top = "720px";
}
function moveboxesup(){
    box0.style.height = "28px";
    box1.style.top = "360px";
    box2.style.top = "420px";
    box3.style.top = "480px";
    pay.style.top = "570px";
}

function navigate(){
    location.assign("../HTML/confirm.html");
}