// ===== Main JavaScript for Shok Website =====

(function() {
  'use strict';

  // ===== DOM Ready =====
  document.addEventListener('DOMContentLoaded', function() {
    initializeWebsite();
  });

  // ===== Initialize All Features =====
  function initializeWebsite() {
    setupMobileNavigation();
    setupSmoothScrolling();
    setupScrollAnimations();
    setupLoadingScreen();
    setupScrollIndicator();
    setupParallaxEffects();
  }

  // ===== Mobile Navigation =====
  function setupMobileNavigation() {
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    if (!navToggle || !navMenu) return;

    // Toggle mobile menu
    navToggle.addEventListener('click', function() {
      navToggle.classList.toggle('active');
      navMenu.classList.toggle('active');
      document.body.style.overflow = navMenu.classList.contains('active') ? 'hidden' : '';
    });

    // Close menu when clicking on links
    navLinks.forEach(link => {
      link.addEventListener('click', function() {
        navToggle.classList.remove('active');
        navMenu.classList.remove('active');
        document.body.style.overflow = '';
      });
    });

    // Close menu when clicking outside
    document.addEventListener('click', function(e) {
      if (!navToggle.contains(e.target) && !navMenu.contains(e.target)) {
        navToggle.classList.remove('active');
        navMenu.classList.remove('active');
        document.body.style.overflow = '';
      }
    });

    // Handle escape key
    document.addEventListener('keydown', function(e) {
      if (e.key === 'Escape' && navMenu.classList.contains('active')) {
        navToggle.classList.remove('active');
        navMenu.classList.remove('active');
        document.body.style.overflow = '';
      }
    });
  }

  // ===== Smooth Scrolling =====
  function setupSmoothScrolling() {
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
      link.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
          const navHeight = document.querySelector('.nav').offsetHeight;
          const targetPosition = targetElement.offsetTop - navHeight;
          
          window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
          });
        }
      });
    });
  }

  // ===== Scroll Animations =====
  function setupScrollAnimations() {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.animationPlayState = 'running';
          entry.target.classList.add('animated');
        }
      });
    }, observerOptions);

    // Observe elements for animation
    const animateElements = document.querySelectorAll('.feature-card, .contact-email, .description-block, .concept-compact');
    animateElements.forEach(el => {
      el.style.animationPlayState = 'paused';
      observer.observe(el);
    });

    // Header background on scroll
    const nav = document.querySelector('.nav');
    let lastScrollY = window.scrollY;

    window.addEventListener('scroll', function() {
      const currentScrollY = window.scrollY;
      
      // Add/remove background based on scroll position
      if (currentScrollY > 100) {
        nav.style.background = 'rgba(255, 255, 255, 0.98)';
        nav.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
      } else {
        nav.style.background = 'rgba(255, 255, 255, 0.95)';
        nav.style.boxShadow = 'none';
      }

      // Hide/show nav on scroll (optional enhancement)
      if (currentScrollY > lastScrollY && currentScrollY > 200) {
        nav.style.transform = 'translateY(-100%)';
      } else {
        nav.style.transform = 'translateY(0)';
      }
      
      lastScrollY = currentScrollY;
    });
  }



  // ===== Notifications =====
  function showNotification(message, type = 'info') {
    // Remove existing notifications
    const existingNotifications = document.querySelectorAll('.notification');
    existingNotifications.forEach(n => n.remove());
    
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.textContent = message;
    
    // Styles
    Object.assign(notification.style, {
      position: 'fixed',
      top: '20px',
      right: '20px',
      padding: '1rem 1.5rem',
      borderRadius: '12px',
      color: 'white',
      fontWeight: '500',
      fontSize: '0.875rem',
      zIndex: '10000',
      transform: 'translateX(100%)',
      transition: 'transform 0.3s ease',
      maxWidth: '300px',
      boxShadow: '0 8px 30px rgba(0, 0, 0, 0.15)'
    });
    
    // Type-specific styles
    const colors = {
      success: '#34C759',
      error: '#FF3B30',
      info: '#007AFF'
    };
    notification.style.background = colors[type] || colors.info;
    
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
      notification.style.transform = 'translateX(0)';
    }, 100);
    
    // Auto remove
    setTimeout(() => {
      notification.style.transform = 'translateX(100%)';
      setTimeout(() => {
        notification.remove();
      }, 300);
    }, 4000);
  }

  // ===== Loading Screen =====
  function setupLoadingScreen() {
    const loadingScreen = document.createElement('div');
    loadingScreen.className = 'loading';
    loadingScreen.innerHTML = '<div class="loading-spinner"></div>';
    
    document.body.appendChild(loadingScreen);
    
    window.addEventListener('load', function() {
      setTimeout(() => {
        loadingScreen.classList.add('hide');
        setTimeout(() => {
          loadingScreen.remove();
        }, 500);
      }, 500);
    });
  }

  // ===== Scroll Indicator =====
  function setupScrollIndicator() {
    const scrollIndicator = document.querySelector('.scroll-indicator');
    
    if (scrollIndicator) {
      window.addEventListener('scroll', function() {
        const scrolled = window.scrollY;
        const opacity = Math.max(0, 1 - (scrolled / 300));
        scrollIndicator.style.opacity = opacity;
      });
    }
  }

  // ===== Parallax Effects =====
  function setupParallaxEffects() {
    const heroSection = document.querySelector('.hero');
    
    if (heroSection) {
      window.addEventListener('scroll', function() {
        const scrolled = window.scrollY;
        const rate = scrolled * -0.5;
        
        // Only apply if user prefers motion
        if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
          heroSection.style.transform = `translateY(${rate}px)`;
        }
      });
    }
  }

  // ===== Utility Functions =====
  
  // Debounce function for performance
  function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
      const later = () => {
        clearTimeout(timeout);
        func(...args);
      };
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
    };
  }

  // Throttle function for scroll events
  function throttle(func, limit) {
    let inThrottle;
    return function() {
      const args = arguments;
      const context = this;
      if (!inThrottle) {
        func.apply(context, args);
        inThrottle = true;
        setTimeout(() => inThrottle = false, limit);
      }
    };
  }

  // ===== True Infinite Scroll Carousel =====
let currentPosition = 3; // Start at position 3 (showing first real image)
const originalImages = 10;
const totalImages = 16; // 3 duplicates + 10 original + 3 duplicates
const imagesPerView = 3;

function updateCarouselPosition(smooth = true) {
  const carousel = document.getElementById('carouselImages');
  if (!carousel) return;
  
  // Responsive image width based on screen size
  const isMobile = window.innerWidth <= 480;
  const imageWidth = isMobile ? 110 : 260;
  const gap = isMobile ? 4 : 8;
  const offset = -(currentPosition * (imageWidth + gap));
  
  carousel.style.transition = smooth ? 'transform 0.3s ease' : 'none';
  carousel.style.transform = `translateX(${offset}px)`;
}

function nextImage() {
  currentPosition++;
  updateCarouselPosition(true);
  
  // When we reach the end duplicates, jump back to the real beginning
  if (currentPosition >= totalImages - imagesPerView) {
    setTimeout(() => {
      currentPosition = 3; // Jump to real first image position
      updateCarouselPosition(false);
    }, 300);
  }
}

function previousImage() {
  currentPosition--;
  updateCarouselPosition(true);
  
  // When we reach the beginning duplicates, jump to the real end
  if (currentPosition <= 0) {
    setTimeout(() => {
      currentPosition = originalImages; // Jump to real last image position
      updateCarouselPosition(false);
    }, 300);
  }
}

// Initialize carousel when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
  updateCarouselPosition(false);
});

// Update carousel on window resize
window.addEventListener('resize', () => updateCarouselPosition(false));

// Make functions available globally
window.nextImage = nextImage;
window.previousImage = previousImage;

})(); 