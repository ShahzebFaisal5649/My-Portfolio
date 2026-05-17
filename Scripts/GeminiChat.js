// API Setup
const GEMINI_ENDPOINT = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${window.GEMINI_API_KEY}`;

async function askGemini(history) {
  try {
    const response = await fetch(GEMINI_ENDPOINT, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ contents: history })
    });
    const data = await response.json();
    return data.candidates?.[0]?.content?.parts?.[0]?.text || "I couldn't generate a response.";
  } catch (error) {
      console.error("Gemini API Error:", error);
      return "Sorry, I am having trouble connecting to my brain right now.";
  }
}

function buildSystemContext(githubRepos) {
  return `You are an AI assistant embedded in Shahzeb Faisal's professional portfolio website. Your job is to help visitors — especially recruiters, interviewers, and collaborators — learn about Shahzeb's skills, projects, experience, and availability.

IMPORTANT RULES:
- Only answer questions about Shahzeb's professional profile.
- If asked something unrelated, politely redirect: "I'm here to tell you about Shahzeb's work! Ask me anything about his projects, skills, or experience."
- Be enthusiastic, professional, and specific. Use bullet points for lists.
- He is NOT employed at NEXTSTAC, DesignCustomBox, or any company not listed below.
- He is currently a Research Assistant at FAST NUCES (active).
- He is open to work FROM June 2026.
- He has 3 live deployed apps on Vercel.

PORTFOLIO DATA:
${JSON.stringify(window.PORTFOLIO_DATA || {}, null, 2)}

LIVE GITHUB REPOSITORIES:
${JSON.stringify(githubRepos, null, 2)}

When asked about projects, always mention the live URL if available. When asked about availability, always mention WhatsApp and email. Be his best advocate.`;
}

document.addEventListener('DOMContentLoaded', () => {
    // Inject Widget HTML and CSS if not present
    if (!document.getElementById('ai-chat-btn')) {
        const style = `
        <style>
        .ai-chat-btn {
          position: fixed; bottom: 30px; right: 30px; width: 56px; height: 56px;
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
          position: fixed; bottom: 100px; right: 30px; width: 380px; height: 520px;
          background: rgba(5,5,5,0.95); backdrop-filter: blur(20px);
          border: 1px solid rgba(201,168,76,0.4); border-radius: 16px;
          display: flex; flex-direction: column; z-index: 9001;
          animation: slideUp 0.3s ease; overflow: hidden;
        }
        .ai-chat-panel.hidden { display: none; }
        @keyframes slideUp { from{transform:translateY(20px);opacity:0} to{transform:translateY(0);opacity:1} }
        .chat-header {
          background: linear-gradient(135deg, var(--gold-dark), var(--gold-primary));
          padding: 16px 20px; display: flex; align-items: center; gap: 10px;
          font-family: 'Cinzel', serif; font-size: 0.85rem; color: var(--black);
        }
        .chat-header button { margin-left: auto; background:none; border:none; font-size:1.4rem; cursor:pointer; color:var(--black); }
        .chat-messages { flex: 1; overflow-y: auto; padding: 16px; display: flex; flex-direction: column; gap: 12px; }
        .msg-user { align-self: flex-end; background: linear-gradient(135deg,var(--gold-dark),var(--gold-primary)); color: var(--black); padding: 10px 14px; border-radius: 18px 18px 4px 18px; max-width: 80%; font-size: 0.85rem; }
        .msg-ai { align-self: flex-start; background: rgba(255,255,255,0.05); border: 1px solid var(--border-gold); color: var(--white-soft); padding: 10px 14px; border-radius: 18px 18px 18px 4px; max-width: 85%; font-size: 0.85rem; line-height: 1.5; }
        .typing-dots { display: flex; gap: 4px; padding: 10px 14px; }
        .typing-dots span { width: 6px; height: 6px; background: var(--gold-primary); border-radius: 50%; animation: bounce 1s infinite; }
        .typing-dots span:nth-child(2) { animation-delay: 0.15s; }
        .typing-dots span:nth-child(3) { animation-delay: 0.3s; }
        @keyframes bounce { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-6px)} }
        .chat-input-row { display: flex; gap: 8px; padding: 12px 16px; border-top: 1px solid var(--border-gold); }
        .chat-input-row input { flex:1; background: rgba(255,255,255,0.05); border: 1px solid var(--border-gold); color: var(--white); padding: 10px 14px; border-radius: 8px; font-family: 'Outfit',sans-serif; outline:none; }
        .chat-input-row button { width:40px; height:40px; border-radius:8px; background:var(--gold-primary); border:none; cursor:pointer; color:var(--black); }
        .chip { background: rgba(201,168,76,0.1); border: 1px solid var(--border-gold); color: var(--gold-primary); padding: 6px 12px; border-radius: 20px; font-size: 0.75rem; cursor: pointer; font-family: 'Outfit',sans-serif; transition: all 0.2s; }
        .chip:hover { background: rgba(201,168,76,0.2); }
        .chat-disclaimer { font-size: 0.6rem; text-align: center; color: var(--text-muted); padding: 6px; font-family: 'Outfit',sans-serif; }
        @media(max-width:480px) { .ai-chat-panel{width:calc(100vw - 20px);right:10px;bottom:90px;} }
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

    chatBtn.addEventListener('click', async () => {
        chatPanel.classList.toggle('hidden');
        document.querySelector('.chat-notif-dot')?.remove();
        if (conversationHistory.length === 0) {
            await initChat();
        }
    });

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

    function appendMessage(text, role) {
        const div = document.createElement('div');
        div.className = role === 'user' ? 'msg-user' : 'msg-ai';
        div.innerText = text;
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
