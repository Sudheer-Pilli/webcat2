
var Name=document.getElementById('name');
var email=document.getElementById('email');
var password=document.getElementById('password');
var conPassword=document.getElementById('password2');
var phno=document.getElementById('phno');
var address=document.getElementById('address');
var Age=document.getElementById('age');
var span=document.getElementsByTagName('span');


    function validate(){
        const regex1= /^([a-z0-9\.-]+)@(company)\.(in)$/;
        const regex2= /^[a-zA-Z]+$/
        const regex3 = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*])([a-z])([a-zA-Z0-9!@#$%^&*])(.*[a-z])?$/;
        const isValidLength = /^.{8,16}$/;
        const regex4=/^[0-9]{10}$/ ;
        const regex5=/^[1-9]{2}$/;
        //name validation
        if(Name.value.trim().length<3){
            $("#name").addClass("is-invalid")
            $("#name").removeClass("is-valid")
            span[1].innerText="length should be greater than two";
            span[1].className="invalid-feedback";
            return false
        }
        else if(!regex2.test(Name.value.trim())){
            $("#name").addClass("is-invalid")
            $("#name").removeClass("is-valid")
            span[1].innerText="special characters are not allowed";
            span[1].className="invalid-feedback";
            return false
        }
        else if(!regex1.test(email.value.trim())){
            $("#email").addClass("is-invalid")
                $("#email").removeClass("is-valid")
                span[2].innerText="invalid email";
                span[2].className="invalid-feedback";
                return false
        }
        else if(!regex3.test(password.value.trim()) && !isValidLength.test(password.value.trim())){
            $("#password").addClass("is-invalid")
            $("#password").removeClass("is-valid")
            span[3].innerText="provide a strong password";
            span[3].className="invalid-feedback";
            return false
        }
        else if(password.value!=conPassword.value || password.value==""){
            $("#password2").addClass("is-invalid")
            $("#password2").removeClass("is-valid")
            span[4].innerText="invalid Password";
            span[4].className="invalid-feedback";
            return false                        
        }
        else if(!regex4.test(phno.value.trim())){
            $("#phno").addClass("is-invalid")
            $("#phno").removeClass("is-valid")
            span[5].innerText="enter valid number";
            span[5].className="invalid-feedback";
            return false   
        }
        else if(address.value.trim().length<=8){
            $("#address").addClass("is-invalid")
            $("#address").removeClass("is-valid")
            span[6].innerText="enter valid address";
            span[6].className="invalid-feedback";
            return false   
        }
        else if(!regex5.test(Age.value.trim()))
        {
            $("#age").addClass("is-invalid")
            $("#age").removeClass("is-valid")
            span[7].innerText="enter valid age";
            span[7].className="invalid feedback"
        }
        else{
            $("#name").addClass("is-valid")
            $("#name").removeClass("is-invalid")
            $("#email").addClass("is-valid")
            $("#email").removeClass("is-invalid")
            $("#password").addClass("is-valid")
            $("#password").removeClass("is-invalid")
            $("#password2").addClass("is-valid")
            $("#password2").removeClass("is-invalid")
            $("#phno").addClass("is-valid")
            $("#phno").removeClass("is-invalid")
            $("#address").addClass("is-valid")
            $("#address").removeClass("is-invalid")
            $("#age").addClass("is-invalid")
            $("age").removeClass("is-valid")
            return true
        }
}

email.onkeyup=function()
    {
        const regex1= /^([a-z0-9\.-]+)@(company)\.(in)$/;
        if(regex1.test(email.value.trim()))
        {

                $("#email").addClass("is-valid")
                $("#email").removeClass("is-invalid")
                span[2].innerText="looks good";
                span[2].className="valid-feedback";
        }
        else{
                $("#email").addClass("is-invalid")
                $("#email").removeClass("is-valid")
                span[2].innerText="invalid email";
                span[2].className="invalid-feedback";
        }
    }

Name.onkeyup=function(){
    const regex2= /^[a-zA-Z]+$/
    if(Name.value.trim().length<3){
        $("#name").addClass("is-invalid")
        $("#name").removeClass("is-valid")
        span[1].innerText="length should be greater than two";
        span[1].className="invalid-feedback";
    }
    else if(!regex2.test(Name.value.trim())){
        $("#name").addClass("is-invalid")
        $("#name").removeClass("is-valid")
        span[1].innerText="special characters are not allowed";
        span[1].className="invalid-feedback";
    }
    else{
        $("#name").addClass("is-valid")
        $("#name").removeClass("is-invalid")
        span[1].innerText="looks good";
        span[1].className="valid-feedback";
    }
    
}

password.onkeyup=function(){
    const regex3 = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*])([a-z])([a-zA-Z0-9!@#$%^&*])(.*[a-z])?$/;
    const isValidLength = /^.{8,16}$/;
    if(regex3.test(password.value.trim()) && isValidLength.test(password.value.trim())){
        $("#password").addClass("is-valid")
        $("#password").removeClass("is-invalid")
        span[3].innerText="looks good";
        span[3].className="valid-feedback";
    }
    else{
        $("#password").addClass("is-invalid")
        $("#password").removeClass("is-valid")
        span[3].innerText="provide a strong password";
        span[3].className="invalid-feedback";
    }
}

conPassword.onkeyup=function(){
    if(password.value==conPassword.value && password.value!=""){
        $("#password2").addClass("is-valid")
        $("#password2").removeClass("is-invalid")
        span[4].innerText="looks good";
        span[4].className="valid-feedback";
    }
    else{
        $("#password2").addClass("is-invalid")
        $("#password2").removeClass("is-valid")
        span[4].innerText="invalid Password";
        span[4].className="invalid-feedback";
    }
}

phno.onkeyup=function(){
    const regex4=/^[0-9]{10}$/;
    if(!regex4.test(phno.value.trim())){
        $("#phno").addClass("is-invalid")
        $("#phno").removeClass("is-valid")
        span[5].innerText="enter valid number";
        span[5].className="invalid-feedback"; 
    }
    else{
        $("#phno").addClass("is-valid")
        $("#phno").removeClass("is-invalid")
        span[5].innerText="looks good";
        span[5].className="valid-feedback";
    }
}

address.onkeyup=function(){
    if(address.value.trim().length<=8){
        $("#address").addClass("is-invalid")
        $("#address").removeClass("is-valid")
        span[6].innerText="enter valid address";
        span[6].className="invalid-feedback";  
    }
    else{
        $("#address").addClass("is-valid")
        $("#address").removeClass("is-invalid")
        span[6].innerText="looks good";
        span[6].className="valid-feedback";
    }
}
Age.onkeyup=function(){
    const regex5=/^[0-9]{2}$/;
    if(!regex5.test(age.value.trim()))
    {
        $("#age").addClass("is-invalid")
        $("#age").removeClass("is-valid")
        span[7].innerText="enter valid age";
        span[7].className="invalid feedback"
    }
    else{
        $("#age").addClass("is-valid")
        $("#age").removeClass("is-invalid")
        span[7].innerText="looks good";
        span[7].className="valid-feedback";
    }
}

function numlock(event)
{
    let code=event.which;
    if(code>47&&code<58)
    return false;
    else
    return true;
}


function alplock(event){
    let code=event.which;
    if(code>=65&&code<=90||code>=97&&code<=122){
        return false;
    }
    else{
        return true;
    }
}

