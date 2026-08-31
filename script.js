const myProjects = [
    {
        title: " Product Showcase Website",
        description: "Showcase website built with HTML, CSS, and JavaScript. It features a responsive design and interactive elements to enhance user experience.",
        image: "mailchimp-Hv9CS6KZayQ-unsplash.jpg",
        link: "https://jovanyfront-end.github.io/GameHub/"
    },
    {
        title: "E-commerce Website",
        description: "E-commerce website built with HTML, TAILWINDcss, and JavaScript. It includes features like product listings, shopping cart, search functionality, and more!",
        image: "istockphoto-2229745461-612x612.webp",
        link: "https://uniquecrafts.vercel.app/"
    },
    {
        title: "Brand Showcase Website",
        description: "Brand showcase website built with HTML, TAILWINDcss, and JavaScript. It features a responsive design and interactive elements to enhance user experience.",
        image: "https://scontent.fcai19-2.fna.fbcdn.net/v/t39.30808-6/346598715_904840570590745_5559111727381141541_n.jpg?stp=dst-jpg_tt6&cstp=mx1080x1080&ctp=s1080x1080&_nc_cat=107&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=c8Y0DhibzEYQ7kNvwH38KKn&_nc_oc=AdqMv842a3qH---9iJcgjNqQF6tWRNftAnrdaTRmw1rvKXGp5RvyLqaJd83ZZLAGxj4&_nc_zt=23&_nc_ht=scontent.fcai19-2.fna&_nc_gid=Vc2-NGL0bLdwpQbnse4fbg&_nc_ss=7b2a8&oh=00_AQI_EBogkiv4fTsOfC_r5BDgAggaWVvHVROQRKrlut7DCg&oe=6A9BAE62",
        link: "https://peak-burger-restaurant.vercel.app/"
    },
    {
        title: "Landing Page Design",
        description: "A sleek and modern website designed to showcase the latest MacBook Neo. Built with HTML and CSS, it features a responsive design and UI elements to enhance user experience.",
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