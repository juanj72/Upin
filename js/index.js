const navToggle =document.querySelector(".nav-toggle")
const navMenu=document.querySelector(".nav-menu")


navToggle.addEventListener("click",()=>{
    navMenu.classList.toggle("nav-menu-visible");
})


const refer = document.querySelector(".nav-menu")

refer.addEventListener("click",()=>{
    navMenu.classList.toggle("nav-menu-visible")
})


(function(){
    AOS.init();
}());