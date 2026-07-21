document.addEventListener("DOMContentLoaded", function () {
    // Parallax Scroll Effect for Hero Image
    window.addEventListener("scroll", function () {
        const heroImg = document.querySelector(".hero-bg img");
        if (heroImg) {
            let scrollValue = window.scrollY;
            if (scrollValue < window.innerHeight) {
                heroImg.style.transform = `translateY(${scrollValue * 0.35}px) scale(${1 + scrollValue * 0.0003})`;
            }
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
});
