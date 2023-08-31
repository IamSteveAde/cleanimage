// Get the button, the navigation, and the icon spans
const navToggle = document.getElementById('nav-toggle');
const mainNav = document.getElementById('main-nav');
const iconBars = document.getElementById('icon-bars');
const iconClose = document.getElementById('icon-close');

// Function to toggle the navigation and icon
function toggleNav() {
    // Toggle the 'hidden' class on the navigation
    mainNav.classList.toggle('hidden');

    // Toggle the 'hidden' class on the icon spans
    iconBars.classList.toggle('hidden');
    iconClose.classList.toggle('hidden');

    // Trigger an animation by adding a class
    mainNav.classList.toggle('slide-in');
}

// Add a click event listener to the button
navToggle.addEventListener('click', toggleNav);
document.addEventListener("DOMContentLoaded", function() {
    let slideIndex = 0;
    showSlides(slideIndex);

    function showSlides(n) {
        const slides = document.querySelectorAll(".relax");
        const dots = document.querySelectorAll(".dot");

        slides.forEach(slide => {
            slide.style.display = "none";
        });

        dots.forEach(dot => {
            dot.className = dot.className.replace(" active", "");
        });

        slides[n].style.display = "";
        dots[n].classList.add("active");
    }

    function changeSlide(n) {
        slideIndex += n;

        if (slideIndex >= document.querySelectorAll(".relax").length) {
            slideIndex = 0;
        }

        if (slideIndex < 0) {
            slideIndex = document.querySelectorAll(".relax").length - 1;
        }

        showSlides(slideIndex);
    }

    document.querySelector(".prev").addEventListener("click", function() {
        changeSlide(-1);
    });

    document.querySelector(".next").addEventListener("click", function() {
        changeSlide(1);
    });

    document.querySelectorAll(".dot").forEach((dot, index) => {
        dot.addEventListener("click", function() {
            slideIndex = index;
            showSlides(slideIndex);
        });
    });
});
const textSpans = document.querySelectorAll('.scroll-text span');

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.color = 'white'; // Change color to white when in view
        } else {
            entry.target.style.color = 'black'; // Change color back to black when out of view
        }
    });
}, { threshold: 0.5 });

textSpans.forEach(span => {
    observer.observe(span);
});
const growingImage = document.getElementById('growingImage');

// Function to increase the image's size on scroll
function growOnScroll() {
    const scrollY = window.scrollY || window.pageYOffset;
    const scale = 1 + scrollY / 5000; // Adjust the rate of growth

    growingImage.style.transform = `scale(${scale})`;
}

// Attach the growOnScroll function to the window's scroll event
window.addEventListener('scroll', growOnScroll);

// Call growOnScroll on page load to initialize the image's position
growOnScroll();
// Get references to all plus signs and content sections
const plusSigns = document.querySelectorAll('.plus-sign');
const contents = document.querySelectorAll('.content');

// Add click event listeners to each plus sign
plusSigns.forEach((plusSign, index) => {
    plusSign.addEventListener('click', () => {
        // Toggle the visibility of the corresponding content
        if (contents[index].style.display === 'none' || contents[index].style.display === '') {
            contents[index].style.display = 'block';
            plusSign.textContent = '-';
        } else {
            contents[index].style.display = 'none';
            plusSign.textContent = '+';
        }
    });
});
// Simulate loading progress from 0 to 100%


 // Adjust the delay as needed
const reviewSlides = document.querySelectorAll('.review-slide');
let currentSlide = 0;

function showSlide(index) {
    reviewSlides.forEach((slide, i) => {
        slide.style.display = i === index ? 'block' : 'none';
    });
}

function nextSlide() {
    currentSlide++;
    if (currentSlide >= reviewSlides.length) {
        currentSlide = 0;
    }
    showSlide(currentSlide);
}

function prevSlide() {
    currentSlide--;
    if (currentSlide < 0) {
        currentSlide = reviewSlides.length - 1;
    }
    showSlide(currentSlide);
}

document.getElementById('nextBtn').addEventListener('click', nextSlide);
document.getElementById('prevBtn').addEventListener('click', prevSlide);

// Show the initial slide
showSlide(currentSlide);
const firstName = document.getElementById('firstname_inputfield');
const lastname = document.getElementById('lastname_inputfield');
const email = document.getElementById('email_inputfield');
const tel = document.getElementById('tel_inputfield');
const subject = document.getElementById('subject_inputfield');
const message = document.getElementById('message_textarea');
const contact_us_form = document.getElementById('homeContactForm');
const correct_response_indicator = document.getElementById('correct_response');
const error_response_indicator = document.getElementById('error_response');

const SubmitContactForm = (e) =>{
    e.preventDefault();
    error_response_indicator.style.display="none";
    correct_response_indicator.style.display="none";
    axios.defaults.headers.post['Content-Type'] = 'application/json';
    axios.post('https://formsubmit.co/ajax/adediranstephen2000@gmail.com.com', {
    _subject: "Contact Form Questions/Inquiries",
    FirstName: firstName.value,
    LastName: lastname.value,
    Email: email.value,
    Phone: tel.value,
    Subject: subject.value,
    Message: message.value
    })
    .then(response => response.status == 200 ? (correct_response_indicator.style.display="block", error_response_indicator.style.display="none"): null)
    .catch(error => (console.log(error), correct_response_indicator.style.display="none", error_response_indicator.style.display="block"));
    contact_us_form.reset();
}

// Phrases to display in the loader
const phrases = ["We", "Are", "Coming"];
const loadingText = document.getElementById("loading-text");
let currentIndex = 0;

// Function to update the loading text with the next phrase
function updateLoadingText() {
    loadingText.textContent = phrases[currentIndex];
    currentIndex = (currentIndex + 1) % phrases.length;
}

// Simulate page loading
function simulatePageLoad() {
    setTimeout(() => {
        // Replace this with your actual page load logic
        // For demonstration, we'll hide the loader after 3 seconds
        document.getElementById("loader").style.display = "none";
        document.getElementById("content").style.display = "block";
    }, 3000); // 3 seconds
}

// Start the loader animation
function startLoader() {
    setInterval(updateLoadingText, 1000); // Change text every second
    simulatePageLoad();
}

// Initialize the loader
window.onload = startLoader;

