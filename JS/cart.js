function increase(event,element){
    let num = event.target.parentNode.querySelector(".add");
    let count = num.innerText;

    let menu = JSON.parse(localStorage.getItem("cart"));
    let id = element.id;
    let flag = 0;

    menu.forEach(item => {
        if(item.id == id){
            flag = 1;
            item.quantity = Number(count) + 1;
        }
    });

    if(num.innerText == "ADD"){
        num.innerText = 1;

        if(flag == 0){
            element.quantity = 1;
            menu.push(element);
        }
       
    }
    else{
        num.innerText = Number(count) + 1;
    }

    localStorage.setItem("cart",JSON.stringify(menu));
    //console.log(JSON.parse(localStorage.getItem("cart")));
    displayPrice();
}
function decrease(event,element){
    let num = event.target.parentNode.querySelector(".add");
    let count = num.innerText;

    let menu = JSON.parse(localStorage.getItem("cart"));
    let id = element.id;


    if(num.innerText == "ADD"){
        num.innerText = "ADD";
    }
    else{
        
        if(Number(count) > 1){
            num.innerText = Number(count) - 1;
            menu.forEach(item => {
                if(item.id == id){
                    item.quantity = Number(count) - 1;
                }
            });
        }
        else{
            num.innerText = "ADD";
             menu.forEach(item => {
                if(item.id == id){
                    item.quantity = 0;
                }
            });

        }
    }

    localStorage.setItem("cart",JSON.stringify(menu));
   // console.log(JSON.parse(localStorage.getItem("cart")));
   displayPrice();
}
function addToCart(event,element){
    let menu = JSON.parse(localStorage.getItem("cart"));
    let id = element.id;
    let flag = 0;
    menu.forEach(item => {
        if(item.id == id){
            flag = 1;
            if(event.target.innerText == "ADD"){
                event.target.innerText = 1;
                item.quantity = 1;
            }
        }
    });
    if(flag == 0){
        event.target.innerText = 1;
        element.quantity = 1;
        menu.push(element);
    }
    localStorage.setItem("cart",JSON.stringify(menu));
    console.log(JSON.parse(localStorage.getItem("cart")));
    displayPrice();
}



let displaytotal = document.getElementById("amount");
let totalPrice = document.getElementById("money");
let tax = document.getElementById("taxes");

let cartItems = JSON.parse(localStorage.getItem("cart"));
let totalAmount = 0;
cartItems.forEach(foodItem => {
    totalAmount += foodItem.quantity * foodItem.price;
});

displaytotal.innerText ="₹" + totalAmount;
totalPrice.innerText = "₹" + totalAmount;
tax.innerText = "₹" + (totalAmount + 40);


console.log(cartItems);

function displayPrice(){
    let cartItems = JSON.parse(localStorage.getItem("cart"));
    let totalAmount = 0;
    cartItems.forEach(foodItem => {
        totalAmount += foodItem.quantity * foodItem.price;
    });

    displaytotal.innerText ="₹" + totalAmount + "\t";
    totalPrice.innerText = "₹" + totalAmount;
    tax.innerText = "₹" + (totalAmount + 40);
}


function navigate(){
    location.assign("../HTML/payment.html");
}


let div = document.getElementById("cart-items");

function displayItems(list){

    list.forEach(element => {
        if(element.quantity > 0){
        let outer = document.createElement("div");


        let square = document.createElement("div");
        square.setAttribute("class","square");
        let circle = document.createElement("div");
        circle.setAttribute("class","circle");
        square.append(circle);

        let three = document.createElement("div");
        three.setAttribute("class","three-button");

        let add = document.createElement("div");
        add.setAttribute("class","add");
        add.innerText = element.quantity;
        add.onclick = (event)=>{
            addToCart(event,element);
        }

        let plus = document.createElement("div");
        plus.setAttribute("class","plus");
        plus.innerText = "+";
        plus.onclick = (event)=>{
            increase(event,element);
        };

        let minus = document.createElement("div");
        minus.setAttribute("class","minus");
        minus.innerText = "-";
        minus.onclick = (event)=>{
            decrease(event,element);
        };

        three.append(minus,add,plus);



        let div1 = document.createElement("div");
        div1.setAttribute("class","dish");

        let p1 = document.createElement("p");
        p1.setAttribute("class","grayc");
        p1.innerText = element.name;

        let p2 = document.createElement("p");
        p2.setAttribute("class","grayc");
        p2.innerText = "₹" + element.price;

        div1.append(p1,p2);


        outer.append(square,div1,three);

        div.appendChild(outer);
    }
    });
}
displayItems(cartItems);