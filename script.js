document.addEventListener("DOMContentLoaded", () => {
    const navItems = document.querySelectorAll(".nav-item");

    navItems.forEach(item => {
        item.addEventListener("click", () => {
            // Remove active class from all items
            navItems.forEach(nav => nav.classList.remove("active"));
            
            // Add active class to clicked item
            item.classList.add("active");
        });
    });
});

// end navbar

//JavaScript Slider
document.addEventListener("DOMContentLoaded", function () {
    const slider = document.getElementById("certificate-slider");
    let scrollAmount = 0;
    const scrollStep = 400; // Jarak scroll per slide
    const scrollSpeed = 3000; // Interval waktu
    
/** 
function autoScroll() {
        if (scrollAmount >= slider.scrollWidth - slider.clientWidth) {
            scrollAmount = 0; // Kembali ke awal saat mencapai akhir
        } else {
            scrollAmount += scrollStep;
        }
        slider.scrollTo({ left: scrollAmount, behavior: "smooth" });
    }

    setInterval(autoScroll, scrollSpeed); 
**/

    // Aktifkan geser manual dengan mouse atau touch
    let isDown = false;
    let startX;
    let scrollLeft;

    slider.addEventListener("mousedown", (e) => {
        isDown = true;
        startX = e.pageX - slider.offsetLeft;
        scrollLeft = slider.scrollLeft;
    });

    slider.addEventListener("mouseleave", () => {
        isDown = false;
    });

    slider.addEventListener("mouseup", () => {
        isDown = false;
    });

    slider.addEventListener("mousemove", (e) => {
        if (!isDown) return;
        e.preventDefault();
        const x = e.pageX - slider.offsetLeft;
        const walk = (x - startX) * 2; // Kecepatan geser
        slider.scrollLeft = scrollLeft - walk;
    });
});

// untuk project
document.addEventListener("DOMContentLoaded", function () {
    const slider = document.getElementById("project-slider-container");

    let isDown = false;
    let startX;
    let scrollLeft;

    slider.addEventListener("mousedown", (e) => {
        isDown = true;
        startX = e.pageX - slider.offsetLeft;
        scrollLeft = slider.scrollLeft;
    });

    slider.addEventListener("mouseleave", () => isDown = false);
    slider.addEventListener("mouseup", () => isDown = false);

    slider.addEventListener("mousemove", (e) => {
        if (!isDown) return;
        e.preventDefault();
        const x = e.pageX - slider.offsetLeft;
        const walk = (x - startX) * 2;
        slider.scrollLeft = scrollLeft - walk;
    });

    // Touch Support for Mobile
    slider.addEventListener("touchstart", (e) => {
        isDown = true;
        startX = e.touches[0].clientX - slider.offsetLeft;
        scrollLeft = slider.scrollLeft;
    });

    slider.addEventListener("touchend", () => isDown = false);
    slider.addEventListener("touchmove", (e) => {
        if (!isDown) return;
        const x = e.touches[0].clientX - slider.offsetLeft;
        const walk = (x - startX) * 2;
        slider.scrollLeft = scrollLeft - walk;
    });
});

// js untuk contact
document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("contact-form");

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const message = document.getElementById("message").value;

        const mailtoLink = `mailto:muhammadafandi0112@gmail.com?subject=New Contact from ${name}&body=Name: ${name}%0D%0AEmail: ${email}%0D%0AMessage: ${message}`;
        
        window.location.href = mailtoLink;
    });

    // WhatsApp Message Auto-Fill
    const whatsappButton = document.getElementById("whatsapp-link");
    const phoneNumber = "628980476865"; 
    const message = encodeURIComponent("Haloo, saya tertarik dengan portofolio anda...");

    whatsappButton.href = `https://wa.me/${phoneNumber}?text=${message}`;
});