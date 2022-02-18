var regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
const vent =document.getElementsByClassName("btn");
localStorage.setItem("username", "Jean Charles");
    localStorage.setItem("userpass", "1234");
    localStorage.setItem("email", "Andela@gmail.com");
    localStorage.setItem("adminpass", "andela");
    var email = document.getElementById("input-e").value;
    
    
    var name = document.getElementById("name").value;
    var passwrd= document.getElementById("input-p").value;
    var adminame= "Jean Charles";
    var adminpass="1234";
    var users={
        email:email,
        username:name,
        password:passwrd,
    };
   

vent[0].addEventListener('click', () =>{
    console.log("Hello i m underwater");
    var nam =document.getElementById("")
    localStorage.setItem("password", "")
    var nam = document.getElementById("name").value;
    
    if( nam == null || nam ==""){
        document.getElementById("outname").innerHTML="You need to put a name";
    }
    else {
        console.log("there is a name");
    }
});


 



function ValidateForm2(){
   

    var email = document.getElementById("input-e").value;
    var name = document.getElementById("name").value;
    var passwrd= document.getElementById("input-p").value;
    

    
    console.log(email);
    if(email.match(regex)){
        console.log("it's match");

        
        
        var user={
            email:email,
            username:name,
            password:passwrd,
        };

        let arr = localStorage.getItem('users')
        ? JSON.parse(localStorage.getItem('users'))
        : [];
            arr.push(user);
            const UserValues = {
                method: "POST",
                headers: { "Content-Type": "application/json", 'Accept': 'application/json' },
                body: JSON.stringify({
                  username: name,
                  email: email,
                  password: passwrd,
                }),
                
              };
          
              fetch(
                "https://portback.herokuapp.com/api/register",
                UserValues
              )
                .then(response => response.json())
                .then((data) => {
                  console.log(data);
                  if (data.message == 'User with this email already exist. use different one') {
                    alert(data.message)
                  }
                  else alert('Registered Successfully Login') ;
                });
                console.log('Request Sent');
          
                
          
            
          
          

        

    }
    else if(email == null || email ==""){
        console.log("you didn't add anything")
        document.getElementById("out-e").innerHTML="Whoops! It looks like you forgot to add your email";

    }
    else{
        document.getElementById("out-e").innerHTML="Wroong Email!";
    }

var passregex=/\w|\d/;
    var passValidity= passregex.test(passwrd);
console.log(passwrd);
let passwrd2= document.getElementById("input-c").value;
console.log(passwrd2);
if(passwrd == null || passwrd ==" " || passValidity==false){
    document.getElementById("out-p").innerHTML="Oupps! you forgot to put your password!";

}
else{
    console.log("nothing");

}
if (passwrd2.match(passwrd)){
    console.log("the password do match")
}
else if(passwrd2==null || passwrd2=="" || passwrd2==" "){
    document.getElementById("out-c").innerHTML="Oupps! you forgot to put again your password!";

}
else{
    document.getElementById("out-c").innerHTML="Passwords doesn't Match!";


}


}
