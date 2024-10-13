document.addEventListener('DOMContentLoaded', () => {
    // Navigation Menu Toggle
    const menuToggle = document.getElementById('mobile-menu');
    const navList = document.querySelector('.nav-list');

    if (menuToggle && navList) {
        menuToggle.addEventListener('click', () => {
            navList.classList.toggle('active');
            menuToggle.classList.toggle('active');
        });
    }

    // Carousel Functionality
    const slides = document.querySelectorAll('.slide');
    const prevButton = document.querySelector('.prev');
    const nextButton = document.querySelector('.next');
    const indicators = document.querySelectorAll('.indicator');
    let currentSlide = 0;
    const totalSlides = slides.length;
    let slideInterval;

    if (totalSlides === 0) {
        console.error("No slides found");
        return;
    }

    // Function to show a specific slide
    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.classList.remove('active');
            indicators[i]?.classList.remove('active');
            if (i === index) {
                slide.classList.add('active');
                indicators[i]?.classList.add('active');
            }
        });
        currentSlide = index;
    }

    // Show the next slide
    function nextSlide() {
        let next = currentSlide + 1;
        if (next >= totalSlides) {
            next = 0;
        }
        showSlide(next);
    }

    // Show the previous slide
    function prevSlide() {
        let prev = currentSlide - 1;
        if (prev < 0) {
            prev = totalSlides - 1;
        }
        showSlide(prev);
    }

    // Start automatic sliding
    function startSlide() {
        slideInterval = setInterval(nextSlide, 5000); // Change slide every 5 seconds
    }

    // Stop automatic sliding
    function stopSlide() {
        clearInterval(slideInterval);
    }

    // Event listeners for navigation buttons
    if (nextButton && prevButton) {
        nextButton.addEventListener('click', () => {
            nextSlide();
            stopSlide();
            startSlide();
        });

        prevButton.addEventListener('click', () => {
            prevSlide();
            stopSlide();
            startSlide();
        });
    }

    // Event listeners for indicators
    indicators.forEach((indicator, index) => {
        indicator.addEventListener('click', () => {
            showSlide(index);
            stopSlide();
            startSlide();
        });
    });

    // Initialize carousel
    showSlide(currentSlide);
    startSlide();

    console.log("Construction website with carousel is ready.");
});
