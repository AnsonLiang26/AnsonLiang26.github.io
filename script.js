// Navigation Menu
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

// Scrolling Navigation Menu
window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height){
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });
    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};

// Scroll animation
ScrollReveal({
    distance: '80px',
    duration: 2000,
    delay: 200
});

// Scroll Reveal sides
ScrollReveal().reveal('.home-content', {origin: 'left'});
ScrollReveal().reveal('.home-img', {origin: 'right'});
ScrollReveal().reveal('.heading', {origin: 'top'});
ScrollReveal().reveal('.experience-container, .project-box, .contact form', {origin: 'bottom'});

// Experiences Popups
let popup = document.getElementById("popup");
function openPopup0(){
    document.getElementById('popup').scrollIntoView();
    popup.classList.add("open-popup");
    document.getElementById('imge').innerHTML = "<img src='img/E4.jpg' alt='Picture of TNG' width='200' height='200'>"
    document.getElementById('title').innerHTML = 'The Nationwide Group';
    document.getElementById('description').innerHTML = "In my most recent job, I returned and worked as a Data Operations Co-op. My main tasks involved scoring reports and helping appraisers with technical issues.";
}
function openPopup1(){
    document.getElementById('popup').scrollIntoView();
    popup.classList.add("open-popup");
    document.getElementById('imge').innerHTML = "<img src='img/E5.jpg' alt='Picture of MOH' width='200' height='200'>"
    document.getElementById('title').innerHTML = 'Ontario Ministry of Health';
    document.getElementById('description').innerHTML = "During my third co-op, I worked as an Application Programmer at the Ministry of Health. My main task involved migrating Python scripts from our on-premise servers to AWS. I used AWS Glue, Redshift, and Python for the job.";
}
function openPopup2(){
    document.getElementById('popup').scrollIntoView();
    popup.classList.add("open-popup");
    document.getElementById('imge').innerHTML = "<img src='img/E4.jpg' alt='Picture of TNG' width='200' height='200'>"
    document.getElementById('title').innerHTML = 'The Nationwide Group';
    document.getElementById('description').innerHTML = "During my second co-op, I worked as both a Quality Assurance Analyst and Data Operations Intern. My responsibilities included testing web features, organizing the company's backend, and creating UI/UX designs. In this job, I used SQL and Excel.";
}

function openPopup3(){
    document.getElementById('popup').scrollIntoView();
    popup.classList.add("open-popup");
    document.getElementById('imge').innerHTML = "<img src='img/E3.jpg' alt='Picture of UHN' width='200' height='200'>"
    document.getElementById('title').innerHTML = 'University Health Network';
    document.getElementById('description').innerHTML = "In my first co-op, I worked as a Web Developer at the University Health Network. My responsibilities included creating web features from UI/UX designs and migrating our team's backend to dotCMS. In my job, I used HTML, CSS, JavaScript, and dotCMS.";
}

function openPopup4(){
    document.getElementById('popup').scrollIntoView();
    popup.classList.add("open-popup");
    document.getElementById('imge').innerHTML = "<img src='img/E2.png' alt='Picture of Quartz Market' width='200' height='200'>"
    document.getElementById('title').innerHTML = 'Quartz Market';
    document.getElementById('description').innerHTML = 'My second job was working as a Web Developer at a student start-up called Quartz Market. My responsibilities included designing and creating a website for our company which helped promote small businesses during the pandemic. In this job, I used HTML, CSS, and JavaScript. We won Company of the Year at the 2021 Junior Achievement Company Awards.';
}

function openPopup5(){
    document.getElementById('popup').scrollIntoView();
    popup.classList.add("open-popup");
    document.getElementById('imge').innerHTML = "<img src='img/E1.jpg' alt='Picture of JunoJA' width='200' height='200'>"
    document.getElementById('title').innerHTML = 'JunoJA';
    document.getElementById('description').innerHTML = "My first job was working as a Web Designer at a student start-up called JunoJA. My responsibilities included designing and implementing features for our website. In my job, I used HTML, CSS, JavaScript and WordPress. I was nominated for the company's IT Leadership Award at the 2020 Junior Achievement Company Program Awards.";
}