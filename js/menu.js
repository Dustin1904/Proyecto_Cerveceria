const navToggle = document.querySelector('.nav-toggle')
const navMenu = document.querySelector('.nav-menu')

navToggle.addEventListener('click', ()=> {
    navMenu.classList.toggle('nav-menu_visible')
    
});

document.addEventListener('click', (event) => {
    const target = event.target;
    const isMenuClicked = target === navMenu || navMenu.contains(target);
    const isToggleClicked = target === navToggle;

    if (!isMenuClicked && !isToggleClicked) {
        navMenu.classList.remove('nav-menu_visible');
    }
});