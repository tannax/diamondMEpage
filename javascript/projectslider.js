document.addEventListener('DOMContentLoaded', function () {
    const slides = document.querySelectorAll('.slide');
    const prevButton = document.getElementById('prevBtn');
    const nextButton = document.getElementById('nextBtn');
    const toggleProjectsButton = document.getElementById('toggleProjects');
    const projectSlider = document.querySelector('.project-slider');
    let currentSlideIndex = 0;

    // Function to show the correct slide
    function showSlide(index) {
        if (index < 0) {
            currentSlideIndex = slides.length - 1;
        } else if (index >= slides.length) {
            currentSlideIndex = 0;
        }

        // Update the visibility of the slide names and content
        slides.forEach((slide, idx) => {
            slide.style.display = idx === currentSlideIndex ? 'block' : 'none';
        });
    }

    // Button click event listeners for navigation
    prevButton.addEventListener('click', function () {
        currentSlideIndex--;
        showSlide(currentSlideIndex);
    });

    nextButton.addEventListener('click', function () {
        currentSlideIndex++;
        showSlide(currentSlideIndex);
    });

    // Toggle the visibility of the project slider
    toggleProjectsButton.addEventListener('click', function () {
        const isVisible = projectSlider.style.display === 'block';
        
        // Toggle the slider visibility
        projectSlider.style.display = isVisible ? 'none' : 'block';

        // Show/hide the navigation buttons when slider is expanded
        if (isVisible) {
            prevButton.style.display = 'none';
            nextButton.style.display = 'none';
        } else {
            prevButton.style.display = 'block';
            nextButton.style.display = 'block';
        }
    });

    // Initialize the first slide and hide the slider initially
    showSlide(currentSlideIndex);
    projectSlider.style.display = 'none'; // Start with the slider hidden
    prevButton.style.display = 'none'; // Hide the buttons initially
    nextButton.style.display = 'none'; // Hide the buttons initially
});
