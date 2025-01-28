document.addEventListener("DOMContentLoaded", function () {
    const logo = document.querySelector("#hero .logo");

    function adjustLogoSize() {
        const heroHeight = document.querySelector("#hero").offsetHeight;
        logo.style.maxHeight = (heroHeight * 0.5) + "px";
    }

    adjustLogoSize();

    window.addEventListener("resize", adjustLogoSize);

    // Smooth scrolling for older browsers
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});

function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}