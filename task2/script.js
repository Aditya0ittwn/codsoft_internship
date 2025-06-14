// Navigation Menu Toggle
const menuBtn = document.querySelector('.menu-btn');
const navLinks = document.querySelector('.nav-links');
let menuOpen = false;

menuBtn.addEventListener('click', () => {
    if (!menuOpen) {
        menuBtn.classList.add('open');
        navLinks.style.display = 'flex';
        navLinks.style.flexDirection = 'column';
        navLinks.style.position = 'absolute';
        navLinks.style.top = '100%';
        navLinks.style.left = '0';
        navLinks.style.width = '100%';
        navLinks.style.background = 'rgba(255, 255, 255, 0.95)';
        navLinks.style.padding = '1rem';
        menuOpen = true;
    } else {
        menuBtn.classList.remove('open');
        navLinks.style.display = 'none';
        menuOpen = false;
    }
});

// Smooth Scroll for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
        if (menuOpen) {
            menuBtn.click();
        }
    });
});

// Testimonial Slider
const testimonials = [
    {
        image: 'https://via.placeholder.com/100',
        text: 'The course structure and teaching methodology are excellent. I landed my dream job after completing the web development course.',
        name: 'John Doe',
        position: 'Web Developer at Tech Corp'
    },
    {
        image: 'https://via.placeholder.com/100',
        text: 'The AI course helped me understand complex concepts in a simple way. The hands-on projects were particularly helpful.',
        name: 'Jane Smith',
        position: 'AI Engineer at Innovation Labs'
    },
    {
        image: 'https://via.placeholder.com/100',
        text: 'Learning mobile app development here was a game-changer. The instructors are knowledgeable and always ready to help.',
        name: 'Mike Johnson',
        position: 'Mobile Developer at App Studio'
    }
];

let currentTestimonial = 0;
const testimonialSlider = document.querySelector('.testimonial-slider');
const sliderDots = document.querySelector('.slider-dots');

// Create dots
testimonials.forEach((_, index) => {
    const dot = document.createElement('div');
    dot.classList.add('dot');
    if (index === 0) dot.classList.add('active');
    dot.addEventListener('click', () => showTestimonial(index));
    sliderDots.appendChild(dot);
});

function showTestimonial(index) {
    const testimonial = testimonials[index];
    const testimonialHTML = `
        <div class="testimonial-card">
            <img src="${testimonial.image}" alt="Student ${index + 1}">
            <p>${testimonial.text}</p>
            <h4>${testimonial.name}</h4>
            <span>${testimonial.position}</span>
        </div>
    `;
    testimonialSlider.innerHTML = testimonialHTML;
    
    // Update dots
    document.querySelectorAll('.dot').forEach((dot, i) => {
        dot.classList.toggle('active', i === index);
    });
}

// Auto-advance testimonials
setInterval(() => {
    currentTestimonial = (currentTestimonial + 1) % testimonials.length;
    showTestimonial(currentTestimonial);
}, 5000);

// Form Handling
const contactForm = document.getElementById('contact-form');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Get form data
    const formData = new FormData(contactForm);
    const data = {};
    formData.forEach((value, key) => data[key] = value);
    
    // Simulate form submission
    const submitButton = contactForm.querySelector('button[type="submit"]');
    submitButton.textContent = 'Sending...';
    submitButton.disabled = true;
    
    // Simulate API call
    setTimeout(() => {
        alert('Thank you for your message! We will get back to you soon.');
        contactForm.reset();
        submitButton.textContent = 'Send Message';
        submitButton.disabled = false;
    }, 1500);
});

// Intersection Observer for Animations
const animateOnScroll = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate');
        }
    });
});

// Add animation to sections
document.querySelectorAll('section').forEach(section => {
    animateOnScroll.observe(section);
});

// Add CSS for dots
const style = document.createElement('style');
style.textContent = `
    .slider-dots {
        display: flex;
        justify-content: center;
        gap: 1rem;
        margin-top: 2rem;
    }
    
    .dot {
        width: 12px;
        height: 12px;
        border-radius: 50%;
        background: #ddd;
        cursor: pointer;
        transition: background 0.3s;
    }
    
    .dot.active {
        background: #3498db;
    }
    
    section {
        opacity: 0;
        transform: translateY(20px);
        transition: all 0.6s ease;
    }
    
    section.animate {
        opacity: 1;
        transform: translateY(0);
    }
`;
document.head.appendChild(style);