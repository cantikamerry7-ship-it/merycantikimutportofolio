const menuBtn = document.getElementById("menuBtn");
const navMenu = document.getElementById("navMenu");

menuBtn.addEventListener("click", function () {
    menuBtn.classList.toggle("active");
    navMenu.classList.toggle("show");
});

const navLinks = document.querySelectorAll("#navMenu a");

navLinks.forEach(function (link) {
    link.addEventListener("click", function () {
        menuBtn.classList.remove("active");
        navMenu.classList.remove("show");
    });
});
