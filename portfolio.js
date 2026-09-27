
// Mobile Menu Toggle
document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');
   /* const firstNavLink = navLinks ? navLinks.querySelector('a') : null;*/
    
    if (menuToggle && navLinks) {
        // Toggle menu on click
            menuToggle.addEventListener('click', function(e) {
            e.stopPropagation();
            navLinks.classList.toggle('active');
            const isExpanded = navLinks.classList.contains('active');
            menuToggle.setAttribute('aria-expanded', isExpanded);

            // Change icon based on state
            menuToggle.textContent = isExpanded ? '✕' : '☰';

            // Move focus into menu when opened, back to toggle when closed
            /*if (isExpanded && firstNavLink) {
                firstNavLink.focus();
            } else {
                menuToggle.focus();
            } */

            if (!isExpanded) {
                menuToggle.focus();
            }
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

        document.addEventListener('click', function(e) {
            if (window.innerWidth >= 1024) return;
            if (!navLinks.classList.contains('active')) return;
            if (menuToggle.contains(e.target) || navLinks.contains(e.target)) return;
            navLinks.classList.remove('active');
            menuToggle.setAttribute('aria-expanded', 'false');
            menuToggle.textContent = '☰';
            if (document.activeElement && document.activeElement !== menuToggle) {
                menuToggle.focus();
            }
        });
        
        // Close menu when clicking outside
        document.addEventListener('keydown', function (e) {
            if (e.key === 'Escape') {
                navLinks.classList.remove('active');
                menuToggle.setAttribute('aria-expanded', 'false');
                menuToggle.textContent = '☰';

                // Return focus to the menu toggle when closing with Escape
                if (document.activeElement && document.activeElement !== menuToggle) {
                    menuToggle.focus();
                }
            }
        });
        
        document.addEventListener('keydown', function (e) {
            if (e.key === 'Escape') {
                navLinks.classList.remove('active');
                menuToggle.setAttribute('aria-expanded', 'false');
                menuToggle.textContent = '☰';
            }
  });
    
    
        window.addEventListener("resize", () => {
        if (window.innerWidth > 768) {
            navLinks.classList.remove("active");
            menuToggle.classList.remove("open");
            }
        });
    }
    
    // Dropdown accessibility - aria-expanded tracking
        const dropdown = document.querySelector('.portfolio');
        const dropdownToggle = document.querySelector('.portfolio-toggle');

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




    

    const footer = document.getElementById("footer");
    
    if (footer) {
        function checkFooterVisibility() {
            const scrollPosition = window.scrollY + window.innerHeight;
            const pageHeight = document.documentElement.scrollHeight;
            const threshold = 50;
            
            if (scrollPosition >= pageHeight - threshold) {
                footer.classList.add("visible");
            } else {
                footer.classList.remove("visible");
            }
        }
        
        window.addEventListener("scroll", checkFooterVisibility);
        checkFooterVisibility(); // Check on page load
        window.addEventListener("resize", checkFooterVisibility);
    }


});
        




  