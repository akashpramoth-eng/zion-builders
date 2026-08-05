const menuBtn = document.getElementById("menuBtn");
const mobileMenu = document.getElementById("mobileMenu");

menuBtn.addEventListener("click", () => {
    mobileMenu.classList.toggle("hidden");
});

const header = document.getElementById("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 60) {

        header.classList.add("bg-gray-900", "shadow-xl");

    } else {

        header.classList.remove("bg-gray-900", "shadow-xl");

    }

});
// PROJECT FILTER

const buttons=document.querySelectorAll(".filter-btn");

const projects=document.querySelectorAll(".project");

buttons.forEach(button=>{

button.addEventListener("click",()=>{

buttons.forEach(btn=>btn.classList.remove("active"));

button.classList.add("active");

const filter=button.dataset.filter;

projects.forEach(project=>{

if(filter==="all"){

project.style.display="block";

}else if(project.classList.contains(filter)){

project.style.display="block";

}else{

project.style.display="none";

}

});

});

});
// ======================
// Animated Counters
// ======================

const counters = document.querySelectorAll(".counter");

const counterObserver = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (!entry.isIntersecting) return;

        const counter = entry.target;

        const target = parseInt(counter.dataset.target);

        let current = 0;

        const increment = Math.ceil(target / 100);

        const update = () => {

            current += increment;

            if (current >= target) {

                counter.innerText = target + "+";

            } else {

                counter.innerText = current;

                requestAnimationFrame(update);

            }

        };

        update();

        counterObserver.unobserve(counter);

    });

});

counters.forEach(counter => counterObserver.observe(counter));
// CONTACT FORM

const form = document.getElementById("contactForm");

if(form){

form.addEventListener("submit", function(e){

e.preventDefault();

const name=document.getElementById("name").value.trim();
const phone=document.getElementById("phone").value.trim();
const email=document.getElementById("email").value.trim();

if(name.length<3){

alert("Please enter your full name.");

return;

}

if(phone.length<10){

alert("Please enter a valid phone number.");

return;

}

const emailRegex=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;

if(!emailRegex.test(email)){

alert("Please enter a valid email.");

return;

}

alert("Thank you! We will contact you shortly.");

form.reset();

});

}

document.getElementById("year").textContent=new Date().getFullYear();
/* ==========================
PRELOADER
========================== */

window.addEventListener("load",()=>{

const loader=document.getElementById("loader");

loader.style.opacity="0";

setTimeout(()=>{

loader.remove();

},500);

});


/* ==========================
BACK TO TOP
========================== */

const topBtn=document.getElementById("topBtn");

window.addEventListener("scroll",()=>{

if(window.scrollY>500){

topBtn.classList.remove("hidden");

}else{

topBtn.classList.add("hidden");

}

});

topBtn.addEventListener("click",()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

});