document.addEventListener("DOMContentLoaded", () => {
  // Inject Sidebar HTML if not present
  if (!document.getElementById("sidebar")) {
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
        <a href="index.html" class="logo-anchor" id="logo-anchor">
          <img src="Images/SF_logo.png" alt="Shahzeb Faisal" />
        </a>
        <div class="cmd-k-pill" id="cmd-k-pill" onclick="if(window.openCommandPalette) window.openCommandPalette();">
          <i class="fas fa-search"></i> <span>Search</span> <kbd>⌘Ctrl+K</kbd>
        </div>
        `;
    document.body.insertAdjacentHTML("afterbegin", sidebarHTML);
  }

  // Inject Command Palette HTML if not present
  if (!document.getElementById("command-palette")) {
    const paletteHTML = `
        <div id="command-palette" class="palette-overlay" style="display: none;">
            <div class="palette-modal">
                <div class="palette-header">
                    <i class="fas fa-terminal palette-search-icon"></i>
                    <input type="text" id="palette-search" placeholder="Search commands (e.g. projects, resume, theme...)" autocomplete="off">
                    <span class="palette-esc-hint">⌘Ctrl+K</span>
                </div>
                <div class="palette-results" id="palette-results"></div>
            </div>
        </div>
        `;
    document.body.insertAdjacentHTML("beforeend", paletteHTML);
  }

  // Inject Footer if not present
  if (!document.querySelector(".luxury-footer")) {
    const footerHTML = `
        <footer class="luxury-footer">
          <div class="footer-grid">
            <!-- Column 1 -->
            <div class="footer-brand">
              <img src="Images/SF_logo.png" alt="SF" class="footer-logo">
              <h3>Shahzeb Faisal</h3>
              <p>MERN Stack Developer @ NEXTSTAC</p>
              <div class="footer-location">
                <i class="fas fa-map-marker-alt"></i> Lahore, Pakistan
              </div>
              <span class="open-badge">
                <span class="pulse-dot"></span> Open to Remote/Hybrid Opportunities
              </span>
            </div>
            <!-- Column 2 -->
            <div class="footer-links">
              <h4>Navigation</h4>
              <ul>
                <li><a href="index.html">→ Home</a></li>
                <li><a href="about.html">→ About</a></li>
                <li><a href="projects.html">→ Projects</a></li>
                <li><a href="experience.html">→ Experience</a></li>
                <li><a href="certs.html">→ Certifications</a></li>
                <li><a href="skills.html">→ Skills</a></li>
                <li><a href="contact.html">→ Contact</a></li>
              </ul>
            </div>
            <!-- Column 3 -->
            <div class="footer-connect">
              <h4>Let's Connect</h4>
              <div class="footer-socials">
                <a href="https://github.com/ShahzebFaisal5649" target="_blank" title="GitHub"><i class="fab fa-github"></i></a>
                <a href="https://www.linkedin.com/in/shahzeb-faisal-8b9190321/" target="_blank" title="LinkedIn"><i class="fab fa-linkedin-in"></i></a>
                <a href="mailto:shahzebfaisal5649@gmail.com" title="Email"><i class="fas fa-envelope"></i></a>
              </div>
              <p class="footer-email">shahzebfaisal5649@gmail.com</p>
              <a href="https://wa.me/923020418510" target="_blank" class="whatsapp-btn">
                <i class="fab fa-whatsapp"></i> Chat on WhatsApp
              </a>
            </div>
          </div>
          <div class="footer-divider"><span>◆</span></div>
          <div class="footer-bottom">
            <span id="footer-copy">© 2025 Shahzeb Faisal. Crafted with passion in Lahore 🇵🇰</span>
            <span>Built with HTML · CSS · JavaScript · Three.js · Gemini AI</span>
            <span>Press <kbd>Ctrl+.</kbd> for AI Terminal</span>
          </div>
        </footer>
        `;
    document.body.insertAdjacentHTML("beforeend", footerHTML);

    // Confetti logic
    const copyEl = document.getElementById("footer-copy");
    if (copyEl) {
      copyEl.addEventListener("mouseenter", () => {
        triggerConfetti(copyEl);
      });
    }
  }

  function triggerConfetti(el) {
    const colors = ["#C9A84C", "#E8C97A", "#F5E3A0"];
    for (let i = 0; i < 15; i++) {
      const p = document.createElement("div");
      p.style.position = "fixed";
      p.style.width = "8px";
      p.style.height = "8px";
      p.style.background = colors[Math.floor(Math.random() * colors.length)];
      p.style.borderRadius = "50%";
      p.style.pointerEvents = "none";
      p.style.zIndex = "10005";
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
        p.style.opacity = p.style.opacity
          ? parseFloat(p.style.opacity) - 0.02
          : 1;

        if (parseFloat(p.style.opacity) <= 0) {
          p.remove();
        } else {
          requestAnimationFrame(update);
        }
      }
      requestAnimationFrame(update);
    }
  }

  const sidebar = document.getElementById("sidebar");
  const strip = document.getElementById("sidebar-strip");
  const hamburger = document.querySelector(".hamburger-btn");
  let closeTimer;

  function openSidebar() {
    sidebar.classList.add("open");
    if (strip) strip.style.opacity = "0";
  }

  function closeSidebar() {
    sidebar.classList.remove("open");
    if (strip) strip.style.opacity = "0.7";
  }

  // Edge trigger
  document.addEventListener("mousemove", (e) => {
    if (e.clientX < 60) {
      openSidebar();
    }
  });

  sidebar.addEventListener("mouseleave", () => {
    closeTimer = setTimeout(closeSidebar, 600);
  });

  sidebar.addEventListener("mouseenter", () => {
    clearTimeout(closeTimer);
  });

  // Mobile hamburger
  if (hamburger) {
    hamburger.addEventListener("click", () => {
      const isOpen = sidebar.classList.toggle("open");
      const logoAnchor = document.getElementById('logo-anchor');
      if (logoAnchor) {
        logoAnchor.style.opacity = isOpen ? '0' : '1';
        logoAnchor.style.pointerEvents = isOpen ? 'none' : 'auto';
        logoAnchor.style.transition = 'opacity 0.2s ease';
      }
      if (overlay) overlay.classList.toggle('active', isOpen);
    });
  }

  // Active Page Detection
  const currentPage = window.location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll(".sidebar-links a").forEach((link) => {
    if (link.getAttribute("href") === currentPage) link.classList.add("active");
  });

  // Section highlighting for index.html
  if (currentPage === "index.html" || currentPage === "") {
    const sections = document.querySelectorAll("section[id]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            document
              .querySelectorAll(".sidebar-links a")
              .forEach((a) => a.classList.remove("active"));
            const match = document.querySelector(
              `.sidebar-links a[href="#${entry.target.id}"]`,
            );
            if (match) match.classList.add("active");
            // Fallback to home if at top
            if (window.scrollY < 100) {
              const homeLink = document.querySelector(
                '.sidebar-links a[href="index.html"]',
              );
              if (homeLink) homeLink.classList.add("active");
            }
          }
        });
      },
      { threshold: 0.4 },
    );
    sections.forEach((s) => observer.observe(s));
  }

  // Interactive Command Palette (Ctrl+K)
  function initCommandPalette() {
    const palette = document.getElementById("command-palette");
    const searchInput = document.getElementById("palette-search");
    const resultsContainer = document.getElementById("palette-results");

    if (!palette || !searchInput || !resultsContainer) return;

    let activeIndex = 0;
    let filteredCommands = [];

    const commands = [
      {
        id: "go-home",
        title: "Go to Home",
        desc: "Return to the main dashboard",
        icon: "fa-home",
        shortcut: "↵",
        action: () => {
          window.location.href = "index.html";
        },
      },
      {
        id: "go-about",
        title: "Go to About",
        desc: "Read about my background and journey",
        icon: "fa-user",
        shortcut: "↵",
        action: () => {
          window.location.href = "about.html";
        },
      },
      {
        id: "go-projects",
        title: "Go to Projects",
        desc: "Browse my deployed ML models, web apps, and data engineering projects",
        icon: "fa-project-diagram",
        shortcut: "↵",
        action: () => {
          window.location.href = "projects.html";
        },
      },
      {
        id: "go-experience",
        title: "Go to Experience",
        desc: "View my professional career timeline and achievements",
        icon: "fa-history",
        shortcut: "↵",
        action: () => {
          window.location.href = "experience.html";
        },
      },
      {
        id: "go-certs",
        title: "Go to Certifications",
        desc: "View my earned certificates and badges",
        icon: "fa-certificate",
        shortcut: "↵",
        action: () => {
          window.location.href = "certs.html";
        },
      },
      {
        id: "go-skills",
        title: "Go to Skills",
        desc: "Analyze my technology stack, radar chart, and distribution",
        icon: "fa-brain",
        shortcut: "↵",
        action: () => {
          window.location.href = "skills.html";
        },
      },
      {
        id: "go-contact",
        title: "Go to Contact",
        desc: "Get in touch for opportunities, collaboration, or consultation",
        icon: "fa-envelope",
        shortcut: "↵",
        action: () => {
          window.location.href = "contact.html";
        },
      },
      {
        id: "download-resume",
        title: "Download Resume",
        desc: "Get a clean PDF copy of my professional CV",
        icon: "fa-file-pdf",
        shortcut: "D",
        action: () => {
          const link = document.createElement("a");
          link.href = "resume.pdf";
          link.download = "Shahzeb_Faisal_Resume.pdf";
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
        },
      },
      {
        id: "open-terminal",
        title: "Open Terminal",
        desc: "Access the data science CLI with AI chatbot",
        icon: "fa-terminal",
        shortcut: "Ctrl+.",
        action: () => {
          const isHome = !!document.querySelector(".hero");
          if (isHome && window.Terminal) {
            window.Terminal.open();
          } else {
            window.location.href = "index.html?terminal=true";
          }
        },
      },
      {
        id: "open-ai-chat",
        title: "Open AI Chat",
        desc: "Ask my AI assistant questions about my experience",
        icon: "fa-robot",
        shortcut: "↵",
        action: () => {
          const isHome = !!document.querySelector(".hero");
          if (isHome && window.toggleGeminiChat) {
            window.toggleGeminiChat();
          } else {
            window.location.href = "index.html?chat=true";
          }
        },
      },
      {
        id: "email-shahzeb",
        title: "Email Shahzeb",
        desc: "Send an email to shahzebfaisal5649@gmail.com",
        icon: "fa-envelope-open-text",
        shortcut: "↵",
        action: () => {
          window.open("mailto:shahzebfaisal5649@gmail.com");
        },
      },
      {
        id: "whatsapp-shahzeb",
        title: "WhatsApp Shahzeb",
        desc: "Chat directly on WhatsApp",
        icon: "fab fa-whatsapp",
        shortcut: "↵",
        action: () => {
          window.open("https://wa.me/923020418510");
        },
      },
      {
        id: "view-github",
        title: "View GitHub",
        desc: "Explore my open source code and repositories",
        icon: "fab fa-github",
        shortcut: "↵",
        action: () => {
          window.open("https://github.com/ShahzebFaisal5649");
        },
      },
      {
        id: "view-linkedin",
        title: "View LinkedIn",
        desc: "Connect with me professionally",
        icon: "fab fa-linkedin-in",
        shortcut: "↵",
        action: () => {
          window.open("https://www.linkedin.com/in/shahzeb-faisal-8b9190321/");
        },
      },
    ];

    function renderResults() {
      resultsContainer.innerHTML = "";
      filteredCommands.forEach((cmd, index) => {
        const item = document.createElement("div");
        item.className = `palette-item ${index === activeIndex ? "active" : ""}`;
        item.innerHTML = `
                    <i class="fas ${cmd.icon}"></i>
                    <div class="palette-item-info">
                        <span class="palette-item-title">${cmd.title}</span>
                        <span class="palette-item-desc">${cmd.desc}</span>
                    </div>
                    <span class="palette-item-shortcut">${cmd.shortcut}</span>
                `;

        item.addEventListener("mouseenter", () => {
          activeIndex = index;
          updateSelection();
        });

        item.addEventListener("click", () => {
          cmd.action();
          closePalette();
        });

        resultsContainer.appendChild(item);
      });

      if (filteredCommands.length === 0) {
        resultsContainer.innerHTML = `
                    <div style="padding: 24px; text-align: center; color: rgba(255,255,255,0.4); font-family: 'Outfit', sans-serif;">
                        <i class="fas fa-search" style="font-size: 24px; margin-bottom: 8px;"></i>
                        <p>No commands match your query</p>
                    </div>
                `;
      }
    }

    function updateSelection() {
      const items = resultsContainer.querySelectorAll(".palette-item");
      items.forEach((item, index) => {
        if (index === activeIndex) {
          item.classList.add("active");
          item.scrollIntoView({ block: "nearest" });
        } else {
          item.classList.remove("active");
        }
      });
    }

    function filterCommands(query) {
      const lowerQuery = query.toLowerCase().trim();
      filteredCommands = commands.filter(
        (cmd) =>
          cmd.title.toLowerCase().includes(lowerQuery) ||
          cmd.desc.toLowerCase().includes(lowerQuery),
      );
      activeIndex = 0;
      renderResults();
    }

    function openPalette() {
      palette.style.display = "flex";
      searchInput.value = "";
      filterCommands("");
      document.body.style.overflow = "hidden";
      if (window.AudioSystem && typeof window.AudioSystem.play === "function") {
        window.AudioSystem.play("terminal");
      }
      setTimeout(() => searchInput.focus(), 50);
    }

    function closePalette() {
      palette.style.display = "none";
      document.body.style.overflow = "auto";
      if (window.AudioSystem && typeof window.AudioSystem.play === "function") {
        window.AudioSystem.play("click");
      }
    }

    window.openCommandPalette = openPalette;
    window.closeCommandPalette = closePalette;

    // Global keybinds
    window.addEventListener("keydown", (e) => {
      if ((e.ctrlKey || e.metaKey) && (e.key.toLowerCase() === "k" || e.code === "KeyK")) {
        e.preventDefault();
        e.stopPropagation();
        if (palette.style.display === "none" || palette.style.display === "") {
          openPalette();
        } else {
          closePalette();
        }
      }

      if (palette.style.display === "flex") {
        if (e.key === "Escape") {
          e.preventDefault();
          closePalette();
        } else if (e.key === "ArrowDown") {
          e.preventDefault();
          activeIndex = (activeIndex + 1) % filteredCommands.length;
          updateSelection();
          if (
            window.AudioSystem &&
            typeof window.AudioSystem.play === "function"
          ) {
            window.AudioSystem.play("click");
          }
        } else if (e.key === "ArrowUp") {
          e.preventDefault();
          activeIndex =
            (activeIndex - 1 + filteredCommands.length) %
            filteredCommands.length;
          updateSelection();
          if (
            window.AudioSystem &&
            typeof window.AudioSystem.play === "function"
          ) {
            window.AudioSystem.play("click");
          }
        } else if (e.key === "Enter") {
          e.preventDefault();
          if (filteredCommands[activeIndex]) {
            filteredCommands[activeIndex].action();
            closePalette();
          }
        }
      }
    });

    // Click outside or overlay
    palette.addEventListener("click", (e) => {
      if (e.target === palette) {
        closePalette();
      }
    });

    searchInput.addEventListener("input", (e) => {
      filterCommands(e.target.value);
    });
  }

  initCommandPalette();

  // ── Ctrl+. → Open Terminal (cross-page) ──
  window.addEventListener('keydown', (e) => {
    if (e.ctrlKey && e.key === '.') {
      e.preventDefault();
      // On index.html if Terminal object exists
      if (window.Terminal && typeof window.Terminal.toggle === 'function') {
        window.Terminal.toggle();
        return;
      }
      // If terminal div exists on this page
      const terminalEl = document.getElementById('terminal');
      if (terminalEl) {
        terminalEl.classList.toggle('terminal-hidden');
        const btn = document.getElementById('terminal-btn');
        if (btn) btn.classList.toggle('active');
      } else {
        // Redirect to home with flag
        window.location.href = 'index.html?terminal=true';
      }
    }
  });

  // Auto-open terminal if redirected here with ?terminal=true
  window.addEventListener('load', () => {
    const params = new URLSearchParams(window.location.search);
    if (params.get('terminal') === 'true') {
      const terminalEl = document.getElementById('terminal');
      if (terminalEl) {
        terminalEl.classList.remove('terminal-hidden');
        const input = document.getElementById('term-input');
        if (input) input.focus();
      }
    }
  });

});
