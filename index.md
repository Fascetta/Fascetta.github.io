---
layout: home
---

<section id="home" class="hero">
  <div class="hero-content" data-aos="fade-in">
    <h1 class="hero-title">Innovating at the Intersection of Technology and Creativity</h1>
    <p class="hero-subtitle">
      Welcome to my professional portfolio, where innovation meets storytelling. I specialize in crafting impactful experiences through AI, robotics, and design. Let's bring the extraordinary to life.
    </p>
    <a href="#about" class="cta-button">Explore My Journey</a>
  </div>
  <div class="hero-background"></div>
</section>


<!-- Chapter 1: Origin of the Dream -->
<section id="about" class="about">
  <h2 class="section-title">Chapter 1: <br>My Story</h2>
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
    Let's connect and discuss how we can collaborate on innovative projects. Reach out to me on LinkedIn, explore my GitHub repositories, or send a direct message through the form below.
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

