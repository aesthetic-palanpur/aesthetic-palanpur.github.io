document.addEventListener('DOMContentLoaded', () => {
    // Reveal Elements on Scroll
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    // Fade-in animations for cards and text
    const animatedElements = document.querySelectorAll('.fade-in');

    animatedElements.forEach((el, index) => {
        // Stagger animation delay slightly for groups like cards
        if (el.classList.contains('feature-card')) {
            el.style.transitionDelay = `${(index % 3) * 0.1}s`;
        }
        observer.observe(el);
    });

    // Parallax Background
    const bg = document.querySelector('.teal-bg');
    window.addEventListener('scroll', () => {
        const scrolled = window.scrollY;
        if (bg) {
            bg.style.transform = `translateY(${scrolled * 0.3}px)`;
        }
    });
});
