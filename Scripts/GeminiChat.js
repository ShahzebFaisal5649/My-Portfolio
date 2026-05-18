// API Setup — dynamic endpoint so key is always current
function getGeminiEndpoint() {
  const key = (window.ENV && window.ENV.GEMINI_API_KEY)
    ? window.ENV.GEMINI_API_KEY
    : window.GEMINI_API_KEY;
  return `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${key}`;
}

function getActiveKey() {
  return (window.ENV && window.ENV.GEMINI_API_KEY)
    ? window.ENV.GEMINI_API_KEY
    : window.GEMINI_API_KEY;
}

async function askGemini(history) {
  const key = getActiveKey();
  if (!key || key === 'PASTE_YOUR_GEMINI_KEY_HERE') {
    return "The AI chat is not configured yet. Please contact Shahzeb directly at shahzebfaisal5649@gmail.com or via WhatsApp.";
  }
  try {
    const response = await fetch(getGeminiEndpoint(), {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ contents: history })
    });
    if (!response.ok) {
      const errData = await response.json().catch(() => ({}));
      console.error('Gemini API error:', errData);
      return "I'm having trouble connecting right now. Please reach out directly at shahzebfaisal5649@gmail.com.";
    }
    const data = await response.json();
    return data.candidates?.[0]?.content?.parts?.[0]?.text
      || "I couldn't generate a response. Try rephrasing your question.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Network error. Please check your connection or contact Shahzeb directly.";
  }
}

function buildSystemContext(githubRepos) {
  return `You are an AI assistant embedded in Shahzeb Faisal's portfolio website.
Help visitors — especially recruiters, interviewers, and collaborators — learn about Shahzeb.

CRITICAL RULES:
- NEVER mention "Research Assistant", "Dr. Esha Tur Razia", or any research role.
- Shahzeb has ZERO research experience. If asked about research, say he focuses on production engineering.
- Only answer about Shahzeb's professional profile. Redirect unrelated questions politely.
- Be enthusiastic, professional, and specific. Use bullet points for lists.
- He is open to work from June 2026.

CURRENT ROLE: MERN Stack Developer at NEXTSTAC
- Solo-built DesignCustomBox (designcustombox.com) in 7 days
- Full stack: Next.js 15, Three.js, MongoDB, Node.js, TypeScript

EXPERIENCE:
1. MERN Stack Dev @ NEXTSTAC (2025–Present): Built DesignCustomBox 3D e-commerce platform
2. AI-First Web Dev Intern @ Nexium (Jul–Aug 2025): Built AI Resume Tailor with GPT-4, +30% accuracy
3. Data & Software Intern @ Kashf Foundation (Jul–Aug 2024): SQL optimization, +40% query speed
4. Data Science Intern @ CodeAlpha (Jun 2024): ML model improvements, +25% decision accuracy

EDUCATION: BS Data Science, FAST NUCES Lahore, 2021–2025

TOP SKILLS: Python, Next.js 15, React, Node.js, MongoDB, TypeScript, TensorFlow, PyTorch,
            scikit-learn, NLP, LLMs, Three.js, SQL, PowerBI, Docker

GITHUB: https://github.com/ShahzebFaisal5649
LINKEDIN: https://www.linkedin.com/in/shahzeb-faisal-8b9190321/
EMAIL: shahzebfaisal5649@gmail.com
WHATSAPP: +92 302 0418510
LOCATION: Nishat Colony, Lahore, Pakistan

LIVE GITHUB REPOSITORIES:
${JSON.stringify(githubRepos, null, 2)}`;
}

document.addEventListener('DOMContentLoaded', () => {
    // Inject Widget HTML and CSS if not present
    if (!document.getElementById('ai-chat-btn')) {
        const style = `
        <style>
        .ai-chat-btn {
          position: fixed; bottom: 90px; right: 24px; width: 56px; height: 56px;
          border-radius: 50%; background: linear-gradient(135deg, var(--gold-dark), var(--gold-primary));
          display: flex; align-items: center; justify-content: center;
          cursor: pointer; z-index: 9000; box-shadow: 0 4px 20px rgba(201,168,76,0.4);
          animation: breathe 3s ease-in-out infinite;
        }
        @keyframes breathe { 0%,100%{box-shadow:0 4px 20px rgba(201,168,76,0.4)} 50%{box-shadow:0 4px 40px rgba(201,168,76,0.8)} }
        .chat-notif-dot {
          position: absolute; top: 4px; right: 4px; width: 10px; height: 10px;
          background: #ef4444; border-radius: 50%; border: 2px solid var(--black);
        }
        .ai-chat-panel {
          position: fixed; bottom: 156px; right: 24px; width: 380px; height: 520px;
          background: rgba(5,5,5,0.95); backdrop-filter: blur(20px);
          border: 1px solid rgba(201,168,76,0.4); border-radius: 16px;
          display: flex; flex-direction: column; z-index: 9001;
          animation: slideUp 0.3s ease; overflow: hidden;
          font-family: 'Outfit', sans-serif;
        }
        .ai-chat-panel.hidden { display: none; }
        @keyframes slideUp { from{transform:translateY(20px);opacity:0} to{transform:translateY(0);opacity:1} }
        .chat-header {
          background: linear-gradient(135deg, var(--gold-dark), var(--gold-primary));
          padding: 16px 20px; display: flex; align-items: center; gap: 10px;
          font-family: 'Cinzel', serif; font-size: 0.88rem; color: var(--black);
          font-weight: 700; letter-spacing: 1px;
        }
        .chat-header button { margin-left: auto; background:none; border:none; font-size:1.4rem; cursor:pointer; color:var(--black); }
        .chat-messages { flex: 1; overflow-y: auto; padding: 16px; display: flex; flex-direction: column; gap: 12px; font-family: 'Outfit', sans-serif; }
        .msg-user { align-self: flex-end; background: linear-gradient(135deg,var(--gold-dark),var(--gold-primary)); color: var(--black); padding: 10px 14px; border-radius: 18px 18px 4px 18px; max-width: 80%; font-size: 0.85rem; font-family: 'Outfit', sans-serif; font-weight: 500; }
        .msg-ai { align-self: flex-start; background: rgba(255,255,255,0.05); border: 1px solid var(--border-gold); color: var(--white-soft); padding: 10px 14px; border-radius: 18px 18px 18px 4px; max-width: 85%; font-size: 0.85rem; line-height: 1.6; font-family: 'Outfit', sans-serif; letter-spacing: 0.2px; }
        .msg-ai code { font-family: 'JetBrains Mono', monospace; font-size: 0.8rem; background: rgba(201, 168, 76, 0.1); padding: 2px 5px; border-radius: 4px; color: var(--gold-primary); border: 1px solid rgba(201,168,76,0.2); }
        .typing-dots { display: flex; gap: 4px; padding: 10px 14px; }
        .typing-dots span { width: 6px; height: 6px; background: var(--gold-primary); border-radius: 50%; animation: bounce 1s infinite; }
        .typing-dots span:nth-child(2) { animation-delay: 0.15s; }
        .typing-dots span:nth-child(3) { animation-delay: 0.3s; }
        @keyframes bounce { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-6px)} }
        .chat-input-row { display: flex; gap: 8px; padding: 12px 16px; border-top: 1px solid var(--border-gold); }
        .chat-input-row input { flex:1; background: rgba(255,255,255,0.05); border: 1px solid var(--border-gold); color: var(--white); padding: 10px 14px; border-radius: 8px; font-family: 'Outfit',sans-serif; outline:none; font-size: 0.85rem; }
        .chat-input-row button { width:40px; height:40px; border-radius:8px; background:var(--gold-primary); border:none; cursor:pointer; color:var(--black); }
        .chip { background: rgba(201,168,76,0.1); border: 1px solid var(--border-gold); color: var(--gold-primary); padding: 6px 12px; border-radius: 20px; font-size: 0.75rem; cursor: pointer; font-family: 'Outfit',sans-serif; transition: all 0.2s; font-weight: 500; }
        .chip:hover { background: rgba(201,168,76,0.2); }
        .chat-disclaimer { font-size: 0.6rem; text-align: center; color: var(--text-muted); padding: 6px; font-family: 'Outfit',sans-serif; }
        @media(max-width:480px) { .ai-chat-panel{width:calc(100vw - 20px);right:10px;bottom:144px;} .ai-chat-btn{bottom:80px;right:14px;} }
        </style>
        `;
        
        const widgetHTML = `
        <!-- AI Chat Widget -->
        <div id="ai-chat-btn" class="ai-chat-btn">
          <i class="fas fa-brain"></i>
          <span class="chat-notif-dot"></span>
        </div>

        <div id="ai-chat-panel" class="ai-chat-panel hidden">
          <div class="chat-header">
            <i class="fas fa-brain"></i>
            <span>Ask About Shahzeb</span>
            <button id="chat-close">×</button>
          </div>
          <div class="chat-messages" id="chat-messages">
            <div class="chat-suggestions">
              <p>Hi! Ask me anything about Shahzeb 👋</p>
              <div class="suggestion-chips" style="display:flex; flex-wrap:wrap; gap:5px; margin-top:10px;">
                <button class="chip">What are his top skills?</button>
                <button class="chip">Tell me about his projects</button>
                <button class="chip">Is he available for hire?</button>
                <button class="chip">What makes him unique?</button>
                <button class="chip">Show me his live projects</button>
              </div>
            </div>
          </div>
          <div class="chat-input-row">
            <input type="text" id="chat-input" placeholder="Ask anything..." autocomplete="off">
            <button id="chat-send"><i class="fas fa-paper-plane"></i></button>
          </div>
          <p class="chat-disclaimer">Powered by Gemini AI · Portfolio of Shahzeb Faisal</p>
        </div>
        `;
        
        document.body.insertAdjacentHTML('beforeend', style + widgetHTML);
    }

    const chatBtn = document.getElementById('ai-chat-btn');
    const chatPanel = document.getElementById('ai-chat-panel');
    const chatClose = document.getElementById('chat-close');
    const chatSend = document.getElementById('chat-send');
    const chatInput = document.getElementById('chat-input');
    const chatMessages = document.getElementById('chat-messages');

    let conversationHistory = [];
    let githubData = [];

    // GitHub Knowledge
    async function fetchGitHubData() {
      const cached = sessionStorage.getItem('gh_repos_ai');
      if (cached) return JSON.parse(cached);
      
      try {
          const repos = await fetch('https://api.github.com/users/ShahzebFaisal5649/repos?per_page=50&sort=updated')
            .then(r => r.json());
          
          const topRepos = repos.slice(0, 5);
          for (const repo of topRepos) {
            try {
              const readmeRes = await fetch(`https://api.github.com/repos/ShahzebFaisal5649/${repo.name}/readme`);
              if (readmeRes.ok) {
                const readmeData = await readmeRes.json();
                repo.readme_excerpt = atob(readmeData.content).substring(0, 500);
              }
            } catch(e) { /* skip */ }
          }
          
          const summary = repos.map(r => ({
            name: r.name,
            description: r.description,
            language: r.language,
            stars: r.stargazers_count,
            forks: r.forks_count,
            topics: r.topics,
            homepage: r.homepage,
            updated: r.updated_at,
            readme_excerpt: r.readme_excerpt || null
          }));
          
          sessionStorage.setItem('gh_repos_ai', JSON.stringify(summary));
          return summary;
      } catch (error) {
          console.error("GitHub Fetch Error:", error);
          return [];
      }
    }

    // Initialize
    async function initChat() {
        githubData = await fetchGitHubData();
        const systemCtx = buildSystemContext(githubData);
        conversationHistory = [
            { role: 'user', parts: [{ text: systemCtx }] },
            { role: 'model', parts: [{ text: 'Understood. I am ready to answer questions about Shahzeb Faisal.' }] }
        ];
    }

    window.toggleGeminiChat = async () => {
        chatPanel.classList.toggle('hidden');
        document.querySelector('.chat-notif-dot')?.remove();
        if (conversationHistory.length === 0) {
            await initChat();
        }
    };
    chatBtn.addEventListener('click', window.toggleGeminiChat);

    chatClose.addEventListener('click', () => {
        chatPanel.classList.add('hidden');
    });

    async function handleSend() {
        const text = chatInput.value.trim();
        if (!text) return;

        // Append User Message
        appendMessage(text, 'user');
        chatInput.value = '';

        // Append Typing Indicator
        const typingId = appendTyping();

        // Update History
        conversationHistory.push({ role: 'user', parts: [{ text: text }] });

        // Ask Gemini
        const reply = await askGemini(conversationHistory);

        // Remove Typing Indicator
        document.getElementById(typingId)?.remove();

        // Append AI Reply
        appendMessage(reply, 'ai');

        // Update History
        conversationHistory.push({ role: 'model', parts: [{ text: reply }] });
    }

    chatSend.addEventListener('click', handleSend);
    chatInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') handleSend();
    });

    function formatMarkdown(text) {
        // Basic HTML encoding
        let html = text
            .replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;');
        
        // Bold formatting: **text** -> <strong>text</strong>
        html = html.replace(/\*\*(.*?)\*\*/g, '<strong style="color: var(--gold-primary);">$1</strong>');
        
        // Bullet points: * content or - content
        let lines = html.split('\n');
        lines = lines.map(line => {
            let trimmed = line.trim();
            if (trimmed.startsWith('* ') || trimmed.startsWith('- ')) {
                let content = trimmed.substring(2);
                return `<li style="margin-left: 15px; margin-bottom: 6px; color: var(--text-secondary);">${content}</li>`;
            }
            return line;
        });
        html = lines.join('\n');
        
        // Double returns to margins, single returns to breaks
        html = html.replace(/\n\n/g, '<div style="margin-bottom: 10px;"></div>');
        html = html.replace(/\n/g, '<br>');
        
        return html;
    }

    function appendMessage(text, role) {
        const div = document.createElement('div');
        div.className = role === 'user' ? 'msg-user' : 'msg-ai';
        if (role === 'ai') {
            div.innerHTML = formatMarkdown(text);
        } else {
            div.innerText = text;
        }
        chatMessages.appendChild(div);
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }

    function appendTyping() {
        const id = 'typing-' + Date.now();
        const div = document.createElement('div');
        div.className = 'msg-ai';
        div.id = id;
        div.innerHTML = `
        <div class="typing-dots">
            <span></span>
            <span></span>
            <span></span>
        </div>
        `;
        chatMessages.appendChild(div);
        chatMessages.scrollTop = chatMessages.scrollHeight;
        return id;
    }

    // Suggestion Chips
    document.querySelectorAll('.chip').forEach(chip => {
        chip.addEventListener('click', () => {
            chatInput.value = chip.innerText;
            handleSend();
        });
    });
});
