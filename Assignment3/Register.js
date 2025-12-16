const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const passwordPattern =/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%?&])[A-Za-z\d@$!%?&]{8,}$/;


function validateEmail(email1){
    if(!emailPattern.test(email1.value)){
        return false
    }
    else{
        return true
    }
}
function validatePass(pass){
    if(!passwordPattern.test(pass.value)){
        return false
    }
    else{
        return true
    }
}
function validateForm(){
    let isvalid = true;
    const name1 = document.getElementById("name1")
    if(name1.value == ""){
        nameError.innerText="Enter name here"
        isvalid = false;
    }
    else{
        nameError.innerText=""
    } 
    const Email1 = document.getElementById("Email1")
    if(Email1.value == ""){
        EmailError.innerText="Enter email here"
        isvalid = false;
    } 
    if(!(validateEmail(Email1))){
        EmailError.innerText="Enter valid email here"
        isvalid = false;
    }
    if(validateEmail(Email1)){
        EmailError.innerText=""
    }
    const pass = document.getElementById("pass")
    if(pass.value == ""){
        passError.innerText="Enter password here"
        isvalid = false;
    } 
    if(!validatePass(pass)){
        passError.innerText="Enter valid password here"
        isvalid = false;
    }
    if(validatePass(pass)){
        passError.innerText=""
    }
    const phn = document.getElementById("phone")
    if(phn.value == ""){
        phoneError.innerText="Enter phone number here"
        isvalid = false;
    } 
    if(phn.value != ""){
        phoneError.innerText=""
    }
   if(isvalid == true){
    alert("Registration successfull !!!")
    return true;
   }
}
