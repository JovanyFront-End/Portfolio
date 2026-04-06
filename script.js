const myProjects = [
    {
        title: "Shoecase Website",
        description: "Showcase website built with HTML, CSS, and JavaScript. It features a responsive design and interactive elements to enhance user experience.",
        image: "mailchimp-Hv9CS6KZayQ-unsplash.jpg",
        link: "https://jovanyfront-end.github.io/GameHub/"
    },
    {
        title: "E-commerce Website",
        description: "E-commerce website built with HTML, CSS, and JavaScript. It includes features like product listings, shopping cart, and search functionality.",
        image: "growtika--_jFGWIE6fg-unsplash.jpg",
        link: "https://jovanyfront-end.github.io/Techstore/"
    },
    {
        title: "Landing Page Design",
        description: "A sleek and modern website designed to showcase the latest MacBook Neo. Built with HTML, CSS, it features a responsive design and UI elements to enhance user experience.",
        image: "alex-brinkman-d4uPQo9EPE8-unsplash.jpg",
        link: "https://jovanyfront-end.github.io/MACBOOK-NEO/"
    },
    {
        title: "ToDO List Website",
        description: "A simple and modern design for a ToDo List. Built with HTML, CSS AND JAVASCRIPT, it features a responsive design and Add tasks functionality",
        image: "eden-constantino-iJg1YzsEfqo-unsplash.jpg",
        link: "https://jovanyfront-end.github.io/ToDo/"
    },
        {
        title: "Dashboard Website",
        description: "Dashboard Website tracker. It tracks your month income, month expenses and your goal savings shown as a progress bar",
        image: "deng-xiang--WXQm_NTK0U-unsplash.jpg",
        link: "https://jovanyfront-end.github.io/Dashboard-Tracker/"
    },
];

let currentIndex = 0;

function displayProjects() {
    const container = document.getElementById('projects-container');
    container.innerHTML = myProjects.map(project => `
        <div class="project-card">
            <img src="${project.image}" alt="${project.title}" class="project-image">
            <div class="project-info">
                <h3>${project.title}</h3>
                <p>${project.description}</p>
                <a href="${project.link}" target="_blank" class="project-link">View Project →</a>
            </div>
        </div>
    `).join('');
}

function updateSlider() {
    const container = document.getElementById('projects-container');

    if (window.innerWidth <= 768) {
        const offset = -currentIndex * 100;
        container.style.transform = `translateX(${offset}%)`;
    } else {
        container.style.transform = `translateX(0)`;
    }
}

document.getElementById('nextBtn').addEventListener('click', () => {
    if (currentIndex < myProjects.length - 1) {
        currentIndex++;
    } else {
        currentIndex = 0; 
    }
    updateSlider();
});

document.getElementById('prevBtn').addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--;
    } else {
        currentIndex = myProjects.length - 1; 
    }
    updateSlider();
});

window.addEventListener('resize', updateSlider);

document.addEventListener('DOMContentLoaded', () => {
    displayProjects();
});

document.getElementById('current-year').textContent = new Date().getFullYear();