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

document.getElementById('contactForm').addEventListener('submit', function(event) {
    var name = document.getElementById('name').value.trim();
    var email = document.getElementById('email').value.trim();
    var message = document.getElementById('message').value.trim();

    if (name === '' || email === '' || message === '') {
        alert('Por favor, complete todos los campos del formulario.');
        event.preventDefault(); 
        return;
    }

    var tooltip = document.getElementById('tooltipMessage');
    tooltip.classList.add('active');
    setTimeout(function() {
        tooltip.classList.remove('active');
    }, 4000); 

   
});
