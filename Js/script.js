const burger = document.querySelector('.burger');
const navbar = document.querySelector('.navbar');
const navList = document.querySelector('.nav-list');
const rightNav = document.querySelector('.rightNav');

// Check if elements exist before adding event listeners
if (burger && rightNav && navList && navbar) {
    burger.addEventListener('click', () => { 
        rightNav.classList.toggle('visibility');
        navList.classList.toggle('visibility');
        navbar.classList.toggle('h-nav');
    });
}

const currentYear = new Date().getFullYear();
document.getElementById('year').textContent = currentYear;

//logo action
const ironmask = document.getElementById('ironmask');
if (ironmask) {
    ironmask.addEventListener('click', () => {
        document.getElementById('home').scrollIntoView({ behavior: 'smooth' });
    });
}

//highlight functionality
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('nav a');

    let current = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop; //get the distance from the top

        if (pageYOffset === 0) {
            current = 'home';
        } else if (pageYOffset >= sectionTop - section.clientHeight / 3.8) { //activate the highlight when you have scrolled 1/3rd of that section
            current = section.getAttribute('id');
        }
    });

    //to know if I have reached the bottom of the page
    const docHeight = document.documentElement.scrollHeight;
    const windowHeight = window.innerHeight;

    if (window.scrollY + windowHeight >= docHeight - 200) {
        current = 'contact';
    }

    navLinks.forEach(link => {
        link.classList.toggle('active', link.getAttribute('href').includes(current));
    });
});
