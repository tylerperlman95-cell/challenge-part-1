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

document.getElementById("year").textContent = new Date().toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric"
});

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

function calculateExperience(startYear) {
    const currentDate = new Date();
    const startDate = new Date(startYear, 0, 1);
    const totalMonths =
        (currentDate.getFullYear() - startDate.getFullYear()) * 12
        + (currentDate.getMonth() - startDate.getMonth());
    return totalMonths;
}
const experienceMonths = calculateExperience(2025);
const years = Math.floor(experienceMonths / 12);
const months = experienceMonths % 12;
document.getElementById("expYears").textContent =
    years + " years and " + months + " months";

