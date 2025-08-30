        // Smooth scrolling for anchor links
        document.addEventListener('DOMContentLoaded', function() {
            // Add loading animation delay
            const loadingElements = document.querySelectorAll('.loading');
            loadingElements.forEach((el, index) => {
                setTimeout(() => {
                    el.style.opacity = '1';
                }, index * 200);
            });

            // Header scroll effect
            let lastScrollTop = 0;
            const header = document.querySelector('header');
            
            window.addEventListener('scroll', function() {
                let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
                
                if (scrollTop > lastScrollTop && scrollTop > 100) {
                    header.style.transform = 'translateY(-100%)';
                } else {
                    header.style.transform = 'translateY(0)';
                }
                
                lastScrollTop = scrollTop;
            });

            // Add transition to header
            header.style.transition = 'transform 0.3s ease-in-out';
        });

        // Add some interactive elements
        document.addEventListener('mousemove', function(e) {
            const hero = document.querySelector('.hero');
            const x = e.clientX / window.innerWidth;
            const y = e.clientY / window.innerHeight;
            
            hero.style.background = `linear-gradient(${135 + x * 20}deg, 
                hsl(${240 + y * 20}, 70%, 65%) 0%, 
                hsl(${280 + x * 20}, 60%, 70%) 100%)`;
        });
  