function createConfetti() {
            const colors = ['#FF6B6B', '#4ECDC4', '#FFE66D', '#95E1D3', '#F38181', '#AA96DA', '#FCBAD3', '#A8E6CF'];
            const shapes = ['confetti-shape-1', 'confetti-shape-2', 'confetti-shape-3', 'confetti-shape-4'];
            const animations = ['confetti-fall', 'confetti-fall-left', 'confetti-fall-right'];
            
            for (let i = 0; i < 100; i++) {
                setTimeout(() => {
                    const confetti = document.createElement('div');
                    confetti.className = 'confetti ' + shapes[Math.floor(Math.random() * shapes.length)];
                    confetti.style.left = Math.random() * 100 + '%';
                    confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
                    confetti.style.width = (Math.random() * 10 + 8) + 'px';
                    confetti.style.height = (Math.random() * 10 + 8) + 'px';
                    confetti.style.animationName = animations[Math.floor(Math.random() * animations.length)];
                    confetti.style.animationDelay = Math.random() * 2 + 's';
                    confetti.style.animationDuration = (Math.random() * 3 + 3) + 's';
                    document.querySelector('.hero-section').appendChild(confetti);
                    
                    setTimeout(() => confetti.remove(), 8000);
                }, i * 50);
            }
        }

        // Balloon Animation
        function createBalloons() {
            const balloons = ['🎈', '🎊', '🎉', '🎁', '🎀'];
            setInterval(() => {
                const balloon = document.createElement('div');
                balloon.className = 'balloon';
                balloon.textContent = balloons[Math.floor(Math.random() * balloons.length)];
                balloon.style.left = Math.random() * 100 + '%';
                balloon.style.animationDuration = (Math.random() * 3 + 4) + 's';
                document.querySelector('.hero-section').appendChild(balloon);
                
                setTimeout(() => balloon.remove(), 6000);
            }, 2000);
        }

        function createGiftSparkles(giftElement) {
            const rect = giftElement.getBoundingClientRect();
            const centerX = rect.left + rect.width / 2;
            const centerY = rect.top + rect.height / 2;
            
            for (let i = 0; i < 12; i++) {
                const sparkle = document.createElement('div');
                sparkle.className = 'gift-sparkle';
                sparkle.style.left = centerX + 'px';
                sparkle.style.top = centerY + 'px';
                document.body.appendChild(sparkle);
                
                const angle = (i * 30) * Math.PI / 180;
                const distance = 50;
                
                sparkle.animate([
                    { transform: 'translate(-50%, -50%) scale(0)' },
                    { transform: `translate(${Math.cos(angle) * distance}px, ${Math.sin(angle) * distance}px) scale(1)` }
                ], {
                    duration: 1000,
                    easing: 'ease-out'
                });
                
                setTimeout(() => sparkle.remove(), 1000);
            }
        }

        // Open Gift
        function openGift() {
            const giftIcon = document.getElementById('giftIcon');
            const secretMessage = document.getElementById('secretMessage');
            
            giftIcon.textContent = '🎊';
            secretMessage.style.display = 'block';
            secretMessage.classList.add('animate__animated', 'animate__bounceIn');
            
            createGiftSparkles(document.querySelector('.gift-box'));
            createConfetti();
        }

        // Scroll to wishes
        function scrollToWishes() {
            const heroSection = document.querySelector('.hero-section');
            const messageSection = document.querySelector('.message-section');
            
            // Ẩn hero section với hiệu ứng
            heroSection.classList.add('hidden');
            
            // Hiện message section sau một chút delay
            setTimeout(() => {
                messageSection.classList.add('visible');
                window.scrollTo({ top: 0, behavior: 'smooth' });
                // Play music
                const bgMusic = document.getElementById('bgMusic');
                if (bgMusic) {
                    bgMusic.play();
                }
            }, 400);
        }

        // Music Toggle
        let isPlaying = false;
        function toggleMusic() {
            const btn = document.getElementById('musicBtn');
            isPlaying = !isPlaying;
            
            if (isPlaying) {
                btn.innerHTML = '<i class="fas fa-pause"></i>';
                btn.classList.add('animate__animated', 'animate__heartBeat', 'animate__infinite');
            } else {
                btn.innerHTML = '<i class="fas fa-music"></i>';
                btn.classList.remove('animate__animated', 'animate__heartBeat', 'animate__infinite');
            }
        }

        // Mouse click particle effect
        document.addEventListener('click', function(e) {
            const colors = ['#f0f', '#0ff', '#ff0', '#0f0', '#f00', '#00f'];
            for (let i = 0; i < 10; i++) {
                const particle = document.createElement('div');
                particle.className = 'particle';
                particle.style.left = e.pageX + 'px';
                particle.style.top = e.pageY + 'px';
                particle.style.width = '10px';
                particle.style.height = '10px';
                particle.style.background = colors[Math.floor(Math.random() * colors.length)];
                
                const angle = (Math.PI * 2 * i) / 10;
                const velocity = 2;
                
                document.body.appendChild(particle);
                
                let x = e.pageX;
                let y = e.pageY;
                const vx = Math.cos(angle) * velocity;
                const vy = Math.sin(angle) * velocity;
                
                const animation = setInterval(() => {
                    x += vx;
                    y += vy;
                    particle.style.left = x + 'px';
                    particle.style.top = y + 'px';
                    particle.style.opacity = parseFloat(particle.style.opacity || 1) - 0.02;
                    
                    if (parseFloat(particle.style.opacity) <= 0) {
                        clearInterval(animation);
                        particle.remove();
                    }
                }, 20);
            }
        });

        // Initialize
        window.onload = function() {
            createConfetti();
            createBalloons();
        };
const music = document.getElementById("bgMusic");
const toggle = document.getElementById("toggleMusic");
const musicIcon = document.getElementById("musicIcon");
const musicText = document.getElementById("musicText");
const volumeControl = document.getElementById("volumeControl");

// Set initial volume
music.volume = 0.5;

// 🔹 Thử phát nhạc tự động khi trang vừa load
document.addEventListener("DOMContentLoaded", () => {
    // Phát nhạc với âm lượng nhỏ để tránh bị chặn
    music.volume = 0.0;
    music.play().then(() => {
        console.log("✅ Music autoplayed silently");
        // Sau 1 giây tăng âm lượng nhẹ
        setTimeout(() => {
            music.volume = 0.5;
            musicIcon.textContent = "🔊";
            musicText.textContent = "Tắt nhạc";
            toggle.classList.add("playing");
        }, 1000);
    }).catch(err => {
        console.log("⚠️ Autoplay bị chặn, sẽ phát khi người dùng click:", err);
    });
});

// 🔹 Nếu người dùng click lần đầu, phát nhạc luôn
document.addEventListener("click", () => {
    if (music.paused) {
        music.volume = 0.5;
        music.play().then(() => {
            musicIcon.textContent = "🔊";
            musicText.textContent = "Tắt nhạc";
            toggle.classList.add("playing");
        });
    }
}, { once: true });

// 🔹 Nút bật / tắt nhạc
toggle.addEventListener("click", () => {
    if (music.paused) {
        music.play();
        musicIcon.textContent = "🔊";
        musicText.textContent = "Tắt nhạc";
        toggle.classList.add("playing");
    } else {
        music.pause();
        musicIcon.textContent = "🔇";
        musicText.textContent = "Bật nhạc";
        toggle.classList.remove("playing");
    }
});

// 🔹 Thanh điều chỉnh âm lượng
volumeControl.addEventListener("input", () => {
    music.volume = volumeControl.value;

    // Đổi icon theo mức âm lượng
    if (volumeControl.value == 0) {
        musicIcon.textContent = "🔇";
    } else if (volumeControl.value < 0.5) {
        musicIcon.textContent = "🔉";
    } else {
        musicIcon.textContent = "🔊";
    }
});

// 🔹 Khi bấm "Xem lời chúc", phát nhạc và chuyển sang phần chúc
function scrollToWishes() {
    const heroSection = document.querySelector('.hero-section');
    const messageSection = document.querySelector('.message-section');

    heroSection.classList.add('hidden');

    setTimeout(() => {
        messageSection.classList.add('visible');
        window.scrollTo({ top: 0, behavior: 'smooth' });

        // Phát nhạc (nếu chưa phát)
        if (music.paused) {
            music.play().then(() => {
                musicIcon.textContent = "🔊";
                musicText.textContent = "Tắt nhạc";
                toggle.classList.add("playing");
            }).catch(err => {
                console.log("Autoplay prevented:", err);
            });
        }
    }, 400);
}
