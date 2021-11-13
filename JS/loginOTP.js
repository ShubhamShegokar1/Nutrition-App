
function activateOtpButton(){
    var phone = "91"+document.querySelector(".phone-input").value;
    if(phone.length==12){
        document.querySelector(".solid-orange-btn").classList.add("solid-orange-btn-activated");
        let User = {phoneNumber:phone};
        localStorage.setItem("UserData",JSON.stringify(User));
        fetch("http://localhost:8080/login",{
                method:'POST',
                body:JSON.stringify(User),
                headers:{
                    "Content-Type":"application/json; charset=UTF-8"
                }
            })
            .then(function(response){
            window.location="../HTML/login-signup-otp-copy.html";  
               return response.json()
            })
            .then(function(data){
                console.log(data)
            })
       
    }else{
        document.querySelector(".solid-orange-btn").classList.remove("solid-orange-btn-activated");
    }
}


 function activateOtpVerification(){
   
    if(document.querySelector("#otp1").value.length>0 && 
      document.querySelector("#otp2").value.length>0
      &&document.querySelector("#otp3").value.length>0 && 
      document.querySelector("#otp4").value.length>0)
     {
        document.querySelector(".solid-orange-btn").classList.add("solid-orange-btn-activated");   
       let a= document.querySelector("#otp1").value 
       let b= document.querySelector("#otp2").value
       let c=document.querySelector("#otp3").value  
       let d= document.querySelector("#otp4").value
       let str=a+b+c+d; 
       let OTPCheck={otp : str }  
       let User = JSON.parse(localStorage.getItem("UserData"));
       console.log(User)
     
    fetch("http://localhost:8080/loginOtpCheck",{
        method:'POST',
        body:JSON.stringify(OTPCheck),
        headers:{
            "Content-Type":"application/json; charset=UTF-8"
        }
    })
    .then(function(response){
        if(response.status==200){
           window.location="../HTML/LoginSuccess.html";  
        }
        else if(response.status==400 || response.status==404){
           document.querySelector(".message").innerHTML="Something went wrong, Please try again"
           document.querySelector("#otp1").value =""
           document.querySelector("#otp2").value=""
           document.querySelector("#otp3").value ="" 
           document.querySelector("#otp4").value=""
        }
   })
    .then(function(data){
        console.log(data)
        return data
    })
     
    }else{
        document.querySelector(".solid-orange-btn").classList.remove("solid-orange-btn-activated");
    }
}

try{
    document.querySelector(".phone-input").addEventListener('input',activateOtpButton);
}
catch(er){
}

try{
    document.querySelector(".input-name").querySelector('input',activateOtpButton )
}catch(er){

}


try{
    document
    .querySelectorAll('.otp')
    .forEach(el => el.onkeyup = e => e.target.value && el.nextElementSibling.focus())
    document.querySelector("#otp1").addEventListener('input',activateOtpVerification);
    document.querySelector("#otp2").addEventListener('input',activateOtpVerification);
    document.querySelector("#otp3").addEventListener('input',activateOtpVerification);
    document.querySelector("#otp4").addEventListener('input',activateOtpVerification);
}catch(er){
}
