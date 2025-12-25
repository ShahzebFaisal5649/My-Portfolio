/* ═══════════════════════════════════════════════════════════
   PORTFOLIO MAIN.JS - ALL INTERACTIVE FEATURES
   Mobile Menu Fixed, Terminal Ctrl+. Shortcut
   ═══════════════════════════════════════════════════════════ */

document.addEventListener('DOMContentLoaded', function() {
    initPreloader();
    initCursor();
    initParticles();
    initNavigation();
    initMobileMenu();
    initTypingEffect();
    initCounters();
    initTerminal();
    initScrollProgress();
    initProjectFilters();
    initSkillBars();
    initTiltEffect();
    initConfetti();
    initSmoothScroll();
    initScrollAnimations();
});

/* ═══════════════════════════════════════════════════════════
   PRELOADER
   ═══════════════════════════════════════════════════════════ */
function initPreloader() {
    window.addEventListener('load', function() {
        setTimeout(function() {
            document.body.classList.add('loaded');
        }, 1500);
    });
}

/* ═══════════════════════════════════════════════════════════
   CUSTOM CURSOR
   ═══════════════════════════════════════════════════════════ */
function initCursor() {
    var dot = document.querySelector('.cursor-dot');
    var ring = document.querySelector('.cursor-ring');
    
    if (!dot || !ring || window.matchMedia('(hover: none)').matches) return;

    var mouseX = 0, mouseY = 0;
    var dotX = 0, dotY = 0;
    var ringX = 0, ringY = 0;

    document.addEventListener('mousemove', function(e) {
        mouseX = e.clientX;
        mouseY = e.clientY;
    });

    function animate() {
        dotX += (mouseX - dotX) * 0.2;
        dotY += (mouseY - dotY) * 0.2;
        ringX += (mouseX - ringX) * 0.12;
        ringY += (mouseY - ringY) * 0.12;

        dot.style.left = dotX + 'px';
        dot.style.top = dotY + 'px';
        ring.style.left = ringX + 'px';
        ring.style.top = ringY + 'px';

        requestAnimationFrame(animate);
    }
    animate();

    // Hover states
    var hoverElements = document.querySelectorAll('a, button, .project-card, .skill-card, .filter-btn, .social-btn, .stat-card, .tech-cloud span');
    hoverElements.forEach(function(el) {
        el.addEventListener('mouseenter', function() {
            dot.classList.add('hover');
            ring.classList.add('hover');
        });
        el.addEventListener('mouseleave', function() {
            dot.classList.remove('hover');
            ring.classList.remove('hover');
        });
    });
}

/* ═══════════════════════════════════════════════════════════
   PARTICLE BACKGROUND
   ═══════════════════════════════════════════════════════════ */
function initParticles() {
    var canvas = document.getElementById('particles');
    if (!canvas) return;

    var ctx = canvas.getContext('2d');
    var particles = [];
    var mouse = { x: null, y: null };

    function resize() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }
    resize();
    window.addEventListener('resize', resize);

    document.addEventListener('mousemove', function(e) {
        mouse.x = e.clientX;
        mouse.y = e.clientY;
    });

    function Particle() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.vx = (Math.random() - 0.5) * 0.3;
        this.vy = (Math.random() - 0.5) * 0.3;
        this.radius = Math.random() * 1.5 + 0.5;
        this.color = Math.random() > 0.5 ? 'rgba(99, 102, 241, 0.5)' : 'rgba(139, 92, 246, 0.4)';
    }

    Particle.prototype.update = function() {
        this.x += this.vx;
        this.y += this.vy;

        if (this.x < 0 || this.x > canvas.width) this.vx *= -1;
        if (this.y < 0 || this.y > canvas.height) this.vy *= -1;

        // Mouse repulsion
        if (mouse.x && mouse.y) {
            var dx = mouse.x - this.x;
            var dy = mouse.y - this.y;
            var dist = Math.sqrt(dx * dx + dy * dy);
            if (dist < 100) {
                this.x -= dx * 0.02;
                this.y -= dy * 0.02;
            }
        }
    };

    Particle.prototype.draw = function() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.fill();
    };

    var count = Math.min(70, Math.floor(canvas.width * canvas.height / 18000));
    for (var i = 0; i < count; i++) {
        particles.push(new Particle());
    }

    function connectParticles() {
        for (var i = 0; i < particles.length; i++) {
            for (var j = i + 1; j < particles.length; j++) {
                var dx = particles[i].x - particles[j].x;
                var dy = particles[i].y - particles[j].y;
                var dist = Math.sqrt(dx * dx + dy * dy);
                if (dist < 120) {
                    ctx.beginPath();
                    ctx.strokeStyle = 'rgba(99, 102, 241, ' + (0.12 - dist / 1000) + ')';
                    ctx.lineWidth = 0.5;
                    ctx.moveTo(particles[i].x, particles[i].y);
                    ctx.lineTo(particles[j].x, particles[j].y);
                    ctx.stroke();
                }
            }
        }
    }

    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        particles.forEach(function(p) {
            p.update();
            p.draw();
        });
        connectParticles();
        requestAnimationFrame(animate);
    }
    animate();
}

/* ═══════════════════════════════════════════════════════════
   NAVIGATION
   ═══════════════════════════════════════════════════════════ */
function initNavigation() {
    var navbar = document.getElementById('navbar');
    var navLinks = document.querySelectorAll('.nav-link');
    var sections = document.querySelectorAll('section[id]');

    // Scroll effect
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }

        // Active link highlighting
        var scrollY = window.scrollY + 100;
        sections.forEach(function(section) {
            var top = section.offsetTop;
            var height = section.offsetHeight;
            var id = section.getAttribute('id');

            if (scrollY >= top && scrollY < top + height) {
                navLinks.forEach(function(link) {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === '#' + id) {
                        link.classList.add('active');
                    }
                });
            }
        });
    });
}

/* ═══════════════════════════════════════════════════════════
   MOBILE MENU - FIXED
   ═══════════════════════════════════════════════════════════ */
function initMobileMenu() {
    var hamburger = document.getElementById('hamburger');
    var navMenu = document.getElementById('nav-menu');
    var overlay = document.getElementById('mobile-overlay');
    var navLinks = document.querySelectorAll('.nav-link');

    if (!hamburger || !navMenu) return;

    function openMenu() {
        hamburger.classList.add('active');
        navMenu.classList.add('active');
        if (overlay) overlay.classList.add('active');
        document.body.classList.add('menu-open');
    }

    function closeMenu() {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
        if (overlay) overlay.classList.remove('active');
        document.body.classList.remove('menu-open');
    }

    // Hamburger click
    hamburger.addEventListener('click', function(e) {
        e.stopPropagation();
        if (navMenu.classList.contains('active')) {
            closeMenu();
        } else {
            openMenu();
        }
    });

    // Overlay click
    if (overlay) {
        overlay.addEventListener('click', closeMenu);
    }

    // Nav link click
    navLinks.forEach(function(link) {
        link.addEventListener('click', closeMenu);
    });

    // Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && navMenu.classList.contains('active')) {
            closeMenu();
        }
    });

    // Resize handler
    window.addEventListener('resize', function() {
        if (window.innerWidth > 768 && navMenu.classList.contains('active')) {
            closeMenu();
        }
    });
}

/* ═══════════════════════════════════════════════════════════
   TYPING EFFECT
   ═══════════════════════════════════════════════════════════ */
function initTypingEffect() {
    var element = document.getElementById('typed-text');
    if (!element) return;

    var words = [
        'AI Solutions',
        'ML Models',
        'Data Pipelines',
        'Web Applications',
        'Smart Systems',
        'NLP Projects'
    ];
    var wordIndex = 0;
    var charIndex = 0;
    var isDeleting = false;

    function type() {
        var currentWord = words[wordIndex];

        if (isDeleting) {
            element.textContent = currentWord.substring(0, charIndex - 1);
            charIndex--;
        } else {
            element.textContent = currentWord.substring(0, charIndex + 1);
            charIndex++;
        }

        var speed = isDeleting ? 40 : 80;

        if (!isDeleting && charIndex === currentWord.length) {
            speed = 2000;
            isDeleting = true;
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            wordIndex = (wordIndex + 1) % words.length;
            speed = 400;
        }

        setTimeout(type, speed);
    }

    setTimeout(type, 1000);
}

/* ═══════════════════════════════════════════════════════════
   COUNTER ANIMATION
   ═══════════════════════════════════════════════════════════ */
function initCounters() {
    var counters = document.querySelectorAll('.counter');

    var observer = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry) {
            if (entry.isIntersecting) {
                var counter = entry.target;
                var target = parseInt(counter.getAttribute('data-target'));
                var duration = 2000;
                var start = performance.now();

                function update(now) {
                    var elapsed = now - start;
                    var progress = Math.min(elapsed / duration, 1);
                    var eased = 1 - Math.pow(1 - progress, 3);
                    counter.textContent = Math.floor(eased * target);

                    if (progress < 1) {
                        requestAnimationFrame(update);
                    } else {
                        counter.textContent = target;
                    }
                }
                requestAnimationFrame(update);
                observer.unobserve(counter);
            }
        });
    }, { threshold: 0.5 });

    counters.forEach(function(c) {
        observer.observe(c);
    });
}

/* ═══════════════════════════════════════════════════════════
   TERMINAL - Ctrl + . Shortcut
   ═══════════════════════════════════════════════════════════ */
function initTerminal() {
    var terminal = document.getElementById('terminal');
    var input = document.getElementById('term-input');
    var output = document.getElementById('terminal-output');
    var closeBtn = document.getElementById('close-terminal');
    var toggleBtn = document.getElementById('terminal-toggle');

    if (!terminal || !input) return;

    var commands = {
        help: 'Available commands:\n  about     - About me\n  skills    - My skills\n  projects  - My projects\n  contact   - Contact info\n  social    - Social links\n  clear     - Clear terminal\n  exit      - Close terminal',
        about: 'Shahzeb Faisal\n==============\nBS Data Science @ FAST NUCES\nResearch Assistant | AI/ML Developer\nLocation: Lahore, Pakistan\n\nPassionate about building intelligent\nsystems and solving real-world problems.',
        skills: 'Technical Skills:\n================\nLanguages: Python, JavaScript, TypeScript, SQL, C++\nML/AI: TensorFlow, PyTorch, Scikit-Learn, NLP, LLMs\nWeb: React, Next.js, Node.js, Tailwind\nCloud: Azure, Docker, Git, MongoDB, PostgreSQL',
        projects: 'Featured Projects:\n=================\n1. Nexium Resume Tailor - AI/GPT-4\n2. Blog Summarizer - NLP\n3. Smart City Management - Big Data\n4. Election DApp - Blockchain\n5. Image Captioning - Deep Learning\n\nVisit: github.com/ShahzebFaisal5649',
        contact: 'Contact Info:\n============\nEmail: shahzebfaisal5649@gmail.com\nPhone: +92 302 0418510\nLocation: Lahore, Pakistan',
        social: 'Social Links:\n============\nGitHub: github.com/ShahzebFaisal5649\nLinkedIn: linkedin.com/in/shahzeb-faisal-8b9190321',
        clear: 'CLEAR',
        exit: 'EXIT'
    };

    function openTerminal() {
        terminal.classList.remove('terminal-hidden');
        setTimeout(function() {
            input.focus();
        }, 100);
    }

    function closeTerminal() {
        terminal.classList.add('terminal-hidden');
    }

    // Keyboard shortcut: Ctrl + .
    document.addEventListener('keydown', function(e) {
        // Ctrl + . to toggle terminal
        if (e.ctrlKey && e.key === '.') {
            e.preventDefault();
            if (terminal.classList.contains('terminal-hidden')) {
                openTerminal();
            } else {
                closeTerminal();
            }
        }

        // Escape to close
        if (e.key === 'Escape' && !terminal.classList.contains('terminal-hidden')) {
            closeTerminal();
        }
    });

    // Toggle button click
    if (toggleBtn) {
        toggleBtn.addEventListener('click', function() {
            if (terminal.classList.contains('terminal-hidden')) {
                openTerminal();
            } else {
                closeTerminal();
            }
        });
    }

    // Close button click
    if (closeBtn) {
        closeBtn.addEventListener('click', closeTerminal);
    }

    // Process command input
    input.addEventListener('keydown', function(e) {
        if (e.key === 'Enter') {
            var cmd = input.value.trim().toLowerCase();
            input.value = '';

            // Add command to output
            var cmdLine = document.createElement('p');
            cmdLine.className = 'term-cmd';
            cmdLine.innerHTML = '<span class="prompt">❯</span> ' + cmd;
            output.appendChild(cmdLine);

            // Process command
            if (cmd === 'clear') {
                output.innerHTML = '';
            } else if (cmd === 'exit') {
                closeTerminal();
            } else if (commands[cmd]) {
                var response = document.createElement('p');
                response.className = 'term-response';
                response.textContent = commands[cmd];
                output.appendChild(response);
            } else if (cmd !== '') {
                var error = document.createElement('p');
                error.className = 'term-error';
                error.textContent = 'Command not found: ' + cmd + '\nType "help" for available commands.';
                output.appendChild(error);
            }

            // Scroll to bottom
            var body = document.getElementById('terminal-body');
            if (body) body.scrollTop = body.scrollHeight;
        }
    });
}

/* ═══════════════════════════════════════════════════════════
   SCROLL PROGRESS
   ═══════════════════════════════════════════════════════════ */
function initScrollProgress() {
    var progressBar = document.getElementById('scroll-progress');
    if (!progressBar) return;

    window.addEventListener('scroll', function() {
        var scrollTop = document.documentElement.scrollTop;
        var scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        var scrollPercent = (scrollTop / scrollHeight) * 100;
        progressBar.style.width = scrollPercent + '%';
    });
}

/* ═══════════════════════════════════════════════════════════
   PROJECT FILTERS
   ═══════════════════════════════════════════════════════════ */
function initProjectFilters() {
    var filterBtns = document.querySelectorAll('.filter-btn');
    var projectCards = document.querySelectorAll('.project-card');

    filterBtns.forEach(function(btn) {
        btn.addEventListener('click', function() {
            // Update active button
            filterBtns.forEach(function(b) {
                b.classList.remove('active');
            });
            btn.classList.add('active');

            var filter = btn.getAttribute('data-filter');

            // Filter projects
            projectCards.forEach(function(card) {
                var category = card.getAttribute('data-category') || '';
                if (filter === 'all' || category.indexOf(filter) !== -1) {
                    card.classList.remove('hidden');
                    card.style.animation = 'fadeInUp 0.5s ease forwards';
                } else {
                    card.classList.add('hidden');
                }
            });
        });
    });
}

/* ═══════════════════════════════════════════════════════════
   SKILL BARS ANIMATION
   ═══════════════════════════════════════════════════════════ */
function initSkillBars() {
    var skillBars = document.querySelectorAll('.skill-progress');

    var observer = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry) {
            if (entry.isIntersecting) {
                entry.target.classList.add('animated');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.3 });

    skillBars.forEach(function(bar) {
        observer.observe(bar);
    });
}

/* ═══════════════════════════════════════════════════════════
   TILT EFFECT
   ═══════════════════════════════════════════════════════════ */
function initTiltEffect() {
    if (typeof VanillaTilt === 'undefined') return;

    VanillaTilt.init(document.querySelectorAll('[data-tilt]'), {
        max: 8,
        speed: 400,
        glare: true,
        'max-glare': 0.1
    });
}

/* ═══════════════════════════════════════════════════════════
   CONFETTI
   ═══════════════════════════════════════════════════════════ */
function initConfetti() {
    var canvas = document.getElementById('confetti');
    if (!canvas) return;

    var ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    window.addEventListener('resize', function() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    });

    var confettiPieces = [];
    var colors = ['#6366F1', '#8B5CF6', '#EC4899', '#06B6D4', '#10B981', '#F59E0B'];

    function createConfetti() {
        confettiPieces = [];
        for (var i = 0; i < 150; i++) {
            confettiPieces.push({
                x: Math.random() * canvas.width,
                y: -20 - Math.random() * 100,
                w: Math.random() * 10 + 5,
                h: Math.random() * 6 + 3,
                color: colors[Math.floor(Math.random() * colors.length)],
                vx: (Math.random() - 0.5) * 4,
                vy: Math.random() * 3 + 2,
                rotation: Math.random() * 360,
                rotationSpeed: (Math.random() - 0.5) * 10
            });
        }
    }

    function animateConfetti() {
        if (confettiPieces.length === 0) return;

        ctx.clearRect(0, 0, canvas.width, canvas.height);

        var stillFalling = false;
        confettiPieces.forEach(function(c) {
            c.x += c.vx;
            c.y += c.vy;
            c.rotation += c.rotationSpeed;
            c.vy += 0.06;

            if (c.y < canvas.height + 50) {
                stillFalling = true;
                ctx.save();
                ctx.translate(c.x, c.y);
                ctx.rotate(c.rotation * Math.PI / 180);
                ctx.fillStyle = c.color;
                ctx.fillRect(-c.w / 2, -c.h / 2, c.w, c.h);
                ctx.restore();
            }
        });

        if (stillFalling) {
            requestAnimationFrame(animateConfetti);
        } else {
            confettiPieces = [];
        }
    }

    // Trigger on resume download
    var resumeLinks = document.querySelectorAll('a[href="resume.pdf"]');
    resumeLinks.forEach(function(link) {
        link.addEventListener('click', function() {
            createConfetti();
            animateConfetti();
        });
    });
}

/* ═══════════════════════════════════════════════════════════
   SMOOTH SCROLL
   ═══════════════════════════════════════════════════════════ */
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(function(anchor) {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            var targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            var target = document.querySelector(targetId);
            if (target) {
                var offset = 80;
                var targetPosition = target.getBoundingClientRect().top + window.pageYOffset - offset;
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

/* ═══════════════════════════════════════════════════════════
   SCROLL ANIMATIONS
   ═══════════════════════════════════════════════════════════ */
function initScrollAnimations() {
    var animatedElements = document.querySelectorAll('.project-card, .skill-card, .timeline-item, .about-image, .about-content');

    var observer = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry) {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.1, rootMargin: '-30px' });

    animatedElements.forEach(function(el) {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
}

/* ═══════════════════════════════════════════════════════════
   UTILITY: Animation Keyframes
   ═══════════════════════════════════════════════════════════ */
(function addAnimationStyles() {
    var style = document.createElement('style');
    style.textContent = '@keyframes fadeInUp{from{opacity:0;transform:translateY(30px)}to{opacity:1;transform:translateY(0)}}';
    document.head.appendChild(style);
})();