document.addEventListener('DOMContentLoaded', function() {
  const readMoreBtn = document.getElementById('read-more-btn');
  const extendedAbout = document.querySelector('.extended-about');

  readMoreBtn.addEventListener('click', function() {
    if (extendedAbout.classList.contains('show')) {
      extendedAbout.classList.remove('show');
      readMoreBtn.textContent = 'Read More';
    } else {
      extendedAbout.classList.add('show');
      readMoreBtn.textContent = 'Read Less';
    }
  });
});

document.addEventListener('DOMContentLoaded', function() {
  const toggleBtn = document.getElementById('theme-toggle');
  const htmlEl = document.documentElement; // <html> element

  // Optionally, remember user preference using localStorage
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'light') {
    htmlEl.setAttribute('data-theme', 'light');
  }

  toggleBtn.addEventListener('click', function() {
    if (htmlEl.getAttribute('data-theme') === 'light') {
      htmlEl.removeAttribute('data-theme');
      localStorage.setItem('theme', 'dark');
    } else {
      htmlEl.setAttribute('data-theme', 'light');
      localStorage.setItem('theme', 'light');
    }
  });
});

