function activeMenu() {
    const menu = document.querySelector('.navbar_menu');
    if (menu.classList.contains('active')) {
        menu.classList.remove('active');
        menu.classList.toggle('disactive');
    } else {
        menu.classList.remove('disactive');
        menu.classList.toggle('active');
    }
}