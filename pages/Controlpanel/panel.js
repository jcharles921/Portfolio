function use(){
    const UserValues = {
        method: "GET",
        headers: { "Content-Type": "application/json", 'Accept': 'application/json' },  
      };
  
      fetch(
        "https://portback.herokuapp.com/api/register",
        UserValues
      )
        .then(response => response.json())
        .then((data) => {
          
          var a=[];
          var add = document.createElement("li");
          var listUsers = data.forEach(function(obj){
            a.push(obj.username);
        })
          console.log(a);
          for(i=0;i<a.length;i++){
            var text = document.createTextNode(a[i]);
            add.appendChild(text);
            for(i=0;i<a.length;i++){
                document.getElementById("list").appendChild(add);
              }
          }
         
          

          
   
        });
    
}
var t={
        atingi:"0",
        dacade:"0",
        mark:"0",
    }
    localStorage.setItem("poststatus",JSON.stringify(t));
window.onload=function(){
    use();
    var list= document.getElementById("loc");
list.addEventListener('click', () => {
    var Long = localStorage.getItem("longitude");
console.log(Long);
   var Lat = localStorage.getItem("latitude");
   console.log(Lat);
   document.getElementsByClassName('cont')[0].style.display="block";
   document.getElementsByClassName('post-panel')[0].style.display="none";
   document.getElementsByClassName('cont')[0].style.visibility="unset";
   document.getElementById("lat").innerHTML= Lat;
   document.getElementById("long").innerHTML= Long;

});
var post=document.getElementById("pos");
post.addEventListener('click',()=>{
    document.getElementsByClassName('post-panel')[0].style.display="block";
    document.getElementsByClassName('cont')[0].style.display="none";
    document.getElementsByClassName('post-panel')[0].style.visibility="unset";

});
var delA=document.getElementById("del-A");
delA.addEventListener('click',()=>{
    let display=localStorage.getItem("poststatus");
    console.log(display);
    var nelw= {
        atingi:"1",
        dacade:"0",
        mark:"0",
        
    }
    localStorage.setItem("poststatus",JSON.stringify(nelw));
    document.getElementById('atingi').style.display="none";


})


// function add_list(){
//     //adding new elements
//       var add = document.createElement("li");
//       var todo =document.getElementById('add-todo').value;
//       var text = document.createTextNode(todo);
//       add.appendChild(text);
//       var span = document.createElement("span");
//       span.className ="close";
//       add.appendChild(span);
  
//    
      
  
    
    
  
  
//   }
}
