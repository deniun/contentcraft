// ===== Navbar Scroll Effect =====
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// ===== Smooth Scroll =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ===== AOS (Animate On Scroll) Simple Implementation =====
const observerOptions = {
    threshold: 0.2,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const delay = entry.target.getAttribute('data-aos-delay') || 0;
            setTimeout(() => {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0) scale(1)';
            }, delay);
        }
    });
}, observerOptions);

// Observe all elements with data-aos attribute
document.querySelectorAll('[data-aos]').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(50px) scale(0.95)';
    el.style.transition = 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)';
    observer.observe(el);
});

// ===== Counter Animation =====
const counterElements = document.querySelectorAll('.stat-number-big');

const animateCounter = (el) => {
    const target = parseInt(el.getAttribute('data-target'));
    const duration = 2000; // 2 seconds
    const increment = target / (duration / 16); // 60 fps
    let current = 0;

    const updateCounter = () => {
        current += increment;
        if (current < target) {
            el.textContent = Math.floor(current);
            requestAnimationFrame(updateCounter);
        } else {
            el.textContent = target;
        }
    };

    updateCounter();
};

const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            animateCounter(entry.target);
            counterObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

counterElements.forEach(el => counterObserver.observe(el));

// ===== Parallax Effect for Showcase Images =====
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const showcaseImages = document.querySelectorAll('.showcase-visual img');
    
    showcaseImages.forEach((img, index) => {
        const speed = 0.3;
        const yPos = -(scrolled * speed);
        img.style.transform = `translateY(${yPos}px) scale(1.1)`;
    });
});

// ===== Portfolio Item Click Effect =====
const portfolioItems = document.querySelectorAll('.portfolio-big-item');

portfolioItems.forEach(item => {
    item.addEventListener('click', function() {
        // Add a subtle click animation
        this.style.transform = 'scale(0.98)';
        setTimeout(() => {
            this.style.transform = '';
        }, 200);
    });
});

// ===== Loading Animation =====
window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    setTimeout(() => {
        document.body.style.transition = 'opacity 0.5s';
        document.body.style.opacity = '1';
    }, 100);
});

// ===== Mouse Cursor Effect (Optional) =====
const cursor = document.createElement('div');
cursor.className = 'custom-cursor';
cursor.style.cssText = `
    width: 20px;
    height: 20px;
    border: 2px solid #FF3366;
    border-radius: 50%;
    position: fixed;
    pointer-events: none;
    z-index: 9999;
    transition: all 0.1s ease;
    display: none;
`;
document.body.appendChild(cursor);

document.addEventListener('mousemove', (e) => {
    cursor.style.display = 'block';
    cursor.style.left = e.clientX - 10 + 'px';
    cursor.style.top = e.clientY - 10 + 'px';
});

// Enlarge cursor on hover over interactive elements
const interactiveElements = document.querySelectorAll('a, button, .portfolio-big-item');
interactiveElements.forEach(el => {
    el.addEventListener('mouseenter', () => {
        cursor.style.width = '40px';
        cursor.style.height = '40px';
        cursor.style.backgroundColor = 'rgba(255, 51, 102, 0.2)';
    });
    
    el.addEventListener('mouseleave', () => {
        cursor.style.width = '20px';
        cursor.style.height = '20px';
        cursor.style.backgroundColor = 'transparent';
    });
});
