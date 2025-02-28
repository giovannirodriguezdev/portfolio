const menuToggle = document.getElementById("menuToggle");
const sidebar = document.getElementById("sideNav");

menuToggle.addEventListener("click", (event) => {
    sidebar.classList.toggle("active");
    event.stopPropagation;
});

document.addEventListener("click", (event) => {
    if (!sidebar.contains(event.target) && !menuToggle.contains(event.target)) {
        sidebar.classList.remove("active");
    }
});
