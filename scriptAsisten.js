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


document.addEventListener("DOMContentLoaded", () => {
    const grid = document.querySelector(".assistant-grid");
    const cards = document.querySelectorAll(".assistant-card");
    const dotsContainer = document.getElementById("assistantDots");

    // bikin dot
    cards.forEach((_, i) => {
        const dot = document.createElement("span");
        if (i === 0) dot.classList.add("active");
        dotsContainer.appendChild(dot);
    });

    const dots = dotsContainer.querySelectorAll("span");

    grid.addEventListener("scroll", () => {
        const cardWidth = cards[0].offsetWidth;
        const index = Math.round(grid.scrollLeft / cardWidth);

        dots.forEach(dot => dot.classList.remove("active"));
        if (dots[index]) dots[index].classList.add("active");
    });
});



