/*==========================================
ZION BUILDERS
Main JavaScript
==========================================*/

/* ========= LOADER ========= */

window.addEventListener("load", () => {
    const loader = document.getElementById("loader");

    setTimeout(() => {
        loader.style.opacity = "0";
        loader.style.visibility = "hidden";
    }, 700);
});

/* ========= MOBILE MENU ========= */

const menuBtn = document.getElementById("menuBtn");
const mobileMenu = document.getElementById("mobileMenu");

menuBtn.addEventListener("click", () => {

    mobileMenu.classList.toggle("active");

    if (mobileMenu.classList.contains("active")) {
        menuBtn.innerHTML = '<i class="fas fa-times"></i>';
    } else {
        menuBtn.innerHTML = '<i class="fas fa-bars"></i>';
    }

});

/* Close mobile menu after clicking */

document.querySelectorAll("#mobileMenu a").forEach(link => {

    link.addEventListener("click", () => {

        mobileMenu.classList.remove("active");

        menuBtn.innerHTML =
            '<i class="fas fa-bars"></i>';

    });

});

/* ========= STICKY HEADER ========= */

const header = document.getElementById("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 80) {

        header.classList.add("scrolled");

    } else {

        header.classList.remove("scrolled");

    }

});

/* ========= ACTIVE NAVIGATION ========= */

const sections = document.querySelectorAll("section");

const navLinks = document.querySelectorAll("#navMenu a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 150;

        if (window.scrollY >= sectionTop) {

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link => {

        link.classList.remove("text-[#F37032]");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("text-[#F37032]");

        }

    });

});

/* ========= COUNTER ========= */

const counters = document.querySelectorAll(".counter");

let counterStarted = false;

window.addEventListener("scroll", () => {

    const stats = document.getElementById("stats");

    if (!stats) return;

    const trigger =
        stats.offsetTop - window.innerHeight + 100;

    if (window.scrollY > trigger && !counterStarted) {

        counterStarted = true;

        counters.forEach(counter => {

            const target = +counter.dataset.target;

            let count = 0;

            const speed = target / 120;

            const update = () => {

                count += speed;

                if (count < target) {

                    counter.innerText =
                        Math.floor(count);

                    requestAnimationFrame(update);

                } else {

                    counter.innerText = target + "+";

                }

            };

            update();

        });

    }

});

/* ========= PROJECT FILTER ========= */

const filterButtons =
document.querySelectorAll(".filter-btn");

const projects =
document.querySelectorAll(".project-card");

filterButtons.forEach(button => {

    button.addEventListener("click", () => {

        filterButtons.forEach(btn =>
            btn.classList.remove("active"));

        button.classList.add("active");

        const filter =
            button.dataset.filter;

        projects.forEach(project => {

            if (
                filter === "all" ||
                project.classList.contains(filter)
            ) {

                project.style.display = "block";

            } else {

                project.style.display = "none";

            }

        });

    });

});

/* ========= BACK TO TOP ========= */

const backToTop =
document.getElementById("backToTop");

window.addEventListener("scroll", () => {

    if (window.scrollY > 500) {

        backToTop.style.display = "flex";

    } else {

        backToTop.style.display = "none";

    }

});

backToTop.addEventListener("click", () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});

/* ========= FORM ========= */

const form =
document.getElementById("quoteForm");

if (form) {

    form.addEventListener("submit", function (e) {

        e.preventDefault();

        alert(
            "Thank you! Your request has been submitted successfully."
        );

        form.reset();

    });

}

/* ========= AOS ========= */

AOS.init({

    duration: 900,

    easing: "ease-in-out",

    once: true

});