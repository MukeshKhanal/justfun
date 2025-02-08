document.getElementById("no").addEventListener("click",nobutton);
function nobutton(){

const yesbtn= document.getElementById("yes");
const nobtn=document.getElementById("no");
yesbtn.style.transform="scale(1.5)";
nobtn.style.display="none";

}
document.getElementById("yes").addEventListener("click",function(){
    const textcard =document.querySelector(".card h1");
    textcard.innerHTML="I love you too baby jaan";
})

