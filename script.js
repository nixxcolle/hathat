document.addEventListener('DOMContentLoaded', () => {
    // 0. Intro Landing Screen Logic
    const introScreen = document.getElementById('intro-screen');
    const clickMoreBtn = document.getElementById('click-more-btn');
    const envelopeContainer = document.querySelector('.envelope-container');

    function dismissIntro() {
        if (introScreen && !introScreen.classList.contains('fade-out')) {
            introScreen.classList.add('fade-out');
            document.body.classList.remove('intro-active');
            
            // Remove from DOM after transition finishes
            setTimeout(() => {
                introScreen.remove();
            }, 1000);
        }
    }

    if (clickMoreBtn) {
        clickMoreBtn.addEventListener('click', dismissIntro);
    }
    if (envelopeContainer) {
        // Allow clicking the envelope itself to proceed
        envelopeContainer.addEventListener('click', dismissIntro);
    }

    // 1. 3D Carousel Logic
    const carouselContainer = document.querySelector('.carousel-3d-container');
    const cards = document.querySelectorAll('.carousel-card');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    let currentIndex = 0;

    function updateCarousel() {
        cards.forEach((card, i) => {
            const offset = (i - currentIndex + cards.length) % cards.length;
            
            let translateX = 0;
            let translateZ = 0;
            let rotateY = 0;
            let scale = 1;
            let opacity = 1;
            let zIndex = 0;

            if (offset === 0) {
                translateX = 0;
                translateZ = 200;
                rotateY = 0;
                scale = 1.1;
                zIndex = 10;
            } else if (offset === 1 || offset === -cards.length + 1) {
                translateX = 350;
                translateZ = -100;
                rotateY = -45;
                scale = 0.8;
                opacity = 0.6;
                zIndex = 5;
            } else if (offset === cards.length - 1 || offset === -1) {
                translateX = -350;
                translateZ = -100;
                rotateY = 45;
                scale = 0.8;
                opacity = 0.6;
                zIndex = 5;
            } else {
                translateX = 0;
                translateZ = -400;
                rotateY = 0;
                scale = 0.5;
                opacity = 0;
                zIndex = 0;
            }

            card.style.transform = `translateX(${translateX}px) translateZ(${translateZ}px) rotateY(${rotateY}deg) scale(${scale})`;
            card.style.opacity = opacity;
            card.style.zIndex = zIndex;
        });
    }

    if (cards.length > 0) {
        updateCarousel();
        nextBtn.addEventListener('click', () => {
            currentIndex = (currentIndex + 1) % cards.length;
            updateCarousel();
        });
        prevBtn.addEventListener('click', () => {
            currentIndex = (currentIndex - 1 + cards.length) % cards.length;
            updateCarousel();
        });
        setInterval(() => {
            currentIndex = (currentIndex + 1) % cards.length;
            updateCarousel();
        }, 5000);
    }

    // 2. Music Player Logic (Plays automatically on first click/tap anywhere on screen)
    const musicIframe = document.getElementById('music-iframe');
    const musicCard = document.getElementById('music-card');
    const songEmbedUrl = "https://www.youtube.com/embed/cdW8Zx_QW7s?autoplay=1";
    
    if (musicIframe) {
        musicIframe.setAttribute('src', 'about:blank');
        
        const startMusic = () => {
            if (musicIframe.getAttribute('src') === 'about:blank') {
                musicIframe.setAttribute('src', songEmbedUrl);
                if (musicCard) {
                    musicCard.classList.add('playing');
                }
            }
            // Clean up event listeners so it only runs once
            document.removeEventListener('click', startMusic);
            document.removeEventListener('touchstart', startMusic);
            document.removeEventListener('keydown', startMusic);
        };
        
        // Listen for the first touch, click, or key press anywhere on the page
        document.addEventListener('click', startMusic);
        document.addEventListener('touchstart', startMusic);
        document.addEventListener('keydown', startMusic);
    }
    // 3. Particle System
    const particleContainer = document.getElementById('particles-js');
    const emojis = ['❤️', '✨', '🌻', '🌸', '☁️', '☀️'];
    
    function createParticle() {
        const particle = document.createElement('div');
        const emoji = emojis[Math.floor(Math.random() * emojis.length)];
        
        particle.innerHTML = emoji;
        particle.style.position = 'fixed';
        particle.style.left = Math.random() * 100 + 'vw';
        particle.style.top = '-50px';
        particle.style.fontSize = Math.random() * 20 + 10 + 'px';
        particle.style.opacity = Math.random() * 0.5 + 0.3;
        particle.style.zIndex = '-1';
        particle.style.pointerEvents = 'none';
        particle.style.transform = `rotate(${Math.random() * 360}deg)`;
        
        const duration = Math.random() * 10 + 10;
        particle.style.transition = `transform ${duration}s linear, top ${duration}s linear`;
        
        particleContainer.appendChild(particle);
        
        setTimeout(() => {
            particle.style.top = '110vh';
            particle.style.transform = `rotate(${Math.random() * 720}deg)`;
        }, 100);
        
        setTimeout(() => {
            particle.remove();
        }, duration * 1000);
    }
    setInterval(createParticle, 500);

    // 4. Staged Letter Scroll Animations
    const paragraphs = document.querySelectorAll('.letter-paragraph');
    const heartDoodlePath = document.querySelector('.heart-doodle-path');
    
    const letterObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Animate paragraphs with a beautiful staggered delay
                paragraphs.forEach((p, index) => {
                    setTimeout(() => {
                        p.classList.add('visible');
                    }, index * 250); // Stagger by 250ms
                });
                
                // Trigger heart doodle self-drawing animation
                if (heartDoodlePath) {
                    heartDoodlePath.style.animation = 'draw-heart-doodle 3s ease-out forwards';
                }
                
                letterObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.15 });

    const letterSection = document.querySelector('.letter-section');
    if (letterSection) {
        letterObserver.observe(letterSection);
    }

    // 5. Anniversary Timer
    const startDate = new Date('2023-05-20T00:00:00'); 
    function updateTimer() {
        const now = new Date();
        const diff = now - startDate;
        
        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
        const mins = Math.floor((diff / (1000 * 60)) % 60);
        const secs = Math.floor((diff / 1000) % 60);
        
        document.getElementById('days').innerText = days;
        document.getElementById('hours').innerText = hours;
        document.getElementById('mins').innerText = mins;
        document.getElementById('secs').innerText = secs;
    }
    setInterval(updateTimer, 1000);
    updateTimer();

    // 6. Final Surprise
    const finalBtn = document.getElementById('final-btn');
    const explosion = document.querySelector('.heart-explosion');
    finalBtn.addEventListener('click', () => {
        explosion.classList.add('active');
        setTimeout(() => {
            alert('I Love You Beyond Everything! ❤️');
        }, 1500);
    });

    // 7. Smooth Scroll
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({ behavior: 'smooth' });
        });
    });
});
