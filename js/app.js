/**
 * Trovul Landing Page - JavaScript AAA
 * With pixel particles and mouse interactions
 */

document.addEventListener('DOMContentLoaded', () => {
    initPixelCanvas();
    initSmoothScroll();
    initWaitlistForm();
    initNavScroll();
    initParallax();
    initCounterAnimation();
    initCardTilt();
    initMobileMenu();
});

// ============================================
// MOBILE MENU
// ============================================
function initMobileMenu() {
    const menuBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');

    if (!menuBtn || !navLinks) return;

    menuBtn.addEventListener('click', () => {
        menuBtn.classList.toggle('active');
        navLinks.classList.toggle('active');
        document.body.classList.toggle('menu-open');
        document.body.style.overflow = navLinks.classList.contains('active') ? 'hidden' : '';
    });

    // Close menu when clicking a link
    navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            menuBtn.classList.remove('active');
            navLinks.classList.remove('active');
            document.body.classList.remove('menu-open');
            document.body.style.overflow = '';
        });
    });

    // Close menu on escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && navLinks.classList.contains('active')) {
            menuBtn.classList.remove('active');
            navLinks.classList.remove('active');
            document.body.classList.remove('menu-open');
            document.body.style.overflow = '';
        }
    });
}

// ============================================
// PIXEL PARTICLES - Interactive Background
// ============================================
function initPixelCanvas() {
    const canvas = document.getElementById('pixel-canvas');
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let width = canvas.width = window.innerWidth;
    let height = canvas.height = window.innerHeight;
    let mouseX = width / 2;
    let mouseY = height / 2;
    let particles = [];

    const colors = ['#8b5cf6', '#06b6d4', '#10b981', '#a78bfa', '#38bdf8'];
    const pixelSize = 4;
    const particleCount = 50;
    const mouseRadius = 150;

    // Particle class
    class Particle {
        constructor() {
            this.reset();
        }

        reset() {
            this.x = Math.random() * width;
            this.y = Math.random() * height;
            this.size = pixelSize + Math.random() * pixelSize;
            this.speedX = (Math.random() - 0.5) * 0.5;
            this.speedY = (Math.random() - 0.5) * 0.5;
            this.color = colors[Math.floor(Math.random() * colors.length)];
            this.alpha = 0.1 + Math.random() * 0.3;
            this.baseAlpha = this.alpha;
        }

        update() {
            // Move particle
            this.x += this.speedX;
            this.y += this.speedY;

            // Mouse interaction
            const dx = mouseX - this.x;
            const dy = mouseY - this.y;
            const distance = Math.sqrt(dx * dx + dy * dy);

            if (distance < mouseRadius) {
                const force = (mouseRadius - distance) / mouseRadius;
                this.alpha = this.baseAlpha + force * 0.5;
                this.x -= dx * force * 0.02;
                this.y -= dy * force * 0.02;
            } else {
                this.alpha = this.baseAlpha;
            }

            // Wrap around screen
            if (this.x < -this.size) this.x = width + this.size;
            if (this.x > width + this.size) this.x = -this.size;
            if (this.y < -this.size) this.y = height + this.size;
            if (this.y > height + this.size) this.y = -this.size;
        }

        draw() {
            ctx.fillStyle = this.color;
            ctx.globalAlpha = this.alpha;
            // Draw pixel (square)
            ctx.fillRect(
                Math.floor(this.x / pixelSize) * pixelSize,
                Math.floor(this.y / pixelSize) * pixelSize,
                this.size,
                this.size
            );
        }
    }

    // Initialize particles
    for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle());
    }

    // Mouse trail particles
    let trailParticles = [];

    // Animation loop
    function animate() {
        ctx.clearRect(0, 0, width, height);

        // Draw connection lines between nearby particles
        ctx.strokeStyle = 'rgba(139, 92, 246, 0.1)';
        ctx.lineWidth = 1;

        for (let i = 0; i < particles.length; i++) {
            for (let j = i + 1; j < particles.length; j++) {
                const dx = particles[i].x - particles[j].x;
                const dy = particles[i].y - particles[j].y;
                const distance = Math.sqrt(dx * dx + dy * dy);

                if (distance < 100) {
                    ctx.globalAlpha = (100 - distance) / 100 * 0.2;
                    ctx.beginPath();
                    ctx.moveTo(particles[i].x, particles[i].y);
                    ctx.lineTo(particles[j].x, particles[j].y);
                    ctx.stroke();
                }
            }
        }

        // Update and draw particles
        particles.forEach(particle => {
            particle.update();
            particle.draw();
        });

        // Draw and update trail particles
        trailParticles = trailParticles.filter(p => p.alpha > 0.01);
        trailParticles.forEach(p => {
            p.alpha *= 0.95;
            ctx.fillStyle = p.color;
            ctx.globalAlpha = p.alpha;
            ctx.fillRect(p.x, p.y, p.size, p.size);
        });

        ctx.globalAlpha = 1;
        requestAnimationFrame(animate);
    }

    // Mouse move handler
    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;

        // Add trail particle occasionally
        if (Math.random() > 0.7) {
            trailParticles.push({
                x: Math.floor(mouseX / pixelSize) * pixelSize,
                y: Math.floor(mouseY / pixelSize) * pixelSize,
                size: pixelSize,
                color: colors[Math.floor(Math.random() * colors.length)],
                alpha: 0.5
            });
        }
    });

    // Resize handler
    window.addEventListener('resize', () => {
        width = canvas.width = window.innerWidth;
        height = canvas.height = window.innerHeight;
    });

    animate();
}

// Smooth scroll for anchor links
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// Waitlist form handling - using Formsubmit.co via AJAX
// Keeps the user on the page with confetti animation
function initWaitlistForm() {
    const form = document.getElementById('waitlist-form');
    if (form) {
        form.addEventListener('submit', async (e) => {
            e.preventDefault();

            const email = form.querySelector('input[type="email"]').value;
            const button = form.querySelector('button');
            const originalText = button.innerHTML;

            button.innerHTML = '<span>Enviando...</span>';
            button.disabled = true;
            button.style.opacity = '0.7';

            try {
                // Send to Formsubmit via AJAX
                const response = await fetch('https://formsubmit.co/ajax/trovul.waitlist@gmail.com', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json'
                    },
                    body: JSON.stringify({
                        email: email,
                        _subject: '🎉 Nova pessoa na Waitlist do Trovul!'
                    })
                });

                if (response.ok) {
                    button.innerHTML = '<span>✓ Você está na lista!</span>';
                    button.style.background = 'linear-gradient(135deg, #10b981 0%, #34d399 100%)';
                    button.style.opacity = '1';

                    // Confetti effect
                    createConfetti();

                    // Reset após 4 segundos
                    setTimeout(() => {
                        button.innerHTML = originalText;
                        button.style.background = '';
                        button.disabled = false;
                        form.querySelector('input').value = '';
                    }, 4000);
                } else {
                    throw new Error('Erro no envio');
                }
            } catch (error) {
                button.innerHTML = '<span>Erro. Tente novamente.</span>';
                button.style.background = 'linear-gradient(135deg, #ef4444 0%, #f87171 100%)';
                button.style.opacity = '1';

                setTimeout(() => {
                    button.innerHTML = originalText;
                    button.style.background = '';
                    button.disabled = false;
                }, 3000);
            }
        });
    }
}

// Confetti effect
function createConfetti() {
    const colors = ['#8b5cf6', '#06b6d4', '#10b981', '#fbbf24', '#f87171'];
    const container = document.body;

    for (let i = 0; i < 50; i++) {
        const confetti = document.createElement('div');
        confetti.style.cssText = `
            position: fixed;
            width: 10px;
            height: 10px;
            background: ${colors[Math.floor(Math.random() * colors.length)]};
            left: ${Math.random() * 100}vw;
            top: -20px;
            border-radius: ${Math.random() > 0.5 ? '50%' : '0'};
            pointer-events: none;
            z-index: 9999;
            animation: confetti-fall ${2 + Math.random() * 2}s linear forwards;
        `;
        container.appendChild(confetti);

        setTimeout(() => confetti.remove(), 4000);
    }
}

// Add confetti animation
const style = document.createElement('style');
style.textContent = `
    @keyframes confetti-fall {
        0% {
            transform: translateY(0) rotate(0deg);
            opacity: 1;
        }
        100% {
            transform: translateY(100vh) rotate(720deg);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// Nav background on scroll
function initNavScroll() {
    const nav = document.querySelector('.nav');
    let lastScroll = 0;

    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;

        if (currentScroll > 100) {
            nav.style.background = 'rgba(5, 5, 8, 0.95)';
            nav.style.boxShadow = '0 4px 30px rgba(0, 0, 0, 0.3)';
        } else {
            nav.style.background = 'rgba(5, 5, 8, 0.7)';
            nav.style.boxShadow = 'none';
        }

        lastScroll = currentScroll;
    });
}

// Subtle parallax on scroll
function initParallax() {
    const hero = document.querySelector('.hero');

    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        if (hero) {
            hero.style.backgroundPositionY = `${scrolled * 0.3}px`;
        }
    });
}

// Counter animation for stats
function initCounterAnimation() {
    const observerOptions = {
        threshold: 0.5
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const counters = entry.target.querySelectorAll('.proof-number');
                counters.forEach(counter => {
                    animateValue(counter);
                });
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    const socialProof = document.querySelector('.social-proof');
    if (socialProof) {
        observer.observe(socialProof);
    }
}

function animateValue(element) {
    const text = element.textContent;
    const hasPlus = text.includes('+');
    const hasK = text.includes('K');
    let target = parseInt(text.replace(/[^0-9]/g, ''));

    if (hasK) target = target;

    let current = 0;
    const duration = 2000;
    const increment = target / (duration / 16);

    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            current = target;
            clearInterval(timer);
        }

        let display = Math.floor(current);
        if (hasK) display = display + 'K';
        if (hasPlus) display = display + '+';

        element.textContent = display;
    }, 16);
}

// 3D tilt effect on cards (subtle)
function initCardTilt() {
    const cards = document.querySelectorAll('.pricing-card.featured, .mockup-window');

    cards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            const centerX = rect.width / 2;
            const centerY = rect.height / 2;

            // Very subtle tilt - max ~3 degrees
            let rotateX = (y - centerY) / 80;
            let rotateY = (centerX - x) / 80;

            // Clamp to max 3 degrees
            rotateX = Math.max(-3, Math.min(3, rotateX));
            rotateY = Math.max(-3, Math.min(3, rotateY));

            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
        });

        card.addEventListener('mouseleave', () => {
            card.style.transform = '';
        });
    });
}
