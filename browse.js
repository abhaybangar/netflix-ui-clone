document.addEventListener('DOMContentLoaded', () => {
    
    const userEmail = localStorage.getItem('userEmail');
    if (!userEmail) {
        window.location.href = 'signin.html';
        return;
    }

    
    const userEmailElement = document.getElementById('user-email');
    if (userEmailElement) {
        userEmailElement.textContent = userEmail;
    }

    
    const navbar = document.getElementById('navbar');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('nav-black');
        } else {
            navbar.classList.remove('nav-black');
        }
    });

    
    const posters = document.querySelectorAll('.row-poster');
    posters.forEach(poster => {
        poster.addEventListener('click', () => {
            // Animate scale down and up for feedback
            poster.style.transform = 'scale(0.95)';
            setTimeout(() => {
                poster.style.transform = '';
            }, 150);
            
        
            setTimeout(() => {
                alert('Movie details loading... Coming soon! 🎬');
            }, 160);
        });
    });

    
    const playBtn = document.getElementById('play-btn');
    if (playBtn) {
        playBtn.addEventListener('click', () => {
            alert('Starting video playback... Coming soon! 🎥');
        });
    }

    const userAvatar = document.getElementById('user-avatar');
    if (userAvatar) {
        userAvatar.addEventListener('click', () => {
            const confirmLogout = confirm('Do you want to log out?');
            if (confirmLogout) {
                localStorage.removeItem('userEmail');
                localStorage.removeItem('otp');
                window.location.href = 'signin.html';
            }
        });
    }
});
