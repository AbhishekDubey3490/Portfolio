// Home page JavaScript

document.addEventListener('DOMContentLoaded', function() {
    console.log('Home page loaded');
    
    // Contact form submission
    const contactForm = document.getElementById('messageForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const message = document.getElementById('message').value.trim();
            
            // Basic validation
            if (!name || !email || !message) {
                alert('Please fill in all fields.');
                return;
            }
            
            // Email validation
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                alert('Please enter a valid email address.');
                return;
            }
            
            // ================================================
            // IMPORTANT: CHANGE THIS TO YOUR REAL EMAIL ADDRESS!
            // ================================================
            const yourEmail = 'abhishekdubey3490@gmail.com'; // ← CHANGE THIS!
            // ================================================
            
            // Create mailto link
            const subject = `Portfolio Message from ${name}`;
            const body = `Name: ${name}%0D%0AEmail: ${email}%0D%0A%0D%0AMessage:%0D%0A${message}`;
            const mailtoLink = `mailto:${yourEmail}?subject=${encodeURIComponent(subject)}&body=${body}`;
            
            // Open email client
            window.open(mailtoLink, '_blank'); // Opens in new tab
            
            // Show success message
            alert(`Thank you ${name}! Your message has been prepared. Please click "Send" in your email app to send it to me.`);
            
            // Optional: Clear form after submission
            // contactForm.reset();
        });
    }
    
    // LinkedIn button functionality
    const linkedinBtn = document.querySelector('.linkedin-btn');
    if (linkedinBtn) {
        // Update with your actual LinkedIn URL
        linkedinBtn.href = 'https://linkedin.com/in/YOUR-PROFILE-NAME';
        // Opens in new tab by default
    }
    
    // Profile image hover effect
    const profileImg = document.querySelector('.profile-img');
    if (profileImg) {
        profileImg.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.05)';
            this.style.boxShadow = '0 0 35px rgba(26, 115, 232, 0.7)';
        });
        
        profileImg.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
            this.style.boxShadow = '0 0 25px rgba(26, 115, 232, 0.5)';
        });
    }
    
    // Make LinkedIn button open in new tab
    document.querySelectorAll('.linkedin-btn, .project-link, .resume-btn').forEach(link => {
        link.setAttribute('target', '_blank');
        link.setAttribute('rel', 'noopener noreferrer');
    });
});