// Wait until the DOM is fully loaded
document.addEventListener("DOMContentLoaded", () => {
    initFadeInAnimation();
    initTypingEffect("Welcome to My Website!", 100, "dynamic-text");
    initDarkModeToggle();
    initScrollToTop();
    initMenuToggle();
    initSectionHighlight();
    initBannerAnimation();
    initTypeCharacter("Hi, I'm Christian Bianchi", 100, "typed-text");
});

/** Helper Function: Debounce */
function debounce(func, wait = 20) {
    let timeout;
    return function (...args) {
        const context = this;
        clearTimeout(timeout);
        timeout = setTimeout(() => func.apply(context, args), wait);
    };
}

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

    window.addEventListener('scroll', debounce(checkVisibility));
    checkVisibility(); // Initial check
}

/** Typing effect for dynamic text */
function initTypingEffect(text, speed, elementId) {
    const dynamicText = document.getElementById(elementId);
    if (!dynamicText) return;

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
    if (!toggleButton) return;

    toggleButton.addEventListener('click', () => {
        document.documentElement.classList.toggle('dark');
    });
}

/** Scroll-to-top button functionality */
function initScrollToTop() {
    const scrollToTopButton = document.getElementById('scroll-to-top');
    if (!scrollToTopButton) return;

    window.addEventListener('scroll', debounce(() => {
        if (window.scrollY > 300) {
            scrollToTopButton.classList.add('show');
        } else {
            scrollToTopButton.classList.remove('show');
        }
    }));

    scrollToTopButton.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}

/** Hamburger menu toggle functionality */
function initMenuToggle() {
    const menuToggle = document.querySelector(".header__menu-toggle");
    const navMenu = document.querySelector(".header__nav");

    if (!menuToggle || !navMenu) return;

    menuToggle.addEventListener("click", () => {
        const expanded = menuToggle.getAttribute("aria-expanded") === "true";
        menuToggle.setAttribute("aria-expanded", !expanded);
        navMenu.classList.toggle("active");
        document.body.classList.toggle("menu-active"); // Prevent scrolling
    });

    // Optional: Close menu when clicking outside
    document.addEventListener("click", (event) => {
        if (!navMenu.contains(event.target) && !menuToggle.contains(event.target)) {
            navMenu.classList.remove("active");
            menuToggle.setAttribute("aria-expanded", "false");
            document.body.classList.remove("menu-active");
        }
    });
}


/** Highlight active section on scroll */
function initSectionHighlight() {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.header__nav a');

    if (!sections.length || !navLinks.length) return;

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

    window.addEventListener('scroll', debounce(highlightSection));
    highlightSection(); // Initial highlight
}

/** Typing effect for a specific text */
function initTypeCharacter(text, speed, elementId) {
    const element = document.getElementById(elementId);
    if (!element) return;

    let index = 0;
    element.textContent = ""; // Clear existing content

    function typeCharacter() {
        if (index < text.length) {
            element.textContent += text[index];
            index++;
            setTimeout(typeCharacter, speed);
        }
    }

    typeCharacter(); // Start typing animation
}

/** Banner animation based on scroll */
function initBannerAnimation() {
    const bannerContent = document.querySelector('.banner-content');
    const bannerHeight = document.querySelector('.about-me-banner')?.offsetHeight;

    if (!bannerContent || !bannerHeight) return;

    window.addEventListener('scroll', debounce(() => {
        const scrollPosition = window.scrollY;
        const opacity = Math.max(1 - scrollPosition / bannerHeight, 0);
        bannerContent.style.opacity = opacity;
        bannerContent.style.transform = `translateY(${Math.min(scrollPosition / 10, 20)}px)`; // Smooth upward movement
    }));
}
