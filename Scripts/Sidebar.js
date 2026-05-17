document.addEventListener('DOMContentLoaded', () => {
    // Inject Sidebar HTML if not present
    if (!document.getElementById('sidebar')) {
        const sidebarHTML = `
        <nav id="sidebar" class="sidebar">
          <div class="sidebar-logo">
            <img src="Images/SF_logo.png" alt="SF" style="height: 40px; filter: drop-shadow(0 0 8px rgba(201,168,76,0.5));" />
            <h3 style="font-family: 'Cinzel', serif; color: var(--gold-primary); margin-top: 10px;">Shahzeb Faisal</h3>
            <p style="color: var(--text-secondary); font-size: 0.8rem;">Data Scientist & AI Developer</p>
          </div>
          <hr class="sidebar-divider" style="border-color: rgba(201,168,76,0.2); margin: 15px 0;" />
          <ul class="sidebar-links" style="list-style: none; padding: 0;">
            <li><a href="index.html"      data-page="home">        <i class="fas fa-home"></i>        <span>Home</span></a></li>
            <li><a href="about.html"      data-page="about">       <i class="fas fa-user"></i>        <span>About</span></a></li>
            <li><a href="projects.html"   data-page="projects">    <i class="fas fa-code"></i>        <span>Projects</span></a></li>
            <li><a href="experience.html" data-page="experience">  <i class="fas fa-briefcase"></i>   <span>Experience</span></a></li>
            <li><a href="certs.html"      data-page="certs">       <i class="fas fa-trophy"></i>      <span>Certifications</span></a></li>
            <li><a href="skills.html"     data-page="skills">      <i class="fas fa-cog"></i>         <span>Skills</span></a></li>
            <li><a href="contact.html"    data-page="contact">     <i class="fas fa-envelope"></i>    <span>Contact</span></a></li>
          </ul>
          <hr class="sidebar-divider" style="border-color: rgba(201,168,76,0.2); margin: 15px 0;" />
          <div class="sidebar-socials" style="display: flex; gap: 15px; justify-content: center;">
            <a href="https://github.com/ShahzebFaisal5649"                       target="_blank" style="color: var(--text-muted);"><i class="fab fa-github"></i></a>
            <a href="https://www.linkedin.com/in/shahzeb-faisal-8b9190321/"      target="_blank" style="color: var(--text-muted);"><i class="fab fa-linkedin-in"></i></a>
            <a href="mailto:shahzebfaisal5649@gmail.com"                                        style="color: var(--text-muted);"><i class="fas fa-envelope"></i></a>
          </div>
          <p class="sidebar-copy" style="text-align: center; font-size: 0.7rem; color: var(--text-muted); margin-top: auto;">© 2025 Shahzeb Faisal</p>
        </nav>
        <div id="sidebar-strip" class="sidebar-strip"></div>
        <button class="hamburger-btn">
          <span></span>
          <span></span>
          <span></span>
        </button>
        <a href="index.html" class="persistent-logo">
          <img src="Images/SF_logo.png" alt="SF" />
        </a>
        `;
        document.body.insertAdjacentHTML('afterbegin', sidebarHTML);
    }

    // Inject Footer if not present
    if (!document.querySelector('.luxury-footer')) {
        const footerHTML = `
        <footer class="luxury-footer" style="background: var(--black); color: #9A8870; padding: 60px 20px 20px; border-top: 1px solid rgba(201,168,76,0.1); margin-top: 60px;">
          <div class="footer-grid" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 40px; max-width: 1200px; margin: 0 auto;">
            <!-- Column 1 -->
            <div class="footer-brand">
              <img src="Images/SF_logo.png" alt="SF" class="footer-logo" style="height: 40px; filter: drop-shadow(0 0 8px rgba(201,168,76,0.5));">
              <h3 style="font-family: 'Cinzel', serif; color: var(--gold-primary); margin-top: 10px;">Shahzeb Faisal</h3>
              <p><em>Data Scientist & Full Stack AI Developer</em></p>
              <p><i class="fas fa-map-marker-alt"></i> Lahore, Pakistan</p>
              <span class="open-badge" style="display: inline-flex; align-items: center; gap: 5px; font-size: 0.8rem; color: var(--gold-primary);"><span class="pulse-dot" style="width: 8px; height: 8px; background: #25D366; border-radius: 50%;"></span> Open to Remote/Hybrid Opportunities</span>
            </div>
            <!-- Column 2 -->
            <div class="footer-links">
              <h4 style="font-family: 'Cinzel', serif; color: var(--gold-primary); margin-bottom: 15px;">Navigation</h4>
              <ul style="list-style: none; padding: 0;">
                <li><a href="index.html" style="color: inherit; text-decoration: none;">→ Home</a></li>
                <li><a href="about.html" style="color: inherit; text-decoration: none;">→ About</a></li>
                <li><a href="projects.html" style="color: inherit; text-decoration: none;">→ Projects</a></li>
                <li><a href="experience.html" style="color: inherit; text-decoration: none;">→ Experience</a></li>
                <li><a href="certs.html" style="color: inherit; text-decoration: none;">→ Certifications</a></li>
                <li><a href="skills.html" style="color: inherit; text-decoration: none;">→ Skills</a></li>
                <li><a href="contact.html" style="color: inherit; text-decoration: none;">→ Contact</a></li>
              </ul>
            </div>
            <!-- Column 3 -->
            <div class="footer-connect">
              <h4 style="font-family: 'Cinzel', serif; color: var(--gold-primary); margin-bottom: 15px;">Let's Connect</h4>
              <div class="footer-socials" style="display: flex; gap: 15px; margin-bottom: 15px;">
                <a href="https://github.com/ShahzebFaisal5649"                   target="_blank" title="GitHub" style="color: inherit;"><i class="fab fa-github"></i></a>
                <a href="https://www.linkedin.com/in/shahzeb-faisal-8b9190321/"  target="_blank" title="LinkedIn" style="color: inherit;"><i class="fab fa-linkedin-in"></i></a>
                <a href="mailto:shahzebfaisal5649@gmail.com"                                     title="Email" style="color: inherit;"><i class="fas fa-envelope"></i></a>
              </div>
              <p>shahzebfaisal5649@gmail.com</p>
              <a href="https://wa.me/923020418510" target="_blank" class="whatsapp-btn" style="background: #25D366; color: white; padding: 8px 15px; border-radius: 4px; text-decoration: none; display: inline-flex; align-items: center; gap: 5px; font-size: 0.9rem; margin-top: 10px;">
                <i class="fab fa-whatsapp"></i> Chat on WhatsApp
              </a>
            </div>
          </div>
          <div class="footer-divider" style="text-align: center; margin: 30px 0; color: rgba(201,168,76,0.2);"><span>◆</span></div>
          <div class="footer-bottom" style="display: flex; justify-content: space-between; flex-wrap: wrap; gap: 20px; font-size: 0.8rem; color: var(--text-muted); max-width: 1200px; margin: 0 auto;">
            <span id="footer-copy">© 2025 Shahzeb Faisal. Crafted with passion in Lahore 🇵🇰</span>
            <span>Built with HTML · CSS · JavaScript · Three.js · Gemini AI</span>
            <span>Press <kbd style="background: rgba(255,255,255,0.1); padding: 2px 5px; border-radius: 3px;">Ctrl+.</kbd> for AI Terminal</span>
          </div>
        </footer>
        `;
        document.body.insertAdjacentHTML('beforeend', footerHTML);
        
        // Confetti logic
        const copyEl = document.getElementById('footer-copy');
        if (copyEl) {
            copyEl.addEventListener('mouseenter', () => {
                triggerConfetti(copyEl);
            });
        }
    }

    function triggerConfetti(el) {
        const colors = ['#C9A84C', '#E8C97A', '#F5E3A0'];
        for (let i = 0; i < 15; i++) {
            const p = document.createElement('div');
            p.style.position = 'fixed';
            p.style.width = '8px';
            p.style.height = '8px';
            p.style.background = colors[Math.floor(Math.random() * colors.length)];
            p.style.borderRadius = '50%';
            p.style.pointerEvents = 'none';
            p.style.zIndex = '10005';
            document.body.appendChild(p);
            
            const rect = el.getBoundingClientRect();
            let x = rect.left + rect.width / 2;
            let y = rect.top;
            
            const angle = Math.random() * Math.PI * 2;
            const velocity = 3 + Math.random() * 5;
            let vx = Math.cos(angle) * velocity;
            let vy = Math.sin(angle) * velocity - 5; // Upward
            
            function update() {
                x += vx;
                y += vy;
                vy += 0.2; // Gravity
                p.style.left = `${x}px`;
                p.style.top = `${y}px`;
                p.style.opacity = p.style.opacity ? parseFloat(p.style.opacity) - 0.02 : 1;
                
                if (parseFloat(p.style.opacity) <= 0) {
                    p.remove();
                } else {
                    requestAnimationFrame(update);
                }
            }
            requestAnimationFrame(update);
        }
    }

    const sidebar = document.getElementById('sidebar');
    const strip = document.getElementById('sidebar-strip');
    const hamburger = document.querySelector('.hamburger-btn');
    let closeTimer;

    function openSidebar() {
        sidebar.classList.add('open');
        if (strip) strip.style.opacity = '0';
    }

    function closeSidebar() {
        sidebar.classList.remove('open');
        if (strip) strip.style.opacity = '0.7';
    }

    // Edge trigger
    document.addEventListener('mousemove', e => {
        if (e.clientX < 60) {
            openSidebar();
        }
    });

    sidebar.addEventListener('mouseleave', () => {
        closeTimer = setTimeout(closeSidebar, 600);
    });

    sidebar.addEventListener('mouseenter', () => {
        clearTimeout(closeTimer);
    });

    // Mobile hamburger
    if (hamburger) {
        hamburger.addEventListener('click', () => {
            sidebar.classList.toggle('open');
        });
    }

    // Active Page Detection
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('.sidebar-links a').forEach(link => {
        if (link.getAttribute('href') === currentPage) link.classList.add('active');
    });

    // Section highlighting for index.html
    if (currentPage === 'index.html' || currentPage === '') {
        const sections = document.querySelectorAll('section[id]');
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    document.querySelectorAll('.sidebar-links a').forEach(a => a.classList.remove('active'));
                    const match = document.querySelector(`.sidebar-links a[href="#${entry.target.id}"]`);
                    if (match) match.classList.add('active');
                    // Fallback to home if at top
                    if (window.scrollY < 100) {
                        const homeLink = document.querySelector('.sidebar-links a[href="index.html"]');
                        if (homeLink) homeLink.classList.add('active');
                    }
                }
            });
        }, { threshold: 0.4 });
        sections.forEach(s => observer.observe(s));
    }
});
