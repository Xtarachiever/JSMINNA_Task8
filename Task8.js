const form= document.getElementById('form');
var signUp=document.getElementById('sign-up');
signUp.disabled=true;
const errorElement=document.getElementById('error')
const errorName=document.getElementById('errorName')
const errorEmail=document.getElementById('errorEmail')
const errorConfirm=document.getElementById('errorConfirm')
const errors=document.getElementById('ahh')
const firstName=document.getElementById('firstname')
const lastName=document.getElementById('lastname')
const name=document.getElementById('names')
const passWord=document.getElementById('password');
const email=document.getElementById('email')
const confirmPass=document.getElementById('confirm');
const checkBox=document.getElementById('check');
const loader=document.getElementById('loader')
const siGn=document.getElementsByClassName('sign-up')

checkBox.addEventListener("click",()=>{
    if((checkBox.checked==false)||(firstName.value&&lastName.value&&passWord.value&&email.value&&confirmPass.value)==""){
        signUp.disabled=true;
    }
    else if((checkBox.checked==true)&&(firstName.value||lastName.value||passWord.value||email.value||confirmPass.value)==""){
        signUp.disabled=true;
    }
    else{
        signUp.disabled=false;
    }
})

function veriFy(){
    const paraM= /^(?=.*\d)(?=.*[a-z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;
    if(document.getElementById('password').value.match(paraM)){
        passWord.style.border="1px solid green"
        errorElement.textContent=" "
        return true;
    }
}
function verifyName(){
    const namesParam= /^[A-Za-z]*$/;
    if((firstName.value.match(namesParam)||lastName.value.match(namesParam))){
        name.style.border="1px solid green"
        errorName.textContent=" "
        return true;
    }
}
function verifyEmail(){
    const emailParam = /^[a-zA-z]+[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if(document.getElementById('email').value.match(emailParam)){
        email.style.border="1px solid green"
        errorEmail.textContent=" "
        return true;
    }
}
function conFirm(){
    if(passWord.value === confirmPass.value){
        confirmPass.style.border="1px solid green"
        errorConfirm.textContent=" "
        return true;
    }
}
form.addEventListener('submit',(e)=>{
    const messages=[]
    const paraMeters= /^(?=.*\d)(?=.*[a-z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;
    const namesParameters= /^[A-Za-z]*$/;
    const emailParams = /^[a-zA-z]+[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if(document.getElementById('password').value.search(paraMeters)==-1){
        passWord.style.border="1px solid red"
        errorElement.textContent="Password Instructions not followed"
        passWord.focus();
        messages.push("Password Instructions not followed")
    }
    else if((firstName.value.search(namesParameters)||lastName.value.search(namesParameters))==-1){
        name.style.border="1px solid red"
        errorName.textContent="Name cannot contain numbers"
        name.focus();
        messages.push("Name Instructions not followed")
    }
    else if(passWord.value != confirmPass.value){
        confirmPass.style.border="1px solid red"
        errorConfirm.textContent="Password values not the same"
        confirmPass.focus();
        messages.push("Password not the same")
    }
    else if(email.value.search(emailParams)==-1){
        email.style.border="1px solid red"
        errorEmail.textContent="Email Instructions not followed"
        email.focus();
        messages.push("Email Instructions not followed")
    }
    else{
        // alert("Form successfully submitted")
        loader.style.display="block"
        setTimeout(function(){
            $(".sign-up").addClass("loader")
            // siGn.addClass("loader")
        }, alert("Form successfully submitted"));
        setTimeout(function(){
            // siGn.removeClass("loader")
            $(".sign-up").removeClass("loader")
        }, 3000);
    }
    if(messages.length>0){
        e.preventDefault()
        errors.textContent=messages.join(', ')
        console.log(messages)
    }
})

