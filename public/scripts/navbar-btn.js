document.getElementById('menu-button').addEventListener('click', function () {
    var menu = document.querySelector('#mobile-menu-container');
    menu.classList.toggle('open');
});

window.addEventListener('resize', function () {
    var menu = document.querySelector('#mobile-menu-container');
    if (window.innerWidth > 840) {
        menu.classList.remove('open');
    }
});

document.addEventListener('DOMContentLoaded', (event) => {
    var theme = document.getElementsByTagName('html')[0];
    var btnTheme = document.getElementById('btn-theme-switcher');
    var storedTheme = localStorage.getItem('theme');

    if (storedTheme) {
        theme.className = storedTheme;
        btnTheme.innerHTML = storedTheme === 'light' ? 'dark_mode' : 'light_mode';
    }
});

document.getElementById('theme-switcher').addEventListener('click', function () {
    var theme = document.getElementsByTagName('html')[0];
    var btnTheme = document.getElementById('btn-theme-switcher');

    if (theme.classList.contains('light')) {
        theme.classList.replace('light', 'dark');
        btnTheme.innerHTML = 'light_mode';
        localStorage.setItem('theme', 'dark');
    } else {
        theme.classList.replace('dark', 'light');
        btnTheme.innerHTML = 'dark_mode';
        localStorage.setItem('theme', 'light');
    }
});