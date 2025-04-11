document.addEventListener("DOMContentLoaded", () => {
    const dropdown = document.querySelector(".dropdown");
    const dropdownContent = document.querySelector(".dropdown-content");

    let keepOpen = false;

    // Show dropdown on hover
    dropdown.addEventListener("mouseenter", () => {
        dropdownContent.style.display = "block";
        keepOpen = true;
    });

    // Don't hide immediately on mouseleave
    dropdown.addEventListener("mouseleave", () => {
        keepOpen = false;
    });

    // Close dropdown on outside click
    document.addEventListener("click", (e) => {
        if (!dropdown.contains(e.target)) {
            dropdownContent.style.display = "none";
        }
    });
});



function toggleMenu() {
    var nav = document.querySelector('.header-nav');
    nav.classList.toggle('responsive');
}
function closeMenu() {
    var nav = document.querySelector('.header-nav');
    nav.classList.remove('responsive');
}
function openMenu() {
    var nav = document.querySelector('.header-nav');
    nav.classList.add('responsive');
}

// Function to open the side menu
function toggleMenu() {
    document.getElementById("sideMenu").style.width = "250px";
}

// Function to close the side menu
function closeMenu() {
    document.getElementById("sideMenu").style.width = "0";
}
function openMenu() {
    document.getElementById("sideMenu").style.width = "250px";
}
