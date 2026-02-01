document.addEventListener('DOMContentLoaded', function() {
    console.log('Certificates page loaded');
    
    // Certificate data
    const certificatesData = [
        {
            id: 1,
            title: 'Joining Technologies of metal',
            issuer: 'IIT Roorkee',
            image: 'assets/certificates/cert1.png'
        },
        {
            id: 2,
            title: 'Product Design and Manufacturing',
            issuer: 'IIT Kanpur',
            image: 'assets/certificates/cert2.png'
        },
        {
            id: 3,
            title: 'AI for Beginners',
            issuer: 'HP Life foundation',
            image: 'assets/certificates/cert3.png'
        },
        {
            id: 4,
            title: 'Certificate of Presentation',
            issuer: 'NIT Hamirpur',
            image: 'assets/certificates/cert4.png'
        },
        {
            id: 5,
            title: 'Internship Certificate',
            issuer: 'Feynn Labs Services',
            image: 'assets/certificates/cert5.jpeg'
        },
        {
            id: 6,
            title: 'Summer Intern',
            issuer: 'NorthEastern Railways',
            image: 'assets/certificates/cert6.png'
        },
        {
            id: 7,
            title: 'Winter Intern',
            issuer: 'P.W.D.',
            image: 'assets/certificates/cert7.png'
        },
        {
            id: 8,
            title: 'Training Certificate',
            issuer: 'N.E.R.',
            image: 'assets/certificates/cert8.png'
        }
    ];
    
    // certificates
    function initializeCertificates() {
        const certificateCards = document.querySelectorAll('.certificate-card');
        
        certificateCards.forEach((card, index) => {
            if (certificatesData[index]) {
                const cert = certificatesData[index];
                
                // certificate data attributes
                card.setAttribute('data-certificate-id', cert.id);
                card.setAttribute('data-title', cert.title);
                card.setAttribute('data-issuer', cert.issuer);
                
                const backSide = card.querySelector('.certificate-back .placeholder-img');
                if (backSide) {
                    backSide.innerHTML = `<img src="${cert.image}" alt="${cert.title} Certificate">`;
                }
                
                //click event for flipping
                card.addEventListener('click', function(e) {
                    e.stopPropagation();
                    this.classList.toggle('flipped');
                    
                    // Close other certificates
                    certificateCards.forEach(otherCard => {
                        if (otherCard !== this && otherCard.classList.contains('flipped')) {
                            otherCard.classList.remove('flipped');
                        }
                    });
                });
                
                //hover effect for front side
                const frontSide = card.querySelector('.certificate-front');
                if (frontSide) {
                    frontSide.addEventListener('mouseenter', function() {
                        this.style.transform = 'translateY(-5px)';
                        this.style.boxShadow = '0 15px 35px rgba(0, 188, 212, 0.4)';
                    });
                    
                    frontSide.addEventListener('mouseleave', function() {
                        this.style.transform = 'translateY(0)';
                        this.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.3)';
                    });
                }
            }
        });
    }
    
    initializeCertificates();
    
    // Close certificates when clicking outside
    document.addEventListener('click', function(e) {
        if (!e.target.closest('.certificate-card')) {
            const flippedCertificates = document.querySelectorAll('.certificate-card.flipped');
            flippedCertificates.forEach(cert => {
                cert.classList.remove('flipped');
            });
        }
    });
    
    // Add keyboard navigation for certificates
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            const flippedCertificates = document.querySelectorAll('.certificate-card.flipped');
            flippedCertificates.forEach(cert => {
                cert.classList.remove('flipped');
            });
        }
        
        // Navigate between certificates with arrow keys
        if (e.key === 'ArrowRight' || e.key === 'ArrowLeft') {
            const certificateCards = document.querySelectorAll('.certificate-card');
            const currentIndex = Array.from(certificateCards).findIndex(card => 
                card.classList.contains('flipped')
            );
            
            if (currentIndex !== -1) {
                let nextIndex;
                if (e.key === 'ArrowRight') {
                    nextIndex = (currentIndex + 1) % certificateCards.length;
                } else {
                    nextIndex = (currentIndex - 1 + certificateCards.length) % certificateCards.length;
                }
                
                // Unflip current certificate
                certificateCards[currentIndex].classList.remove('flipped');
                
                // Flip next certificate
                certificateCards[nextIndex].classList.add('flipped');
                
                // Scroll into view
                certificateCards[nextIndex].scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest'
                });
            }
        }
    });
    // Add animation to certificates on scroll
    function animateCertificatesOnScroll() {
        const certificateCards = document.querySelectorAll('.certificate-card');
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry, index) => {
                if (entry.isIntersecting) {
                    setTimeout(() => {
                        entry.target.style.opacity = '1';
                        entry.target.style.transform = 'translateY(0) rotate(0deg)';
                    }, index * 150);
                }
            });
        }, {
            threshold: 0.1
        });
        
        certificateCards.forEach((card, index) => {
            card.style.opacity = '0';
            card.style.transform = 'translateY(30px) rotate(5deg)';
            card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
            observer.observe(card);
        });
    }
    animateCertificatesOnScroll();
});