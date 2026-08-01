/* ===================================
   PORTFOLIO SCRIPT
   Muhammad Afandi
=================================== */

document.addEventListener("DOMContentLoaded", () => {

    initNavbar();
    initScrollSpy();
    initCounter();
    initBackToTop();
    initCopyEmail();
    initFooterYear();

});

/* ===================================
   NAVBAR EFFECT
=================================== */

function initNavbar() {

    const navbar = document.querySelector("header");

    window.addEventListener("scroll", () => {

        if (window.scrollY > 60) {

            navbar.classList.add("scrolled");

        } else {

            navbar.classList.remove("scrolled");

        }

    });

}

/* ===================================
   ACTIVE NAVBAR
=================================== */

function initScrollSpy() {

    const sections = document.querySelectorAll("section[id]");
    const navLinks = document.querySelectorAll("nav a");

    window.addEventListener("scroll", () => {

        let current = "";

        sections.forEach(section => {

            const sectionTop = section.offsetTop - 120;
            const sectionHeight = section.offsetHeight;

            if (pageYOffset >= sectionTop) {
                current = section.getAttribute("id");
            }

        });

        navLinks.forEach(link => {

            link.classList.remove(
                "text-emerald-600",
                "font-semibold"
            );

            if (
                link.getAttribute("href") === "#" + current
            ) {

                link.classList.add(
                    "text-emerald-600",
                    "font-semibold"
                );

            }

        });

    });

}

/* ===================================
   COUNTER
=================================== */

function initCounter() {

    const counters = document.querySelectorAll(".counter");

    counters.forEach(counter => {

        const target = Number(counter.dataset.target);

        let current = 0;

        const speed = target / 80;

        const update = () => {

            current += speed;

            if (current < target) {

                counter.innerText = Math.floor(current);

                requestAnimationFrame(update);

            } else {

                counter.innerText = target;

            }

        };

        update();

    });

}

/* ===================================
   BACK TO TOP
=================================== */

function initBackToTop() {

    const button = document.getElementById("backToTop");

    if (!button) return;

    window.addEventListener("scroll", () => {

        if (window.scrollY > 500) {

            button.classList.remove("hidden");

        } else {

            button.classList.add("hidden");

        }

    });

    button.addEventListener("click", () => {

        window.scrollTo({

            top: 0,

            behavior: "smooth"

        });

    });

}

/* ===================================
   COPY EMAIL
=================================== */

function initCopyEmail() {

    const btn = document.getElementById("copyEmail");

    if (!btn) return;

    btn.addEventListener("click", () => {

        navigator.clipboard.writeText(
            "muhammadafandi0112@gmail.com"
        );

        btn.innerHTML = "✅ Email Copied";

        setTimeout(() => {

            btn.innerHTML = "📧 Copy Email";

        }, 2000);

    });

}

/* ===================================
   FOOTER YEAR
=================================== */

function initFooterYear() {

    const year = document.getElementById("year");

    if (!year) return;

    year.textContent = new Date().getFullYear();

}

/* ===================================
   SMOOTH FADE
=================================== */

window.addEventListener("load", () => {

    document.body.classList.add("fade-up");

});
