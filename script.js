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


