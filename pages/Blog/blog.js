var atingi= document.getElementById("atingi");
var dacade= document.getElementById("dacade");
var mark= document.getElementById("mark");
// var t={
//     atingi:"0",
//     dacade:"0",
//     mark:"0",
// }

    var post=localStorage.getItem("poststatus");
    var stat = JSON.parse(post);
    console.log("status",stat);

const reflesh=document.getElementsByClassName("pages");
reflesh[0].addEventListener('click',()=>{
    if(stat.atingi=="1"){
        console.log("deleted");
        atingi.style.display="none";
    }
    else{
        console.log("nothing to delete");
    }
    
});
window.addEventListener('load', (event) => {
    console.log('The page has fully loaded');
    if(stat.atingi=="1"){
        console.log("deleted");
        atingi.style.display="none";
    }
    else{
        console.log("nothing to delete");
    }
});
