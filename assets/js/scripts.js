document.addEventListener("DOMContentLoaded", function() {
    const navbar = document.querySelector('.navbar');

    if(navbar) {
        const originalBackgroundColor = navbar.style.backgroundColor;

        window.addEventListener('scroll', function() {
            const scrollPosition = window.scrollY;

            const changeColorHeight = 1; 

            if(scrollPosition > changeColorHeight) {
                navbar.style.backgroundColor = 'rgba(38, 40, 43, 0.8)'; 
            } else {
                navbar.style.backgroundColor = originalBackgroundColor; 
            }
        });
    }
});
