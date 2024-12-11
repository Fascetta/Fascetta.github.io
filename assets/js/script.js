// Wait until the DOM is fully loaded
document.addEventListener("DOMContentLoaded", () => {
    // Initialize all functionality
    initFadeInAnimation();
    initTypingEffect("Welcome to My Website!", 100, "dynamic-text");
    initDarkModeToggle();
    initScrollToTop();
    initMenuToggle();
    initSectionHighlight(); // Cool addition: Highlights active section on scroll
});

/** Fade-in animation for elements in view */
function initFadeInAnimation() {
    const sections = document.querySelectorAll('.fade-in');

    function checkVisibility() {
        sections.forEach(section => {
            const rect = section.getBoundingClientRect();
            if (rect.top <= window.innerHeight && rect.bottom >= 0) {
                section.classList.add('visible');
            }
        });
    }

    window.addEventListener('scroll', checkVisibility);
    checkVisibility(); // Initial check
}

/**
 * Typing effect for dynamic text
 * @param {string} text - The text to type.
 * @param {number} speed - Typing speed in milliseconds.
 * @param {string} elementId - The ID of the element to display the text.
 */
function initTypingEffect(text, speed, elementId) {
    const dynamicText = document.getElementById(elementId);
    let index = 0;

    dynamicText.textContent = ""; // Clear existing content

    function type() {
        if (index < text.length) {
            dynamicText.textContent += text[index];
            index++;
            setTimeout(type, speed);
        }
    }

    type();
}

/** Dark mode toggle functionality */
function initDarkModeToggle() {
    const toggleButton = document.getElementById('dark-mode-toggle');
    toggleButton.addEventListener('click', () => {
        document.documentElement.classList.toggle('dark');
    });
}

/** Scroll-to-top button functionality */
function initScrollToTop() {
    const scrollToTopButton = document.getElementById('scroll-to-top');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            scrollToTopButton.classList.add('show');
        } else {
            scrollToTopButton.classList.remove('show');
        }
    });

    scrollToTopButton.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}

/** Hamburger menu toggle functionality */
function initMenuToggle() {
    const menuToggle = document.querySelector('.header__menu-toggle');
    const nav = document.querySelector('.header__nav');

    menuToggle.addEventListener('click', () => {
        nav.classList.toggle('active');
        menuToggle.classList.toggle('active');
    });
}

/** Cool Addition: Highlight active section on scroll */
function initSectionHighlight() {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.header__nav a');

    function highlightSection() {
        let currentSectionId = "";

        sections.forEach(section => {
            const rect = section.getBoundingClientRect();
            if (rect.top <= 150 && rect.bottom >= 150) {
                currentSectionId = section.id;
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${currentSectionId}`) {
                link.classList.add('active');
            }
        });
    }

    window.addEventListener('scroll', highlightSection);
    highlightSection(); // Initial highlight
}

document.addEventListener("DOMContentLoaded", () => {
    const text = "Hi, I'm Christian Bianchi";
    const typingSpeed = 100; // Typing speed in milliseconds
    const typedTextElement = document.getElementById("typed-text");
    let index = 0;

    function typeCharacter() {
        if (index < text.length) {
            typedTextElement.textContent += text[index];
            index++;
            setTimeout(typeCharacter, typingSpeed);
        }
    }

    typeCharacter(); // Start typing animation
});


document.addEventListener('DOMContentLoaded', () => {
    const bannerContent = document.querySelector('.banner-content');
    const bannerHeight = document.querySelector('.about-me-banner').offsetHeight;

    window.addEventListener('scroll', () => {
        const scrollPosition = window.scrollY;
        const opacity = Math.max(1 - scrollPosition / bannerHeight, 0);
        bannerContent.style.opacity = opacity;
        bannerContent.style.transform = `translateY(${Math.min(scrollPosition / 10, 20)}px)`; // Smooth upward movement
    });
});
