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
        // Prevent any scroll behavior during transition
        const preventScroll = (e) => e.preventDefault();
        window.addEventListener('scroll', preventScroll, { passive: false });

        // Add transitioning class for smooth animation
        carousel.classList.add('transitioning');

        // Update content immediately for faster transitions
        carousel.innerHTML = containerSets[currentSlide];

        // Force reflow to ensure content is rendered
        carousel.offsetHeight;

        // Remove transitioning class quickly
        setTimeout(() => {
            carousel.classList.remove('transitioning');
        }, 50);

        // Re-enable scroll after transition
        setTimeout(() => {
            window.removeEventListener('scroll', preventScroll);
        }, 100);

        // Update dots with animation
        dots.forEach((dot, index) => {
            if (index === currentSlide) {
                dot.classList.add('active');
                dot.classList.remove('bg-gray-300');
                dot.classList.add('bg-yellow-500');
                dot.style.transform = 'scale(1.25)';
                dot.style.boxShadow = '0 0 10px rgba(251, 191, 36, 0.5)';
            } else {
                dot.classList.remove('active');
                dot.classList.remove('bg-yellow-500');
                dot.classList.add('bg-gray-300');
                dot.style.transform = 'scale(1)';
                dot.style.boxShadow = 'none';
            }
        });
    }
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % totalSlides;
    updateCarousel();
}

function prevSlide() {
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

// Preload carousel images for faster transitions
function preloadImages() {
    const imageUrls = [
        'https://images.pexels.com/photos/532079/pexels-photo-532079.jpeg',
        'https://images.pexels.com/photos/236089/pexels-photo-236089.jpeg',
        'https://images.pexels.com/photos/31115985/pexels-photo-31115985.jpeg',
        'https://images.pexels.com/photos/31199566/pexels-photo-31199566.jpeg',
        'https://images.pexels.com/photos/8982670/pexels-photo-8982670.jpeg',
        'https://images.pexels.com/photos/33559313/pexels-photo-33559313.jpeg',
        'https://images.pexels.com/photos/1145434/pexels-photo-1145434.jpeg',
        'https://images.pexels.com/photos/9550574/pexels-photo-9550574.jpeg',
        'https://images.pexels.com/photos/3862627/pexels-photo-3862627.jpeg',
        'https://images.pexels.com/photos/1267338/pexels-photo-1267338.jpeg'
    ];

    imageUrls.forEach(url => {
        const img = new Image();
        img.src = url;
    });
}

// Main initialization
document.addEventListener('DOMContentLoaded', function() {
    // Preload images first
    preloadImages();

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

    // Auto-play carousel
    let carouselInterval;
    let isPageVisible = true;

    function startCarousel() {
        if (carouselInterval) clearInterval(carouselInterval);
        carouselInterval = setInterval(() => {
            if (isPageVisible) {
                nextSlide();
            }
        }, 5000); // Changed to 5 seconds for better user experience
    }

    function stopCarousel() {
        if (carouselInterval) {
            clearInterval(carouselInterval);
            carouselInterval = null;
        }
    }

    // Handle page visibility changes
    document.addEventListener('visibilitychange', function() {
        if (document.hidden) {
            isPageVisible = false;
            stopCarousel();
        } else {
            isPageVisible = true;
            startCarousel();
        }
    });

    // Pause carousel on hover
    const heroSection = document.querySelector('#heroCarousel');
    if (heroSection) {
        heroSection.addEventListener('mouseenter', stopCarousel);
        heroSection.addEventListener('mouseleave', startCarousel);
    }

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
    const animateElements = document.querySelectorAll('.supplier-card, .card-hover');
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
    
    // Smooth hover effects for buttons
    const buttons = document.querySelectorAll('button, .inline-block:not(.center-logo)');
    buttons.forEach(button => {
        button.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-2px) scale(1.02)';
        });
        
        button.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
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

    // Smooth scroll for anchor links (only valid anchors, not empty #)
    document.querySelectorAll('a[href^="#"]:not([href="#"])').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const href = this.getAttribute('href');

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

    // Prevent default behavior for empty anchor links
    document.querySelectorAll('a[href="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
        });
    });
    
    // Add loading animation for images
    const images = document.querySelectorAll('img');
    images.forEach(img => {
        img.addEventListener('load', function() {
            this.style.opacity = '1';
        });
    });
});

// Add CSS for smooth transitions and hover effects
const carouselCSS = `
    #heroCarousel.transitioning {
        opacity: 0.9;
        transition: opacity 0.15s ease-in-out;
    }

    .carousel-dot {
        transition: all 0.3s ease;
        cursor: pointer;
    }

    .carousel-dot:hover {
        transform: scale(1.1) !important;
        opacity: 0.8;
    }

    /* Hover effects for carousel images */
    #heroCarousel > div {
        transition: all 0.3s ease;
        cursor: pointer;
    }

    #heroCarousel > div:hover {
        transform: scale(1.03);
        z-index: 10;
        box-shadow: 0 10px 25px rgba(0, 0, 0, 0.3);
    }

    #heroCarousel > div img {
        transition: all 0.3s ease;
    }

    #heroCarousel > div:hover img {
        transform: scale(1.02);
    }

    .animate-on-scroll {
        opacity: 0;
        transform: translateY(20px);
        transition: all 0.6s ease;
    }

    .animate-on-scroll.visible {
        opacity: 1;
        transform: translateY(0);
    }
`;

const style = document.createElement('style');
style.textContent = carouselCSS;
document.head.appendChild(style);
