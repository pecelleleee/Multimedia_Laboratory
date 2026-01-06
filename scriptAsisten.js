document.addEventListener("DOMContentLoaded", () => {
    const menuToggle = document.getElementById("menuToggle");
    const navMenu = document.getElementById("navMenu");

    // toggle buka / tutup menu
    menuToggle.addEventListener("click", () => {
        navMenu.classList.toggle("active");
        menuToggle.textContent =
            navMenu.classList.contains("active") ? "✖" : "☰";
    });

    // ⬅️ TUTUP MENU SAAT LINK DIKLIK
    document.querySelectorAll(".nav-links a").forEach(link => {
        link.addEventListener("click", () => {
            navMenu.classList.remove("active");
            menuToggle.textContent = "☰";
        });
    });
});

// const slider = document.getElementById("assistantSlider");
// const btnNext = document.getElementById("slideNext");
// const btnPrev = document.getElementById("slidePrev");

// function getCardWidth() {
//     return slider.offsetWidth;
// }

// btnNext.addEventListener("click", () => {
//     slider.scrollBy({
//         left: getCardWidth(),
//         behavior: "smooth"
//     });
// });

// btnPrev.addEventListener("click", () => {
//     slider.scrollBy({
//         left: -getCardWidth(),
//         behavior: "smooth"
//     });
// });

