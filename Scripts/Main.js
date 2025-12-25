/* ═══════════════════════════════════════════════════════════
   SHAHZEB FAISAL PORTFOLIO - ENHANCED WITH GEMINI AI
   Version 5.0 - Ultimate Creative Edition
   ═══════════════════════════════════════════════════════════ */

(function() {
    'use strict';

    // ═══════════ PORTFOLIO DATA (For AI Context) ═══════════
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
            languages: ["Python", "JavaScript", "TypeScript", "SQL", "C++", "HTML/CSS"],
            ml_ai: ["TensorFlow", "PyTorch", "Scikit-Learn", "NLP", "LLMs", "Computer Vision", "Deep Learning", "Hugging Face"],
            web: ["React", "Next.js", "Node.js", "Express", "Tailwind CSS", "REST APIs"],
            data: ["Pandas", "NumPy", "Matplotlib", "Seaborn", "Apache Spark", "ETL Pipelines"],
            tools: ["Git", "Docker", "Azure", "MongoDB", "PostgreSQL", "Jupyter", "VS Code"]
        },
        
        projects: [
            { name: "Nexium Resume Tailor", desc: "AI-powered resume optimizer using NLP to match job descriptions, built with Python and ML algorithms", tech: ["Python", "NLP", "Machine Learning"], category: "ml" },
            { name: "Blog Summarizer", desc: "NLP web application that generates concise summaries of blog posts using transformer models", tech: ["Python", "NLP", "Transformers", "Flask"], category: "ml" },
            { name: "Smart City Management", desc: "Big data pipeline for urban analytics processing millions of data points for traffic and utilities", tech: ["Apache Spark", "Python", "ETL", "Data Engineering"], category: "data" },
            { name: "Election DApp", desc: "Decentralized voting application on Ethereum blockchain ensuring transparent and secure elections", tech: ["Solidity", "Web3.js", "React", "Ethereum"], category: "blockchain" },
            { name: "Image Captioning System", desc: "Deep learning model using CNN-LSTM architecture to generate natural language descriptions of images", tech: ["TensorFlow", "CNN", "LSTM", "Computer Vision"], category: "ml" },
            { name: "Edu Connect Platform", desc: "Full-stack educational platform connecting students with tutors, featuring real-time chat and scheduling", tech: ["React", "Node.js", "MongoDB", "Socket.io"], category: "web" },
            { name: "Twitter Sentiment Analyzer", desc: "Real-time sentiment analysis of tweets using NLP and machine learning with live dashboard", tech: ["Python", "NLP", "Scikit-Learn", "Streamlit"], category: "ml" },
            { name: "E-Commerce Platform", desc: "Modern e-commerce solution with payment integration, inventory management, and admin dashboard", tech: ["Next.js", "Node.js", "PostgreSQL", "Stripe"], category: "web" },
            { name: "COVID-19 Tracker", desc: "Real-time pandemic statistics dashboard with data visualization and predictive modeling", tech: ["React", "D3.js", "Python", "API Integration"], category: "data" },
            { name: "Fitness Tracker App", desc: "Mobile-first fitness application with workout tracking, progress analytics, and goal setting", tech: ["React Native", "Node.js", "MongoDB"], category: "web" },
            { name: "Stock Price Predictor", desc: "Machine learning model for stock price prediction using LSTM networks and technical indicators", tech: ["Python", "TensorFlow", "LSTM", "Pandas"], category: "ml" },
            { name: "Real Estate DApp", desc: "Blockchain-based property listing and transaction platform with smart contract escrow", tech: ["Solidity", "React", "IPFS", "Ethereum"], category: "blockchain" }
        ],
        
        experience: [
            { title: "AI/ML Projects", period: "2023-Present", desc: "Building production-ready ML models for NLP, computer vision, and predictive analytics" },
            { title: "Full-Stack Development", period: "2022-Present", desc: "Creating scalable web applications using React, Node.js, and cloud technologies" },
            { title: "Data Science", period: "2022-Present", desc: "Analyzing complex datasets and building data pipelines for business intelligence" },
            { title: "Blockchain Development", period: "2023-Present", desc: "Developing decentralized applications and smart contracts on Ethereum" }
        ],
        
        stats: {
            projects: 16,
            technologies: 25,
            experience_years: 3,
            github_contributions: "500+"
        }
    };

    // ═══════════ GEMINI AI INTEGRATION ═══════════
    const GeminiAI = {
        apiKey: 'AIzaSyDlU5GZPlxMCegciZS3Jyab0z0wym8WynY',
        apiUrl: 'https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent',
        conversationHistory: [],
        
        getSystemPrompt() {
            return `You are an AI assistant embedded in Shahzeb Faisal's portfolio website. Your role is to help visitors learn about Shahzeb, his skills, projects, and experience.

IMPORTANT: You must ONLY answer questions related to Shahzeb's portfolio. Here is his complete profile:

=== PERSONAL INFO ===
Name: ${PORTFOLIO_DATA.name}
Title: ${PORTFOLIO_DATA.title}
Location: ${PORTFOLIO_DATA.location}
Email: ${PORTFOLIO_DATA.email}
Phone: ${PORTFOLIO_DATA.phone}
Education: ${PORTFOLIO_DATA.education}
GitHub: ${PORTFOLIO_DATA.github}
LinkedIn: ${PORTFOLIO_DATA.linkedin}

=== SKILLS ===
Programming Languages: ${PORTFOLIO_DATA.skills.languages.join(', ')}
ML/AI: ${PORTFOLIO_DATA.skills.ml_ai.join(', ')}
Web Development: ${PORTFOLIO_DATA.skills.web.join(', ')}
Data Science: ${PORTFOLIO_DATA.skills.data.join(', ')}
Tools & Technologies: ${PORTFOLIO_DATA.skills.tools.join(', ')}

=== PROJECTS (${PORTFOLIO_DATA.projects.length} total) ===
${PORTFOLIO_DATA.projects.map((p, i) => `${i+1}. ${p.name}: ${p.desc} [Tech: ${p.tech.join(', ')}]`).join('\n')}

=== EXPERIENCE ===
${PORTFOLIO_DATA.experience.map(e => `- ${e.title} (${e.period}): ${e.desc}`).join('\n')}

=== STATS ===
- ${PORTFOLIO_DATA.stats.projects}+ Projects completed
- ${PORTFOLIO_DATA.stats.technologies}+ Technologies mastered
- ${PORTFOLIO_DATA.stats.experience_years}+ Years of experience
- ${PORTFOLIO_DATA.stats.github_contributions} GitHub contributions

RULES:
1. Always be helpful, friendly, and professional
2. Keep responses concise (2-4 sentences max for simple questions)
3. For project questions, mention specific technologies used
4. If asked about something not in the portfolio, politely redirect to portfolio topics
5. Use emojis sparingly to make responses engaging
6. If someone wants to contact Shahzeb, provide his email and LinkedIn
7. For hiring inquiries, highlight his availability and key strengths
8. Never make up information not provided above`;
        },
        
        async chat(userMessage) {
            // Add user message to history
            this.conversationHistory.push({
                role: 'user',
                parts: [{ text: userMessage }]
            });
            
            // Keep only last 10 messages for context
            if (this.conversationHistory.length > 10) {
                this.conversationHistory = this.conversationHistory.slice(-10);
            }
            
            try {
                const response = await fetch(`${this.apiUrl}?key=${this.apiKey}`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        contents: [
                            {
                                role: 'user',
                                parts: [{ text: this.getSystemPrompt() }]
                            },
                            {
                                role: 'model',
                                parts: [{ text: 'I understand. I am the AI assistant for Shahzeb Faisal\'s portfolio. I will help visitors learn about his skills, projects, and experience. How can I help you today?' }]
                            },
                            ...this.conversationHistory
                        ],
                        generationConfig: {
                            temperature: 0.7,
                            topK: 40,
                            topP: 0.95,
                            maxOutputTokens: 500
                        },
                        safetySettings: [
                            { category: "HARM_CATEGORY_HARASSMENT", threshold: "BLOCK_MEDIUM_AND_ABOVE" },
                            { category: "HARM_CATEGORY_HATE_SPEECH", threshold: "BLOCK_MEDIUM_AND_ABOVE" },
                            { category: "HARM_CATEGORY_SEXUALLY_EXPLICIT", threshold: "BLOCK_MEDIUM_AND_ABOVE" },
                            { category: "HARM_CATEGORY_DANGEROUS_CONTENT", threshold: "BLOCK_MEDIUM_AND_ABOVE" }
                        ]
                    })
                });
                
                if (!response.ok) {
                    throw new Error(`API error: ${response.status}`);
                }
                
                const data = await response.json();
                
                if (data.candidates && data.candidates[0] && data.candidates[0].content) {
                    const aiResponse = data.candidates[0].content.parts[0].text;
                    
                    // Add AI response to history
                    this.conversationHistory.push({
                        role: 'model',
                        parts: [{ text: aiResponse }]
                    });
                    
                    return aiResponse;
                } else {
                    throw new Error('Invalid response format');
                }
            } catch (error) {
                console.error('Gemini AI Error:', error);
                return this.getFallbackResponse(userMessage);
            }
        },
        
        getFallbackResponse(query) {
            const q = query.toLowerCase();
            
            if (q.includes('project') || q.includes('work')) {
                return `Shahzeb has completed ${PORTFOLIO_DATA.stats.projects}+ projects including AI/ML applications, full-stack web apps, and blockchain DApps. Notable ones include Nexium Resume Tailor (AI-powered), Smart City Management (Big Data), and Election DApp (Blockchain). Would you like details about any specific project?`;
            }
            if (q.includes('skill') || q.includes('technology') || q.includes('tech')) {
                return `Shahzeb is proficient in Python, JavaScript, React, and TensorFlow. His expertise spans ML/AI, web development, data science, and blockchain. He's worked with ${PORTFOLIO_DATA.stats.technologies}+ technologies!`;
            }
            if (q.includes('contact') || q.includes('hire') || q.includes('email')) {
                return `You can reach Shahzeb at ${PORTFOLIO_DATA.email} or connect on LinkedIn: ${PORTFOLIO_DATA.linkedin}. He's currently open to opportunities!`;
            }
            if (q.includes('education') || q.includes('study') || q.includes('university')) {
                return `Shahzeb is pursuing BS in Data Science from FAST-NUCES Lahore, one of Pakistan's top tech universities. Expected graduation: 2026.`;
            }
            if (q.includes('experience') || q.includes('background')) {
                return `Shahzeb has ${PORTFOLIO_DATA.stats.experience_years}+ years of experience in AI/ML, full-stack development, and data science. He's built production-ready solutions and contributed to open source.`;
            }
            if (q.includes('hello') || q.includes('hi') || q.includes('hey')) {
                return `Hey there! 👋 I'm the AI assistant for Shahzeb's portfolio. Ask me about his projects, skills, experience, or how to contact him!`;
            }
            
            return `I can help you learn about Shahzeb's portfolio! Try asking about his projects, skills, experience, or contact information. Type 'help' for all available commands.`;
        },
        
        clearHistory() {
            this.conversationHistory = [];
        }
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
            
            if (this.ctx.state === 'suspended') {
                this.ctx.resume();
            }
            
            const osc = this.ctx.createOscillator();
            const gain = this.ctx.createGain();
            
            osc.connect(gain);
            gain.connect(this.ctx.destination);
            
            switch(type) {
                case 'click':
                    osc.frequency.value = 800;
                    osc.type = 'sine';
                    gain.gain.setValueAtTime(0.1, this.ctx.currentTime);
                    gain.gain.exponentialRampToValueAtTime(0.01, this.ctx.currentTime + 0.1);
                    osc.start();
                    osc.stop(this.ctx.currentTime + 0.1);
                    break;
                case 'hover':
                    osc.frequency.value = 600;
                    osc.type = 'sine';
                    gain.gain.setValueAtTime(0.05, this.ctx.currentTime);
                    gain.gain.exponentialRampToValueAtTime(0.01, this.ctx.currentTime + 0.05);
                    osc.start();
                    osc.stop(this.ctx.currentTime + 0.05);
                    break;
                case 'success':
                    osc.frequency.value = 523.25;
                    osc.type = 'sine';
                    gain.gain.setValueAtTime(0.15, this.ctx.currentTime);
                    gain.gain.exponentialRampToValueAtTime(0.01, this.ctx.currentTime + 0.3);
                    osc.start();
                    osc.stop(this.ctx.currentTime + 0.3);
                    setTimeout(() => this.playNote(659.25), 150);
                    break;
                case 'terminal':
                    osc.frequency.value = 400;
                    osc.type = 'square';
                    gain.gain.setValueAtTime(0.08, this.ctx.currentTime);
                    gain.gain.exponentialRampToValueAtTime(0.01, this.ctx.currentTime + 0.08);
                    osc.start();
                    osc.stop(this.ctx.currentTime + 0.08);
                    break;
                case 'typing':
                    osc.frequency.value = 1200;
                    osc.type = 'sine';
                    gain.gain.setValueAtTime(0.03, this.ctx.currentTime);
                    gain.gain.exponentialRampToValueAtTime(0.01, this.ctx.currentTime + 0.02);
                    osc.start();
                    osc.stop(this.ctx.currentTime + 0.02);
                    break;
            }
        },
        
        playNote(freq) {
            if (!this.ctx) return;
            const osc = this.ctx.createOscillator();
            const gain = this.ctx.createGain();
            osc.connect(gain);
            gain.connect(this.ctx.destination);
            osc.frequency.value = freq;
            osc.type = 'sine';
            gain.gain.setValueAtTime(0.15, this.ctx.currentTime);
            gain.gain.exponentialRampToValueAtTime(0.01, this.ctx.currentTime + 0.3);
            osc.start();
            osc.stop(this.ctx.currentTime + 0.3);
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
            if (btn) {
                const icon = btn.querySelector('i');
                if (icon) {
                    icon.className = this.enabled ? 'fas fa-volume-up' : 'fas fa-volume-mute';
                }
            }
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
        
        function resize() {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        }
        
        function createParticles() {
            particles = [];
            const count = Math.min(60, Math.floor(window.innerWidth / 25));
            
            for (let i = 0; i < count; i++) {
                particles.push({
                    x: Math.random() * canvas.width,
                    y: Math.random() * canvas.height,
                    vx: (Math.random() - 0.5) * 0.5,
                    vy: (Math.random() - 0.5) * 0.5,
                    radius: Math.random() * 2 + 1,
                    opacity: Math.random() * 0.5 + 0.2,
                    originalX: 0,
                    originalY: 0
                });
                particles[i].originalX = particles[i].x;
                particles[i].originalY = particles[i].y;
            }
        }
        
        // Mouse interaction
        canvas.addEventListener('mousemove', (e) => {
            mouse.x = e.clientX;
            mouse.y = e.clientY;
        });
        
        canvas.addEventListener('mouseleave', () => {
            mouse.x = null;
            mouse.y = null;
        });
        
        function animate() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            
            particles.forEach(p => {
                // Mouse repulsion
                if (mouse.x !== null) {
                    const dx = p.x - mouse.x;
                    const dy = p.y - mouse.y;
                    const dist = Math.sqrt(dx * dx + dy * dy);
                    
                    if (dist < mouse.radius) {
                        const force = (mouse.radius - dist) / mouse.radius;
                        p.x += dx * force * 0.03;
                        p.y += dy * force * 0.03;
                    }
                }
                
                p.x += p.vx;
                p.y += p.vy;
                
                // Wrap around
                if (p.x < 0) p.x = canvas.width;
                if (p.x > canvas.width) p.x = 0;
                if (p.y < 0) p.y = canvas.height;
                if (p.y > canvas.height) p.y = 0;
                
                // Draw particle with glow
                ctx.beginPath();
                ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(99, 102, 241, ${p.opacity})`;
                ctx.shadowBlur = 10;
                ctx.shadowColor = 'rgba(99, 102, 241, 0.5)';
                ctx.fill();
                ctx.shadowBlur = 0;
            });
            
            // Connect nearby particles
            for (let i = 0; i < particles.length; i++) {
                for (let j = i + 1; j < particles.length; j++) {
                    const dx = particles[i].x - particles[j].x;
                    const dy = particles[i].y - particles[j].y;
                    const dist = Math.sqrt(dx * dx + dy * dy);
                    
                    if (dist < 150) {
                        ctx.beginPath();
                        ctx.moveTo(particles[i].x, particles[i].y);
                        ctx.lineTo(particles[j].x, particles[j].y);
                        ctx.strokeStyle = `rgba(99, 102, 241, ${0.15 * (1 - dist / 150)})`;
                        ctx.lineWidth = 0.5;
                        ctx.stroke();
                    }
                }
            }
            
            requestAnimationFrame(animate);
        }
        
        resize();
        createParticles();
        animate();
        
        let resizeTimer;
        window.addEventListener('resize', () => {
            clearTimeout(resizeTimer);
            resizeTimer = setTimeout(() => {
                resize();
                createParticles();
            }, 200);
        });
    }

    // ═══════════ CUSTOM CURSOR ═══════════
    function initCursor() {
        const cursor = document.querySelector('.cursor');
        const follower = document.querySelector('.cursor-follower');
        
        if (!cursor || !follower) return;
        if (window.matchMedia('(hover: none)').matches) return;
        
        let mouseX = 0, mouseY = 0;
        let cursorX = 0, cursorY = 0;
        let followerX = 0, followerY = 0;
        
        document.addEventListener('mousemove', e => {
            mouseX = e.clientX;
            mouseY = e.clientY;
        });
        
        function animate() {
            cursorX += (mouseX - cursorX) * 0.5;
            cursorY += (mouseY - cursorY) * 0.5;
            cursor.style.left = cursorX + 'px';
            cursor.style.top = cursorY + 'px';
            
            followerX += (mouseX - followerX) * 0.15;
            followerY += (mouseY - followerY) * 0.15;
            follower.style.left = followerX + 'px';
            follower.style.top = followerY + 'px';
            
            requestAnimationFrame(animate);
        }
        
        animate();
        
        const interactiveElements = document.querySelectorAll('a, button, .project-card, .skill-tags span, .filter-btn, input, .timeline-item');
        
        interactiveElements.forEach(el => {
            el.addEventListener('mouseenter', () => {
                cursor.classList.add('active');
                follower.classList.add('active');
            });
            el.addEventListener('mouseleave', () => {
                cursor.classList.remove('active');
                follower.classList.remove('active');
            });
        });
    }

    // ═══════════ ENHANCED TERMINAL WITH GEMINI AI ═══════════
    const Terminal = {
        terminal: null,
        input: null,
        output: null,
        history: [],
        historyIndex: -1,
        isProcessing: false,
        
        commands: {
            help: `
╔══════════════════════════════════════════════════════════╗
║                    TERMINAL COMMANDS                      ║
╠══════════════════════════════════════════════════════════╣
║  INFORMATION                                              ║
║  ──────────                                               ║
║  about      - Learn about Shahzeb                         ║
║  skills     - View technical skills                       ║
║  projects   - List all projects                           ║
║  experience - View work experience                        ║
║  contact    - Get contact information                     ║
║  social     - Social media links                          ║
║                                                           ║
║  AI ASSISTANT (Powered by Gemini)                         ║
║  ────────────────────────────────                         ║
║  ai <question> - Ask anything about the portfolio         ║
║  Examples:                                                ║
║    ai what ML projects has Shahzeb done?                  ║
║    ai tell me about his blockchain experience             ║
║    ai how can I hire Shahzeb?                             ║
║                                                           ║
║  ACTIONS                                                  ║
║  ───────                                                  ║
║  resume     - Download resume                             ║
║  github     - Open GitHub profile                         ║
║  linkedin   - Open LinkedIn profile                       ║
║  email      - Send an email                               ║
║                                                           ║
║  UTILITIES                                                ║
║  ─────────                                                ║
║  clear      - Clear terminal                              ║
║  sound      - Toggle sound effects                        ║
║  confetti   - Celebration! 🎉                             ║
║  matrix     - Toggle Matrix rain effect                   ║
║  exit       - Close terminal                              ║
╚══════════════════════════════════════════════════════════╝`,

            about: `
╔══════════════════════════════════════════════════════════╗
║                    SHAHZEB FAISAL                         ║
║              Data Scientist & ML Engineer                 ║
╠══════════════════════════════════════════════════════════╣
║                                                           ║
║  🎓 Education:  BS Data Science, FAST-NUCES Lahore        ║
║  📍 Location:   Lahore, Pakistan                          ║
║  💼 Status:     Open to Opportunities                     ║
║                                                           ║
║  Passionate about building intelligent solutions using    ║
║  Machine Learning, Deep Learning, and modern web          ║
║  technologies. Experienced in full-stack development,     ║
║  data engineering, and blockchain applications.           ║
║                                                           ║
║  🚀 16+ Projects | 25+ Technologies | 3+ Years Experience ║
║                                                           ║
╚══════════════════════════════════════════════════════════╝`,

            skills: `
╔══════════════════════════════════════════════════════════╗
║                    TECHNICAL SKILLS                       ║
╠══════════════════════════════════════════════════════════╣
║                                                           ║
║  💻 LANGUAGES                                             ║
║     Python • JavaScript • TypeScript • SQL • C++ • HTML   ║
║                                                           ║
║  🧠 ML / AI                                               ║
║     TensorFlow • PyTorch • Scikit-Learn • NLP • LLMs      ║
║     Computer Vision • Deep Learning • Hugging Face        ║
║                                                           ║
║  🌐 WEB DEVELOPMENT                                       ║
║     React • Next.js • Node.js • Express • Tailwind CSS    ║
║                                                           ║
║  📊 DATA SCIENCE                                          ║
║     Pandas • NumPy • Matplotlib • Seaborn • Spark         ║
║                                                           ║
║  🔧 TOOLS & CLOUD                                         ║
║     Git • Docker • Azure • MongoDB • PostgreSQL           ║
║                                                           ║
╚══════════════════════════════════════════════════════════╝`,

            projects: `
╔══════════════════════════════════════════════════════════╗
║                   FEATURED PROJECTS                       ║
╠══════════════════════════════════════════════════════════╣
║                                                           ║
║  🤖 AI / MACHINE LEARNING                                 ║
║  ────────────────────────                                 ║
║  • Nexium Resume Tailor - AI resume optimizer             ║
║  • Blog Summarizer - NLP text summarization               ║
║  • Image Captioning - CNN-LSTM deep learning              ║
║  • Sentiment Analyzer - Twitter NLP analysis              ║
║  • Stock Predictor - LSTM price prediction                ║
║                                                           ║
║  🌐 WEB DEVELOPMENT                                       ║
║  ─────────────────────                                    ║
║  • Edu Connect - Full-stack education platform            ║
║  • E-Commerce Platform - Next.js shopping site            ║
║  • COVID-19 Tracker - Real-time data dashboard            ║
║  • Fitness Tracker - React Native mobile app              ║
║                                                           ║
║  ⛓️ BLOCKCHAIN                                            ║
║  ────────────                                             ║
║  • Election DApp - Decentralized voting system            ║
║  • Real Estate DApp - Property transactions               ║
║                                                           ║
║  📊 DATA ENGINEERING                                      ║
║  ──────────────────                                       ║
║  • Smart City System - Big data urban analytics           ║
║                                                           ║
║  Type 'ai tell me more about [project]' for details!      ║
╚══════════════════════════════════════════════════════════╝`,

            experience: `
╔══════════════════════════════════════════════════════════╗
║                      EXPERIENCE                           ║
╠══════════════════════════════════════════════════════════╣
║                                                           ║
║  🤖 AI/ML DEVELOPMENT (2023 - Present)                    ║
║     Building production-ready ML models for NLP,          ║
║     computer vision, and predictive analytics             ║
║                                                           ║
║  🌐 FULL-STACK DEVELOPMENT (2022 - Present)               ║
║     Creating scalable web applications using              ║
║     React, Node.js, and cloud technologies                ║
║                                                           ║
║  📊 DATA SCIENCE (2022 - Present)                         ║
║     Analyzing complex datasets and building               ║
║     data pipelines for business intelligence              ║
║                                                           ║
║  ⛓️ BLOCKCHAIN DEVELOPMENT (2023 - Present)               ║
║     Developing decentralized applications                 ║
║     and smart contracts on Ethereum                       ║
║                                                           ║
╚══════════════════════════════════════════════════════════╝`,

            contact: `
╔══════════════════════════════════════════════════════════╗
║                   CONTACT INFORMATION                     ║
╠══════════════════════════════════════════════════════════╣
║                                                           ║
║  📧 Email:     shahzebfaisal5649@gmail.com                ║
║  📱 Phone:     +92 302 0418510                            ║
║  📍 Location:  Lahore, Pakistan                           ║
║                                                           ║
║  💼 Status:    OPEN TO OPPORTUNITIES                      ║
║                                                           ║
║  Quick Actions:                                           ║
║  • Type 'email' to open email client                      ║
║  • Type 'linkedin' to view profile                        ║
║  • Type 'github' to see code repositories                 ║
║                                                           ║
╚══════════════════════════════════════════════════════════╝`,

            social: `
╔══════════════════════════════════════════════════════════╗
║                     SOCIAL LINKS                          ║
╠══════════════════════════════════════════════════════════╣
║                                                           ║
║  🐙 GitHub:   github.com/ShahzebFaisal5649               ║
║  💼 LinkedIn: linkedin.com/in/shahzeb-faisal-8b9190321   ║
║  📧 Email:    shahzebfaisal5649@gmail.com                ║
║                                                           ║
║  Type the platform name to open it directly!              ║
╚══════════════════════════════════════════════════════════╝`
        },

        init() {
            this.terminal = document.getElementById('terminal');
            this.input = document.getElementById('term-input');
            this.output = document.getElementById('terminal-output');
            
            if (!this.terminal || !this.input) return;
            
            this.input.addEventListener('keydown', (e) => {
                if (e.key === 'Enter' && !this.isProcessing) {
                    this.execute(this.input.value.trim());
                    this.input.value = '';
                } else if (e.key === 'ArrowUp') {
                    e.preventDefault();
                    this.navigateHistory(-1);
                } else if (e.key === 'ArrowDown') {
                    e.preventDefault();
                    this.navigateHistory(1);
                } else if (e.key === 'Tab') {
                    e.preventDefault();
                    this.autocomplete();
                }
            });
            
            document.getElementById('close-terminal')?.addEventListener('click', () => this.close());
            document.getElementById('terminal-btn')?.addEventListener('click', () => this.toggle());
            
            // Keyboard shortcuts
            document.addEventListener('keydown', (e) => {
                if (e.ctrlKey && e.key === '.') {
                    e.preventDefault();
                    this.toggle();
                }
                if (e.key === 'Escape' && !this.terminal.classList.contains('terminal-hidden')) {
                    this.close();
                }
            });
        },
        
        toggle() {
            if (this.terminal.classList.contains('terminal-hidden')) {
                this.open();
            } else {
                this.close();
            }
        },
        
        open() {
            this.terminal.classList.remove('terminal-hidden');
            setTimeout(() => this.input?.focus(), 100);
            AudioSystem.play('terminal');
        },
        
        close() {
            this.terminal.classList.add('terminal-hidden');
            AudioSystem.play('click');
        },
        
        navigateHistory(direction) {
            if (this.history.length === 0) return;
            
            this.historyIndex += direction;
            
            if (this.historyIndex < 0) this.historyIndex = 0;
            if (this.historyIndex >= this.history.length) {
                this.historyIndex = this.history.length;
                this.input.value = '';
                return;
            }
            
            this.input.value = this.history[this.historyIndex];
        },
        
        autocomplete() {
            const input = this.input.value.toLowerCase();
            const commands = ['help', 'about', 'skills', 'projects', 'experience', 'contact', 'social', 
                            'resume', 'github', 'linkedin', 'email', 'clear', 'sound', 'confetti', 
                            'matrix', 'exit', 'ai'];
            
            const match = commands.find(cmd => cmd.startsWith(input));
            if (match) {
                this.input.value = match;
                AudioSystem.play('click');
            }
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
            
            // Handle AI queries
            if (command === 'ai' && args) {
                await this.handleAI(args);
                return;
            }
            
            // Direct AI if it looks like a question
            if (cmd.includes('?') || cmd.toLowerCase().startsWith('what') || 
                cmd.toLowerCase().startsWith('how') || cmd.toLowerCase().startsWith('tell') ||
                cmd.toLowerCase().startsWith('who') || cmd.toLowerCase().startsWith('can')) {
                await this.handleAI(cmd);
                return;
            }
            
            // Built-in commands
            if (this.commands[command]) {
                this.addLine(`<pre class="term-response">${this.commands[command]}</pre>`);
            } else {
                switch(command) {
                    case 'clear':
                        this.clear();
                        break;
                    case 'exit':
                        this.close();
                        break;
                    case 'sound':
                        const enabled = AudioSystem.toggle();
                        this.addLine(`<span class="term-success">🔊 Sound ${enabled ? 'enabled' : 'disabled'}</span>`);
                        break;
                    case 'confetti':
                        triggerConfetti();
                        this.addLine('<span class="term-success">🎉 Celebration time!</span>');
                        break;
                    case 'matrix':
                        toggleMatrix();
                        this.addLine('<span class="term-success">🟢 Matrix effect toggled!</span>');
                        break;
                    case 'resume':
                        this.addLine('<span class="term-success">📄 Downloading resume...</span>');
                        setTimeout(() => {
                            const link = document.createElement('a');
                            link.href = 'resume.pdf';
                            link.download = 'Shahzeb_Faisal_Resume.pdf';
                            link.click();
                            triggerConfetti();
                        }, 500);
                        break;
                    case 'github':
                        window.open('https://github.com/ShahzebFaisal5649', '_blank');
                        this.addLine('<span class="term-success">🐙 Opening GitHub...</span>');
                        break;
                    case 'linkedin':
                        window.open('https://www.linkedin.com/in/shahzeb-faisal-8b9190321/', '_blank');
                        this.addLine('<span class="term-success">💼 Opening LinkedIn...</span>');
                        break;
                    case 'email':
                        window.location.href = 'mailto:shahzebfaisal5649@gmail.com';
                        this.addLine('<span class="term-success">📧 Opening email client...</span>');
                        break;
                    default:
                        this.addLine(`<span class="term-error">Command not found: ${this.escapeHtml(command)}</span>`);
                        this.addLine('<span class="term-hint">Type <span class="hl">help</span> for available commands, or ask the AI anything!</span>');
                }
            }
            
            this.scrollToBottom();
        },
        
        async handleAI(query) {
            this.isProcessing = true;
            this.input.disabled = true;
            
            // Show typing indicator
            const typingId = 'typing-' + Date.now();
            this.addLine(`<div id="${typingId}" class="term-typing">
                <span class="typing-dots">
                    <span>●</span><span>●</span><span>●</span>
                </span>
                <span class="typing-text">AI is thinking...</span>
            </div>`);
            
            this.scrollToBottom();
            
            try {
                const response = await GeminiAI.chat(query);
                
                // Remove typing indicator
                document.getElementById(typingId)?.remove();
                
                // Typewriter effect for AI response
                await this.typewriterEffect(response);
                
                AudioSystem.play('success');
            } catch (error) {
                document.getElementById(typingId)?.remove();
                this.addLine(`<span class="term-error">Error: ${error.message}</span>`);
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
            const chars = text.split('');
            
            for (let i = 0; i < chars.length; i++) {
                textSpan.textContent += chars[i];
                this.scrollToBottom();
                
                // Variable speed for natural feel
                const delay = chars[i] === '.' || chars[i] === '!' || chars[i] === '?' ? 50 : 
                              chars[i] === ',' ? 30 : 
                              Math.random() * 15 + 5;
                
                if (i % 5 === 0) AudioSystem.play('typing');
                
                await new Promise(r => setTimeout(r, delay));
            }
        },
        
        addLine(html) {
            const div = document.createElement('div');
            div.innerHTML = html;
            this.output.appendChild(div);
        },
        
        clear() {
            this.output.innerHTML = `<p class="welcome-msg">Terminal cleared. Type <span class="hl">help</span> for commands or ask the AI anything!</p>`;
            GeminiAI.clearHistory();
        },
        
        scrollToBottom() {
            const body = document.getElementById('terminal-body');
            if (body) body.scrollTop = body.scrollHeight;
        },
        
        escapeHtml(text) {
            const div = document.createElement('div');
            div.textContent = text;
            return div.innerHTML;
        }
    };

    // ═══════════ MATRIX RAIN EFFECT ═══════════
    let matrixActive = false;
    let matrixCanvas = null;
    
    function toggleMatrix() {
        if (matrixActive) {
            stopMatrix();
        } else {
            startMatrix();
        }
    }
    
    function startMatrix() {
        matrixActive = true;
        
        matrixCanvas = document.createElement('canvas');
        matrixCanvas.id = 'matrix-canvas';
        matrixCanvas.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            pointer-events: none;
            z-index: 1;
            opacity: 0.15;
        `;
        document.body.appendChild(matrixCanvas);
        
        const ctx = matrixCanvas.getContext('2d');
        matrixCanvas.width = window.innerWidth;
        matrixCanvas.height = window.innerHeight;
        
        const chars = 'アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン0123456789ABCDEF';
        const fontSize = 14;
        const columns = matrixCanvas.width / fontSize;
        const drops = Array(Math.floor(columns)).fill(1);
        
        function draw() {
            if (!matrixActive) return;
            
            ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
            ctx.fillRect(0, 0, matrixCanvas.width, matrixCanvas.height);
            
            ctx.fillStyle = '#0f0';
            ctx.font = fontSize + 'px monospace';
            
            for (let i = 0; i < drops.length; i++) {
                const char = chars[Math.floor(Math.random() * chars.length)];
                ctx.fillText(char, i * fontSize, drops[i] * fontSize);
                
                if (drops[i] * fontSize > matrixCanvas.height && Math.random() > 0.975) {
                    drops[i] = 0;
                }
                drops[i]++;
            }
            
            requestAnimationFrame(draw);
        }
        
        draw();
    }
    
    function stopMatrix() {
        matrixActive = false;
        if (matrixCanvas) {
            matrixCanvas.remove();
            matrixCanvas = null;
        }
    }

    // ═══════════ CONFETTI ═══════════
    function triggerConfetti() {
        const canvas = document.getElementById('confetti');
        if (!canvas) return;
        
        const ctx = canvas.getContext('2d');
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        
        const particles = [];
        const colors = ['#6366f1', '#8b5cf6', '#ec4899', '#06b6d4', '#10b981', '#f59e0b', '#ef4444'];
        
        for (let i = 0; i < 200; i++) {
            particles.push({
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height - canvas.height,
                vx: (Math.random() - 0.5) * 15,
                vy: Math.random() * 5 + 3,
                color: colors[Math.floor(Math.random() * colors.length)],
                size: Math.random() * 12 + 5,
                rotation: Math.random() * 360,
                rotationSpeed: (Math.random() - 0.5) * 15,
                shape: Math.random() > 0.5 ? 'rect' : 'circle'
            });
        }
        
        let frame = 0;
        const maxFrames = 250;
        
        function animate() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            
            particles.forEach(p => {
                p.x += p.vx;
                p.y += p.vy;
                p.vy += 0.15;
                p.vx *= 0.99;
                p.rotation += p.rotationSpeed;
                
                ctx.save();
                ctx.translate(p.x, p.y);
                ctx.rotate(p.rotation * Math.PI / 180);
                ctx.fillStyle = p.color;
                
                if (p.shape === 'rect') {
                    ctx.fillRect(-p.size / 2, -p.size / 4, p.size, p.size / 2);
                } else {
                    ctx.beginPath();
                    ctx.arc(0, 0, p.size / 3, 0, Math.PI * 2);
                    ctx.fill();
                }
                
                ctx.restore();
            });
            
            frame++;
            if (frame < maxFrames) {
                requestAnimationFrame(animate);
            } else {
                ctx.clearRect(0, 0, canvas.width, canvas.height);
            }
        }
        
        AudioSystem.play('success');
        animate();
    }

    // ═══════════ FLOATING TERMINAL HINT ═══════════
    function initTerminalHint() {
        const hint = document.createElement('div');
        hint.className = 'terminal-hint-float';
        hint.innerHTML = `
            <kbd>Ctrl</kbd><span>+</span><kbd>.</kbd>
            <span class="hint-text">Terminal</span>
        `;
        document.body.appendChild(hint);
        
        // Hide after first terminal open
        const observer = new MutationObserver(() => {
            const terminal = document.getElementById('terminal');
            if (terminal && !terminal.classList.contains('terminal-hidden')) {
                hint.classList.add('hidden');
                localStorage.setItem('terminalHintShown', 'true');
            }
        });
        
        const terminal = document.getElementById('terminal');
        if (terminal) {
            observer.observe(terminal, { attributes: true, attributeFilter: ['class'] });
        }
        
        // Hide if already shown before
        if (localStorage.getItem('terminalHintShown')) {
            hint.classList.add('hidden');
        }
        
        // Click to open terminal
        hint.addEventListener('click', () => {
            Terminal.open();
            hint.classList.add('hidden');
        });
    }

    // ═══════════ MAGNETIC BUTTONS ═══════════
    function initMagneticButtons() {
        const buttons = document.querySelectorAll('.btn, .nav-cta, .social-link');
        
        buttons.forEach(btn => {
            btn.addEventListener('mousemove', (e) => {
                const rect = btn.getBoundingClientRect();
                const x = e.clientX - rect.left - rect.width / 2;
                const y = e.clientY - rect.top - rect.height / 2;
                
                btn.style.transform = `translate(${x * 0.2}px, ${y * 0.2}px)`;
            });
            
            btn.addEventListener('mouseleave', () => {
                btn.style.transform = 'translate(0, 0)';
            });
        });
    }

    // ═══════════ PARALLAX FLOATING ELEMENTS ═══════════
    function initParallax() {
        const floatingElements = document.querySelectorAll('.floating-elements .float-icon');
        
        document.addEventListener('mousemove', (e) => {
            const x = (e.clientX / window.innerWidth - 0.5) * 2;
            const y = (e.clientY / window.innerHeight - 0.5) * 2;
            
            floatingElements.forEach((el, i) => {
                const speed = (i + 1) * 10;
                el.style.transform = `translate(${x * speed}px, ${y * speed}px)`;
            });
        });
    }

    // ═══════════ SCROLL REVEAL ═══════════
    function initScrollReveal() {
        const elements = document.querySelectorAll('.section-header, .project-card, .timeline-item, .skill-category, .about-content, .about-image, .contact-card');
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry, index) => {
                if (entry.isIntersecting) {
                    setTimeout(() => {
                        entry.target.classList.add('revealed');
                    }, index * 100);
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });
        
        elements.forEach(el => {
            el.classList.add('reveal-element');
            observer.observe(el);
        });
    }

    // ═══════════ SKILL ORBIT ANIMATION ═══════════
    function initSkillOrbit() {
        const skillCategories = document.querySelectorAll('.skill-category');
        
        skillCategories.forEach(category => {
            category.addEventListener('mouseenter', () => {
                const tags = category.querySelectorAll('.skill-tags span');
                tags.forEach((tag, i) => {
                    tag.style.animationDelay = `${i * 0.1}s`;
                    tag.classList.add('pulse');
                });
            });
            
            category.addEventListener('mouseleave', () => {
                const tags = category.querySelectorAll('.skill-tags span');
                tags.forEach(tag => tag.classList.remove('pulse'));
            });
        });
    }

    // ═══════════ NAVIGATION ═══════════
    function initNavigation() {
        const navbar = document.getElementById('navbar');
        const hamburger = document.getElementById('hamburger');
        const navMenu = document.getElementById('nav-menu');
        const mobileOverlay = document.getElementById('mobile-overlay');
        const navLinks = document.querySelectorAll('.nav-link');
        
        window.addEventListener('scroll', () => {
            if (window.pageYOffset > 50) {
                navbar?.classList.add('scrolled');
            } else {
                navbar?.classList.remove('scrolled');
            }
            
            updateScrollProgress();
            updateActiveNavLink();
        });
        
        hamburger?.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            navMenu?.classList.toggle('active');
            mobileOverlay?.classList.toggle('active');
            document.body.classList.toggle('menu-open');
            AudioSystem.play('click');
        });
        
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                hamburger?.classList.remove('active');
                navMenu?.classList.remove('active');
                mobileOverlay?.classList.remove('active');
                document.body.classList.remove('menu-open');
                AudioSystem.play('click');
            });
        });
        
        mobileOverlay?.addEventListener('click', () => {
            hamburger?.classList.remove('active');
            navMenu?.classList.remove('active');
            mobileOverlay?.classList.remove('active');
            document.body.classList.remove('menu-open');
        });
    }

    function updateScrollProgress() {
        const progress = document.getElementById('scroll-progress');
        if (!progress) return;
        
        const scrollTop = window.pageYOffset;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrollPercent = (scrollTop / docHeight) * 100;
        
        progress.style.width = scrollPercent + '%';
    }

    function updateActiveNavLink() {
        const sections = document.querySelectorAll('section[id]');
        const navLinks = document.querySelectorAll('.nav-link');
        
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 100;
            if (window.pageYOffset >= sectionTop) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === '#' + current) {
                link.classList.add('active');
            }
        });
    }

    // ═══════════ TYPING EFFECT ═══════════
    function initTypingEffect() {
        const typedEl = document.getElementById('typed-text');
        if (!typedEl) return;
        
        const words = ['AI Solutions', 'ML Models', 'Web Apps', 'Data Pipelines', 'Smart Systems'];
        let wordIndex = 0;
        let charIndex = 0;
        let isDeleting = false;
        let isPaused = false;
        
        function type() {
            const currentWord = words[wordIndex];
            
            if (isPaused) {
                setTimeout(type, 1500);
                isPaused = false;
                isDeleting = true;
                return;
            }
            
            if (isDeleting) {
                typedEl.textContent = currentWord.substring(0, charIndex - 1);
                charIndex--;
            } else {
                typedEl.textContent = currentWord.substring(0, charIndex + 1);
                charIndex++;
            }
            
            let typeSpeed = isDeleting ? 50 : 100;
            
            if (!isDeleting && charIndex === currentWord.length) {
                isPaused = true;
            } else if (isDeleting && charIndex === 0) {
                isDeleting = false;
                wordIndex = (wordIndex + 1) % words.length;
                typeSpeed = 300;
            }
            
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
                    const counter = entry.target;
                    const target = parseInt(counter.getAttribute('data-target'));
                    animateCounter(counter, target);
                    observer.unobserve(counter);
                }
            });
        }, { threshold: 0.5 });
        
        counters.forEach(counter => observer.observe(counter));
    }

    function animateCounter(element, target) {
        let current = 0;
        const increment = target / 60;
        const duration = 2000;
        const stepTime = duration / 60;
        
        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                element.textContent = target;
                clearInterval(timer);
            } else {
                element.textContent = Math.floor(current);
            }
        }, stepTime);
    }

    // ═══════════ 3D CARD TILT ═══════════
    function initCardTilt() {
        const card = document.getElementById('hero-card');
        if (!card) return;
        
        const inner = card.querySelector('.card-inner');
        
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const rotateX = (y - centerY) / 8;
            const rotateY = (centerX - x) / 8;
            
            inner.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`;
        });
        
        card.addEventListener('mouseleave', () => {
            inner.style.transform = 'rotateX(0) rotateY(0) scale(1)';
        });
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
                
                projectCards.forEach((card, index) => {
                    const categories = card.getAttribute('data-category') || '';
                    
                    if (filter === 'all' || categories.includes(filter)) {
                        card.style.transitionDelay = `${index * 50}ms`;
                        card.classList.remove('hidden');
                        card.classList.add('show');
                    } else {
                        card.style.transitionDelay = '0ms';
                        card.classList.remove('show');
                        card.classList.add('hidden');
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
        
        mainBtn.addEventListener('click', () => {
            mainBtn.classList.toggle('active');
            menu.classList.toggle('active');
            AudioSystem.play('click');
        });
        
        document.getElementById('sound-btn')?.addEventListener('click', () => AudioSystem.toggle());
        
        document.addEventListener('click', (e) => {
            if (!e.target.closest('.quick-actions')) {
                mainBtn.classList.remove('active');
                menu.classList.remove('active');
            }
        });
    }

    // ═══════════ SMOOTH SCROLL ═══════════
    function initSmoothScroll() {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
            });
        });
    }

    // ═══════════ INTERACTION SOUNDS ═══════════
    function initInteractionSounds() {
        document.querySelectorAll('a, button').forEach(el => {
            el.addEventListener('click', () => AudioSystem.play('click'));
        });
        
        document.querySelectorAll('.project-card, .social-link, .skill-tags span').forEach(el => {
            el.addEventListener('mouseenter', () => AudioSystem.play('hover'));
        });
    }

    // ═══════════ RESUME CONFETTI ═══════════
    function initResumeConfetti() {
        document.querySelectorAll('a[download], .nav-cta').forEach(link => {
            link.addEventListener('click', () => setTimeout(triggerConfetti, 100));
        });
    }

    // ═══════════ EASTER EGG: KONAMI CODE ═══════════
    function initKonamiCode() {
        const pattern = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];
        let current = 0;
        
        document.addEventListener('keydown', (e) => {
            if (e.key === pattern[current]) {
                current++;
                if (current === pattern.length) {
                    triggerConfetti();
                    startMatrix();
                    setTimeout(stopMatrix, 5000);
                    current = 0;
                }
            } else {
                current = 0;
            }
        });
    }

    // ═══════════ INITIALIZE EVERYTHING ═══════════
    function init() {
        AudioSystem.init();
        initNavigation();
        initTypingEffect();
        initCounters();
        initCardTilt();
        initProjectFilters();
        initScrollReveal();
        initCursor();
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
        
        window.triggerConfetti = triggerConfetti;
        window.toggleMatrix = toggleMatrix;
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }

    window.addEventListener('load', hidePreloader);
    setTimeout(hidePreloader, 3000);

})();