

window.onload=function(){
    var list= document.getElementById("loc");
list.addEventListener('click', () => {
    var Long = localStorage.getItem("longitude");
console.log(Long);
   var Lat = localStorage.getItem("latitude");
   console.log(Lat);
   document.getElementsByClassName('cont')[0].style.visibility="unset";
   document.getElementById("lat").innerHTML= Lat;
   document.getElementById("long").innerHTML= Long;

});

}