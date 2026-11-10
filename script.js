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
