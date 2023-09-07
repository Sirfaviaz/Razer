
const menuHeaders = document.querySelectorAll('.menu-header');

menuHeaders.forEach(header => {
    header.addEventListener('click', () => {
        const menu = header.nextElementSibling;
        menu.classList.toggle('show');
    });
});
