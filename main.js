var regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
function ValidateForm(){
    var nam = document.getElementById("name").value;
    console.log()
if( nam == null || nam ==""){
    document.getElementById("outname").innerHTML="You need to put a name";
}
else {
    console.log("there is a name");
}
var pass =document.getElementById("pass");

if (pass.value.match(regex)){
    document.getElementById()
}


}
function ValidateForm2(){
    let email = document.getElementById("input-e").value;
    console.log(email);
    if(email.match(regex)){
        console.log("it's match");

    }
    else if(email == null || email ==""){
        console.log("you didn't add anything")
        document.getElementById("out-e").innerHTML="Whoops! It looks like you forgot to add your email";

    }
    else{
        document.getElementById("out-e").innerHTML="Wroong Email!";
    }
let passwrd= document.getElementById("input-p").value;
console.log(passwrd);
let passwrd2= document.getElementById("input-c").value;
console.log(passwrd2);
if(passwrd == null || passwrd ==""){
    document.getElementById("out-p").innerHTML="Oupps! you forgot to put your password!";

}
else{
    console.log("nothing");

}
if (passwrd2.match(passwrd)){
    console.log("the password do match")
}
else if(passwrd2==null || passwrd2==""){
    document.getElementById("out-c").innerHTML="Oupps! you forgot to put again your password!";

}
else{
    document.getElementById("out-c").innerHTML="Passwords doesn't Match!";


}

}
