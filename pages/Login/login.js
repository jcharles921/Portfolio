function ValidateEmail() 
{
    var doc = document.getElementById("input");
    var pass =document.getElementById("pass");

    if(doc.value.match(pass)){
        document.getElementById("passout").innerHTML = "Whoops! It looks like you forgot to add your password";

    }
    else { 
        document.getElementById("passout").innerHTML = "";
       }   

    var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    console.log(doc);
    
    if (doc.value.match(validRegex)) {
      
      console.log("Valid email address!");
      document.getElementById("input").style.borderColor = "hsl(116, 100%, 67%)";
      document.getElementById("output").innerHTML = "";
    }
    else if(doc.value == null || doc.value ==""){ 
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