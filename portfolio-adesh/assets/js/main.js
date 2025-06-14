// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Initialize all components
    initComponents();
});

function initComponents() {
    initBootstrapComponents();
    initPreloader();
    initNavbarScroll();
    initBackToTop();
    initSmoothScrolling();
    initPortfolioFilter();
    initContactForm();
    initAnimations();
    initSkillsAnimation();
}

// Initialize all Bootstrap components
function initBootstrapComponents() {
    // Tooltips
    const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    tooltipTriggerList.forEach(function(tooltipTriggerEl) {
        new bootstrap.Tooltip(tooltipTriggerEl);
    });

    // Carousel
    const carouselEl = document.getElementById('testimonialCarousel');
    if (carouselEl) {
        new bootstrap.Carousel(carouselEl);
    }

    // Modals - fixed implementation
    document.querySelectorAll('[data-bs-toggle="modal"]').forEach(trigger => {
        trigger.addEventListener('click', function() {
            const targetModal = this.getAttribute('data-bs-target');
            if (targetModal && targetModal !== '#') {
                const modalEl = document.querySelector(targetModal);
                if (modalEl) {
                    const modal = bootstrap.Modal.getOrCreateInstance(modalEl);
                    modal.show();
                }
            }
        });
    });
}

// Rest of your functions remain unchanged...
function initPreloader() {
    window.addEventListener('load', function() {
        const preloader = document.getElementById('preloader');
        if (preloader) {
            preloader.style.display = 'none';
        }
    });
}

function initNavbarScroll() {
    window.addEventListener('scroll', function() {
        const navbar = document.querySelector('.navbar');
        if (navbar) {
            navbar.classList.toggle('scrolled', window.scrollY > 50);
        }
    });
}

function initBackToTop() {
    const backToTopButton = document.querySelector('.back-to-top');
    if (backToTopButton) {
        window.addEventListener('scroll', function() {
            backToTopButton.classList.toggle('active', window.scrollY > 300);
        });

        backToTopButton.addEventListener('click', function(e) {
            e.preventDefault();
            window.scrollTo({top: 0, behavior: 'smooth'});
        });
    }
}

function initSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');
            if (targetId === '#') {
                e.preventDefault();
                return;
            }
            
            e.preventDefault();
            const target = document.querySelector(targetId);
            if (target) {
                const navbarHeight = document.querySelector('.navbar').offsetHeight || 70;
                window.scrollTo({
                    top: target.offsetTop - navbarHeight,
                    behavior: 'smooth'
                });
            }
        });
    });
}

function initPortfolioFilter() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const portfolioItems = document.querySelectorAll('.portfolio-item');

    if (filterButtons.length && portfolioItems.length) {
        filterButtons.forEach(button => {
            button.addEventListener('click', function() {
                filterButtons.forEach(btn => btn.classList.remove('active'));
                this.classList.add('active');
                
                const filterValue = this.getAttribute('data-filter');
                
                portfolioItems.forEach(item => {
                    item.style.display = (filterValue === 'all' || item.classList.contains(filterValue)) 
                        ? 'block' 
                        : 'none';
                });
            });
        });
    }
}

function initContactForm() {
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Thank you for your message! I will get back to you soon.');
            this.reset();
        });
    }
}

function initAnimations() {
    function animateOnScroll() {
        const elements = document.querySelectorAll('.animate');
        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.3;
            
            element.classList.toggle('animated', elementPosition < screenPosition);
        });
    }
    
    window.addEventListener('scroll', animateOnScroll);
    animateOnScroll();
}

function initSkillsAnimation() {
    function animateSkills() {
        const skillItems = document.querySelectorAll('.skill-item');
        skillItems.forEach(item => {
            const itemPosition = item.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.2;
            item.classList.toggle('in-view', itemPosition < screenPosition);
        });
    }

    window.addEventListener('scroll', animateSkills);
    window.addEventListener('load', animateSkills);
}