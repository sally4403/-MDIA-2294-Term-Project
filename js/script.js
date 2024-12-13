// Initialize Flickity
document.addEventListener('DOMContentLoaded', () => {
    const flkty = new Flickity('.carousel', {
        cellAlign: 'left',
        contain: true,
        prevNextButtons: true,
        pageDots: true,
        autoPlay: false,
        groupCells: true,
    });
});

// Select hamburger menu and side menu
const hamburgerMenu = document.getElementById("hamburger-menu");
const navLinks = document.getElementById("nav-links");
const closeButton = document.getElementById("close-menu");

// Toggle menu visibility when hamburger menu is clicked
hamburgerMenu.addEventListener("click", () => {
    navLinks.classList.toggle("active");
    hamburgerMenu.classList.toggle("open"); 
    hamburgerMenu.style.display="none";
    closeButton.style.display = "block";
});

// Close menu when close button (X) is clicked
closeButton.addEventListener("click", () => {
    navLinks.classList.remove("active");
    hamburgerMenu.classList.remove("open");
    hamburgerMenu.style.display="flex";
    closeButton.style.display = "none";
});


lightbox.option({
    'resizeDuration': 300,
    'wrapAround': true,
    'showImageNumberLabel': true
});

document.addEventListener('DOMContentLoaded', function () {
    // Initialize the Leaflet map
    var map = L.map('map').setView([40.712776, -74.005974], 13);

    // Add the tile layer to the map (OpenStreetMap tiles)
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    // Add a marker to the map
    var marker = L.marker([40.712776, -74.005974]).addTo(map);
});
 



// Form
document.addEventListener('DOMContentLoaded', function () {
    // Get the form element
    const form = document.getElementById('contact-form');
    
    // Add an event listener for form submission
    form.addEventListener('submit', function (event) {
        let isValid = true; // Flag to track if form is valid
        
        // Get input values
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        // Validate Full Name (Required)
        const nameError = document.getElementById('name-error');
        if (name.trim() === "") {
            nameError.textContent = "Full Name is required.";
            isValid = false;
        } else {
            nameError.textContent = "";
        }

        // Validate Email (Required and valid format)
        const emailError = document.getElementById('email-error');
        const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        if (email.trim() === "") {
            emailError.textContent = "Email is required.";
            isValid = false;
        } else if (!emailPattern.test(email)) {
            emailError.textContent = "Please enter a valid email address.";
            isValid = false;
        } else {
            emailError.textContent = "";
        }

        // Validate Message (Required)
        const messageError = document.getElementById('message-error');
        if (message.trim() === "") {
            messageError.textContent = "Message is required.";
            isValid = false;
        } else {
            messageError.textContent = "";
        }

        // If form is invalid, prevent submission
        if (!isValid) {
            event.preventDefault(); // Prevent form from submitting
        }
    });
});
