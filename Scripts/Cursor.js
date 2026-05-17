document.addEventListener('DOMContentLoaded', () => {
    const cursor = document.createElement('div');
    cursor.className = 'custom-cursor';
    document.body.appendChild(cursor);

    const follower = document.createElement('div');
    follower.className = 'cursor-follower';
    document.body.appendChild(follower);

    // Comet trail (8 dots)
    const trailDots = [];
    for (let i = 0; i < 8; i++) {
        const dot = document.createElement('div');
        dot.className = 'cursor-trail';
        dot.style.opacity = (0.6 - (i * 0.07)).toFixed(2);
        document.body.appendChild(dot);
        trailDots.push(dot);
    }

    const history = [];
    const maxHistory = 40; // Reduced for tighter trail

    document.addEventListener('mousemove', (e) => {
        const x = e.clientX;
        const y = e.clientY;

        cursor.style.left = `${x}px`;
        cursor.style.top = `${y}px`;

        // Follower with delay
        setTimeout(() => {
            follower.style.left = `${x}px`;
            follower.style.top = `${y}px`;
        }, 50);

        history.push({ x, y });
        if (history.length > maxHistory) history.shift();

        // Update trail dots with staggered delay
        trailDots.forEach((dot, index) => {
            const hIndex = history.length - 1 - (index * 3); // 3 frames delay per dot
            if (hIndex >= 0) {
                const pos = history[hIndex];
                dot.style.left = `${pos.x}px`;
                dot.style.top = `${pos.y}px`;
            }
        });

        // Magnetic Effect
        const magneticElements = document.querySelectorAll('.btn, .nav-item, .project-card, .sidebar-logo, .footer-btn');
        magneticElements.forEach(elem => {
            const rect = elem.getBoundingClientRect();
            const ex = e.clientX - (rect.left + rect.width/2);
            const ey = e.clientY - (rect.top + rect.height/2);
            
            if (Math.sqrt(ex*ex + ey*ey) < 80) {
                elem.style.transform = `translate(${ex*0.2}px, ${ey*0.2}px)`;
                elem.style.transition = 'none';
            } else {
                elem.style.transform = '';
                elem.style.transition = 'transform 0.3s ease';
            }
        });
    });

    // Click Ripple
    document.addEventListener('mousedown', (e) => {
        const ripple = document.createElement('div');
        ripple.className = 'cursor-ripple';
        ripple.style.left = `${e.clientX}px`;
        ripple.style.top = `${e.clientY}px`;
        document.body.appendChild(ripple);

        setTimeout(() => {
            ripple.remove();
        }, 500);
    });
});
