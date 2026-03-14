// ===== Hero Background Slideshow =====
const heroSlides = document.querySelectorAll('.hero-slide');
let currentSlide = 0;

function nextSlide() {
    heroSlides[currentSlide].classList.remove('active');
    currentSlide = (currentSlide + 1) % heroSlides.length;
    heroSlides[currentSlide].classList.add('active');
}

// Change slide every 5 seconds
setInterval(nextSlide, 5000);

// ===== Hero Stats Counter Animation =====
const heroStatsNums = document.querySelectorAll('.hero-stats .stat-num');

const animateHeroStats = (counter) => {
    const target = +counter.getAttribute('data-target');
    const increment = target / 100;
    let count = 0;

    const updateCount = () => {
        count += increment;
        if (count < target) {
            counter.textContent = Math.ceil(count);
            requestAnimationFrame(updateCount);
        } else {
            counter.textContent = target;
        }
    };

    updateCount();
};

// Animate on page load
window.addEventListener('load', () => {
    heroStatsNums.forEach(stat => animateHeroStats(stat));
});

// ===== Navbar Scroll Effect =====
const navbar = document.getElementById('navbar');
let lastScrollTop = 0;

window.addEventListener('scroll', () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    // Add scrolled class when scrolled down
    if (scrollTop > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
    
    lastScrollTop = scrollTop;
});

// ===== Fade-in Animation on Scroll =====
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const delay = entry.target.getAttribute('data-delay') || 0;
            setTimeout(() => {
                entry.target.classList.add('visible');
            }, delay);
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe all fade-in elements
const fadeElements = document.querySelectorAll('.fade-in');
fadeElements.forEach(el => observer.observe(el));

// ===== Smooth Scroll for Anchor Links =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        
        if (target) {
            const navbarHeight = navbar.offsetHeight;
            const targetPosition = target.offsetTop - navbarHeight;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// ===== Counter Animation for Stats =====
const counters = document.querySelectorAll('.stat-number');
const counterSpeed = 200; // Lower is faster

const animateCounter = (counter) => {
    const target = +counter.getAttribute('data-target');
    const increment = target / counterSpeed;
    let count = 0;

    const updateCount = () => {
        count += increment;
        if (count < target) {
            counter.textContent = Math.ceil(count);
            requestAnimationFrame(updateCount);
        } else {
            counter.textContent = target;
        }
    };

    updateCount();
};

// Observe counters
const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const counter = entry.target;
            animateCounter(counter);
            counterObserver.unobserve(counter);
        }
    });
}, { threshold: 0.5 });

counters.forEach(counter => counterObserver.observe(counter));

// ===== CTA Button Interactions =====
const ctaButtons = document.querySelectorAll('.btn-primary, .btn-cta');

ctaButtons.forEach(button => {
    button.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-2px)';
    });
    
    button.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
    });
});

// ===== Contact Links - Track Clicks (Optional Analytics) =====
const contactLinks = document.querySelectorAll('.contact-link, .nav-phone');

contactLinks.forEach(link => {
    link.addEventListener('click', function(e) {
        const type = this.href.includes('tel:') ? 'phone' : 'email';
        console.log(`Contact interaction: ${type}`);
        
        // You can add analytics tracking here
        // Example: gtag('event', 'contact_click', { method: type });
    });
});

// ===== Parallax Effect for Hero Section =====
const hero = document.querySelector('.hero');

window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    if (hero && scrolled < window.innerHeight) {
        hero.style.transform = `translateY(${scrolled * 0.5}px)`;
        hero.style.opacity = 1 - (scrolled / window.innerHeight);
    }
});

// ===== Service Card Hover Effects =====
const serviceCards = document.querySelectorAll('.service-card');

serviceCards.forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.borderColor = 'var(--color-accent)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.borderColor = 'var(--color-line)';
    });
});

// ===== Responsive Menu Toggle (for future mobile menu) =====
// This is a placeholder for future mobile menu implementation
const createMobileMenu = () => {
    if (window.innerWidth <= 768) {
        // Mobile menu logic can be added here
        console.log('Mobile view detected');
    }
};

window.addEventListener('resize', createMobileMenu);
createMobileMenu();

// ===== Loading Animation =====
window.addEventListener('load', () => {
    document.body.classList.add('loaded');
    
    // Trigger initial animations
    const heroContent = document.querySelector('.hero-content');
    if (heroContent) {
        heroContent.classList.add('visible');
    }
});

// ===== Prevent FOUC (Flash of Unstyled Content) =====
document.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
        document.body.style.visibility = 'visible';
    }, 100);
});
