burger = document.querySelector('.burger');
navbar = document.querySelector('.navbar');
navList = document.querySelector('.nav-list');
rightNav = document.querySelector('.rightNav');

burger.addEventListener('click', ()=>{ 
    rightNav.classList.toggle('visibility');
    navList.classList.toggle('visibility');
    navbar.classList.toggle('h-nav');

})

const currentYear = new Date().getFullYear();
document.getElementById('year').textContent = currentYear;

//logo action
document.getElementById('ironmask').addEventListener('click', () => {
    document.getElementById('home').scrollIntoView({ behavior: 'smooth'});
});

// Add this function to handle section navigation
function scrollToSection(event, sectionId) {
    const isComicsLink = sectionId === 'Comics.html'; // Check if it's the Comics link
    if (isComicsLink) {
        // Let the default behavior happen (navigate to Comics.html)
        return;
    }

    event.preventDefault();
    const section = document.getElementById(sectionId);
    const navbarHeight = 85; // Fixed navbar height

    window.scrollTo({
        top: section.offsetTop - navbarHeight,
        behavior: 'smooth'
    });
}

//highlight functionality
window.addEventListener('scroll', () => {
    const sections=document.querySelectorAll('section');
    const navLinks=document.querySelectorAll('nav a');

    
    let current='';

    sections.forEach(section => {
        const sectionTop = section.offsetTop; //get the distance from the top

        if(pageYOffset===0){
            current='home';
        }
        else if(pageYOffset >= sectionTop - section.clientHeight/3.8){ //activate the hightlight when u have scrolled 1/3rd of that section
            current = section.getAttribute('id');
        }
    });

    //to know if i have reached the bottom of the page
    const docHeight= document.documentElement.scrollHeight;
    const windowHeight=window.innerHeight;

    if(window.scrollY+windowHeight>=docHeight-200){
        current='contact';
    }

    navLinks.forEach(link => {
        link.classList.toggle('active', link.getAttribute('href').includes(current));
    });
});
function showMessage(){
    const successMessage =document.getElementById("success-message");
    successMessage.style.display="block";
    document.getElementById("name").value="";
    document.getElementById("phone").value="";
    document.getElementById("email").value="";
    document.getElementById("message").value="";
}

function handleFocus(element) {
    element.dataset.placeholder = element.placeholder; 
    element.placeholder = ''; 
}

function handleBlur(element) {
    if (element.value === '') {
        element.placeholder = element.dataset.placeholder;
    }
}

function validateForm(event) {
    event.preventDefault(); 
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phonePattern = /^\d+$/; 

    
    if (!emailPattern.test(email) || !phonePattern.test(phone)) {
        showAlertBox();
        return;
    }

    showConfirmation(); 
}

function showAlertBox() {
    const alertBox = document.getElementById('alert-box');
    alertBox.style.display = 'block';
    
    
    setTimeout(() => {
        alertBox.style.display = 'none';
    }, 4000);
}

function showConfirmation() {
    document.getElementById('success-message').style.display = 'block';

    
    const formElements = document.querySelectorAll('.ironman-input');
    formElements.forEach(element => {
        element.value = '';
        element.placeholder = element.dataset.placeholder;
    });

    
    setTimeout(() => {
        document.getElementById('success-message').style.display = 'none';
    }, 3000);
}




