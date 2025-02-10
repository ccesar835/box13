document.addEventListener("DOMContentLoaded", function () {
    const logo = document.querySelector("#hero .logo");

    function adjustLogoSize() {
        const heroHeight = document.querySelector("#hero").offsetHeight;
        if(logo) {
            logo.style.maxHeight = (heroHeight * 0.5) + "px";
        }
    }
    if (logo) {
        adjustLogoSize();
        window.addEventListener("resize", adjustLogoSize);
    }
    
    // Smooth scrolling for older browsers
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
     // JavaScript to Rotate Image on Scroll
     document.addEventListener('scroll', function() {
        const image = document.querySelector('.rotating-image');
        const imageRect = image.getBoundingClientRect();
        const viewportHeight = window.innerHeight;
    
        // Calculate the middle point of the viewport
        const middleOfViewport = viewportHeight / 2;
    
        // Calculate the middle point of the image
        const middleOfImage = imageRect.top + (imageRect.height / 2);
    
        // Calculate rotation based on how far the image's middle is from the viewport's middle
        const distanceToMiddle = Math.abs(middleOfViewport - middleOfImage);
        const maxDistance = viewportHeight / 2;
    
        // Rotate the image based on its distance to the middle of the viewport
        const rotation = Math.min((distanceToMiddle / maxDistance) * 180, 180);
        image.style.transform = `rotate(${rotation}deg)`;
    });
  });

function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}
