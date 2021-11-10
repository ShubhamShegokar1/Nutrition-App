function activateOtpButton(){
    var number = document.querySelector(".phone-input").value;
    if(number.length==10){
        if(document.querySelector(".input-name")!=null && document.querySelector(".input-name").value.length<1){
            return false;
        }
        document.querySelector(".solid-orange-btn").classList.add("solid-orange-btn-activated");
    }else{
        document.querySelector(".solid-orange-btn").classList.remove("solid-orange-btn-activated");
    }
}
function activateOtpVerification(){
    if(document.querySelector("#otp1").value.length>0 && document.querySelector("#otp2").value.length>0 &&document.querySelector("#otp3").value.length>0 && document.querySelector("#otp4").value.length>0){
        document.querySelector(".solid-orange-btn").classList.add("solid-orange-btn-activated");
    }else{
        document.querySelector(".solid-orange-btn").classList.remove("solid-orange-btn-activated");
    }
}
try{
    document.querySelector(".phone-input").addEventListener('input',activateOtpButton);
}catch(er){
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