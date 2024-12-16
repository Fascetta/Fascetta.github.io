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
        I’m Christian Bianchi, a technology professional specializing in artificial intelligence, robotics, and software engineering. 
        Currently pursuing my MSc in Artificial Intelligence and Robotics at Sapienza University of Rome, 
        I am driven by a passion for crafting innovative solutions that merge technical expertise with creative storytelling.
      </p>
      <p>
        My academic journey has been fueled by curiosity and excellence, from earning top honors in courses like Computer Vision and Natural Language Processing 
        to researching novel regularization techniques for neural networks. This solid foundation has shaped my professional career, 
        where I’ve developed advanced problem-solving skills as a Software Engineer at HCL Software, tackling complex challenges and mentoring global teams.
      </p>
      
      <div class="extended-about">
        <p>
          I am passionate about building projects that merge technology with storytelling to create immersive, impactful experiences. 
          Whether developing neural style transfer systems to bring unique artistic styles to animation, 
          designing deep learning pipelines to integrate diverse data seamlessly, 
          or engineering virtual production tools that streamline creative workflows, 
          my work reflects a commitment to innovation and collaboration. 
          My goal is to push the boundaries of AI and robotics, crafting tools that empower creators and inspire audiences.
        </p>
        <p>
          Beyond coding, I thrive on blending creativity with technology. Every project I undertake is an opportunity to inspire curiosity, 
          spark imagination, and leave a lasting impact. Let’s connect and transform ambitious ideas into reality.
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
  <h2 class="section-title behind-title" data-theme-text></h2>
  <div class="behind-content">
    <p >
      Every spark of innovation begins as a quiet whisper—an idea waiting to be shaped.<br> Here’s a glimpse into how I bring dreams to life:
    </p>
    <ul class="process-steps" data-theme-text></ul>
  </div>
</section>


<!-- Chapter 4: The Next Adventure -->
<section id="contact" class="contact">
  <h2 class="section-title chapter-4-title" data-theme-text></h2>
  <p data-aos="fade-up" class="contact-catch" data-theme-text></p>
  <div class="contact-buttons" data-aos="fade-up">
    <a href="https://www.linkedin.com/in/christianbianchiit" class="contact-btn" aria-label="Connect on LinkedIn" >
      <span class="icon linkedin-icon"></span> LinkedIn
    </a>
    <a href="https://github.com/Fascetta" class="contact-btn" aria-label="View my GitHub" >
      <span class="icon github-icon"></span> GitHub
    </a>
  </div>
  {% include contact-form.html %}
</section>
