

let hamburger=document.querySelector(".hamburger");
let navTwo=document.querySelector(".hidden-nav");

hamburger.addEventListener("click",()=>{
navTwo.classList.toggle("hidden-nav");
console.log("button clicked");
})


