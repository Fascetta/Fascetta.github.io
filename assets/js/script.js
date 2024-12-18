document.addEventListener('DOMContentLoaded', function () {
  /*** --- Read More Button Logic --- ***/
  const setupReadMoreButton = () => {
    const readMoreBtn = document.getElementById('read-more-btn');
    const extendedAbout = document.querySelector('.extended-about');
    if (readMoreBtn && extendedAbout) {
      readMoreBtn.addEventListener('click', () => {
        extendedAbout.classList.toggle('show');
        readMoreBtn.textContent = extendedAbout.classList.contains('show') ? 'Read Less' : 'Read More';
      });
    }
  };

  /*** --- Theme Toggle Logic --- ***/
  const themeTextMap = {
    disney: {
      "hero-title": "Where Technology Meets Enchantment",
      "hero-subtitle": "Step into a realm where imagination sparks innovation, and technology brings stories to life. Together, let’s turn dreams into unforgettable experiences.",
      "cta-button": "Discover the Magic",
      "chapter-1-title": "Chapter 1: Once Upon a Journey",
      "nav-1-title": "Journey",
      "chapter-2-title": "Chapter 2: My Toolkit",
      "nav-2-title": "Tools",
      "chapter-3-title": "Chapter 3: From Vision to Reality",
      "nav-3-title": "Ideas",
      "chapter-4-title": "Chapter 4: The Adventure Ahead",
      "nav-4-title": "Adventure",
      "contact-catch": "Let’s weave magic together. Reach out to connect on LinkedIn, explore my GitHub adventures, or send a message below to start our next story.",
      "behind-title": "Enchantment",
      "footer-rights": "Crafting wonder, one creation at a time.",
      "footer-quote": "“All our dreams can come true, if we have the courage to pursue them.” — Walt Disney",
      "process-title": "Every spark of innovation begins as a quiet whisper—an idea waiting to be shaped.<br> Here’s a glimpse into how I bring dreams to life:",
      "process-steps": `
      <li><strong>Imagine:</strong> Every story begins with a spark. I dream up concepts inspired by timeless tales and boundless creativity.</li>
      <li><strong>Design:</strong> Merging artistry with technology, I craft blueprints and prototypes that blend innovation with storytelling.</li>
      <li><strong>Bring to Life:</strong> Through meticulous refinement, testing, and passion, I turn dreams into experiences that inspire wonder and joy.</li>
    `
    },
    marvel: {
      "hero-title": "Forging the Future, One Innovation at a Time",
      "hero-subtitle": "Step into the workshop of heroes, where bold ideas and cutting-edge technology unite to create extraordinary possibilities. Together, we’ll build a better tomorrow.",
      "cta-button": "Unleash the Adventure",
      "chapter-1-title": "Episode 1: My Origin Story",
      "nav-1-title": "Origin",
      "chapter-2-title": "Episode 2: Tools of the Trade",
      "nav-2-title": "Arsenal",
      "chapter-3-title": "Episode 3: Mission Control",
      "nav-3-title": "Log",
      "chapter-4-title": "Episode 4: Assemble for Tomorrow",
      "nav-4-title": "Assemble",
      "contact-catch": "Let’s team up to create something groundbreaking. Connect with me on LinkedIn, explore my GitHub lab, or drop me a message to start your mission.",
      "behind-title": "Unmasking the Process",
      "footer-rights": "Engineering marvels, one breakthrough at a time.",
      "footer-quote": "“Heroes aren’t born—they’re built. Let’s create something extraordinary together.”",
      "process-title": "Every mission begins with a single spark—an idea ready to ignite.<br> Here’s how I forge ideas into powerful realities:",
      "process-steps": `
      <li><strong>Plan:</strong> Every mission begins with strategy. I analyze the challenge, define the objective, and design a path to success.</li>
      <li><strong>Build:</strong> Armed with powerful tools and technology, I bring ideas to life with innovation, precision, and creativity.</li>
      <li><strong>Launch:</strong> Through iteration and collaboration, I deploy solutions that push boundaries, inspire change, and leave an impact.</li>
    `
    }
  };

  const updateThemeText = (theme) => {
    document.querySelectorAll("[data-theme-text]").forEach((element) => {
      const matchingKey = Object.keys(themeTextMap[theme]).find((key) => element.classList.contains(key));
      if (matchingKey) {
        element.innerHTML = themeTextMap[theme][matchingKey];
      }
    });
  };

  const setupThemeToggle = () => {
    const toggleBtn = document.getElementById('theme-toggle');
    const root = document.documentElement;
  
    // Load saved theme or default to Disney
    const savedTheme = localStorage.getItem('theme') || 'disney';
    root.setAttribute('data-theme', savedTheme);
    updateThemeText(savedTheme);
    updateToggleButton(savedTheme);
  
    if (toggleBtn) {
      toggleBtn.addEventListener('click', () => {
        // Toggle theme
        const currentTheme = root.getAttribute('data-theme') || 'disney';
        const newTheme = currentTheme === 'disney' ? 'marvel' : 'disney';
        root.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
  
        // Update text and button state
        updateThemeText(newTheme);
        updateToggleButton(newTheme);
      });
    }
  };

  const updateToggleButton = (theme) => {
    const toggleBtn = document.getElementById('theme-toggle');
    if (!toggleBtn) return;
  
    // Determine if the theme is Marvel or Disney
    const isMarvelTheme = theme === 'marvel';
  
    // Update the `aria-pressed` attribute for accessibility
    toggleBtn.setAttribute('aria-pressed', isMarvelTheme);
  
    // Update the button's data-theme attribute for additional styling
    toggleBtn.setAttribute('data-theme', theme);
  
    // Optionally log for debugging
    console.log(`Theme toggled to: ${theme}`);
  };
  

  /*** --- Menu Toggle Logic --- ***/
  const setupMenuToggle = () => {
    const menuToggle = document.querySelector('.menu-toggle');
    const header = document.querySelector('.header');
    const navLinks = document.querySelector('.nav-links');
  
    if (menuToggle && header && navLinks) {
      menuToggle.addEventListener('click', () => {
        const isOpen = header.classList.toggle('nav-open');
  
        // Update ARIA attributes for accessibility
        menuToggle.setAttribute('aria-expanded', isOpen);
        navLinks.setAttribute('aria-hidden', !isOpen);
  
        // Optionally log for debugging
        console.log(`Menu ${isOpen ? 'opened' : 'closed'}`);
      });
    }
  };
  

  /*** --- Easter Egg Title Logic --- ***/
  const setupEasterEggTitle = () => {
    const easterEgg = document.querySelector('.easter-egg');
    if (!easterEgg) return;

    const updateEasterEggTitle = () => {
      const theme = document.documentElement.getAttribute('data-theme');
      easterEgg.title = theme === 'marvel' 
        ? "With great power comes great responsibility." 
        : "A dream is a wish your heart makes.";
    };

    updateEasterEggTitle();
    const observer = new MutationObserver(updateEasterEggTitle);
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] });
  };

  /*** --- Initialize All Functions --- ***/
  setupReadMoreButton();
  setupThemeToggle();
  setupMenuToggle();
  setupEasterEggTitle();
});
