document.addEventListener('DOMContentLoaded', () => {
    // Header Scroll Effect
    const header = document.querySelector('.header');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // Mobile Menu Toggle (Simplified interaction)
    const mobileMenu = document.querySelector('.mobile-menu-toggle');
    const navMenu = document.querySelector('.nav-menu');
    
    if (mobileMenu) {
        mobileMenu.addEventListener('click', () => {
            // A simple implementation for mobile menu
            // In a real app, you might want a full screen overlay
            alert('Mobile menu toggle - to be implemented with an overlay.');
        });
    }

    // Smooth Scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Intersection Observer for Scroll Animations
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.15
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Elements to animate
    const animateElements = document.querySelectorAll(
        '.fade-in-up, .reveal-left, .reveal-right, .reveal-up'
    );

    animateElements.forEach(el => {
        observer.observe(el);
    });

    // Testimonial Carousel
    const testimonials = document.querySelectorAll('.testimonial-card');
    const prevBtn = document.querySelector('.nav-btn.prev');
    const nextBtn = document.querySelector('.nav-btn.next');
    
    let currentIndex = 0;
    const intervalTime = 6000;
    let carouselInterval;

    function showTestimonial(index) {
        testimonials.forEach(t => t.classList.remove('active'));
        testimonials[index].classList.add('active');
    }

    function nextTestimonial() {
        currentIndex++;
        if (currentIndex >= testimonials.length) currentIndex = 0;
        showTestimonial(currentIndex);
    }

    function prevTestimonial() {
        currentIndex--;
        if (currentIndex < 0) currentIndex = testimonials.length - 1;
        showTestimonial(currentIndex);
    }

    if (testimonials.length > 0) {
        nextBtn.addEventListener('click', () => {
            nextTestimonial();
            resetInterval();
        });

        prevBtn.addEventListener('click', () => {
            prevTestimonial();
            resetInterval();
        });

        carouselInterval = setInterval(nextTestimonial, intervalTime);

        function resetInterval() {
            clearInterval(carouselInterval);
            carouselInterval = setInterval(nextTestimonial, intervalTime);
        }
    }

    // Unlimited Services Carousel
    const servicesTrack = document.querySelector('.carousel-track');
    if (servicesTrack) {
        const sPrevBtn = document.querySelector('.carousel-container .prev-btn');
        const sNextBtn = document.querySelector('.carousel-container .next-btn');
        const cards = Array.from(servicesTrack.children);
        
        // Clone first few and last few items for infinite illusion
        const itemsToClone = 3;
        
        for (let i = 0; i < itemsToClone; i++) {
            const cloneFirst = cards[i].cloneNode(true);
            const cloneLast = cards[cards.length - 1 - i].cloneNode(true);
            servicesTrack.appendChild(cloneFirst);
            servicesTrack.insertBefore(cloneLast, servicesTrack.firstChild);
        }
        
        const allCards = Array.from(servicesTrack.children);
        let sCurrentIndex = itemsToClone;
        
        function updateServicesCarousel(animate = true) {
            if (allCards.length === 0) return;
            const cardWidth = allCards[0].getBoundingClientRect().width;
            const gap = 20; // 10px margin on each side means total gap is 20px
            servicesTrack.style.transition = animate ? 'transform 0.5s ease-in-out' : 'none';
            servicesTrack.style.transform = `translateX(-${sCurrentIndex * (cardWidth + gap)}px)`;
        }
        
        setTimeout(() => updateServicesCarousel(false), 100);
        window.addEventListener('resize', () => updateServicesCarousel(false));

        let isAnimating = false;

        sNextBtn.addEventListener('click', () => {
            if (isAnimating) return;
            isAnimating = true;
            sCurrentIndex++;
            updateServicesCarousel();
            
            setTimeout(() => {
                if (sCurrentIndex >= allCards.length - itemsToClone) {
                    sCurrentIndex = itemsToClone;
                    updateServicesCarousel(false);
                }
                isAnimating = false;
            }, 500); // match transition duration
        });

        sPrevBtn.addEventListener('click', () => {
            if (isAnimating) return;
            isAnimating = true;
            sCurrentIndex--;
            updateServicesCarousel();
            
            setTimeout(() => {
                if (sCurrentIndex <= itemsToClone - 1) {
                    sCurrentIndex = allCards.length - (itemsToClone * 2) - 1 + itemsToClone;
                    updateServicesCarousel(false);
                }
                isAnimating = false;
            }, 500); // match transition duration
        });
    }
});
