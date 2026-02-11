// Dark Mode Toggle
const toggle = document.getElementById("themeToggle");
toggle.addEventListener("click", () => {
    document.body.classList.toggle("dark");
});

// Modal
function openModal() {
    document.getElementById("projectModal").style.display = "block";
}

function closeModal() {
    document.getElementById("projectModal").style.display = "none";
}

// Fade-in on scroll
const faders = document.querySelectorAll(".fade");

const appearOnScroll = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("visible");
        }
    });
});

faders.forEach(fader => {
    appearOnScroll.observe(fader);
});
