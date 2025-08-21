// Hero Carousel functionality
let currentSlide = 1;
const totalSlides = 3;

// Container sets for different slides
const containerSets = [
    // Slide 1 - 6 containers (3x2 grid) - Enlarged
    `
      <!-- Container 1 - Large hero (spans 2x2) -->
      <div class="col-span-2 row-span-2 rounded-2xl overflow-hidden shadow-2xl bg-black relative hero-container">
        <img src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=1200&h=800&fit=crop" alt="Heavy Construction Equipment" class="w-full h-full object-cover" />
        <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent w-full h-auto flex-grow"></div>
        <div class="absolute bottom-8 left-8 text-white">
          <h3 class="text-4xl font-bold mb-3">Heavy Machinery Solutions</h3>
          <p class="text-xl opacity-90">Professional construction equipment</p>
        </div>
      </div>
      <!-- Container 2 - Tall vertical -->
      <div class="col-span-1 row-span-2 rounded-2xl overflow-hidden shadow-2xl bg-black relative">
        <img src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=800&fit=crop" alt="Excavator" class="w-full h-full object-cover" />
        <div class="absolute bottom-6 left-6 bg-blue-600 text-white px-4 py-2 rounded font-semibold text-sm">Excavators</div>
      </div>
      <!-- Container 3 - Wide horizontal -->
      <div class="col-span-2 row-span-1 rounded-2xl overflow-hidden shadow-2xl bg-black relative">
        <img src="https://images.unsplash.com/photo-1577962917302-cd874c4e31d2?w=800&h=400&fit=crop" alt="Industrial Site" class="w-full h-full object-cover" />
        <div class="absolute bottom-6 left-6 bg-yellow-500 text-black px-4 py-2 rounded font-semibold text-sm">Mining Equipment</div>
      </div>
      <!-- Container 4 - Square -->
      <div class="col-span-1 row-span-1 rounded-2xl overflow-hidden shadow-2xl bg-black relative">
        <img src="https://images.unsplash.com/photo-1590736969955-71cc94901144?w=600&h=400&fit=crop" alt="Bulldozer" class="w-full h-full object-cover" />
        <div class="absolute bottom-5 left-5 text-white text-sm font-semibold">Bulldozers</div>
      </div>
      <!-- Container 5 - Square -->
      <div class="col-span-1 row-span-1 rounded-2xl overflow-hidden shadow-2xl bg-black relative">
        <img src="https://images.unsplash.com/photo-1625213464547-b3d8e19e7d77?w=600&h=400&fit=crop" alt="Dump Truck" class="w-full h-full object-cover" />
        <div class="absolute bottom-5 left-5 bg-orange-600 text-white px-3 py-2 rounded font-semibold text-sm">Dump Trucks</div>
      </div>
      <!-- Container 6 - Square -->
      <div class="col-span-1 row-span-1 rounded-2xl overflow-hidden shadow-2xl bg-black relative">
        <img src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop&q=80" alt="Crane Operations" class="w-full h-full object-cover" />
        <div class="absolute bottom-5 left-5 text-white text-sm font-semibold">Cranes</div>
      </div>
    `,
    // Slide 2 - Mining & Extraction (6 containers)
    `
      <!-- Container 1 - Large mining hero -->
      <div class="col-span-2 row-span-2 rounded-xl overflow-hidden shadow-lg bg-black relative hero-container">
        <img src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=900&h=600&fit=crop" alt="Mining Operations" class="w-full h-full object-cover" />
        <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent w-full h-auto flex-grow"></div>
        <div class="absolute bottom-6 left-6 text-white">
          <h3 class="text-2xl font-bold mb-2">Mining & Extraction</h3>
          <p class="text-base opacity-90">Advanced mining solutions</p>
        </div>
      </div>
      <!-- Container 2 - Drilling equipment -->
      <div class="col-span-1 row-span-2 rounded-xl overflow-hidden shadow-lg bg-black relative">
        <img src="https://images.unsplash.com/photo-1587049633312-d628ae50a8ae?w=400&h=800&fit=crop" alt="Drilling Equipment" class="w-full h-full object-cover" />
        <div class="absolute bottom-4 left-4 bg-purple-700 text-white px-3 py-1 rounded font-semibold text-xs">Drilling</div>
      </div>
      <!-- Container 3 - Quarry equipment -->
      <div class="col-span-1 row-span-1 rounded-xl overflow-hidden shadow-lg bg-black relative">
        <img src="https://images.unsplash.com/photo-1577962917302-cd874c4e31d2?w=400&h=300&fit=crop" alt="Quarry Equipment" class="w-full h-full object-cover" />
        <div class="absolute bottom-3 left-3 bg-red-600 text-white px-2 py-1 rounded font-semibold text-xs">Quarry Equipment</div>
      </div>
      <!-- Container 4 - Heavy excavators -->
      <div class="col-span-1 row-span-1 rounded-xl overflow-hidden shadow-lg bg-black relative">
        <img src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop" alt="Heavy Excavators" class="w-full h-full object-cover" />
        <div class="absolute bottom-3 left-3 bg-blue-800 text-white px-2 py-1 rounded font-semibold text-xs">Heavy Excavators</div>
      </div>
      <!-- Container 5 - Transport -->
      <div class="col-span-1 row-span-1 rounded-xl overflow-hidden shadow-lg bg-black relative">
        <img src="https://images.unsplash.com/photo-1625213464547-b3d8e19e7d77?w=400&h=300&fit=crop" alt="Transport Vehicles" class="w-full h-full object-cover" />
        <div class="absolute bottom-3 left-3 bg-orange-700 text-white px-2 py-1 rounded font-semibold text-xs">Transport</div>
      </div>
      <!-- Container 6 - Material handling -->
      <div class="col-span-1 row-span-1 rounded-xl overflow-hidden shadow-lg bg-black relative">
        <img src="https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=400&h=300&fit=crop" alt="Material Handling" class="w-full h-full object-cover" />
        <div class="absolute bottom-3 left-3 bg-green-700 text-white px-2 py-1 rounded font-semibold text-xs">Material Handling</div>
      </div>
    `,
    // Slide 3 - Technology & Automation (6 containers)
    `
      <!-- Container 1 - Warehouse operations -->
      <div class="col-span-1 row-span-2 rounded-xl overflow-hidden shadow-lg bg-black relative">
        <img src="https://images.unsplash.com/photo-1565891741441-64926e441838?w=400&h=600&fit=crop" alt="Warehouse Operations" class="w-full h-full object-cover" />
        <div class="absolute bottom-4 left-4 bg-indigo-600 text-white px-3 py-1 rounded font-semibold text-xs">Warehouse Solutions</div>
      </div>
      <!-- Container 2 - Smart technology hero -->
      <div class="col-span-2 row-span-2 rounded-xl overflow-hidden shadow-lg bg-black relative hero-container">
        <img src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&h=600&fit=crop" alt="Advanced Technology" class="w-full h-full object-cover" />
        <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent w-full h-auto flex-grow"></div>
        <div class="absolute bottom-6 left-6 text-white">
          <h3 class="text-2xl font-bold mb-2">Smart Technology</h3>
          <p class="text-base opacity-90">AI-powered machinery</p>
        </div>
      </div>
      <!-- Container 3 - Specialized equipment -->
      <div class="col-span-1 row-span-1 rounded-xl overflow-hidden shadow-lg bg-black relative">
        <img src="https://images.unsplash.com/photo-1590736969955-71cc94901144?w=400&h=300&fit=crop" alt="Specialized Equipment" class="w-full h-full object-cover" />
        <div class="absolute bottom-3 left-3 bg-teal-600 text-white px-2 py-1 rounded font-semibold text-xs">Specialized</div>
      </div>
      <!-- Container 4 - Precision tools -->
      <div class="col-span-1 row-span-1 rounded-xl overflow-hidden shadow-lg bg-black relative">
        <img src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop" alt="Precision Machinery" class="w-full h-full object-cover" />
        <div class="absolute bottom-3 left-3 bg-pink-600 text-white px-2 py-1 rounded font-semibold text-xs">Precision Tools</div>
      </div>
      <!-- Container 5 - Automation -->
      <div class="col-span-1 row-span-1 rounded-xl overflow-hidden shadow-lg bg-black relative">
        <img src="https://images.unsplash.com/photo-1625213464547-b3d8e19e7d77?w=400&h=300&fit=crop" alt="Automation" class="w-full h-full object-cover" />
        <div class="absolute bottom-3 left-3 bg-cyan-600 text-white px-2 py-1 rounded font-semibold text-xs">Automation</div>
      </div>
      <!-- Container 6 - Industrial complex -->
      <div class="col-span-1 row-span-1 rounded-xl overflow-hidden shadow-lg bg-black relative">
        <img src="https://images.unsplash.com/photo-1577962917302-cd874c4e31d2?w=400&h=300&fit=crop" alt="Industrial Complex" class="w-full h-full object-cover" />
        <div class="absolute bottom-3 left-3 bg-gray-600 text-white px-2 py-1 rounded font-semibold text-xs">Industrial Complex</div>
      </div>
    `
];

function updateCarousel() {
    const carousel = document.getElementById('heroCarousel');
    const dots = document.querySelectorAll('.carousel-dot');

    if (carousel) {
        // Add transitioning class for smooth animation
        carousel.classList.add('transitioning');

        // Update content after brief delay
        setTimeout(() => {
            carousel.innerHTML = containerSets[currentSlide];

            // Remove transitioning class
            setTimeout(() => {
                carousel.classList.remove('transitioning');
            }, 50);
        }, 200);

        // Update dots with animation
        dots.forEach((dot, index) => {
            if (index === currentSlide) {
                dot.classList.add('active');
                dot.classList.remove('bg-gray-300');
                dot.classList.add('bg-yellow-500');
                dot.style.transform = 'scale(1.2)';
            } else {
                dot.classList.remove('active');
                dot.classList.remove('bg-yellow-500');
                dot.classList.add('bg-gray-300');
                dot.style.transform = 'scale(1)';
            }
        });
    }
}

function nextSlide() {
    // Add click animation to button
    const nextBtn = document.getElementById('nextBtn');
    if (nextBtn) {
        nextBtn.style.transform = 'scale(0.9)';
        setTimeout(() => {
            nextBtn.style.transform = 'scale(1.1)';
        }, 100);
    }

    currentSlide = (currentSlide + 1) % totalSlides;
    updateCarousel();
}

function prevSlide() {
    // Add click animation to button
    const prevBtn = document.getElementById('prevBtn');
    if (prevBtn) {
        prevBtn.style.transform = 'scale(0.9)';
        setTimeout(() => {
            prevBtn.style.transform = 'scale(1.1)';
        }, 100);
    }

    currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
    updateCarousel();
}

// Smooth scrolling and animations
document.addEventListener('DOMContentLoaded', function() {

    // Initialize carousel
    updateCarousel();

    // Arrow navigation
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');

    if (prevBtn && nextBtn) {
        prevBtn.addEventListener('click', prevSlide);
        nextBtn.addEventListener('click', nextSlide);
    }

    // Dot navigation
    const dots = document.querySelectorAll('.carousel-dot');
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            currentSlide = index;
            updateCarousel();
        });
    });

    // Auto-play carousel (optional)
    setInterval(nextSlide, 8000);
    
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
