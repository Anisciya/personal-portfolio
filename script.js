const text = "Aspiring AI Tools Expert & Web Developer";
let i = 0;
function typing() {
    if (i < text.length) {
        document.getElementById("typed-text").textContent += text.charAt(i);
        i++;
        setTimeout(typing, 70);
    }
}
window.onload = typing;
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior: "smooth"
        });
    });
});
document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");
    form.addEventListener("submit", function (e) {
        const name = form.querySelector('input[name="name"]').value.trim();
        const email = form.querySelector('input[name="email"]').value.trim();
        const message = form.querySelector('textarea[name="message"]').value.trim();
        if (!name || !email || !message) {
            e.preventDefault();
            alert("Please fill out all fields before submitting.");
        }
    });
});