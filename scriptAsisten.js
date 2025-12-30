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