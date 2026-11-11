// Chapter 15 

console.log("Welcome to Tyler Perlman's Portfolio!");
console.warn("Welcome! Thanks for checking out my portfolio!");
console.table([
    { skill: "HTML" },
    { skill: "CSS" },
    { skill: "JavaScript" },
    { skill: "Web Design" }
]);

function getCurrentYear() {
    return new Date().getFullYear();
}
document.getElementById("year").textContent = getCurrentYear();

document.getElementById("last-updated").textContent = new Date().toLocaleString();

function sayHello() {
    alert("Thanks for visiting!");
}

document.getElementById("printButton").addEventListener("click", function () {
    window.print();
});
document.getElementById("thankYouButton").addEventListener("click", sayHello);
document.getElementById("clearConsoleButton").addEventListener("click", function () {
    console.clear();
});

// Chapter 16 
function calculateExperience(startYear, startMonth, endDate = new Date()) {
    const startDate = new Date(startYear, startMonth, 1);
    const totalMonths =
        (endDate.getFullYear() - startDate.getFullYear()) * 12
        + (endDate.getMonth() - startDate.getMonth());
    return totalMonths;
}
// Graphic Design Experience
const designMonths = calculateExperience(2025, 8, new Date(2026, 6, 1));
const designYears = Math.floor(designMonths / 12);
const designRemainder = designMonths % 12;
document.getElementById("designExp").textContent =
    designYears + " years and " + designRemainder + " months";
// Coding Experience
const codingMonths = calculateExperience(2026, 8);
const codingYears = Math.floor(codingMonths / 12);
const codingRemainder = codingMonths % 12;
document.getElementById("codingExp").textContent =
    codingYears + " years and " + codingRemainder + " months";


function updateProjectCount() {
    const projectRows = document.querySelectorAll('#projectTableBody tr');
    console.log(projectRows.length);
    document.getElementById("projectCount").textContent =
        "Total Projects: " + projectRows.length;
    document.getElementById("projectBadge").textContent = projectRows.length;
}
updateProjectCount();
const projectTable = document.getElementById("projectTableBody");
const observer = new MutationObserver(updateProjectCount);
observer.observe(projectTable, { childList: true });


function validateForm() {
    const name = document.querySelector('[name="name"]').value.trim();
    const email = document.querySelector('[name="email"]').value.trim();
    const message = document.querySelector('[name="message"]').value.trim();
    if (name === "" || email === "" || message === "") {
        alert("Please fill in all fields");
        return false;
    }
    if (!email.includes("@") || !email.includes(".")) {
        alert("Please enter a valid email address");
        return false;
    }
    if (message.length < 10) {
        alert("Your message must be at least 10 characters long");
        return false;
    }
    alert("Message sent!");
    return false;
}

// Chapter 17
let isDark = localStorage.getItem("theme") === "dark";

// Apply saved theme when the page loads
if (isDark) {
    document.body.classList.add("dark-theme");
    document.body.style.background = "#1e293b";
    document.body.style.color = "#f8fafc";
}

function toggleTheme() {
    if (!isDark) {
        document.body.classList.add("dark-theme");
        document.body.style.background = "#1e293b";
        document.body.style.color = "#f8fafc";
    } else {
        document.body.classList.remove("dark-theme");
        document.body.style.background = "#ffffff";
        document.body.style.color = "#222222";
    }

    isDark = !isDark;

    // Save theme preference
    localStorage.setItem("theme", isDark ? "dark" : "light");
}

const extraSkills = ["JavaScript", "React", "Node.js", "Git"];
const skillsList = document.getElementById("skillsList");
extraSkills.forEach(function (skill) {
    const alreadyExists = Array.from(skillsList.children)
        .some(item => item.textContent.trim() === skill);
    if (!alreadyExists) {
        const li = document.createElement("li");
        li.textContent = skill;
        skillsList.appendChild(li);
    }
});

function filterProjects(category) {
    const projects = document.querySelectorAll(".project-card");
    projects.forEach(project => {
        switch (category) {
            case "web":
                project.style.display =
                    project.dataset.category === "web" ? "block" : "none";
                break;
            case "app":
                project.style.display =
                    project.dataset.category === "app" ? "block" : "none";
                break;
            case "all":
            default:
                project.style.display = "block";
                break;
        }
    });
}

// Chapter 18

const projects = [
    {
        title: "Personal Website",
        tech: "HTML, CSS, JavaScript",
        image: "tyler.jpg",
        description: "My personal portfolio website.",
        featured: true,
        year: 2026
    },
    {
        title: "Practice Website",
        tech: "HTML, CSS",
        image: "project2.jpg",
        description: "A website created to practice web development.",
        featured: false,
        year: 2026
    },
    {
        title: "Web Development Project",
        tech: "HTML, CSS, JavaScript",
        image: "project3.jpg",
        description: "A project demonstrating my coding skills.",
        featured: true,
        year: 2026
    }
];
console.log(projects);
console.log(projects[1].title);

projects.sort((a, b) => a.year - b.year);
console.log(projects);

const skills = {
    frontend: ["HTML", "CSS", "JavaScript"],
    backend: ["Python", "Node.js", "SQL"],
    tools: ["Git", "GitHub", "VS Code"],
    listAll() {
        return [...this.frontend, ...this.backend, ...this.tools];
    }
};

console.log(skills.frontend.length);

skills.backend.push("Express");
console.log(skills.backend);
console.log(skills.listAll());

const projectsContainer = document.getElementById("projectsContainer");
const projectCards = projects.map(project => {
    return `
        <div class="project-card">
            <span>${project.featured ? "Featured" : ""}</span>
            <img src="${project.image}" alt="${project.title}" width="200" height="200">
            <h3>${project.title}</h3>
            <p>${project.description}</p>
            <p>${project.tech}</p>
        </div>
    `;
});
projectsContainer.innerHTML = projectCards.join("");

