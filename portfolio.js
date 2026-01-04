
// Mobile Menu Toggle
document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    
    if (menuToggle && navLinks) {
        // Toggle menu on click
        menuToggle.addEventListener('click', function(e) {
            e.stopPropagation();
            navLinks.classList.toggle('active');
            const isExpanded = navLinks.classList.contains('active');
            menuToggle.setAttribute('aria-expanded', isExpanded);
            
            // Change icon based on state
            menuToggle.textContent = isExpanded ? '✕' : '☰';
        });
        
        // Close menu when mouse leaves the nav-links area (mobile/tablet only)
        navLinks.addEventListener('mouseleave', function() {
            if (window.innerWidth < 1024) {
                navLinks.classList.remove('active');
                menuToggle.setAttribute('aria-expanded', 'false');
                menuToggle.textContent = '☰';
            }
        });
        
        // Close menu when clicking on a link
        const navItems = navLinks.querySelectorAll('a');
        navItems.forEach(item => {
            item.addEventListener('click', function() {
                navLinks.classList.remove('active');
                menuToggle.setAttribute('aria-expanded', 'false');
                menuToggle.textContent = '☰';
            });
        });
        
        // Close menu when clicking outside
        document.addEventListener('click', function(e) {
            if (!menuToggle.contains(e.target) && !navLinks.contains(e.target)) {
                navLinks.classList.remove('active');
                menuToggle.setAttribute('aria-expanded', 'false');
                menuToggle.textContent = '☰';
            }
        });
    }
    
    window.addEventListener("resize", () => {
    if (window.innerWidth > 768) {
        navLinks.classList.remove("active");
        menuToggle.classList.remove("open");
    }
});
    
    // Dropdown accessibility - aria-expanded tracking
    const dropdown = document.querySelector('.dropdown');
    const dropdownToggle = document.querySelector('.dropdown-toggle');

    if (dropdown && dropdownToggle) {
        // Update aria-expanded on hover
        dropdown.addEventListener('mouseenter', function() {
            dropdownToggle.setAttribute('aria-expanded', 'true');
        });
        
        dropdown.addEventListener('mouseleave', function() {
            dropdownToggle.setAttribute('aria-expanded', 'false');
        });
        dropdownToggle.addEventListener('focus', function () {
            dropdownToggle.setAttribute('aria-expanded', 'true');
        });

        dropdownToggle.addEventListener('blur', function () {
            dropdownToggle.setAttribute('aria-expanded', 'false');
        });
    }

    // Back to Top Button Functionality
    const backToTopBtn = document.getElementById('backToTopBtn');
    
    if (!backToTopBtn) {
        console.error('Back to top button not found!');
        return;
    }
    
    function toggleButton() {
        const scrollPosition = window.pageYOffset || document.documentElement.scrollTop;
        const windowHeight = window.innerHeight;
        const documentHeight = document.documentElement.scrollHeight;
        const isAtBottom = (windowHeight + scrollPosition) >= documentHeight - 50;
        
        if (isAtBottom) {
            // At bottom - show and keep visible
            backToTopBtn.classList.add('stay');
            backToTopBtn.classList.add('show');
        } else if (scrollPosition > 300) {
            // Scrolled down - show button
            backToTopBtn.classList.add('show');
            backToTopBtn.classList.remove('stay');
        } else {
            // Near top - hide button
            backToTopBtn.classList.remove('show');
            backToTopBtn.classList.remove('stay');
        }
    }

    // Check on scroll
    window.addEventListener('scroll', toggleButton);
    
    // Check on page load (in case page is already scrolled)
    toggleButton();

    // Click handler
    backToTopBtn.addEventListener('click', function(e) {
        e.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});
    




  