function ValidateEmail() 
{
    var doc = document.getElementById("input");
    var pas =document.getElementById("pass").value;
    var passregex=/\w|\d/;
    var passValidity= passregex.test(pas);
    
    var check=localStorage.getItem("users");
    // var nameadmin= localStorage.getItem("username");
    // var passadmin= localStorage.getItem("userpass");
    // var adminverify=JSON.parse(nameadmin);
    // var passverify=JSON.parse(passadmin);
    const data= JSON.parse(check);
    console.log(data);


    if(pas == null || pas =="" || passValidity ==false ){
        document.getElementById("passout").innerHTML = "Whoops! It looks like you forgot to add your password";

    }
    else { 
        document.getElementById("passout").innerHTML ="";
       };   

    var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    console.log(doc);
    
    if (doc.value.match(validRegex)) {
      
      console.log("Valid email address!");
      
      document.getElementById("output").innerHTML = "";
      if(data.email == doc.value && data.password == pas){
        console.log("it's good");
        window.location.href ='https://jcharles921.github.io/Portfolio/pages/Blog/blog.html';
      }
      else if(doc.value=="Andela@gmail.com" && pas =="andela"){
        window.location.href ='https://jcharles921.github.io/Portfolio/pages/Controlpanel/panel.html';
      }
      else{
        document.getElementById("output").innerHTML = "Invalid Credentials";

      }
    }
    else if(doc.value == null || doc.value ==" "){ 
      document.getElementById("output").innerHTML = "Whoops! It looks like you forgot to add your email ";
      document.getElementById("input").style.borderColor = "hsl(355, 100%, 49%)";

    }
     else { 
     document.getElementById("output").innerHTML = "Please provide a valid email!";
     console.log("You have entered an invalid email address!");
     document.getElementById("input").style.borderColor = "hsl(355, 100%, 49%)";
     return false;
    }    
}