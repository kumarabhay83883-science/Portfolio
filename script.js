document.addEventListener("DOMContentLoaded", function () {
  const heroImage = document.querySelector(".hero-image");

  // Scroll event for Smooth Photo Glide
  window.addEventListener("scroll", function () {
    let scrolled = window.scrollY;
    if (scrolled < window.innerHeight) {
      // Photo ko halka sa alag rate par translate aur scale karenge (Parallax Glide)
      heroImage.style.transform = `translateY(${scrolled * 0.35}px) scale(${1 + scrolled * 0.0003})`;
    }
  });

  // Reveal Animations on Scroll
  const observerOptions = {
    root: null,
    rootMargin: "0px",
    threshold: 0.12
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active");
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  const revealElements = document.querySelectorAll(".reveal");
  revealElements.forEach((el) => observer.observe(el));
  
 // Slow Gliding (Parallax) Effect on Scroll
window.addEventListener('scroll', () => {
    const heroImg = document.querySelector('.hero-bg img');
    if (heroImg) {
        let scrollValue = window.scrollY;
        heroImg.style.transform = 'translateY(' + (scrollValue * 0.35) + 'px) scale(' + (1 + scrollValue * 0.0003) + ')';
    }
});
