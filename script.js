// DOM Content Loaded
document.addEventListener('DOMContentLoaded', function() {
    // Set initial states for image elements
    function setInitialImageStates() {
        // Background image
        const bgImg = document.querySelector('.sketch-bg-img');
        if (bgImg) {
            bgImg.style.opacity = '0';
            bgImg.style.transform = 'scale(1.1)';
            bgImg.style.transition = 'all 2s ease';
        }

        // Top logo
        const topLogo = document.querySelector('.top-logo');
        if (topLogo) {
            topLogo.style.opacity = '0';
            topLogo.style.transform = 'translateY(-20px)';
            topLogo.style.transition = 'all 1s ease';
        }

        // Portfolio title image
        const titleImg = document.querySelector('.portfolio-title-img');
        if (titleImg) {
            titleImg.style.opacity = '0';
            titleImg.style.transform = 'translateY(-30px)';
            titleImg.style.transition = 'all 1s ease';
        }

        // Rock image
        const rockImg = document.querySelector('.rock-image');
        if (rockImg) {
            rockImg.style.opacity = '0';
            rockImg.style.transform = 'scale(0.5)';
            rockImg.style.transition = 'all 1.5s ease';
        }

        // Solid text image
        const solidTextImg = document.querySelector('.solid-text-img');
        if (solidTextImg) {
            solidTextImg.style.opacity = '0';
            solidTextImg.style.transform = 'translateX(50px)';
            solidTextImg.style.transition = 'all 1s ease';
        }

        // Korean subtitle
        const koreanSubtitle = document.querySelector('.korean-subtitle');
        if (koreanSubtitle) {
            koreanSubtitle.style.opacity = '0';
            koreanSubtitle.style.transform = 'translateY(20px)';
            koreanSubtitle.style.transition = 'all 1s ease';
        }

        // Profile image
        const profileImg = document.querySelector('.profile-img');
        if (profileImg) {
            profileImg.style.opacity = '0';
            profileImg.style.transform = 'scale(0.8)';
            profileImg.style.transition = 'all 1s ease';
        }
    }

    // Animate images in sequence
    function animateHeroImages() {
        // Background
        setTimeout(() => {
            const bgImg = document.querySelector('.sketch-bg-img');
            if (bgImg) {
                bgImg.style.opacity = '1';
                bgImg.style.transform = 'scale(1)';
            }
        }, 500);

        // Top logo
        setTimeout(() => {
            const topLogo = document.querySelector('.top-logo');
            if (topLogo) {
                topLogo.style.opacity = '1';
                topLogo.style.transform = 'translateY(0)';
            }
        }, 1000);

        // Title
        setTimeout(() => {
            const titleImg = document.querySelector('.portfolio-title-img');
            if (titleImg) {
                titleImg.style.opacity = '1';
                titleImg.style.transform = 'translateY(0)';
            }
        }, 1200);

        // Rock
        setTimeout(() => {
            const rockImg = document.querySelector('.rock-image');
            if (rockImg) {
                rockImg.style.opacity = '1';
                rockImg.style.transform = 'scale(1)';
            }
        }, 1500);

        // Solid text
        setTimeout(() => {
            const solidTextImg = document.querySelector('.solid-text-img');
            if (solidTextImg) {
                solidTextImg.style.opacity = '1';
                solidTextImg.style.transform = 'translateX(0)';
            }
        }, 2500);

        // Korean subtitle
        setTimeout(() => {
            const koreanSubtitle = document.querySelector('.korean-subtitle');
            if (koreanSubtitle) {
                koreanSubtitle.style.opacity = '1';
                koreanSubtitle.style.transform = 'translateY(0)';
            }
        }, 3000);
    }

    // Initialize image animations
    setInitialImageStates();
    animateHeroImages();

    // Smooth scrolling for scroll indicator
    const scrollIndicator = document.querySelector('.scroll-down');
    if (scrollIndicator) {
        scrollIndicator.addEventListener('click', function() {
            document.querySelector('.profile-page').scrollIntoView({
                behavior: 'smooth'
            });
        });
    }

    // Set initial states for all animated elements
    function setInitialStates() {
        const elements = [
            '.page-header',
            '.profile-image-container',
            '.personal-info',
            '.education-section',
            '.license-section',
            '.skills-section',
            '.bottom-label'
        ];

        elements.forEach(selector => {
            const element = document.querySelector(selector);
            if (element) {
                element.style.opacity = '0';
                element.style.transform = 'translateY(50px)';
                element.style.transition = 'all 0.8s ease';
            }
        });

        // Set initial state for skill items
        const skillItems = document.querySelectorAll('.skills-section .skill-item');
        skillItems.forEach(item => {
            item.style.opacity = '0';
            item.style.transform = 'translateY(20px)';
            item.style.transition = 'all 0.5s ease';
        });

        // Set initial state for profile frame
        const profileFrame = document.querySelector('.profile-frame');
        if (profileFrame) {
            profileFrame.style.opacity = '0';
            profileFrame.style.transform = 'scale(0.8)';
            profileFrame.style.transition = 'all 1s ease';
        }
    }

    // Call setInitialStates after a short delay to ensure DOM is ready
    setTimeout(setInitialStates, 100);

    // Simple scroll-based animation
    function checkScroll() {
        const profilePage = document.querySelector('.profile-page');
        if (!profilePage) return;

        const rect = profilePage.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        
        // Check if profile page is in view
        if (rect.top < windowHeight * 0.8) {
            animateProfileElements();
        }
    }

    // Animate profile elements with delays
    function animateProfileElements() {
        const animations = [
            { selector: '.page-header', delay: 0 },
            { selector: '.profile-image-container', delay: 300 },
            { selector: '.personal-info', delay: 600 },
            { selector: '.education-section', delay: 900 },
            { selector: '.license-section', delay: 1200 },
            { selector: '.skills-section', delay: 1500 },
            { selector: '.bottom-label', delay: 1800 }
        ];

        animations.forEach(({ selector, delay }) => {
            const element = document.querySelector(selector);
            if (element && element.style.opacity === '0') {
                setTimeout(() => {
                    element.style.opacity = '1';
                    element.style.transform = 'translateY(0)';
                }, delay);
            }
        });

        // Animate profile frame and image
        const profileFrame = document.querySelector('.profile-frame');
        const profileImg = document.querySelector('.profile-img');
        if (profileFrame && profileFrame.style.opacity === '0') {
            setTimeout(() => {
                profileFrame.style.opacity = '1';
                profileFrame.style.transform = 'scale(1)';
                if (profileImg) {
                    profileImg.style.opacity = '1';
                    profileImg.style.transform = 'scale(1)';
                }
            }, 300);
        }

        // Animate skill items
        const skillItems = document.querySelectorAll('.skills-section .skill-item');
        skillItems.forEach((item, index) => {
            if (item.style.opacity === '0') {
                setTimeout(() => {
                    item.style.opacity = '1';
                    item.style.transform = 'translateY(0)';
                }, 1800 + (index * 100));
            }
        });
    }

    // Listen for scroll events
    window.addEventListener('scroll', checkScroll);
    
    // Check on load in case already scrolled
    setTimeout(checkScroll, 500);

    // Enhanced rock image interactions
    const rockImage = document.querySelector('.rock-image');
    if (rockImage) {
        rockImage.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.1)';
            this.style.filter = 'drop-shadow(0 20px 40px rgba(0, 0, 0, 0.5))';
        });

        rockImage.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
            this.style.filter = 'drop-shadow(0 15px 30px rgba(0, 0, 0, 0.4))';
        });

        // Easter egg - double click on rock
        let clickCount = 0;
        rockImage.addEventListener('click', function() {
            clickCount++;
            
            if (clickCount === 2) {
                this.style.animation = 'rockAppear 1s ease forwards, bounce 0.5s ease 1s';
                showNotification('돌같이 단단한 개발자 김태민입니다! 💪');
                clickCount = 0;
            }
            
            setTimeout(() => {
                if (clickCount === 1) clickCount = 0;
            }, 500);
        });
    }

    // Enhanced skill tags hover effects
    document.querySelectorAll('.skill-tag').forEach(tag => {
        tag.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.15) translateY(-3px)';
            this.style.background = 'rgba(255, 255, 255, 0.35)';
            this.style.boxShadow = '0 8px 20px rgba(0, 0, 0, 0.25)';
        });

        tag.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1) translateY(0)';
            this.style.background = 'rgba(255, 255, 255, 0.2)';
            this.style.boxShadow = 'none';
        });
    });

    // Enhanced profile frame interactions
    const profileFrame = document.querySelector('.profile-frame');
    if (profileFrame) {
        profileFrame.addEventListener('mouseenter', function() {
            if (this.style.opacity === '1') {
                this.style.transform = 'scale(1.08)';
                this.style.boxShadow = '0 25px 50px rgba(0, 0, 0, 0.4), inset 0 3px 20px rgba(255, 255, 255, 0.4)';
            }
        });

        profileFrame.addEventListener('mouseleave', function() {
            if (this.style.opacity === '1') {
                this.style.transform = 'scale(1)';
                this.style.boxShadow = '0 15px 35px rgba(0, 0, 0, 0.2), inset 0 2px 10px rgba(255, 255, 255, 0.2)';
            }
        });
    }

    // Enhanced skill items interactions
    document.querySelectorAll('.skills-section .skill-item').forEach(item => {
        item.addEventListener('click', function() {
            const originalTransform = this.style.transform;
            const originalBg = this.style.background;
            
            this.style.transform = 'translateY(-5px) scale(1.15)';
            this.style.background = '#556b4f';
            this.style.boxShadow = '0 10px 25px rgba(85, 107, 79, 0.4)';
            
            setTimeout(() => {
                this.style.transform = originalTransform;
                this.style.background = originalBg;
                this.style.boxShadow = '0 5px 15px rgba(97, 126, 90, 0.3)';
            }, 200);
        });
    });

    // Enhanced parallax effect
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        const heroPage = document.querySelector('.hero-page');
        const rockContainer = document.querySelector('.rock-container');
        const topLogo = document.querySelector('.top-logo');
        
        if (heroPage && scrolled < window.innerHeight) {
            const rate = scrolled * 0.3;
            heroPage.style.transform = `translateY(${rate}px)`;
            
            if (rockContainer) {
                rockContainer.style.transform = `translate(-50%, -50%) translateY(${rate * 0.2}px)`;
            }
            
            if (topLogo) {
                topLogo.style.transform = `translateY(${rate * 0.5}px)`;
            }
        }
    });

    // Contact info click effects with enhanced feedback
    document.querySelectorAll('.contact-item .value').forEach(item => {
        item.addEventListener('click', function() {
            const text = this.textContent;
            
            // Visual feedback
            const originalColor = this.style.color;
            this.style.color = '#617e5a';
            this.style.transform = 'scale(1.05)';
            
            setTimeout(() => {
                this.style.color = originalColor;
                this.style.transform = 'scale(1)';
            }, 200);
            
            // Copy to clipboard if it's email or phone
            if (text.includes('@') || text.includes('-')) {
                navigator.clipboard.writeText(text).then(() => {
                    showNotification('클립보드에 복사되었습니다! 📋');
                });
            }
        });
    });

    // Enhanced notification system
    function showNotification(message, duration = 3000) {
        const notification = document.createElement('div');
        notification.textContent = message;
        notification.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            background: linear-gradient(135deg, #6b9b5c, #7fb069);
            color: white;
            padding: 15px 25px;
            border-radius: 15px;
            font-weight: 500;
            z-index: 10000;
            transform: translateX(400px);
            transition: all 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55);
            box-shadow: 0 15px 35px rgba(0, 0, 0, 0.2);
            border: 1px solid rgba(255, 255, 255, 0.2);
        `;
        
        document.body.appendChild(notification);
        
        // Animate in
        setTimeout(() => {
            notification.style.transform = 'translateX(0) scale(1)';
        }, 100);
        
        // Remove after duration
        setTimeout(() => {
            notification.style.transform = 'translateX(400px) scale(0.8)';
            setTimeout(() => {
                if (document.body.contains(notification)) {
                    document.body.removeChild(notification);
                }
            }, 400);
        }, duration);
    }

    // Enhanced scroll progress indicator
    function createScrollProgress() {
        const progressBar = document.createElement('div');
        progressBar.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 0%;
            height: 4px;
            background: linear-gradient(90deg, #6b9b5c, #7fb069, #6b9b5c);
            z-index: 10001;
            transition: width 0.1s ease;
            box-shadow: 0 2px 10px rgba(107, 155, 92, 0.3);
        `;
        
        document.body.appendChild(progressBar);
        
        window.addEventListener('scroll', function() {
            const scrollTop = window.pageYOffset;
            const docHeight = document.body.scrollHeight - window.innerHeight;
            const scrollPercent = (scrollTop / docHeight) * 100;
            
            progressBar.style.width = scrollPercent + '%';
        });
    }
    
    createScrollProgress();
}); 