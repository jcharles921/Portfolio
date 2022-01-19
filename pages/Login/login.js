function ValidateEmail() 
{
    var doc = document.getElementById("input");
    var pas =document.getElementById("pass").value;
    console.log(pas);

    if(pas == null || pas ==""){
        document.getElementById("passout").innerHTML = "Whoops! It looks like you forgot to add your password";

    }
    else { 
        document.getElementById("passout").innerHTML ="";
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
// function database(){
//   var email= document.getElementById("input").value;
//     var pass =document.getElementById("pass").value;
// var user=localStorage.getItem(email);
// var data=JSON.parse(user);
// console.log(data);
// }
// var mainuser = {
//   mail="andela@gmail.com",
//   passs="1234",

// }
// var json= JSON.stringify(mainuser);
// localStorage.setItem(json);