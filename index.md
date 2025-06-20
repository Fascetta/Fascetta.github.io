---
layout: home
---

<section id="home" class="hero">
  <div class="hero-content" data-aos="fade-in">
    <h1 class="hero-title" data-theme-text></h1>
    <p class="hero-subtitle" data-theme-text></p>
    <a href="#about" class="cta-button" data-theme-text></a>
  </div>
  <div class="hero-background"></div>
</section>


<!-- Chapter 1: Origin of the Dream -->
<section id="about" class="about">
  <h2 class="section-title chapter-1-title" data-theme-text></h2>
  <div class="about-content" data-aos="fade-up">
    <div class="profile-photo-container">
      <img src="/assets/images/profile.jpeg" alt="Christian Bianchi" class="profile-photo" />
    </div>
    <div class="about-text speech-bubble" data-aos="fade-in">
  <p>
    I’m Christian Bianchi, a researcher in AI & Robotics with a strong focus on generative models, computer vision, and human–AI interaction. 
    I’m currently pursuing an MSc in Artificial Intelligence and Robotics at Sapienza University of Rome, 
    collaborating with UC Berkeley and Panasonic on robotics and embodied intelligence.
  </p>
  
  <p>
    My research revolves around generative modeling, multimodal perception, and structured representations—especially where realism, interpretability, and embodiment intersect.
    I’ve published work on quaternion-conditioned diffusion models for super-resolution (oral at IJCNN 2025) and developed novel techniques for neural network calibration in both Euclidean and hyperbolic spaces.
  </p>

  <div class="extended-about">
    <p>
      Beyond academia, I previously worked as a Generative AI Engineer at Storm Reply, designing scalable RAG pipelines, real-time voice agents, and modular orchestration systems.
      My goal is to bridge foundational ML research with creative applications—developing intelligent systems that support storytelling, animation, simulation, and interactive environments.
    </p>
    <p>
      Long-term, I aim to join an applied research lab like Disney Research Studio or similar, contributing to the future of creative AI by building intelligent, interpretable, and perceptually-grounded systems that empower creators and entertain audiences.
    </p>
  </div>

  <button id="read-more-btn" class="cta-button">Read More</button>
</div>
  </div>
</section>

<!-- Chapter 2: Tools of the Trade -->
<section id="skills" class="skills">
  <h2 class="section-title chapter-2-title" data-theme-text></h2>
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
  <h2 class="section-title chapter-3-title" data-theme-text></h2>
  <div class="projects-container" data-aos="fade-up">
    {% for project in site.projects %}
    <div class="project-card">
      <a href="{{ project.link }}" target="_blank">
        <img src="{{ project.image }}" alt="{{ project.title }} Image" loading="lazy">
      </a>
      <h3>{{ project.title }}</h3>
      <p>
        {{ project.description }}
      </p>
    </div>
    {% endfor %}
  </div>
</section>


<!-- Behind the Magic -->
<section id="behind-the-magic" class="behind-the-magic">
  <h2 class="section-title behind-title" data-theme-text></h2>
  <div class="behind-content"  data-aos="fade-up">
    <p class="process-title" data-theme-text></p>
    <ul class="process-steps" data-theme-text></ul>
  </div>
</section>


<!-- Chapter 4: The Next Adventure -->
<section id="contact" class="contact">
  <h2 class="section-title chapter-4-title" data-theme-text></h2>
  <p data-aos="fade-up" class="contact-catch" data-theme-text></p>
  <div class="contact-buttons" data-aos="fade-up">
    <a href="https://www.linkedin.com/in/christianbianchiit" class="contact-btn" aria-label="Connect on LinkedIn">
      <i class="fab fa-linkedin"></i> LinkedIn
    </a>
    <a href="https://github.com/Fascetta" class="contact-btn" aria-label="View my GitHub">
      <i class="fab fa-github"></i> GitHub
    </a>    
  </div>
  {% include contact-form.html %}
</section>
