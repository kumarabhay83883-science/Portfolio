document.addEventListener("DOMContentLoaded", function () {
  // Intersection Observer config
  const observerOptions = {
    root: null,
    rootMargin: "0px",
    threshold: 0.15 // 15% section screen pe aate hi trigger hoga
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active");
        // Animation ek baar hone ke baad observe karna band karega
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  // Target all elements with class 'reveal'
  const revealElements = document.querySelectorAll(".reveal");
  revealElements.forEach((el) => observer.observe(el));
});
