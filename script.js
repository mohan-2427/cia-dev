// Smooth scrolling and animations
document.addEventListener('DOMContentLoaded', function() {
    
    // Animate elements on scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);
    
    // Add scroll animation class to elements
    const animateElements = document.querySelectorAll('.supplier-card, .card-hover, .bg-\\[\\#FFF9E5\\]');
    animateElements.forEach(el => {
        el.classList.add('animate-on-scroll');
        observer.observe(el);
    });
    
    // Stagger animation for category cards
    const categoryCards = document.querySelectorAll('.card-hover');
    categoryCards.forEach((card, index) => {
        card.style.animationDelay = `${index * 0.1}s`;
    });
    
    // Stagger animation for supplier cards
    const supplierCards = document.querySelectorAll('.supplier-card');
    supplierCards.forEach((card, index) => {
        card.style.animationDelay = `${index * 0.2}s`;
    });
    
    // Navbar scroll effect
    let lastScrollTop = 0;
    const navbar = document.querySelector('.fixed-header');
    
    window.addEventListener('scroll', function() {
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        if (scrollTop > lastScrollTop && scrollTop > 100) {
            // Scrolling down
            navbar.style.transform = 'translateY(-100%)';
        } else {
            // Scrolling up
            navbar.style.transform = 'translateY(0)';
        }
        
        // Add background blur when scrolled
        if (scrollTop > 50) {
            navbar.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
            navbar.style.backdropFilter = 'blur(10px)';
        } else {
            navbar.style.backgroundColor = 'rgba(255, 255, 255, 1)';
            navbar.style.backdropFilter = 'none';
        }
        
        lastScrollTop = scrollTop;
    });
    
    // Smooth hover effects for buttons (exclude CIA logo)
    const buttons = document.querySelectorAll('button, .inline-block:not(.center-logo)');
    buttons.forEach(button => {
        button.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-2px) scale(1.02)';
        });
        
        button.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
    
    // --- CIA logo shadow effect (no animation, no movement) ---
    const centerLogo = document.querySelector('.center-logo');
    if (centerLogo) {
        centerLogo.addEventListener('click', function(e) {
            e.preventDefault();
            centerLogo.style.boxShadow = '0 0 40px 8px #fbbf24, 0 0 0 4px #3b82f6';
            setTimeout(() => {
                centerLogo.style.boxShadow = '';
            }, 600);
        });
    }
    
    // Add ripple effect (exclude CIA logo)
    function createRipple(event) {
        const button = event.currentTarget;
        const circle = document.createElement('span');
        const diameter = Math.max(button.clientWidth, button.clientHeight);
        const radius = diameter / 2;

        circle.style.width = circle.style.height = `${diameter}px`;
        circle.style.left = `${event.clientX - button.offsetLeft - radius}px`;
        circle.style.top = `${event.clientY - button.offsetTop - radius}px`;
        circle.classList.add('ripple');
        
        const ripple = button.getElementsByClassName('ripple')[0];
        if (ripple) {
            ripple.remove();
        }
        
        button.appendChild(circle);
    }
    
    // Add ripple effect CSS
    const rippleCSS = `
        .ripple {
            position: absolute;
            border-radius: 50%;
            background-color: rgba(255, 255, 255, 0.6);
            transform: scale(0);
            animation: ripple-animation 0.6s linear;
            pointer-events: none;
        }
        
        @keyframes ripple-animation {
            to {
                transform: scale(4);
                opacity: 0;
            }
        }
    `;
    
    const style = document.createElement('style');
    style.textContent = rippleCSS;
    document.head.appendChild(style);
    
    // Apply ripple effect only to buttons (exclude CIA logo)
    buttons.forEach(button => {
        button.addEventListener('click', createRipple);
        button.style.position = 'relative';
        button.style.overflow = 'hidden';
    });
    
    // Animate stats numbers
    function animateNumbers() {
        const stats = document.querySelectorAll('.font-semibold');
        stats.forEach(stat => {
            const text = stat.textContent;
            const number = parseInt(text.replace(/,/g, '').replace('+', ''));
            
            if (!isNaN(number) && number > 100) {
                let current = 0;
                const increment = number / 50;
                const timer = setInterval(() => {
                    current += increment;
                    if (current >= number) {
                        stat.textContent = text;
                        clearInterval(timer);
                    } else {
                        const formattedNumber = Math.floor(current).toLocaleString();
                        stat.textContent = formattedNumber + '+';
                    }
                }, 30);
            }
        });
    }
    
    // Trigger number animation when stats section comes into view
    const statsSection = document.querySelector('.bg-\\[\\#FFF9E5\\]');
    if (statsSection) {
        const statsObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    animateNumbers();
                    statsObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.5 });
        
        statsObserver.observe(statsSection);
    }
    
    // Smooth scroll for anchor links
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
    
    // Add loading animation for images
    const images = document.querySelectorAll('img');
    images.forEach(img => {
        img.addEventListener('load', function() {
            this.style.opacity = '1';
        });
    });
    
    // Parallax effect for hero section
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const parallax = document.querySelector('.hero-gradient');
        if (parallax) {
            const speed = scrolled * 0.5;
            parallax.style.transform = `translateY(${speed}px)`;
        }
    });
    
    // Announcement popup logic
    const announcementBtn = document.getElementById('announcementBtn');
    const announcementBar = document.getElementById('announcementBar');
    const announcementClose = document.getElementById('announcementClose');

    if (announcementBtn && announcementBar && announcementClose) {
        announcementBtn.addEventListener('click', function() {
            announcementBar.classList.add('active');
            announcementBtn.style.display = 'none';
        });
        announcementClose.addEventListener('click', function() {
            announcementBar.classList.remove('active');
            announcementBtn.style.display = 'flex';
        });
    }
});

// Add smooth page transitions
window.addEventListener('beforeunload', function() {
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.3s ease';
});

// Performance optimization for animations
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
if (prefersReducedMotion.matches) {
    // Disable animations for users who prefer reduced motion
    const style = document.createElement('style');
    style.textContent = `
        *, *::before, *::after {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
        }
    `;
    document.head.appendChild(style);
}

// X-split triangle navigation logic
const links = {
  'triangle-1': 'https://www.google.com/',
  'triangle-2': 'https://www.google.com/',
  'triangle-3': 'https://www.google.com/',
  'triangle-4': 'https://www.google.com/'
};

document.querySelectorAll('.triangle').forEach(t => {
  t.onclick = e => {
    if (t.classList.contains('active')) {
      location.href = links[[...t.classList].find(c => c.startsWith('triangle-'))];
      return;
    }
    document.querySelectorAll('.triangle').forEach(x => x.classList.remove('active'));
    t.classList.add('active');
    e.stopPropagation();
  };
});

document.onclick = e => {
  if (!e.target.classList.contains('triangle'))
    document.querySelectorAll('.triangle').forEach(x => x.classList.remove('active'));
};
