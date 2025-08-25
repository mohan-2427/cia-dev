// Hero Carousel functionality
let currentSlide = 1;
const totalSlides = 3;

// Container sets for different slides - Updated for 5 containers (7x2 grid)
const containerSets = [
    // Slide 1 - Industrial Excellence (5 containers)
    `
      <!-- Container 1 - Large hero (spans 3x2) -->
      <div onclick="window.open('https://www.google.com', '_blank')" class="col-span-3 row-span-2 rounded-xl overflow-hidden shadow-lg bg-black relative hero-container cursor-pointer">
        <img src="https://images.pexels.com/photos/532079/pexels-photo-532079.jpeg" alt="Industrial Excellence" class="w-full h-full object-cover" />
        <div class="absolute inset-0 bg-gradient-to-t from-black/80 to-black/30 w-full h-auto flex-grow"></div>
        <div class="absolute bottom-8 left-8 text-white">
          <h3 class="text-2xl font-bold mb-2">Industrial Excellence</h3>
          <p class="text-base opacity-90">Connecting industries and fostering growth in Coimbatore's manufacturing sector</p>
        </div>
      </div>
      <!-- Container 2 - Medium (spans 2x1) -->
      <div onclick="window.open('https://www.google.com', '_blank')" class="col-span-2 row-span-1 rounded-xl overflow-hidden shadow-lg bg-black relative cursor-pointer">
        <img src="https://images.pexels.com/photos/236089/pexels-photo-236089.jpeg" alt="Electrical Power Equipment" class="w-full h-full object-cover" />
        <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-black/20"></div>
        <div class="absolute bottom-4 left-4 text-white">
          <h4 class="text-lg font-bold">Electrical</h4>
          <p class="text-sm opacity-80">Power solutions & equipment</p>
        </div>
      </div>
      <!-- Container 3 - Small (spans 2x1) -->
      <div onclick="window.open('https://www.google.com', '_blank')" class="col-span-2 row-span-1 rounded-xl overflow-hidden shadow-lg bg-black relative cursor-pointer">
        <img src="https://images.pexels.com/photos/31115985/pexels-photo-31115985.jpeg" alt="Plastic Manufacturing" class="w-full h-full object-cover" />
        <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-black/20"></div>
        <div class="absolute bottom-4 left-4 text-white">
          <h4 class="text-lg font-bold">Plastic</h4>
          <p class="text-sm opacity-80">Manufacturing & molding</p>
        </div>
      </div>
      <!-- Container 4 - Medium tall (spans 2x1) -->
      <div onclick="window.open('https://www.google.com', '_blank')" class="col-span-2 row-span-1 rounded-xl overflow-hidden shadow-lg bg-black relative cursor-pointer">
        <img src="https://images.pexels.com/photos/31199566/pexels-photo-31199566.jpeg" alt="Textile Manufacturing" class="w-full h-full object-cover" />
        <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-black/20"></div>
        <div class="absolute bottom-4 left-4 text-white">
          <h4 class="text-lg font-bold">Textile</h4>
          <p class="text-sm opacity-80">Fabric & garment industry</p>
        </div>
      </div>
      <!-- Container 5 - Small (spans 2x1) -->
      <div onclick="window.open('https://www.google.com', '_blank')" class="col-span-2 row-span-1 rounded-xl overflow-hidden shadow-lg bg-black relative cursor-pointer">
        <img src="https://images.pexels.com/photos/8982670/pexels-photo-8982670.jpeg" alt="Automation Equipment" class="w-full h-full object-cover" />
        <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-black/20"></div>
        <div class="absolute bottom-4 left-4 text-white">
          <h4 class="text-lg font-bold">Automation</h4>
          <p class="text-sm opacity-80">Smart manufacturing</p>
        </div>
      </div>
    `,
    // Slide 2 - Metal Working & Production (5 containers)
    `
      <!-- Container 1 - Small (spans 2x1) -->
      <div onclick="window.open('https://www.google.com', '_blank')" class="col-span-2 row-span-1 rounded-xl overflow-hidden shadow-lg bg-black relative cursor-pointer">
        <img src="https://images.pexels.com/photos/33559313/pexels-photo-33559313.jpeg" alt="Engineering Equipment" class="w-full h-full object-cover" />
        <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-black/20"></div>
        <div class="absolute bottom-4 left-4 text-white">
          <h4 class="text-lg font-bold">Engineering</h4>
          <p class="text-sm opacity-80">Technical solutions</p>
        </div>
      </div>
      <!-- Container 2 - Large metal working hero (spans 3x2) -->
      <div onclick="window.open('https://www.google.com', '_blank')" class="col-span-3 row-span-2 rounded-xl overflow-hidden shadow-lg bg-black relative hero-container cursor-pointer">
        <img src="https://images.pexels.com/photos/1145434/pexels-photo-1145434.jpeg" alt="Metal Working Operations" class="w-full h-full object-cover" />
        <div class="absolute inset-0 bg-gradient-to-t from-black/80 to-black/30 w-full h-auto flex-grow"></div>
        <div class="absolute bottom-8 left-8 text-white">
          <h3 class="text-2xl font-bold mb-2">Metal Working & Production</h3>
          <p class="text-base opacity-90">Advanced metalworking solutions and production equipment</p>
        </div>
      </div>
      <!-- Container 3 - Small (spans 2x1) -->
      <div onclick="window.open('https://www.google.com', '_blank')" class="col-span-2 row-span-1 rounded-xl overflow-hidden shadow-lg bg-black relative cursor-pointer">
        <img src="https://images.pexels.com/photos/9550574/pexels-photo-9550574.jpeg" alt="Kitchen Equipment" class="w-full h-full object-cover" />
        <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-black/20"></div>
        <div class="absolute bottom-4 left-4 text-white">
          <h4 class="text-lg font-bold">Kitchen</h4>
          <p class="text-sm opacity-80">Commercial equipment</p>
        </div>
      </div>
      <!-- Container 4 - Small (spans 2x1) -->
      <div onclick="window.open('https://www.google.com', '_blank')" class="col-span-2 row-span-1 rounded-xl overflow-hidden shadow-lg bg-black relative cursor-pointer">
        <img src="https://images.pexels.com/photos/3862627/pexels-photo-3862627.jpeg" alt="Production Systems" class="w-full h-full object-cover" />
        <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-black/20"></div>
        <div class="absolute bottom-4 left-4 text-white">
          <h4 class="text-lg font-bold">Production</h4>
          <p class="text-sm opacity-80">Manufacturing systems</p>
        </div>
      </div>
      <!-- Container 5 - Small (spans 2x1) -->
      <div onclick="window.open('https://www.google.com', '_blank')" class="col-span-2 row-span-1 rounded-xl overflow-hidden shadow-lg bg-black relative cursor-pointer">
        <img src="https://images.pexels.com/photos/1267338/pexels-photo-1267338.jpeg" alt="Packaging Equipment" class="w-full h-full object-cover" />
        <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-black/20"></div>
        <div class="absolute bottom-4 left-4 text-white">
          <h4 class="text-lg font-bold">Packing</h4>
          <p class="text-sm opacity-80">Packaging solutions</p>
        </div>
      </div>
    `,
    // Slide 3 - Advanced Manufacturing (5 containers)
    `
      <!-- Container 1 - Small (spans 2x1) -->
      <div onclick="window.open('https://www.google.com', '_blank')" class="col-span-2 row-span-1 rounded-xl overflow-hidden shadow-lg bg-black relative cursor-pointer">
        <img src="https://images.pexels.com/photos/31115985/pexels-photo-31115985.jpeg" alt="Plastic Manufacturing" class="w-full h-full object-cover" />
        <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-black/20"></div>
        <div class="absolute bottom-4 left-4 text-white">
          <h4 class="text-lg font-bold">Plastic</h4>
          <p class="text-sm opacity-80">Manufacturing & molding</p>
        </div>
      </div>
      <!-- Container 2 - Small (spans 2x1) -->
      <div onclick="window.open('https://www.google.com', '_blank')" class="col-span-2 row-span-1 rounded-xl overflow-hidden shadow-lg bg-black relative cursor-pointer">
        <img src="https://images.pexels.com/photos/31199566/pexels-photo-31199566.jpeg" alt="Textile Manufacturing" class="w-full h-full object-cover" />
        <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-black/20"></div>
        <div class="absolute bottom-4 left-4 text-white">
          <h4 class="text-lg font-bold">Textile</h4>
          <p class="text-sm opacity-80">Fabric & garment industry</p>
        </div>
      </div>
      <!-- Container 3 - Large hero (spans 3x2) -->
      <div onclick="window.open('https://www.google.com', '_blank')" class="col-span-3 row-span-2 rounded-xl overflow-hidden shadow-lg bg-black relative hero-container cursor-pointer">
        <img src="https://images.pexels.com/photos/8982670/pexels-photo-8982670.jpeg" alt="Smart Manufacturing" class="w-full h-full object-cover" />
        <div class="absolute inset-0 bg-gradient-to-t from-black/80 to-black/30 w-full h-auto flex-grow"></div>
        <div class="absolute bottom-8 left-8 text-white">
          <h3 class="text-2xl font-bold mb-2">Smart Manufacturing</h3>
          <p class="text-base opacity-90">AI-powered automation and intelligent manufacturing systems</p>
        </div>
      </div>
      <!-- Container 4 - Small (spans 2x1) -->
      <div onclick="window.open('https://www.google.com', '_blank')" class="col-span-2 row-span-1 rounded-xl overflow-hidden shadow-lg bg-black relative cursor-pointer">
        <img src="https://images.pexels.com/photos/236089/pexels-photo-236089.jpeg" alt="Electrical Systems" class="w-full h-full object-cover" />
        <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-black/20"></div>
        <div class="absolute bottom-4 left-4 text-white">
          <h4 class="text-lg font-bold">Electrical</h4>
          <p class="text-sm opacity-80">Power solutions & equipment</p>
        </div>
      </div>
      <!-- Container 5 - Small (spans 2x1) -->
      <div onclick="window.open('https://www.google.com', '_blank')" class="col-span-2 row-span-1 rounded-xl overflow-hidden shadow-lg bg-black relative cursor-pointer">
        <img src="https://images.pexels.com/photos/532079/pexels-photo-532079.jpeg" alt="Industrial Equipment" class="w-full h-full object-cover" />
        <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-black/20"></div>
        <div class="absolute bottom-4 left-4 text-white">
          <h4 class="text-lg font-bold">Industrial</h4>
          <p class="text-sm opacity-80">Heavy equipment solutions</p>
        </div>
      </div>
    `
];

function updateCarousel() {
    const carousel = document.getElementById('heroCarousel');
    const dots = document.querySelectorAll('.carousel-dot');

    if (carousel) {
        // Store current scroll position using multiple methods for better compatibility
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
        const scrollLeft = window.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft || 0;

        // Prevent scroll jumping by temporarily fixing the body position
        const bodyStyle = document.body.style;
        const originalPosition = bodyStyle.position;
        const originalTop = bodyStyle.top;
        const originalLeft = bodyStyle.left;
        const originalWidth = bodyStyle.width;

        // Fix body position to prevent scroll jumping
        bodyStyle.position = 'fixed';
        bodyStyle.top = `-${scrollTop}px`;
        bodyStyle.left = `-${scrollLeft}px`;
        bodyStyle.width = '100%';

        // Add transitioning class for smooth animation
        carousel.classList.add('transitioning');

        // Update content immediately without delays
        carousel.innerHTML = containerSets[currentSlide];

        // Force a reflow to ensure the content is rendered
        carousel.offsetHeight;

        // Restore body position and scroll
        bodyStyle.position = originalPosition;
        bodyStyle.top = originalTop;
        bodyStyle.left = originalLeft;
        bodyStyle.width = originalWidth;

        // Restore scroll position using requestAnimationFrame for better timing
        requestAnimationFrame(() => {
            window.scrollTo(scrollLeft, scrollTop);
            document.documentElement.scrollTop = scrollTop;
            document.documentElement.scrollLeft = scrollLeft;
        });

        // Remove transitioning class
        setTimeout(() => {
            carousel.classList.remove('transitioning');
        }, 50);

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

// Language Toggle Functionality
let currentLanguage = 'EN';

function toggleLanguage() {
    const currentLangEl = document.getElementById('currentLang');
    const nextLangEl = document.getElementById('nextLang');
    const mobileLangEl = document.getElementById('mobileLang');

    if (currentLanguage === 'EN') {
        currentLanguage = 'TM';
        if (currentLangEl) currentLangEl.textContent = 'தமிழ்';
        if (nextLangEl) nextLangEl.textContent = 'EN';
        if (mobileLangEl) mobileLangEl.textContent = 'தமிழ்';
    } else {
        currentLanguage = 'EN';
        if (currentLangEl) currentLangEl.textContent = 'EN';
        if (nextLangEl) nextLangEl.textContent = 'தமிழ்';
        if (mobileLangEl) mobileLangEl.textContent = 'EN';
    }
}

// Smooth scrolling and animations
document.addEventListener('DOMContentLoaded', function() {

    // Initialize carousel
    updateCarousel();

    // Language Toggle Event Listeners
    const languageToggle = document.getElementById('languageToggle');
    const mobileLanguageToggle = document.getElementById('mobileLanguageToggle');

    if (languageToggle) {
        languageToggle.addEventListener('click', toggleLanguage);
    }
    if (mobileLanguageToggle) {
        mobileLanguageToggle.addEventListener('click', toggleLanguage);
    }


    // Dot navigation
    const dots = document.querySelectorAll('.carousel-dot');
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            currentSlide = index;
            updateCarousel();
        });
    });

    // Auto-play carousel with pause on inactive tab to prevent freezing
    let carouselInterval;
    let isPageVisible = true;

    function startCarousel() {
        if (carouselInterval) clearInterval(carouselInterval);
        carouselInterval = setInterval(() => {
            if (isPageVisible) {
                nextSlide();
            }
        }, 8000);
    }

    function stopCarousel() {
        if (carouselInterval) {
            clearInterval(carouselInterval);
            carouselInterval = null;
        }
    }

    // Handle page visibility changes to prevent freezing
    document.addEventListener('visibilitychange', function() {
        if (document.hidden) {
            isPageVisible = false;
            stopCarousel();
        } else {
            isPageVisible = true;
            startCarousel();
        }
    });

    // Start carousel initially
    startCarousel();
    
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
            const href = this.getAttribute('href');

            // Check if href is valid (more than just '#' and contains valid ID)
            if (href && href.length > 1 && href !== '#') {
                try {
                    const target = document.querySelector(href);
                    if (target) {
                        target.scrollIntoView({
                            behavior: 'smooth',
                            block: 'start'
                        });
                    }
                } catch (error) {
                    console.warn('Invalid selector for smooth scroll:', href);
                }
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
    
    // Throttled parallax effect for hero section to improve performance
    let ticking = false;
    function updateParallax() {
        const scrolled = window.pageYOffset;
        const parallax = document.querySelector('.hero-gradient');
        if (parallax) {
            const speed = scrolled * 0.5;
            parallax.style.transform = `translateY(${speed}px)`;
        }
        ticking = false;
    }

    window.addEventListener('scroll', () => {
        if (!ticking) {
            requestAnimationFrame(updateParallax);
            ticking = true;
        }
    });
    
    // Mobile menu functionality
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const mobileMenu = document.getElementById('mobileMenu');
    const mobileProductsBtn = document.getElementById('mobileProductsBtn');
    const mobileProductsMenu = document.getElementById('mobileProductsMenu');

    if (mobileMenuBtn && mobileMenu) {
        mobileMenuBtn.addEventListener('click', function() {
            mobileMenu.classList.toggle('hidden');
            mobileMenuBtn.classList.toggle('active');
        });
    }

    if (mobileProductsBtn && mobileProductsMenu) {
        mobileProductsBtn.addEventListener('click', function() {
            mobileProductsMenu.classList.toggle('hidden');
            const icon = mobileProductsBtn.querySelector('i');
            if (mobileProductsMenu.classList.contains('hidden')) {
                icon.classList.remove('fa-chevron-up');
                icon.classList.add('fa-chevron-down');
            } else {
                icon.classList.remove('fa-chevron-down');
                icon.classList.add('fa-chevron-up');
            }
        });
    }

    // Close mobile menu when clicking outside
    document.addEventListener('click', function(event) {
        if (mobileMenu && !mobileMenu.contains(event.target) && !mobileMenuBtn.contains(event.target)) {
            mobileMenu.classList.add('hidden');
            mobileMenuBtn.classList.remove('active');
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
