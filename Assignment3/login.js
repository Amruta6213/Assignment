const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const passwordPattern =/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%?&])[A-Za-z\d@$!%?&]{8,}$/;
function validateEmail(email1){
    if(email1.value == ""){
        emailError.innerText ="Email required"
    }
    if(!emailPattern.test(email1.value)){
        emailError.innerText ="invalid email format"
        return false
    }
    else{
        emailError.innerText =""
        return true
    }
}
function validatePass(pass){
    if(pass.value == ""){
        passError.innerText = "Enter the password"
    }
    if(!passwordPattern.test(pass.value)){
        passError.innerText = "please enter the 6 character password "
        return false
    }
    else{
        passError.innerText =""
        return true
    }
}
function validateLogin(){
    let isvalid=true;
    let isvalid1=true;
    const email1 = document.getElementById("email");
    isvalid = validateEmail(email1);
    const pass = document.getElementById("pass");
    isvalid1 = validatePass(pass);
    if(isvalid == true && isvalid1 == true){
        alert("login successfull !!!")
        return true;
    }
}