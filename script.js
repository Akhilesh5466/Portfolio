// ==========================================================================
// Dark/Light Mode Toggle
// ==========================================================================


// ==========================================================================
// Mobile Hamburger Menu
// ==========================================================================
const hamburger = document.getElementById('hamburger');
const navMenu = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-link');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when a link is clicked
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// ==========================================================================
// Sticky Header & Active Link Highlighting
// ==========================================================================
const header = document.getElementById('header');
const sections = document.querySelectorAll('section');

window.addEventListener('scroll', () => {
    // Sticky Header Shadow
    if (window.scrollY > 50) {
        header.style.boxShadow = 'var(--shadow)';
    } else {
        header.style.boxShadow = 'none';
    }

    // Active Link Highlighting
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (scrollY >= (sectionTop - 150)) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// ==========================================================================
// Back to Top Button
// ==========================================================================
const backToTopBtn = document.getElementById('backToTop');

window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        backToTopBtn.classList.add('active');
    } else {
        backToTopBtn.classList.remove('active');
    }
});

// ==========================================================================
// Scroll Reveal Animation (Intersection Observer)
// ==========================================================================
const revealElements = document.querySelectorAll('.reveal');

const revealOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px"
};

const revealOnScroll = new IntersectionObserver(function(entries, observer) {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            return;
        } else {
            entry.target.classList.add('active');
            observer.unobserve(entry.target); // Stop observing once revealed
        }
    });
}, revealOptions);

revealElements.forEach(el => {
    revealOnScroll.observe(el);
});

// ==========================================================================
// Contact Form Submission (Frontend Only)
// ==========================================================================
const contactForm = document.getElementById('contactForm');
const formMessage = document.getElementById('form-message');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault(); // Prevent page reload
    
    // Get values
    const name = document.getElementById('name').value;
    
    // Show success message
    formMessage.textContent = `Thank you, ${name}! Your message has been sent successfully.`;
    formMessage.className = 'form-message success';
    
    // Clear form
    contactForm.reset();
    
    // Remove message after 5 seconds
    setTimeout(() => {
        formMessage.textContent = '';
        formMessage.className = 'form-message';
    }, 5000);
});