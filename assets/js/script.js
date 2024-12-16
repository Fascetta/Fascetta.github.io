document.addEventListener('DOMContentLoaded', function () {
  // --- Read More Button Logic ---
  const readMoreBtn = document.getElementById('read-more-btn');
  const extendedAbout = document.querySelector('.extended-about');

  if (readMoreBtn && extendedAbout) {
    readMoreBtn.addEventListener('click', function () {
      extendedAbout.classList.toggle('show');
      readMoreBtn.textContent = extendedAbout.classList.contains('show') ? 'Read Less' : 'Read More';
    });
  }

  // --- Theme Toggle Logic ---
  const toggleBtn = document.getElementById('theme-toggle');
  const root = document.documentElement; // <html> element

  // Load saved theme from localStorage
  const savedTheme = localStorage.getItem('theme') || 'disney';
  root.setAttribute('data-theme', savedTheme);

  if (toggleBtn) {
    toggleBtn.addEventListener('click', function () {
      const currentTheme = root.getAttribute('data-theme') || 'disney';
      const newTheme = currentTheme === 'disney' ? 'marvel' : 'disney';
      root.setAttribute('data-theme', newTheme);
      localStorage.setItem('theme', newTheme);
      updateThemeText(newTheme);
    });
  }

  const themeTextMap = {
    disney: {
      "hero-title": "Innovating at the Intersection of Technology and Creativity",
      "hero-subtitle": "Welcome to my magical portfolio, where imagination meets storytelling. Let’s bring dreams to life.",
      "cta-button": "Explore My Journey",
      "chapter-1-title": "Chapter 1: My Story",
      "nav-1-title": "My Story",
      "chapter-2-title": "Chapter 2: Tools of the Trade",
      "nav-2-title": "Tools of the Trade",
      "chapter-3-title": "Chapter 3: Bringing Ideas to Life",
      "nav-3-title": "Bringing Ideas to Life",
      "chapter-4-title": "Chapter 4: The Next Adventure",
      "nav-4-title": "The Next Adventure",
      "contact-catch": "Let’s connect and discuss how we can collaborate on innovative projects. Reach out to me on LinkedIn, explore my GitHub repositories, or send a direct message through the form below.",
      "behind-title": "Behind the Magic",
      "footer-rights": "Making magic one creation at a time.",
      "footer-quote": "“Every great adventure begins with a dream. Let’s create magic together.”",
      "process-steps": `
      <li><strong>Envision:</strong> I start with a dream, sketching blueprints inspired by timeless stories and the worlds they invite us into.</li>
      <li><strong>Engineer:</strong> Harnessing AI, robotics, and advanced tools, I transform concepts into prototypes that push creativity’s edge.</li>
      <li><strong>Enchant:</strong> Through testing, feedback, and refinement, these prototypes evolve into experiences that kindle wonder and leave lasting impressions.</li>
    `
    },
    marvel: {
      "hero-title": "Unleashing Marvelous Innovations",
      "hero-subtitle": "Step into a world of heroes and technology. Let’s create something extraordinary together.",
      "cta-button": "Join the Adventure",
      "chapter-1-title": "Episode 1: My Origin",
      "nav-1-title": "My Origin",
      "chapter-2-title": "Episode 2: Tools of the Hero",
      "nav-2-title": "Tools of the Hero",
      "chapter-3-title": "Episode 3: Forging the Vision",
      "nav-3-title": "Forging the Vision",
      "chapter-4-title": "Episode 4: Assemble Your Team",
      "nav-4-title": "Assemble Your Team",
      "contact-catch": "Let’s team up and create something extraordinary. Connect with me on LinkedIn, check out my GitHub, or send me a message below.",
      "behind-title": "Behind the Heroic Journey",
      "footer-rights": "Creating marvels, one project at a time.",
      "footer-quote": "“Every hero has a beginning. Let’s create extraordinary stories together.”",
      "process-steps": `
      <li><strong>Strategize:</strong> Every hero starts with a plan. I map out challenges, analyze resources, and chart a path forward.</li>
      <li><strong>Innovate:</strong> Combining cutting-edge technologies with bold ideas, I craft solutions that break boundaries and redefine possibilities.</li>
      <li><strong>Empower:</strong> Through collaboration, iteration, and determination, these solutions grow into powerful tools that inspire and drive impact.</li>
    `
    },
    common: {
      "loading-message": "Loading your personalized experience...",
      "error-message": "Oops! Something went wrong. Please try again later.",
      "contact-form-success": "Thank you for reaching out! I'll get back to you soon.",
      "contact-form-error": "There was an issue submitting the form. Please try again."
    }
  };

  function updateThemeText(theme) {
    document.querySelectorAll("[data-theme-text]").forEach((element) => {
      // Match the class name in themeTextMap keys
      const matchingKey = Object.keys(themeTextMap[theme]).find((key) =>
        element.classList.contains(key)
      );
  
      if (matchingKey && themeTextMap[theme][matchingKey]) {
        // Check if the key requires HTML injection
        if (matchingKey === "process-steps") {
          element.innerHTML = themeTextMap[theme][matchingKey]; // Inject HTML
        } else {
          element.textContent = themeTextMap[theme][matchingKey]; // Inject plain text
        }
      }
    });
  }
  
  // Initial Text Update
  updateThemeText(savedTheme);
  

  // --- Menu Toggle Logic ---
  const menuToggle = document.querySelector('.menu-toggle');
  const header = document.querySelector('.header');

  if (menuToggle && header) {
    menuToggle.addEventListener('click', function () {
      header.classList.toggle('nav-open');
    });
  }
});


// Select the easter-egg element
const easterEgg = document.querySelector('.easter-egg');

// Function to update the title based on the theme
function updateEasterEggTitle() {
  const theme = document.documentElement.getAttribute('data-theme');

  if (theme === 'marvel') {
    easterEgg.title = "With great power comes great responsibility.";
  } else if (theme === 'disney') {
    easterEgg.title = "A dream is a wish your heart makes.";
  } else {
    easterEgg.title = "Explore the magic within!";
  }
}

// Run the function on page load
updateEasterEggTitle();

// Add a listener for theme changes (if dynamically switching themes)
const observer = new MutationObserver(updateEasterEggTitle);
observer.observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] });
