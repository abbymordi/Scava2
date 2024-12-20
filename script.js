const track = document.querySelector('.carousel-track');
const slides = Array.from(track.children);
const leftButton = document.querySelector('.carousel-button.left');
const rightButton = document.querySelector('.carousel-button.right');
const slideWidth = slides[0].getBoundingClientRect().width;

// Arrange slides side by side
slides.forEach((slide, index) => {
    slide.style.left = `${slideWidth * index}px`;
});

let currentIndex = 0;

rightButton.addEventListener('click', () => {
    if (currentIndex < slides.length - 1) {
        currentIndex++;
        track.style.transform = `translateX(-${slideWidth * currentIndex}px)`;
    }
});

leftButton.addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--;
        track.style.transform = `translateX(-${slideWidth * currentIndex}px)`;
    }
});


const reviewTrack = document.querySelector('.review-track');
const reviewSlides = Array.from(reviewTrack.children);
const leftReviewButton = document.querySelector('.review-button.left');
const rightReviewButton = document.querySelector('.review-button.right');

const reviewWidth = reviewSlides[0].getBoundingClientRect().width;

// Arrange the review slides side by side
reviewSlides.forEach((slide, index) => {
  slide.style.left = reviewWidth * index + 'px';
});

// Move to the targeted review slide
const moveToReviewSlide = (track, currentSlide, targetSlide) => {
  track.style.transform = `translateX(-${targetSlide.style.left})`;
};

// Add event listeners for the review buttons
rightReviewButton.addEventListener('click', () => {
  const currentReview = reviewTrack.querySelector('.review-slide.current-slide') || reviewSlides[0];
  const nextReview = currentReview.nextElementSibling || reviewSlides[0];
  moveToReviewSlide(reviewTrack, currentReview, nextReview);
});

leftReviewButton.addEventListener('click', () => {
  const currentReview = reviewTrack.querySelector('.review-slide.current-slide') || reviewSlides[0];
  const prevReview = currentReview.previousElementSibling || reviewSlides[reviewSlides.length - 1];
  moveToReviewSlide(reviewTrack, currentReview, prevReview);
});

