---
layout: home
---

<section id="home" class="hero">
  <div class="hero-content" data-aos="fade-in">
    <h1 class="hero-title">Crafting Magic with Technology</h1>
    <p class="hero-subtitle">
      Welcome to a realm where imagination meets innovation. Together, we’ll blend art and engineering to create experiences that spark wonder, brighten dreams, and turn inspiration into reality.
    </p>
    <a href="#about" class="cta-button">Begin the Journey</a>
  </div>
  <div class="hero-background"></div>
</section>


<!-- Chapter 1: Origin of the Dream -->
<section id="about" class="about">
  <h2 class="section-title">Chapter 1:<br> The Origin of the Dream</h2>
  <div class="about-content" data-aos="fade-up">
    <div class="profile-photo-container">
      <img src="/assets/images/profile.jpeg" alt="Christian Bianchi" class="profile-photo" />
    </div>
    <div class="about-text speech-bubble" data-aos="fade-in">
      <p>
        Long ago, I stood before worlds imagined by Disney, captivated by stories where courage defied the odds and hope illuminated the unknown. Those tales planted a seed of inspiration deep within me.
      </p>
      <p>
        Today, as an AI Dreamer, I bridge the gap between classic storytelling and cutting-edge technology—AI, robotics, and beyond. Each innovation I craft is a brushstroke on a larger canvas, weaving together narrative, design, and possibility.
      </p>
      
      <div class="extended-about">
        <p>
          Behind every code snippet and prototype lies a quiet dedication to enchantment and learning. Late nights, curious experiments, and the steady hum of innovation have taught me that technology’s true power emerges when it stirs hearts and minds.
        </p>
        <p>
          My journey began with simple AI scripts and mechanical sketches, each guided by Disney’s enduring values: perseverance to overcome challenges, curiosity to embrace the new, and a hint of magic to kindle wonder. Beyond my workshop, I explore new frameworks, mentor budding innovators, and seek out moments where imagination and engineering collide.
        </p>
        <p>
          Ultimately, I don’t just build machines; I shape experiences that encourage you to believe in the extraordinary. Because every adventure, every piece of progress, begins with a dream—and dreams are what propel us forward.
        </p>
      </div>
      
      <button id="read-more-btn" class="cta-button">Read More</button>
    </div>
  </div>
</section>

<!-- Chapter 2: Tools of the Trade -->
<section id="skills" class="skills">
  <h2 class="section-title">Chapter 2: <br> Tools of the Trade</h2>
  <div class="skills-container" data-aos="fade-up">
    {% for skill in site.skills %}
    <div class="skill-card">
      <img src="{{ skill.icon }}" alt="{{ skill.title }} Icon">
      <h3>{{ skill.title }}</h3>
      <p class="skill-desc">
        {{ skill.description }}
      </p>
    </div>
    {% endfor %}
  </div>
</section>

<!-- Chapter 3: Bringing Ideas to Life -->
<section id="projects" class="projects">
  <h2 class="section-title">Chapter 3: <br>Bringing Ideas to Life</h2>
  <div class="projects-container" data-aos="fade-up">
    {% for project in site.projects %}
    <div class="project-card">
      <img src="{{ project.image }}" alt="{{ project.title }} Image" loading="lazy">
      <h3>{{ project.title }}</h3>
      <p>
        {{ project.description }}
      </p>
    </div>
    {% endfor %}
  </div>
</section>


<!-- Behind the Magic -->
<section id="behind-the-magic" class="behind-the-magic" data-aos="fade-up">
  <h2 class="section-title">Behind the Magic</h2>
  <div class="behind-content">
    <p>
      Every spark of innovation begins as a quiet whisper—an idea waiting to be shaped. Here’s a glimpse into how I bring dreams to life:
    </p>
    <ul>
      <li><strong>Envision:</strong> I start with a dream, sketching blueprints inspired by timeless stories and the worlds they invite us into.</li>
      <li><strong>Engineer:</strong> Harnessing AI, robotics, and advanced tools, I transform concepts into prototypes that push creativity’s edge.</li>
      <li><strong>Enchant:</strong> Through testing, feedback, and refinement, these prototypes evolve into experiences that kindle wonder and leave lasting impressions.</li>
    </ul>
  </div>
</section>


<!-- Chapter 4: The Next Adventure -->
<section id="contact" class="contact">
  <h2 class="section-title">Chapter 4: <br> The Next Adventure</h2>
  <p data-aos="fade-up">
    Are you ready to pen the next chapter together? Let’s connect, collaborate, and shape a future where innovation and storytelling go hand in hand. Reach out on LinkedIn, explore my GitHub, or send a direct message—your voice could spark the next big idea.
  </p>
  <div class="contact-buttons" data-aos="fade-up">
    <a href="https://www.linkedin.com/in/christianbianchiit" class="contact-btn" aria-label="Connect on LinkedIn">
      <span class="icon linkedin-icon"></span> LinkedIn
    </a>
    <a href="https://github.com/Fascetta" class="contact-btn" aria-label="View my GitHub">
      <span class="icon github-icon"></span> GitHub
    </a>
  </div>
  {% include contact-form.html %}
</section>

