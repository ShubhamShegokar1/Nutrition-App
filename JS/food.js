let food = [
    {
        id : 1,
        name : "Mediterranean Chickpea salad",
        image : "../Images/food1.png",
        price : 270,
        energy : 386,
        protein : 19,
        carbs : 39,
        fats : 18,
        fibre : 9,
        type : "salads",
        quantity : 0
    },
    {
        id : 2,
        name : "Quinoa Grilled veg tofu salad",
        image : "../Images/food2.png",
        price : 190,
        energy : 386,
        protein : 19,
        carbs : 39,
        fats : 18,
        fibre : 9,
        type : "salads",
        quantity : 0
    },
]


let div = document.getElementById("food-menu");


function displayfood(info){
    info.forEach(element => {
        let outer = document.createElement("div");

        let image = document.createElement("img");
        image.src = element.image;
        image.setAttribute("class","food-image");

        let button = document.createElement("div");
        button.setAttribute("class","add-button");

        let name_p = document.createElement("p");
        name_p.setAttribute("class","name");
        name_p.innerText = element.name;

        let three = document.createElement("div");
        three.setAttribute("class","three-button");

        let add = document.createElement("div");
        add.setAttribute("class","add");
        add.innerText = "ADD";
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
        button.append(name_p,three);

        let price = document.createElement("div");
        price.setAttribute("class","price-details");

        let rate = document.createElement("div");
        rate.setAttribute("class","price");
        rate.innerText = "₹" + element.price;

        let calory = document.createElement("div");
        calory.setAttribute("class","calory");
        calory.innerText = element.energy + " Kcal";

        let type = document.createElement("div");
        type.setAttribute("class","type");
        type.innerText = "High protein";

        price.append(rate,calory,type);


        let count = document.createElement("div");
        count.setAttribute("class","calories-count");

        let div1 = document.createElement("div");
        let p1 = document.createElement("p");
        p1.setAttribute("class","count");
        p1.innerText = element.protein + " g";

        let p2 = document.createElement("p");
        p2.setAttribute("class","cal-gray");
        p2.innerText = "Protein";

        div1.append(p1,p2);

        

        let div2 = document.createElement("div");
        let p3 = document.createElement("p");
        p3.setAttribute("class","count");
        p3.innerText = element.carbs + " g";

        let p4 = document.createElement("p");
        p4.setAttribute("class","cal-gray");
        p4.innerText = "Carbs";

        div2.append(p3,p4);

        let div3 = document.createElement("div");
        let p5 = document.createElement("p");
        p5.setAttribute("class","count");
        p5.innerText = element.fats + " g";

        let p6 = document.createElement("p");
        p6.setAttribute("class","cal-gray");
        p6.innerText = "Fats";

        div3.append(p5,p6);

        let div4 = document.createElement("div");
        let p7 = document.createElement("p");
        p7.setAttribute("class","count");
        p7.innerText = element.fibre + " g";

        let p8 = document.createElement("p");
        p8.setAttribute("class","cal-gray");
        p8.innerText = "Fibre";

        div4.append(p7,p8);

        count.append(div1,div2,div3,div4);

        outer.append(image,button,price,count);
        div.append(outer);


    });
}

displayfood(food);

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
localStorage.setItem("cart",JSON.stringify([]));
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


let displayItems = document.getElementById("count");

let displaytotal = document.getElementById("amount");

function displayPrice(){
    let cartItems = JSON.parse(localStorage.getItem("cart"));
    let noOfItems = 0;
    let totalAmount = 0;
    cartItems.forEach(foodItem => {
        noOfItems += foodItem.quantity;
        totalAmount += foodItem.quantity * foodItem.price;
    });

    displayItems.innerText = noOfItems;
    displaytotal.innerText ="₹" + totalAmount + "\t";
}

function navigate(){
    location.assign("../HTML/cart.html");
}






