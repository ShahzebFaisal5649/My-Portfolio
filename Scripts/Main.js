/* ═══════════════════════════════════════════════════════════
   SHAHZEB FAISAL PORTFOLIO - ULTIMATE COMBINED VERSION
   Version 8.0 - All Features Merged & Voice Fixed
   ═══════════════════════════════════════════════════════════ */

(function() {
    'use strict';

    // ═══════════ PORTFOLIO DATA ═══════════
    const PORTFOLIO_DATA = {
        name: "Shahzeb Faisal",
        title: "Data Scientist & ML Engineer",
        location: "Lahore, Pakistan",
        email: "shahzebfaisal5649@gmail.com",
        phone: "+92 302 0418510",
        education: "BS Data Science from FAST-NUCES Lahore (Expected 2026)",
        github: "https://github.com/ShahzebFaisal5649",
        linkedin: "https://www.linkedin.com/in/shahzeb-faisal-8b9190321/",
        
        skills: {
            languages: ["Python", "JavaScript", "TypeScript", "SQL", "C++", "HTML/CSS", "Solidity"],
            ml_frameworks: ["TensorFlow", "PyTorch", "Scikit-Learn", "Keras", "Transformers", "Hugging Face", "OpenAI", "LangChain"],
            nlp_llms: ["GPT-4", "BERT", "T5", "spaCy", "NLTK", "Llama", "RAG"],
            web: ["React", "Next.js", "Node.js", "Express", "Tailwind CSS", "REST APIs", "GraphQL"],
            data: ["Pandas", "NumPy", "Matplotlib", "Seaborn", "Apache Spark", "Jupyter"],
            cloud: ["Git/GitHub", "Docker", "Azure", "Vercel", "Netlify", "CI/CD"],
            databases: ["MongoDB", "PostgreSQL", "MySQL", "Supabase", "Firebase", "Redis"],
            blockchain: ["Solidity", "Web3.js", "Truffle", "Ethereum", "Smart Contracts"]
        },
        
        projects: [
            { name: "Nexium Resume Tailor", desc: "AI-powered resume optimizer using GPT-4", tech: ["Next.js 15", "GPT-4", "TypeScript"], category: "ml" },
            { name: "Blog Summarizer", desc: "NLP summarization with Urdu translation", tech: ["Next.js", "MongoDB", "NLP"], category: "ml" },
            { name: "Smart City Management", desc: "Data pipeline processing 13.5M+ records", tech: ["Python", "Spark", "ETL"], category: "data" },
            { name: "Election DApp", desc: "Decentralized voting on Ethereum", tech: ["Solidity", "Web3.js", "Truffle"], category: "blockchain" },
            { name: "Image Captioning LSTM", desc: "CNN-LSTM model with 0.875 BLEU score", tech: ["TensorFlow", "LSTM", "Keras"], category: "ml" },
            { name: "Edu Connect", desc: "Full-stack tutoring platform", tech: ["React", "Node.js", "MySQL"], category: "web" }
        ],
        
        experience: [
            { title: "Research Assistant", company: "FAST NUCES Lahore", period: "2024-Present" },
            { title: "AI-First Web Dev Intern", company: "Nexium", period: "Jul-Aug 2025" },
            { title: "Data Science Intern", company: "CodeAlpha", period: "Jun-Jul 2024" },
            { title: "Data & Software Intern", company: "Kashf Foundation", period: "Jul-Aug 2024" }
        ],
        
        stats: { projects: 16, technologies: 30, experience_years: 1, github_contributions: "500+" }
    };

    // ═══════════ GEMINI AI INTEGRATION ═══════════
    const GeminiAI = {
        apiKey: 'AIzaSyDlU5GZPlxMCegciZS3Jyab0z0wym8WynY',
        apiUrl: 'https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent',
        conversationHistory: [],
        
        getSystemPrompt() {
            return `You are an AI assistant for Shahzeb Faisal's portfolio. Help visitors learn about his skills, projects, and experience.
Name: ${PORTFOLIO_DATA.name} | Title: ${PORTFOLIO_DATA.title} | Email: ${PORTFOLIO_DATA.email}
Skills: ${Object.values(PORTFOLIO_DATA.skills).flat().join(', ')}
Projects: ${PORTFOLIO_DATA.projects.map(p => p.name).join(', ')}
Keep responses concise (2-4 sentences). Be helpful and professional.`;
        },
        
        async chat(userMessage) {
            this.conversationHistory.push({ role: 'user', parts: [{ text: userMessage }] });
            if (this.conversationHistory.length > 10) this.conversationHistory = this.conversationHistory.slice(-10);
            
            try {
                const response = await fetch(`${this.apiUrl}?key=${this.apiKey}`, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        contents: [
                            { role: 'user', parts: [{ text: this.getSystemPrompt() }] },
                            { role: 'model', parts: [{ text: 'I understand. How can I help?' }] },
                            ...this.conversationHistory
                        ],
                        generationConfig: { temperature: 0.7, maxOutputTokens: 500 }
                    })
                });
                const data = await response.json();
                const aiResponse = data.candidates?.[0]?.content?.parts?.[0]?.text || this.getFallbackResponse(userMessage);
                this.conversationHistory.push({ role: 'model', parts: [{ text: aiResponse }] });
                return aiResponse;
            } catch (error) {
                return this.getFallbackResponse(userMessage);
            }
        },
        
        getFallbackResponse(query) {
            const q = query.toLowerCase();
            if (q.includes('project')) return `Shahzeb has ${PORTFOLIO_DATA.stats.projects}+ projects including AI/ML apps and blockchain DApps.`;
            if (q.includes('skill')) return `Proficient in Python, JavaScript, React, TensorFlow, and ${PORTFOLIO_DATA.stats.technologies}+ technologies!`;
            if (q.includes('contact')) return `Email: ${PORTFOLIO_DATA.email} | LinkedIn: ${PORTFOLIO_DATA.linkedin}`;
            if (q.includes('hello') || q.includes('hi')) return `Hey! 👋 Ask me about Shahzeb's projects, skills, or contact info!`;
            return "Ask me about Shahzeb's projects, skills, or how to contact him!";
        },
        
        clearHistory() { this.conversationHistory = []; }
    };

    // ═══════════ AUDIO SYSTEM ═══════════
    const AudioSystem = {
        enabled: false,
        ctx: null,
        
        init() {
            const AudioContext = window.AudioContext || window.webkitAudioContext;
            if (!AudioContext) return;
            this.ctx = new AudioContext();
            this.enabled = localStorage.getItem('soundEnabled') === 'true';
            this.updateIcon();
        },
        
        play(type) {
            if (!this.enabled || !this.ctx) return;
            if (this.ctx.state === 'suspended') this.ctx.resume();
            
            const osc = this.ctx.createOscillator();
            const gain = this.ctx.createGain();
            osc.connect(gain);
            gain.connect(this.ctx.destination);
            
            const sounds = {
                click: { freq: 800, duration: 0.1, gain: 0.1, type: 'sine' },
                hover: { freq: 600, duration: 0.05, gain: 0.05, type: 'sine' },
                success: { freq: 523.25, duration: 0.3, gain: 0.15, type: 'sine' },
                terminal: { freq: 400, duration: 0.08, gain: 0.08, type: 'square' },
                typing: { freq: 1200, duration: 0.02, gain: 0.03, type: 'sine' },
                voice: { freq: 440, duration: 0.2, gain: 0.12, type: 'sine' },
                error: { freq: 200, duration: 0.15, gain: 0.1, type: 'sawtooth' }
            };
            
            const sound = sounds[type] || sounds.click;
            osc.frequency.value = sound.freq;
            osc.type = sound.type;
            gain.gain.setValueAtTime(sound.gain, this.ctx.currentTime);
            gain.gain.exponentialRampToValueAtTime(0.01, this.ctx.currentTime + sound.duration);
            osc.start();
            osc.stop(this.ctx.currentTime + sound.duration);
        },
        
        toggle() {
            this.enabled = !this.enabled;
            localStorage.setItem('soundEnabled', this.enabled);
            this.updateIcon();
            if (this.enabled) this.play('success');
            return this.enabled;
        },
        
        updateIcon() {
            const btn = document.getElementById('sound-btn');
            const icon = btn?.querySelector('i');
            if (icon) icon.className = this.enabled ? 'fas fa-volume-up' : 'fas fa-volume-mute';
        }
    };

    // ═══════════ PRELOADER ═══════════
    function hidePreloader() {
        document.body.classList.add('loaded');
        setTimeout(initParticles, 100);
    }

    // ═══════════ PARTICLES ═══════════
    function initParticles() {
        const canvas = document.getElementById('particles');
        if (!canvas) return;
        
        const ctx = canvas.getContext('2d');
        let particles = [];
        let mouse = { x: null, y: null, radius: 150 };
        
        function resize() { canvas.width = window.innerWidth; canvas.height = window.innerHeight; }
        
        function createParticles() {
            particles = [];
            const count = Math.min(60, Math.floor(window.innerWidth / 25));
            for (let i = 0; i < count; i++) {
                particles.push({
                    x: Math.random() * canvas.width, y: Math.random() * canvas.height,
                    vx: (Math.random() - 0.5) * 0.5, vy: (Math.random() - 0.5) * 0.5,
                    radius: Math.random() * 2 + 1, opacity: Math.random() * 0.5 + 0.2
                });
            }
        }
        
        canvas.addEventListener('mousemove', (e) => { mouse.x = e.clientX; mouse.y = e.clientY; });
        canvas.addEventListener('mouseleave', () => { mouse.x = mouse.y = null; });
        
        function animate() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            particles.forEach(p => {
                if (mouse.x !== null) {
                    const dx = p.x - mouse.x, dy = p.y - mouse.y;
                    const dist = Math.sqrt(dx * dx + dy * dy);
                    if (dist < mouse.radius) { p.x += dx * (mouse.radius - dist) / mouse.radius * 0.03; p.y += dy * (mouse.radius - dist) / mouse.radius * 0.03; }
                }
                p.x += p.vx; p.y += p.vy;
                if (p.x < 0) p.x = canvas.width; if (p.x > canvas.width) p.x = 0;
                if (p.y < 0) p.y = canvas.height; if (p.y > canvas.height) p.y = 0;
                ctx.beginPath(); ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(99, 102, 241, ${p.opacity})`; ctx.fill();
            });
            for (let i = 0; i < particles.length; i++) {
                for (let j = i + 1; j < particles.length; j++) {
                    const dx = particles[i].x - particles[j].x, dy = particles[i].y - particles[j].y;
                    const dist = Math.sqrt(dx * dx + dy * dy);
                    if (dist < 150) { ctx.beginPath(); ctx.moveTo(particles[i].x, particles[i].y); ctx.lineTo(particles[j].x, particles[j].y);
                        ctx.strokeStyle = `rgba(99, 102, 241, ${0.15 * (1 - dist / 150)})`; ctx.lineWidth = 0.5; ctx.stroke(); }
                }
            }
            requestAnimationFrame(animate);
        }
        resize(); createParticles(); animate();
        let resizeTimer;
        window.addEventListener('resize', () => { clearTimeout(resizeTimer); resizeTimer = setTimeout(() => { resize(); createParticles(); }, 200); });
    }

    // ═══════════ CUSTOM CURSOR ═══════════
    function initCursor() {
        const cursor = document.querySelector('.cursor');
        const follower = document.querySelector('.cursor-follower');
        if (!cursor || !follower || window.matchMedia('(hover: none)').matches) return;
        
        let mouseX = 0, mouseY = 0, cursorX = 0, cursorY = 0, followerX = 0, followerY = 0;
        document.addEventListener('mousemove', e => { mouseX = e.clientX; mouseY = e.clientY; });
        
        function animate() {
            cursorX += (mouseX - cursorX) * 0.5; cursorY += (mouseY - cursorY) * 0.5;
            cursor.style.left = cursorX + 'px'; cursor.style.top = cursorY + 'px';
            followerX += (mouseX - followerX) * 0.15; followerY += (mouseY - followerY) * 0.15;
            follower.style.left = followerX + 'px'; follower.style.top = followerY + 'px';
            requestAnimationFrame(animate);
        }
        animate();
        
        document.querySelectorAll('a, button, .project-card, .skill-tags span, input, .suggestion').forEach(el => {
            el.addEventListener('mouseenter', () => { cursor.classList.add('active'); follower.classList.add('active'); });
            el.addEventListener('mouseleave', () => { cursor.classList.remove('active'); follower.classList.remove('active'); });
        });
    }

    // ═══════════ SPOTLIGHT ═══════════
    function initSpotlight() {
        const spotlight = document.getElementById('spotlight');
        if (!spotlight || window.matchMedia('(hover: none)').matches) return;
        let targetX = 0, targetY = 0, currentX = 0, currentY = 0;
        document.addEventListener('mousemove', (e) => { targetX = e.clientX; targetY = e.clientY; });
        function animateSpotlight() {
            currentX += (targetX - currentX) * 0.1; currentY += (targetY - currentY) * 0.1;
            spotlight.style.left = currentX + 'px'; spotlight.style.top = currentY + 'px';
            requestAnimationFrame(animateSpotlight);
        }
        animateSpotlight();
    }

    // ═══════════ BACK TO TOP ═══════════
    function initBackToTop() {
        const btn = document.getElementById('back-to-top');
        if (!btn) return;
        let isVisible = false;
        window.addEventListener('scroll', () => {
            if (window.pageYOffset > 400) { if (!isVisible) { btn.classList.add('show'); isVisible = true; } }
            else { if (isVisible) { btn.classList.remove('show'); isVisible = false; } }
        });
        btn.addEventListener('click', () => { window.scrollTo({ top: 0, behavior: 'smooth' }); AudioSystem.play('success'); });
    }

    // ═══════════ ENHANCED TERMINAL WITH AI & VOICE ═══════════
    const Terminal = {
        terminal: null, input: null, output: null, history: [], historyIndex: -1,
        isProcessing: false, isMaximized: false, recognition: null, isListening: false,
        
        commands: {
            help: `╔════════════════════════════════════════════════════════╗
║                  TERMINAL COMMANDS                      ║
╠════════════════════════════════════════════════════════╣
║ about     - About Shahzeb      │ skills   - Tech skills ║
║ projects  - View projects      │ contact  - Contact info║
║ ai <q>    - Ask AI anything!   │ resume   - Download CV  ║
║ github    - Open GitHub        │ linkedin - Open LinkedIn║
║ clear     - Clear terminal     │ sound    - Toggle sound ║
║ confetti  - Celebration! 🎉    │ matrix   - Matrix effect║
║ exit      - Close terminal     │ theme    - Toggle theme ║
╚════════════════════════════════════════════════════════╝`,
            about: `Shahzeb Faisal - Data Scientist & ML Engineer
🎓 BS Data Science, FAST-NUCES Lahore | 📍 Lahore, Pakistan
💼 Open to Opportunities | 🚀 16+ Projects | 30+ Technologies`,
            skills: `💻 Languages: Python, JavaScript, TypeScript, SQL, C++
🧠 ML/AI: TensorFlow, PyTorch, Keras, Transformers, GPT-4
🌐 Web: React, Next.js, Node.js, Express, Tailwind CSS
📊 Data: Pandas, NumPy, Matplotlib, Spark, Jupyter`,
            projects: `Featured Projects:
• Nexium Resume Tailor - AI resume optimizer with GPT-4
• Blog Summarizer - NLP with Urdu translation support
• Smart City System - 13.5M+ records data pipeline
• Election DApp - Blockchain voting on Ethereum
Type 'ai tell me more about [project]' for details!`,
            contact: `📧 shahzebfaisal5649@gmail.com | 📱 +92 302 0418510
💼 Open to Opportunities | Type 'email' or 'linkedin' to open`
        },

        init() {
            this.terminal = document.getElementById('terminal');
            this.input = document.getElementById('term-input');
            this.output = document.getElementById('terminal-output');
            if (!this.terminal || !this.input) return;
            
            this.input.addEventListener('keydown', (e) => {
                if (e.key === 'Enter' && !this.isProcessing) { this.execute(this.input.value.trim()); this.input.value = ''; }
                else if (e.key === 'ArrowUp') { e.preventDefault(); this.navigateHistory(-1); }
                else if (e.key === 'ArrowDown') { e.preventDefault(); this.navigateHistory(1); }
                else if (e.key === 'Tab') { e.preventDefault(); this.autocomplete(); }
            });
            
            document.getElementById('close-terminal')?.addEventListener('click', () => this.close());
            document.getElementById('terminal-btn')?.addEventListener('click', () => this.toggle());
            document.getElementById('terminal-minimize')?.addEventListener('click', () => this.close());
            document.getElementById('terminal-maximize')?.addEventListener('click', () => this.toggleMaximize());
            
            document.addEventListener('keydown', (e) => {
                if (e.ctrlKey && e.key === '.') { e.preventDefault(); this.toggle(); }
                if (e.key === 'Escape' && !this.terminal.classList.contains('terminal-hidden')) this.close();
            });
            
            this.initVoiceRecognition();
            this.initQuickSuggestions();
        },
        
        // ═══════════ VOICE RECOGNITION (FIXED) ═══════════
        initVoiceRecognition() {
            const voiceBtn = document.getElementById('voice-btn');
            if (!voiceBtn) return;
            
            const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
            
            if (!SpeechRecognition) {
                voiceBtn.style.opacity = '0.5';
                voiceBtn.style.cursor = 'not-allowed';
                voiceBtn.title = 'Voice not supported in this browser';
                voiceBtn.addEventListener('click', () => {
                    this.addLine('<span class="term-error">⚠️ Voice recognition not supported. Try Chrome or Edge.</span>');
                });
                return;
            }
            
            this.recognition = new SpeechRecognition();
            this.recognition.continuous = false;
            this.recognition.interimResults = true;
            this.recognition.lang = 'en-US';
            this.recognition.maxAlternatives = 1;
            
            let finalTranscript = '';
            
            voiceBtn.addEventListener('click', () => {
                if (!this.isListening) {
                    try {
                        finalTranscript = '';
                        this.recognition.start();
                        this.isListening = true;
                        voiceBtn.classList.add('listening');
                        this.addLine('<span class="term-info">🎤 Listening... Speak now!</span>');
                        this.scrollToBottom();
                        AudioSystem.play('voice');
                    } catch (error) {
                        this.addLine('<span class="term-error">⚠️ Could not start voice recognition.</span>');
                        voiceBtn.classList.remove('listening');
                    }
                } else {
                    this.recognition.stop();
                    this.isListening = false;
                    voiceBtn.classList.remove('listening');
                }
            });
            
            this.recognition.onresult = (event) => {
                let interimTranscript = '';
                for (let i = event.resultIndex; i < event.results.length; i++) {
                    const transcript = event.results[i][0].transcript;
                    if (event.results[i].isFinal) { finalTranscript += transcript; }
                    else { interimTranscript += transcript; }
                }
                if (interimTranscript) { this.input.value = interimTranscript; this.input.placeholder = 'Listening...'; }
            };
            
            this.recognition.onend = () => {
                this.isListening = false;
                voiceBtn.classList.remove('listening');
                this.input.placeholder = "Type 'help' or ask AI anything...";
                
                if (finalTranscript.trim()) {
                    this.input.value = finalTranscript.trim();
                    this.addLine(`<span class="term-success">🎤 Heard: "${finalTranscript.trim()}"</span>`);
                    AudioSystem.play('success');
                    setTimeout(() => { this.execute(finalTranscript.trim()); this.input.value = ''; }, 500);
                }
            };
            
            this.recognition.onerror = (event) => {
                this.isListening = false;
                voiceBtn.classList.remove('listening');
                let errorMsg = '⚠️ Voice error: ';
                switch(event.error) {
                    case 'not-allowed': errorMsg += 'Microphone access denied.'; break;
                    case 'no-speech': errorMsg += 'No speech detected.'; break;
                    case 'network': errorMsg += 'Network error.'; break;
                    case 'audio-capture': errorMsg += 'No microphone found.'; break;
                    default: errorMsg += event.error || 'Unknown error.';
                }
                this.addLine(`<span class="term-error">${errorMsg}</span>`);
                AudioSystem.play('error');
                this.scrollToBottom();
            };
        },
        
        initQuickSuggestions() {
            document.querySelectorAll('.suggestion').forEach(sug => {
                sug.addEventListener('click', () => {
                    const cmd = sug.getAttribute('data-cmd');
                    if (cmd) {
                        this.input.value = cmd;
                        this.input.focus();
                        AudioSystem.play('click');
                        setTimeout(() => { this.execute(cmd); this.input.value = ''; }, 300);
                    }
                });
            });
        },
        
        toggle() { this.terminal.classList.contains('terminal-hidden') ? this.open() : this.close(); },
        
        open() {
            this.terminal.classList.remove('terminal-hidden');
            setTimeout(() => this.input?.focus(), 100);
            AudioSystem.play('terminal');
            const hint = document.querySelector('.terminal-hint-persistent');
            if (hint) hint.classList.add('terminal-open');
        },
        
        close() {
            this.terminal.classList.add('terminal-hidden');
            AudioSystem.play('click');
            const hint = document.querySelector('.terminal-hint-persistent');
            if (hint) hint.classList.remove('terminal-open');
        },
        
        toggleMaximize() {
            this.isMaximized = !this.isMaximized;
            const termWindow = document.querySelector('.terminal-window');
            const icon = document.querySelector('#terminal-maximize i');
            if (this.isMaximized) { termWindow?.classList.add('maximized'); icon?.classList.replace('fa-expand', 'fa-compress'); }
            else { termWindow?.classList.remove('maximized'); icon?.classList.replace('fa-compress', 'fa-expand'); }
            AudioSystem.play('click');
        },
        
        navigateHistory(direction) {
            if (this.history.length === 0) return;
            this.historyIndex += direction;
            if (this.historyIndex < 0) this.historyIndex = 0;
            if (this.historyIndex >= this.history.length) { this.historyIndex = this.history.length; this.input.value = ''; return; }
            this.input.value = this.history[this.historyIndex];
        },
        
        autocomplete() {
            const input = this.input.value.toLowerCase();
            const commands = ['help', 'about', 'skills', 'projects', 'contact', 'resume', 'github', 'linkedin', 'email', 'clear', 'sound', 'confetti', 'matrix', 'theme', 'exit', 'ai'];
            const match = commands.find(cmd => cmd.startsWith(input));
            if (match) { this.input.value = match; AudioSystem.play('click'); }
        },
        
        async execute(cmd) {
            if (!cmd) return;
            this.history.push(cmd);
            this.historyIndex = this.history.length;
            this.addLine(`<span class="term-prompt">❯</span> <span class="term-cmd">${this.escapeHtml(cmd)}</span>`);
            AudioSystem.play('terminal');
            
            const parts = cmd.split(' ');
            const command = parts[0].toLowerCase();
            const args = parts.slice(1).join(' ');
            
            if (command === 'ai' && args) { await this.handleAI(args); return; }
            if (cmd.includes('?') || /^(what|how|tell|who|can|why|where)/i.test(cmd)) { await this.handleAI(cmd); return; }
            
            if (this.commands[command]) { this.addLine(`<pre class="term-response">${this.commands[command]}</pre>`); }
            else {
                switch(command) {
                    case 'clear': this.clear(); break;
                    case 'exit': this.close(); break;
                    case 'sound': this.addLine(`<span class="term-success">🔊 Sound ${AudioSystem.toggle() ? 'enabled' : 'disabled'}</span>`); break;
                    case 'confetti': triggerConfetti(); this.addLine('<span class="term-success">🎉 Celebration!</span>'); break;
                    case 'matrix': toggleMatrix(); this.addLine('<span class="term-success">🟢 Matrix toggled!</span>'); break;
                    case 'theme': document.body.classList.toggle('light-theme'); this.addLine(`<span class="term-success">🎨 Theme toggled!</span>`); break;
                    case 'resume': this.addLine('<span class="term-success">📄 Downloading...</span>'); setTimeout(() => { const a = document.createElement('a'); a.href = 'resume.pdf'; a.download = 'Shahzeb_Faisal_Resume.pdf'; a.click(); triggerConfetti(); }, 500); break;
                    case 'github': window.open(PORTFOLIO_DATA.github, '_blank'); this.addLine('<span class="term-success">🐙 Opening GitHub...</span>'); break;
                    case 'linkedin': window.open(PORTFOLIO_DATA.linkedin, '_blank'); this.addLine('<span class="term-success">💼 Opening LinkedIn...</span>'); break;
                    case 'email': window.location.href = `mailto:${PORTFOLIO_DATA.email}`; this.addLine('<span class="term-success">📧 Opening email...</span>'); break;
                    default: this.addLine(`<span class="term-error">Command not found: ${this.escapeHtml(command)}</span>`); this.addLine('<span class="term-hint">Type <span class="hl">help</span> or ask the AI!</span>');
                }
            }
            this.scrollToBottom();
        },
        
        async handleAI(query) {
            this.isProcessing = true;
            this.input.disabled = true;
            const typingId = 'typing-' + Date.now();
            this.addLine(`<div id="${typingId}" class="term-typing"><span class="typing-dots"><span>●</span><span>●</span><span>●</span></span> AI thinking...</div>`);
            this.scrollToBottom();
            
            try {
                const response = await GeminiAI.chat(query);
                document.getElementById(typingId)?.remove();
                await this.typewriterEffect(response);
                AudioSystem.play('success');
            } catch (error) {
                document.getElementById(typingId)?.remove();
                this.addLine(`<span class="term-error">Error: ${error.message}</span>`);
                AudioSystem.play('error');
            }
            this.isProcessing = false;
            this.input.disabled = false;
            this.input.focus();
            this.scrollToBottom();
        },
        
        async typewriterEffect(text) {
            const div = document.createElement('div');
            div.className = 'term-ai-response';
            div.innerHTML = '<span class="ai-icon">🤖</span> <span class="ai-text"></span>';
            this.output.appendChild(div);
            const textSpan = div.querySelector('.ai-text');
            for (let i = 0; i < text.length; i++) {
                textSpan.textContent += text[i];
                this.scrollToBottom();
                if (i % 5 === 0) AudioSystem.play('typing');
                await new Promise(r => setTimeout(r, text[i] === '.' ? 50 : text[i] === ',' ? 30 : Math.random() * 15 + 5));
            }
        },
        
        addLine(html) { const div = document.createElement('div'); div.innerHTML = html; this.output.appendChild(div); },
        
        clear() {
            this.output.innerHTML = `<div class="welcome-box"><div class="welcome-title">👋 Terminal cleared!</div>
<div class="welcome-subtitle">Type <span class="hl">help</span> for commands or ask AI anything!</div>
<div class="quick-suggestions"><span class="suggestion" data-cmd="ai what projects?">AI Projects</span>
<span class="suggestion" data-cmd="skills">Skills</span><span class="suggestion" data-cmd="contact">Contact</span></div></div>`;
            GeminiAI.clearHistory();
            this.initQuickSuggestions();
        },
        
        scrollToBottom() { const body = document.getElementById('terminal-body'); if (body) body.scrollTop = body.scrollHeight; },
        escapeHtml(text) { const div = document.createElement('div'); div.textContent = text; return div.innerHTML; }
    };

    // ═══════════ MATRIX RAIN ═══════════
    let matrixActive = false, matrixCanvas = null, matrixAnimationId = null;
    
    function toggleMatrix() { matrixActive ? stopMatrix() : startMatrix(); }
    
    function startMatrix() {
        matrixActive = true;
        matrixCanvas = document.createElement('canvas');
        matrixCanvas.id = 'matrix-canvas';
        matrixCanvas.style.cssText = 'position:fixed;top:0;left:0;width:100%;height:100%;pointer-events:none;z-index:1;opacity:0.12;';
        document.body.appendChild(matrixCanvas);
        
        const ctx = matrixCanvas.getContext('2d');
        matrixCanvas.width = window.innerWidth;
        matrixCanvas.height = window.innerHeight;
        
        const chars = 'アイウエオカキクケコサシスセソタチツテト0123456789ABCDEF<>{}[]';
        const fontSize = 14, columns = matrixCanvas.width / fontSize;
        const drops = Array(Math.floor(columns)).fill(1);
        
        function draw() {
            if (!matrixActive) return;
            ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
            ctx.fillRect(0, 0, matrixCanvas.width, matrixCanvas.height);
            ctx.fillStyle = '#0f0';
            ctx.font = fontSize + 'px monospace';
            for (let i = 0; i < drops.length; i++) {
                ctx.fillText(chars[Math.floor(Math.random() * chars.length)], i * fontSize, drops[i] * fontSize);
                if (drops[i] * fontSize > matrixCanvas.height && Math.random() > 0.975) drops[i] = 0;
                drops[i]++;
            }
            matrixAnimationId = requestAnimationFrame(draw);
        }
        draw();
        setTimeout(() => { if (matrixActive) stopMatrix(); }, 10000);
    }
    
    function stopMatrix() {
        matrixActive = false;
        if (matrixAnimationId) { cancelAnimationFrame(matrixAnimationId); matrixAnimationId = null; }
        if (matrixCanvas) { matrixCanvas.remove(); matrixCanvas = null; }
    }

    // ═══════════ CONFETTI ═══════════
    function triggerConfetti() {
        const canvas = document.getElementById('confetti');
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        
        const particles = [], colors = ['#6366f1', '#8b5cf6', '#ec4899', '#06b6d4', '#10b981', '#f59e0b'];
        for (let i = 0; i < 150; i++) {
            particles.push({
                x: Math.random() * canvas.width, y: Math.random() * canvas.height - canvas.height,
                vx: (Math.random() - 0.5) * 12, vy: Math.random() * 5 + 3,
                color: colors[Math.floor(Math.random() * colors.length)],
                size: Math.random() * 10 + 4, rotation: Math.random() * 360
            });
        }
        
        let frame = 0;
        function animate() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            particles.forEach(p => {
                p.x += p.vx; p.y += p.vy; p.vy += 0.12; p.vx *= 0.99;
                ctx.save(); ctx.translate(p.x, p.y); ctx.rotate(p.rotation * Math.PI / 180);
                ctx.fillStyle = p.color; ctx.fillRect(-p.size / 2, -p.size / 4, p.size, p.size / 2);
                ctx.restore();
            });
            if (++frame < 200) requestAnimationFrame(animate);
            else ctx.clearRect(0, 0, canvas.width, canvas.height);
        }
        AudioSystem.play('success');
        animate();
    }

    // ═══════════ TERMINAL HINT ═══════════
    function initTerminalHint() {
        const hint = document.createElement('div');
        hint.className = 'terminal-hint-persistent';
        hint.innerHTML = '<div class="hint-glow"></div><div class="hint-pulse"></div><div class="hint-content"><i class="fas fa-terminal hint-icon"></i><span>Try</span><kbd>Ctrl</kbd><span>+</span><kbd>.</kbd><span>for AI</span></div>';
        document.body.appendChild(hint);
        hint.addEventListener('click', () => { Terminal.open(); AudioSystem.play('click'); });
    }

    // ═══════════ MAGNETIC BUTTONS ═══════════
    function initMagneticButtons() {
        document.querySelectorAll('.btn, .nav-cta, .social-link').forEach(btn => {
            btn.addEventListener('mousemove', (e) => {
                const rect = btn.getBoundingClientRect();
                btn.style.transform = `translate(${(e.clientX - rect.left - rect.width / 2) * 0.2}px, ${(e.clientY - rect.top - rect.height / 2) * 0.2}px)`;
            });
            btn.addEventListener('mouseleave', () => { btn.style.transform = 'translate(0, 0)'; });
        });
    }

    // ═══════════ PARALLAX ═══════════
    function initParallax() {
        const elements = document.querySelectorAll('.floating-elements .float-item, .floating-elements .float-icon');
        document.addEventListener('mousemove', (e) => {
            const x = (e.clientX / window.innerWidth - 0.5) * 2;
            const y = (e.clientY / window.innerHeight - 0.5) * 2;
            elements.forEach((el, i) => { el.style.transform = `translate(${x * (i + 1) * 10}px, ${y * (i + 1) * 10}px)`; });
        });
    }

    // ═══════════ SCROLL REVEAL ═══════════
    function initScrollReveal() {
        const elements = document.querySelectorAll('.section-header, .project-card, .timeline-item, .skill-category, .about-content, .about-image, .contact-card');
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry, idx) => {
                if (entry.isIntersecting) {
                    setTimeout(() => { entry.target.classList.add('revealed'); }, idx * 80);
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });
        elements.forEach(el => { el.classList.add('reveal-element'); observer.observe(el); });
    }

    // ═══════════ SKILL ORBIT ═══════════
    function initSkillOrbit() {
        document.querySelectorAll('.skill-category').forEach(category => {
            category.addEventListener('mouseenter', () => {
                category.querySelectorAll('.skill-tags span').forEach((tag, i) => { tag.style.animationDelay = `${i * 0.08}s`; tag.classList.add('pulse'); });
            });
            category.addEventListener('mouseleave', () => { category.querySelectorAll('.skill-tags span').forEach(tag => tag.classList.remove('pulse')); });
        });
    }

    // ═══════════ NAVIGATION ═══════════
    function initNavigation() {
        const navbar = document.getElementById('navbar');
        const hamburger = document.getElementById('hamburger');
        const navMenu = document.getElementById('nav-menu');
        const overlay = document.getElementById('mobile-overlay');
        
        window.addEventListener('scroll', () => {
            navbar?.classList.toggle('scrolled', window.pageYOffset > 50);
            updateScrollProgress();
            updateActiveNavLink();
        });
        
        hamburger?.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            navMenu?.classList.toggle('active');
            overlay?.classList.toggle('active');
            document.body.classList.toggle('menu-open');
            AudioSystem.play('click');
        });
        
        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', () => {
                hamburger?.classList.remove('active');
                navMenu?.classList.remove('active');
                overlay?.classList.remove('active');
                document.body.classList.remove('menu-open');
                AudioSystem.play('click');
            });
        });
        
        overlay?.addEventListener('click', () => {
            hamburger?.classList.remove('active');
            navMenu?.classList.remove('active');
            overlay?.classList.remove('active');
            document.body.classList.remove('menu-open');
        });
    }

    function updateScrollProgress() {
        const progress = document.getElementById('scroll-progress');
        if (progress) progress.style.width = (window.pageYOffset / (document.documentElement.scrollHeight - window.innerHeight)) * 100 + '%';
    }

    function updateActiveNavLink() {
        const sections = document.querySelectorAll('section[id]');
        let current = '';
        sections.forEach(section => { if (window.pageYOffset >= section.offsetTop - 100) current = section.getAttribute('id'); });
        document.querySelectorAll('.nav-link').forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === '#' + current) link.classList.add('active');
        });
    }

    // ═══════════ TYPING EFFECT ═══════════
    function initTypingEffect() {
        const typedEl = document.getElementById('typed-text');
        if (!typedEl) return;
        const words = ['AI Solutions', 'ML Models', 'Web Apps', 'Data Pipelines', 'Smart Systems'];
        let wordIndex = 0, charIndex = 0, isDeleting = false, isPaused = false;
        
        function type() {
            const currentWord = words[wordIndex];
            if (isPaused) { setTimeout(type, 1500); isPaused = false; isDeleting = true; return; }
            typedEl.textContent = currentWord.substring(0, isDeleting ? charIndex - 1 : charIndex + 1);
            charIndex += isDeleting ? -1 : 1;
            let typeSpeed = isDeleting ? 50 : 100;
            if (!isDeleting && charIndex === currentWord.length) isPaused = true;
            else if (isDeleting && charIndex === 0) { isDeleting = false; wordIndex = (wordIndex + 1) % words.length; typeSpeed = 300; }
            setTimeout(type, typeSpeed);
        }
        type();
    }

    // ═══════════ COUNTER ANIMATION ═══════════
    function initCounters() {
        const counters = document.querySelectorAll('.counter');
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const counter = entry.target, target = parseInt(counter.getAttribute('data-target'));
                    let current = 0;
                    const timer = setInterval(() => {
                        current += target / 60;
                        if (current >= target) { counter.textContent = target; clearInterval(timer); }
                        else counter.textContent = Math.floor(current);
                    }, 33);
                    observer.unobserve(counter);
                }
            });
        }, { threshold: 0.5 });
        counters.forEach(counter => observer.observe(counter));
    }

    // ═══════════ 3D CARD TILT ═══════════
    function initCardTilt() {
        const card = document.getElementById('hero-card');
        if (!card) return;
        const inner = card.querySelector('.card-inner');
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const rotateX = (e.clientY - rect.top - rect.height / 2) / 10;
            const rotateY = (rect.width / 2 - (e.clientX - rect.left)) / 10;
            inner.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.03)`;
        });
        card.addEventListener('mouseleave', () => { inner.style.transform = 'rotateX(0) rotateY(0) scale(1)'; });
    }

    // ═══════════ PROJECT FILTERS ═══════════
    function initProjectFilters() {
        const filterBtns = document.querySelectorAll('.filter-btn');
        const projectCards = document.querySelectorAll('.project-card');
        
        filterBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                filterBtns.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                const filter = btn.getAttribute('data-filter');
                AudioSystem.play('click');
                
                projectCards.forEach((card, idx) => {
                    const categories = card.getAttribute('data-category') || '';
                    if (filter === 'all' || categories.includes(filter)) {
                        card.style.transitionDelay = `${idx * 50}ms`;
                        card.classList.remove('hidden'); card.classList.add('show');
                    } else {
                        card.style.transitionDelay = '0ms';
                        card.classList.remove('show'); card.classList.add('hidden');
                    }
                });
            });
        });
    }

    // ═══════════ QUICK ACTIONS ═══════════
    function initQuickActions() {
        const mainBtn = document.getElementById('quick-main');
        const menu = document.getElementById('quick-menu');
        if (!mainBtn || !menu) return;
        
        mainBtn.addEventListener('click', () => { mainBtn.classList.toggle('active'); menu.classList.toggle('active'); AudioSystem.play('click'); });
        document.getElementById('sound-btn')?.addEventListener('click', () => AudioSystem.toggle());
        document.addEventListener('click', (e) => { if (!e.target.closest('.quick-actions')) { mainBtn.classList.remove('active'); menu.classList.remove('active'); } });
    }

    // ═══════════ SMOOTH SCROLL ═══════════
    function initSmoothScroll() {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            });
        });
    }

    // ═══════════ INTERACTION SOUNDS ═══════════
    function initInteractionSounds() {
        document.querySelectorAll('a, button').forEach(el => { el.addEventListener('click', () => AudioSystem.play('click')); });
        document.querySelectorAll('.project-card, .social-link, .skill-tags span').forEach(el => { el.addEventListener('mouseenter', () => AudioSystem.play('hover')); });
    }

    // ═══════════ RESUME CONFETTI ═══════════
    function initResumeConfetti() {
        document.querySelectorAll('a[download], .nav-cta').forEach(link => {
            link.addEventListener('click', () => setTimeout(triggerConfetti, 100));
        });
    }

    // ═══════════ KONAMI CODE ═══════════
    function initKonamiCode() {
        const pattern = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];
        let current = 0;
        document.addEventListener('keydown', (e) => {
            if (e.key === pattern[current]) {
                current++;
                if (current === pattern.length) {
                    triggerConfetti(); setTimeout(triggerConfetti, 300); setTimeout(triggerConfetti, 600);
                    startMatrix(); setTimeout(stopMatrix, 8000);
                    current = 0;
                    if (Terminal.output) { Terminal.open(); Terminal.addLine('<span class="term-success" style="font-size:1.2rem;">🎮 KONAMI CODE!</span>'); }
                }
            } else current = 0;
        });
    }

    // ═══════════ KEYBOARD SHORTCUTS ═══════════
    function initKeyboardShortcuts() {
        document.addEventListener('keydown', (e) => {
            if (e.ctrlKey && e.key === 'k') { e.preventDefault(); document.getElementById('quick-main')?.click(); }
        });
    }

    // ═══════════ NETWORK STATUS ═══════════
    function initNetworkStatus() {
        window.addEventListener('online', () => showNotification('🟢 Back Online!', 'success'));
        window.addEventListener('offline', () => showNotification('🔴 No Internet', 'error'));
    }

    function showNotification(message, type) {
        const n = document.createElement('div');
        n.className = `notification notification-${type}`;
        n.innerHTML = `<span>${message}</span>`;
        document.body.appendChild(n);
        setTimeout(() => n.classList.add('show'), 10);
        setTimeout(() => { n.classList.remove('show'); setTimeout(() => n.remove(), 300); }, 3000);
    }

    // ═══════════ INITIALIZE ALL ═══════════
    function init() {
        AudioSystem.init();
        initNavigation();
        initTypingEffect();
        initCounters();
        initCardTilt();
        initProjectFilters();
        initScrollReveal();
        initCursor();
        initSpotlight();
        initBackToTop();
        initQuickActions();
        Terminal.init();
        initTerminalHint();
        initMagneticButtons();
        initParallax();
        initSkillOrbit();
        initInteractionSounds();
        initResumeConfetti();
        initSmoothScroll();
        initKonamiCode();
        initKeyboardShortcuts();
        initNetworkStatus();
        
        window.triggerConfetti = triggerConfetti;
        window.toggleMatrix = toggleMatrix;
        window.Terminal = Terminal;
        
        console.log('%c✨ Portfolio v8.0 Loaded!', 'color: #6366f1; font-size: 16px; font-weight: bold;');
        console.log('%cPress Ctrl+. for AI Terminal', 'color: #10b981; font-size: 12px;');
    }

    if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
    else init();

    window.addEventListener('load', hidePreloader);
    setTimeout(hidePreloader, 3000);

})();