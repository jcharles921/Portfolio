

window.onload=function(){
    var list= document.getElementById("loc");
list.addEventListener('click', () => {
    var Long = localStorage.getItem("longitude");
console.log(Long);
   var Lat = localStorage.getItem("latitude");
   console.log(Lat);
   document.getElementsByClassName('cont')[0].style.display="block";
   document.getElementsByClassName('post')[0].style.display="none";
   document.getElementsByClassName('cont')[0].style.visibility="unset";
   document.getElementById("lat").innerHTML= Lat;
   document.getElementById("long").innerHTML= Long;

});
var post=document.getElementById("pos");
post.addEventListener('click',()=>{
    document.getElementsByClassName('post')[0].style.display="block";
    document.getElementsByClassName('cont')[0].style.display="none";
    document.getElementsByClassName('post')[0].style.visibility="unset";

});
var delA=document.getElementById("del-A");
delA.addEventListener('click',()=>{
    let display=localStorage.getItem("poststatus");
    console.log(display);
})

}