function activateOtpButton(){
    var phone = "91"+document.querySelector(".phone-input").value;
    if(phone.length==12){
        if(document.querySelector(".input-name")!=null && document.querySelector(".input-name").value.length<1){
            return false;
        }
        document.querySelector(".solid-orange-btn").classList.add("solid-orange-btn-activated");
        var name1=document.querySelector(".input-name").value
        let user = {phoneNumber:phone,name:name1};
        fetch("http://localhost:8080/Register",{
                method:'POST',
                body:JSON.stringify(user),
                headers:{
                    "Content-Type":"application/json; charset=UTF-8"
                }
            })
            .then(function(response){
            window.location="../HTML/login-signup-otp.html";  
               return response.json()
            })
            .then(function(data){
                console.log(data)
            })
       
    }else{
        document.querySelector(".solid-orange-btn").classList.remove("solid-orange-btn-activated");
    }
}

async function activateOtpVerification(){
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
       
     //  let OTPCheck =JSON.stringify(temp)
    //  let res= await fetch('http://localhost:8080/otpcheck', {OTPCheck})
    // .then( response => response.json() )
    // .then( response => {
    //     console.log(response)
    // } );
    fetch("http://localhost:8080/otpCheck",{
        method:'POST',
        body:JSON.stringify(OTPCheck),
        headers:{
            "Content-Type":"application/json; charset=UTF-8"
        }
    })
    .then(function(response){
         if(response.status==200){
            window.location="../HTML/AccountCreated.html";  
         }
    })
    .then(function(data){
        console.log(data)
        return data.json()
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
