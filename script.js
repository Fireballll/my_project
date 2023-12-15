document.addEventListener('DOMContentLoaded', function () {
    const burger = document.querySelector('.burger');
    const navLinks = document.querySelector('.nav-links');

    burger.addEventListener('click', function () {
        navLinks.classList.toggle('show');
        burger.classList.toggle('active');

        // Toggle between burger icon and "X" icon
        if (burger.classList.contains('active')) {
            burger.innerHTML = "&#10005;"; // "&#10005;" is the HTML entity for the "X" symbol
        } else {
            burger.innerHTML = "&#9776;"; // "&#9776;" is the HTML entity for the burger symbol
        }
    });
});
