 // Mobile Menu Toggle
        const mobileMenuBtn = document.getElementById('mobileMenuBtn');
        const mainNav = document.getElementById('mainNav');
        
        mobileMenuBtn.addEventListener('click', () => {
            mainNav.classList.toggle('active');
        });
        
        // Simple page routing for this single-page demo
        document.addEventListener('DOMContentLoaded', function() {
            // Get current page from URL or default to home
            const path = window.location.pathname;
            let currentPage = 'home';
            
            if (path.includes('about.html')) currentPage = 'about';
            else if (path.includes('services.html')) currentPage = 'services';
            else if (path.includes('contact.html')) currentPage = 'contact';
            
            // Show the appropriate page
            showPage(currentPage);
            
            // Update navigation links
            const navLinks = document.querySelectorAll('nav a');
            navLinks.forEach(link => {
                link.addEventListener('click', function(e) {
                    e.preventDefault();
                    const page = this.getAttribute('href').replace('.html', '');
                    showPage(page);
                    // Update URL without reload
                    window.history.pushState({}, '', `${page}.html`);
                });
            });
            
            // Handle browser back/forward
            window.addEventListener('popstate', function() {
                const path = window.location.pathname;
                let page = 'home';
                
                if (path.includes('about.html')) page = 'about';
                else if (path.includes('services.html')) page = 'services';
                else if (path.includes('contact.html')) page = 'contact';
                
                showPage(page);
            });
        });
        
        function showPage(page) {
            // Hide all pages
            document.getElementById('home-page').style.display = 'none';
            document.getElementById('about-page').style.display = 'none';
            document.getElementById('services-page').style.display = 'none';
            document.getElementById('contact-page').style.display = 'none';
            
            // Show selected page
            document.getElementById(`${page}-page`).style.display = 'block';
            
            // Scroll to top
            window.scrollTo(0, 0);
            
            // Update active nav link
            const navLinks = document.querySelectorAll('nav a');
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href').includes(`${page}.html`)) {
                    link.classList.add('active');
                }
            });
            
            // Close mobile menu if open
            if (mainNav.classList.contains('active')) {
                mainNav.classList.remove('active');
            }
        }
        
        // Form submission handlers
        const bookingForm = document.querySelector('.booking-form');
        if (bookingForm) {
            bookingForm.addEventListener('submit', function(e) {
                e.preventDefault();
                alert('Thank you for your booking request! We will contact you shortly to confirm your appointment.');
                this.reset();
            });
        }
        
        const contactForm = document.querySelector('.contact-form form');
        if (contactForm) {
            contactForm.addEventListener('submit', function(e) {
                e.preventDefault();
                alert('Thank you for your message! We will get back to you soon.');
                this.reset();
            });
        }