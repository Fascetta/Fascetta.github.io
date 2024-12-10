// Wait until the DOM is fully loaded
document.addEventListener("DOMContentLoaded", function () {
    console.log("DOM fully loaded and parsed"); // Debugging log
    const sections = document.querySelectorAll('.fade-in');

    // Add class to trigger fade-in animation when section is in view
    function checkVisibility() {
        sections.forEach((section) => {
            const rect = section.getBoundingClientRect();
            console.log(rect.top, rect.bottom); // Debugging log for viewport check
            if (rect.top <= window.innerHeight && rect.bottom >= 0) {
                section.classList.add('visible');
            }
        });
    }

    // Check visibility on scroll
    window.addEventListener('scroll', checkVisibility);
    checkVisibility(); // Initial check for sections in view
});

