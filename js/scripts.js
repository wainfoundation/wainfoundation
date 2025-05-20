// Mobile Menu Toggle
const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('.main-nav');
const backdrop = document.querySelector('.backdrop');
const hamburgerIcon = document.querySelector('.hamburger-icon');
const navLinks = document.querySelectorAll('.main-nav a');
const profileIcon = document.querySelector('.profile-icon');
const profileDropdown = document.querySelector('.profile-dropdown');

if (hamburger && nav && backdrop && hamburgerIcon) {
    hamburger.addEventListener('click', () => {
        const isExpanded = hamburger.getAttribute('aria-expanded') === 'true';
        hamburger.setAttribute('aria-expanded', !isExpanded);
        nav.classList.toggle('active');
        backdrop.classList.toggle('active');
        hamburgerIcon.classList.toggle('active');
        document.body.classList.toggle('no-scroll');
        if (profileDropdown) {
            profileDropdown.classList.remove('active');
            profileIcon.setAttribute('aria-expanded', 'false');
        }
    });

    backdrop.addEventListener('click', () => {
        hamburger.setAttribute('aria-expanded', 'false');
        nav.classList.remove('active');
        backdrop.classList.remove('active');
        hamburgerIcon.classList.remove('active');
        if (profileDropdown) {
            profileDropdown.classList.remove('active');
            profileIcon.setAttribute('aria-expanded', 'false');
        }
        document.body.classList.remove('no-scroll');
    });
}

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        if (hamburger && nav && backdrop && hamburgerIcon) {
            hamburger.setAttribute('aria-expanded', 'false');
            nav.classList.remove('active');
            backdrop.classList.remove('active');
            hamburgerIcon.classList.remove('active');
            document.body.classList.remove('no-scroll');
        }
    });
    link.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            link.click();
        }
    });
});

// Profile Dropdown
if (profileIcon && profileDropdown) {
    profileIcon.addEventListener('click', () => {
        const isExpanded = profileIcon.getAttribute('aria-expanded') === 'true';
        profileIcon.setAttribute('aria-expanded', !isExpanded);
        profileDropdown.classList.toggle('active');
        if (nav && hamburger && hamburgerIcon) {
            nav.classList.remove('active');
            hamburger.setAttribute('aria-expanded', 'false');
            hamburgerIcon.classList.remove('active');
        }
        backdrop.classList.toggle('active', !isExpanded);
    });
}

// Close menus on main content click
document.addEventListener('click', (e) => {
    if (nav && hamburger && profileIcon && profileDropdown && 
        !nav.contains(e.target) && !hamburger.contains(e.target) && 
        !profileIcon.contains(e.target) && !profileDropdown.contains(e.target)) {
        hamburger.setAttribute('aria-expanded', 'false');
        nav.classList.remove('active');
        profileIcon.setAttribute('aria-expanded', 'false');
        profileDropdown.classList.remove('active');
        backdrop.classList.remove('active');
        hamburgerIcon.classList.remove('active');
        document.body.classList.remove('no-scroll');
    }
});

// Scroll Animation Trigger with Fallback
const animateSections = document.querySelectorAll('section[role="region"]');
if ('IntersectionObserver' in window) {
    const observerOptions = { threshold: 0.1 };
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    animateSections.forEach(section => observer.observe(section));
} else {
    // Fallback: Show all sections immediately
    animateSections.forEach(section => {
        section.classList.add('animate');
    });
}

// Back-to-top button
const backToTop = document.querySelector('.back-to-top');
if (backToTop) {
    window.addEventListener('scroll', () => {
        backToTop.classList.toggle('visible', window.scrollY > 300);
    });
    backToTop.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}

// Bottom Navigation Active State
const bottomNavLinks = document.querySelectorAll('.bottom-nav a');
bottomNavLinks.forEach(link => {
    if (link.href === window.location.href) {
        link.classList.add('active');
    }
});
