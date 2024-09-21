const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

if (body.classList.contains('dark-theme')) {
  themeToggle.checked = true;
}

themeToggle.addEventListener('change', () => {
  if (themeToggle.checked) {
    body.classList.replace('light-theme', 'dark-theme');
  } else {   // Temalar Arasında Geçişin Sağlanabilmesi İçin Alan
    body.classList.replace('dark-theme', 'light-theme');
  }
});