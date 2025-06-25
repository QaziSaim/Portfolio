document.addEventListener('DOMContentLoaded', () => {
    // Hamburger Menu
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        hamburger.classList.toggle('active');
    });

    // Theme Toggle
    const themeBtn = document.getElementById('theme-btn');
    const body = document.body;

    themeBtn.addEventListener('click', () => {
        body.classList.toggle('dark-mode');
        themeBtn.textContent = body.classList.contains('dark-mode') ? '☀️' : '🌙';
        localStorage.setItem('theme', body.classList.contains('dark-mode') ? 'dark' : 'light');
    });

    // Load Theme from Local Storage
    if (localStorage.getItem('theme') === 'dark') {
        body.classList.add('dark-mode');
        themeBtn.textContent = '☀️';
    }

    // Smooth Scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
            if (navLinks.classList.contains('active')) {
                navLinks.classList.remove('active');
                hamburger.classList.remove('active');
            }
        });
    });
});