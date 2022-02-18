function ValidateEmail() 
{
    var doc = document.getElementById("input");
    var pas =document.getElementById("pass").value;
    var passregex=/\w|\d/;
    var passValidity= passregex.test(pas);
    
    const UserValues = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        email: doc.value,
        password: pas,
      }),
    };
    fetch("https://my-portfolio-back-end.herokuapp.com/api/login", UserValues)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);})
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

    
        // if (data.message === "Invalid Password Plz Try Again!" || data.message === "Invalid Email Plz Try Again!" || data.status == 400){
        //     setError(email, '');
        //     setError(password,'');
        //     message.innerHTML = 'Email or Password Is Invalid';
        // }
        // else {
        //     token = data.accessToken;
        //     localStorage.setItem('user', token);
        //     location = "../Blog-Page/blog.html";
        //     alert("Successfully Logged In");
        // }


// function database(){
//   var email= document.getElementById("input").value;
//     var pass =document.getElementById("pass").value;
// var user=localStorage.getItem(email);
// var data=JSON.parse(user);
// console.log(data);
// }

