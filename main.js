// Responsive nav menu
const menuToggle = document.querySelector('.menu-toggle');
const navMenu = document.querySelector('nav ul');
if (menuToggle && navMenu) {
  menuToggle.addEventListener('click', () => {
    navMenu.classList.toggle('show');
  });
}

// Carousel logic
class Carousel {
  constructor(containerSelector, slidesSelector) {
    this.container = document.querySelector(containerSelector);
    this.slides = Array.from(this.container.querySelectorAll(slidesSelector));
    this.current = 0;

    this.prevBtn = this.container.querySelector('.carousel-btn.prev');
    this.nextBtn = this.container.querySelector('.carousel-btn.next');
    this.dots = Array.from(this.container.querySelectorAll('.carousel-dot'));

    this.showSlide(this.current);

    if (this.prevBtn && this.nextBtn) {
      this.prevBtn.addEventListener('click', () => this.showSlide(this.current - 1));
      this.nextBtn.addEventListener('click', () => this.showSlide(this.current + 1));
    }
    if (this.dots.length) {
      this.dots.forEach((dot, idx) => {
        dot.addEventListener('click', () => this.showSlide(idx));
      });
    }
  }
  showSlide(idx) {
    if (idx < 0) idx = this.slides.length - 1;
    if (idx >= this.slides.length) idx = 0;
    this.slides.forEach((slide, i) => {
      slide.style.opacity = (i === idx) ? '1' : '0';
      slide.style.zIndex = (i === idx) ? '1' : '0';
    });
    this.dots.forEach((dot, i) => {
      if (i === idx) dot.classList.add('active');
      else dot.classList.remove('active');
    });
    this.current = idx;
  }
}

// Init all carousels
window.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.carousel').forEach(carousel => {
    new Carousel('#' + carousel.id, '.carousel-slide');
  });
});