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

// Interactive Project Results Tab Switcher
function showResult(resultType, btnElement) {
    const viewerImg = document.getElementById("result-viewer-img");
    const viewerCaption = document.getElementById("result-viewer-caption");
    const allButtons = document.querySelectorAll(".tab-btn");

    // Remove active class from all buttons
    allButtons.forEach(btn => btn.classList.remove("active"));
    
    // Add active class to clicked button
    btnElement.classList.add("active");

    // Dynamic Image & Caption Switcher
    if (resultType === 'sample') {
        viewerImg.src = "thin_film_sample.jpg"; 
        viewerCaption.innerText = "Fabricated Bio-Based Piezoelectric Thin Film Sample";
    } else if (resultType === 'voltage') {
        viewerImg.src = "piezo_result_graph.jpg"; 
        viewerCaption.innerText = "Piezoelectric Voltage Output & Electromechanical Response";
    } else if (resultType === 'ftir') {
        viewerImg.src = "ftir_spectrum.jpg"; 
        viewerCaption.innerText = "FTIR Chemical Characterization & Functional Group Analysis";
    } else if (resultType === 'xrd') {
        viewerImg.src = "xrd_pattern.jpg"; 
        viewerCaption.innerText = "XRD Crystallographic & Structural Alignment Spectrum";
    }
}
