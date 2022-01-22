var atingi= document.getElementById("atingi");
var dacade= document.getElementById("dacade");
var mark= document.getElementById("mark");
// var t={
//     atingi:"0",
//     dacade:"0",
//     mark:"0",
// }

    var post=localStorage.getItem("poststatus");
    var status=JSON.parse(post);
    console.log(status);



const reflesh=document.getElementsByClassName("pages");
reflesh[0].addEventListener('click',()=>{
    if(status.atingi=="1"){
        console.log("deleted");
        atingi.style.display="none";
    }
    else{
        console.log("nothing to delete");
    }
})
