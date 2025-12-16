// ========================================
// OneRelay Landing Page JavaScript
// ========================================

document.addEventListener('DOMContentLoaded', function() {
    
    // Mobile Menu Toggle
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');
    
    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', function() {
            navLinks.classList.toggle('active');
            this.classList.toggle('active');
        });
    }
    
    // Close mobile menu when clicking a link
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            mobileMenuBtn.classList.remove('active');
        });
    });
    
    // Demo Tabs
    const demoTabs = document.querySelectorAll('.demo-tab');
    const demoScreens = document.querySelectorAll('.demo-screen');
    
    demoTabs.forEach(tab => {
        tab.addEventListener('click', function() {
            const targetTab = this.dataset.tab;
            
            // Update active tab
            demoTabs.forEach(t => t.classList.remove('active'));
            this.classList.add('active');
            
            // Update active screen
            demoScreens.forEach(screen => {
                screen.classList.remove('active');
                if (screen.id === `screen-${targetTab}`) {
                    screen.classList.add('active');
                }
            });
        });
    });
    
    // Smooth Scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const headerOffset = 80;
                const elementPosition = target.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                
                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Form Submission
    const demoForm = document.getElementById('demo-form');
    const successModal = document.getElementById('success-modal');
    
    if (demoForm) {
        demoForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(this);
            const data = Object.fromEntries(formData);
            
            // Show loading state
            const submitBtn = this.querySelector('button[type="submit"]');
            const btnText = submitBtn.querySelector('.btn-text');
            const btnLoading = submitBtn.querySelector('.btn-loading');
            
            btnText.style.display = 'none';
            btnLoading.style.display = 'flex';
            submitBtn.disabled = true;
            
            // Simulate API call (replace with actual backend later)
            setTimeout(() => {
                // Store submission data (for demo purposes, using localStorage)
                const submissions = JSON.parse(localStorage.getItem('onerelay_submissions') || '[]');
                submissions.push({
                    ...data,
                    timestamp: new Date().toISOString()
                });
                localStorage.setItem('onerelay_submissions', JSON.stringify(submissions));
                
                // Update modal with user info
                document.getElementById('modal-name').textContent = data.owner_name;
                document.getElementById('modal-shop').textContent = data.shop_name;
                
                // Reset button state
                btnText.style.display = 'inline';
                btnLoading.style.display = 'none';
                submitBtn.disabled = false;
                
                // Show success modal
                successModal.classList.add('active');
                
                // Reset form
                demoForm.reset();
                
                // Log for demo purposes
                console.log('New submission:', data);
                
            }, 1500);
        });
    }
    
    // Close Modal
    window.closeModal = function() {
        successModal.classList.remove('active');
    };
    
    // Close modal when clicking outside
    successModal.addEventListener('click', function(e) {
        if (e.target === this) {
            closeModal();
        }
    });
    
    // Close modal with Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && successModal.classList.contains('active')) {
            closeModal();
        }
    });
    
    // Navbar scroll effect
    const navbar = document.querySelector('.navbar');
    let lastScroll = 0;
    
    window.addEventListener('scroll', function() {
        const currentScroll = window.pageYOffset;
        
        if (currentScroll > 100) {
            navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
        } else {
            navbar.style.boxShadow = 'none';
        }
        
        lastScroll = currentScroll;
    });
    
    // Animate elements on scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observe elements for animation
    document.querySelectorAll('.feature-card, .problem-card, .pricing-card').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
    
    // Phone number formatting
    const phoneInput = document.getElementById('phone');
    if (phoneInput) {
        phoneInput.addEventListener('input', function(e) {
            // Allow only numbers, +, and spaces
            let value = e.target.value.replace(/[^\d+\s]/g, '');
            e.target.value = value;
        });
    }
    
    // Form validation feedback
    const formInputs = document.querySelectorAll('.booking-form input, .booking-form select');
    formInputs.forEach(input => {
        input.addEventListener('blur', function() {
            if (this.required && !this.value) {
                this.style.borderColor = '#ef4444';
            } else {
                this.style.borderColor = '';
            }
        });
        
        input.addEventListener('input', function() {
            if (this.style.borderColor === 'rgb(239, 68, 68)') {
                this.style.borderColor = '';
            }
        });
    });
    
});

// Analytics helper (placeholder for future integration)
function trackEvent(eventName, eventData) {
    console.log('Event:', eventName, eventData);
    // Replace with actual analytics integration (Google Analytics, Mixpanel, etc.)
}

// Track demo access
document.querySelectorAll('a[href*="claude.ai/public/artifacts"]').forEach(link => {
    link.addEventListener('click', function() {
        trackEvent('demo_access', {
            source: this.closest('section')?.id || 'unknown'
        });
    });
});
