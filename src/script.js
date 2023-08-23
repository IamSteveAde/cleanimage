// Function to animate counting with symbols
function animateCountWithSymbols(targetCount, element, duration, symbol) {
    const countInterval = 10; // Interval between count updates (milliseconds)
    const step = (targetCount / (duration / countInterval)) || 1;
    let currentCount = 0;

    const updateCount = () => {
        if (currentCount < targetCount) {
            currentCount += step;
            element.textContent = Math.round(currentCount) + symbol;
            setTimeout(updateCount, countInterval);
        } else {
            element.textContent = targetCount + symbol;
        }
    };

    updateCount();
}

// Count the number of projects done, clients, and team members
const projectsDone = 50; // Replace with the actual number of projects done
const clients = 100; // Replace with the actual number of clients
const teamMembers = 25; // Replace with the actual number of team members

// When the page loads, start the counting animations
document.addEventListener("DOMContentLoaded", () => {
    const projectCounter = document.getElementById("project-counter");
    const clientsCounter = document.getElementById("clients-counter");
    const teamCounter = document.getElementById("team-counter");

    // Animate and add symbols (+ and %) to the counters
    animateCountWithSymbols(projectsDone, projectCounter, 2000, "+");
    animateCountWithSymbols(clients, clientsCounter, 2000, "%");
    animateCountWithSymbols(teamMembers, teamCounter, 2000, "+");
});



//customer
const reviewsWrapper = document.querySelector('.reviews-wrapper');
const reviews = document.querySelectorAll('.review');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const slideIndicators = document.querySelector('.slide-indicators');

let currentIndex = 0;

// Create slide indicators
for (let i = 0; i < reviews.length; i++) {
    const indicator = document.createElement('div');
    indicator.className = 'slide-indicator';
    indicator.addEventListener('click', () => {
        goToSlide(i);
    });
    slideIndicators.appendChild(indicator);
}

// Update slide indicators and current slide
function updateSlideIndicators() {
    const indicators = document.querySelectorAll('.slide-indicator');
    indicators.forEach((indicator, i) => {
        if (i === currentIndex) {
            indicator.classList.add('active');
        } else {
            indicator.classList.remove('active');
        }
    });
}

// Go to a specific slide
function goToSlide(index) {
    if (index < 0) {
        index = reviews.length - 1;
    } else if (index >= reviews.length) {
        index = 0;
    }

    currentIndex = index;
    const translateX = -currentIndex * 100;
    reviewsWrapper.style.transform = `translateX(${translateX}%)`;

    updateSlideIndicators();
}

// Next slide
function nextSlide() {
    goToSlide(currentIndex + 1);
}

// Previous slide
function prevSlide() {
    goToSlide(currentIndex - 1);
}

// Automatically slide the reviews every 5 seconds
setInterval(nextSlide, 5000);

// Initialize slide indicators and current slide
updateSlideIndicators();