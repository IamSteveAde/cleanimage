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
function simulateLoading() {
    const loaderContainer = document.getElementById("loader-container");
    let progress = 0;
    const interval = setInterval(() => {
        progress += 1;
        if (progress >= 100) {
            clearInterval(interval);
            // Hide loader when loading is complete
            loaderContainer.classList.remove("loading");
            setTimeout(() => {
                loaderContainer.style.display = "none";
            }, 500); // Delay hiding for smoother transition
        }
    }, 30);
}

// Call the loading function when the page loads
window.addEventListener("load", () => {
    simulateLoading();
});