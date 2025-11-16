# Data Science Portfolio - Shahzeb Faisal

![Portfolio Preview](https://img.shields.io/badge/Portfolio-Live-brightgreen) ![Tech Stack](https://img.shields.io/badge/Tech-WebGL2%20%7C%20JavaScript%20%7C%20HTML5-blue) ![AI Powered](https://img.shields.io/badge/AI-GroqCloud%20Enabled-purple)

Welcome to my interactive data science portfolio! This project showcases my work as a **Data Science Student & ML Engineer** at FAST NUCES Lahore through a unique dual-interface design featuring modern web aesthetics and an AI-powered terminal interface.

![Portfolio Banner](Images/portfolio-preview.png)

## 🚀 Live Demo

**Portfolio URL:** [https://my-portfolio-hazel-seven-40.vercel.app](https://my-portfolio-hazel-seven-40.vercel.app)

**GitHub Repository:** [https://github.com/ShahzebFaisal5649/My-Portfolio](https://github.com/ShahzebFaisal5649/My-Portfolio)

## ✨ Features

### **Dual Interface Design**
- **Modern Interface**: Clean, responsive layout showcasing projects, skills, and experience
- **AI Terminal**: Interactive terminal powered by GroqCloud API with ML-focused commands
- **Smooth Transitions**: Seamless switching between interfaces with animated effects

### **AI-Powered Terminal**
- **GroqCloud Integration**: Real-time AI assistant for data science queries
- **Function Calling**: Advanced ML model analysis and algorithm suggestions
- **Interactive Commands**: Browse projects, datasets, and model performance
- **Data Visualization**: ASCII-based data flow animations

### **3D WebGL2 Rendering**
- **Custom Shaders**: Hand-written GLSL shaders with blue accent lighting
- **Shadow Mapping**: Real-time shadow effects for depth and realism
- **Performance Optimized**: Smooth 60fps rendering with efficient WebGL2

### **Data Science Focus**
- **Project Showcase**: ML models, full-stack applications, and blockchain projects
- **Technical Metrics**: Model accuracy, performance stats, and deployment info
- **Interactive Elements**: Hover effects with data science terminology
- **Professional Branding**: Clean design optimized for technical recruiters

## 🛠️ Tech Stack

### **Frontend**
- **HTML5/CSS3**: Modern responsive design with viewport-relative units
- **JavaScript ES6**: Interactive functionality and state management
- **WebGL2**: Custom 3D graphics and shader programming

### **AI Integration**
- **GroqCloud API**: LLM-powered chatbot with function calling
- **Model**: Llama 3.3 70B Versatile for technical responses
- **Tools**: ML performance analysis and algorithm recommendations

### **Styling & Design**
- **Custom CSS**: Hand-crafted components without frameworks
- **Typography**: Inter, Poppins, and JetBrains Mono font stack
- **Color Scheme**: Professional blue accent theme (#3B82F6)
- **Animations**: Smooth transitions and interactive effects

## 📁 Project Structure

```
my-portfolio/
├── index.html                 # Main HTML structure
├── README.md                  # Project documentation
├── LICENSE                    # MIT License
├── resume.pdf                 # Professional resume (PDF)
├── Scripts/
│   ├── Main.js               # WebGL2 rendering and core logic
│   ├── TerminalFunction.js   # AI terminal and command system
│   ├── RenderingFunctions.js # WebGL helper functions
│   └── ModelFiles.js         # 3D model data and materials
├── Styles/
│   └── Main.css              # Complete styling and responsive design
├── Sounds/
│   ├── ComputerBoot.mp3      # Terminal boot sound
│   ├── ComputerAmbient.mp3   # Background ambience
│   ├── ComputerBeep.mp3      # Command feedback
│   └── KeyboardPressed.mp3   # Typing sound effects
└── Images/
    ├── GithubIcon.png        # Social media icons
    ├── LinkedInIcon.png
    ├── FacebookIcon.png
    ├── EmailIcon.png
    ├── PhoneIcon.png
    └── CVIcon.png
```

## 🚀 Quick Start

### **Local Development**

1. **Clone the repository:**
```bash
git clone https://github.com/ShahzebFaisal5649/My-Portfolio.git
cd My-Portfolio
```

2. **Start local server:**
```bash
# Using Python
python3 -m http.server 8000

# Using Node.js
npx serve .

# Using PHP
php -S localhost:8000
```

3. **Access the portfolio:**
```
http://localhost:8000
```

### **GroqCloud Setup**

1. **Get API Key:**
   - Visit [console.groq.com](https://console.groq.com/keys)
   - Create free account and generate API key

2. **Configure API:**
```javascript
// In Scripts/TerminalFunction.js, replace:
const GROQ_API_KEY = "YOUR_GROQ_API_KEY_HERE";
// With your actual API key
```

3. **Test AI Commands:**
```bash
# In the terminal interface:
ai what is machine learning?
ai suggest algorithm for classification
stats
models
```

## 💼 Portfolio Highlights

### **Featured Projects**
- **Nexium Resume Tailor**: AI-powered resume optimization with GPT-4 and Next.js 15
- **Blog Summarizer**: Full-stack AI app with NLP summarization and dual database architecture
- **Environmental Impact Analysis**: Satellite data processing with NDVI analysis
- **Lahore Smart City Management**: Real-time pipeline processing 13.5M+ vehicle registrations
- **Election DApp**: Blockchain voting system on Ethereum
- **Edu Connect**: Full-stack tutor-student platform with WebSocket chat
- **Image Captioning with LSTM**: Deep learning model achieving 0.875 BLEU score
- **Music Sentiment Analysis**: NLP-powered emotional trend analysis

### **Technical Achievements**
- 🎓 **FAST NUCES Lahore** - Bachelor's in Data Science (2021-2025)
- 💼 **3 Professional Internships** - Nexium, CodeAlpha, Kashf Foundation
- 📊 **16+ Production Projects** across ML, Web Dev, and Blockchain
- 🔬 **Active Researcher** - LLM-based conversational chatbots
- ⭐ **GitHub Profile** - Consistent contributions and well-documented repos
- 📈 **Measurable Impact** - 25%, 30%, 40% improvements in internship projects

## 🎮 Terminal Commands

### **Navigation**
- `ls` / `dir` - List directory contents
- `cd [directory]` - Change directory
- `open [file]` - Open files and launch programs
- `clear` - Clear terminal output

### **Data Science**
- `ai [query]` - Chat with AI assistant
- `stats` - Show portfolio statistics
- `models` - List ML models and metrics
- `data` - Dataset information and storage
- `help` - Show all available commands

### **Interactive Features**
- **Tab Completion**: Auto-complete commands and file names
- **Scroll History**: Arrow keys to navigate terminal output
- **ESC**: Exit programs and return to terminal
- **Mouse**: Hover effects on projects with text scramble animation

## 🎨 Customization


### **Personal Information**
Update your details in `index.html`:
- Name and title in `<h1>` and `<h2>` tags
- Project links and descriptions
- Social media links in `#SocialsContainer`
- About and experience sections

### **Terminal Content**
Customize the file system in `Scripts/TerminalFunction.js`:
- Update project descriptions and links
- Modify AI assistant personality
- Add custom commands and responses

## 📱 Responsive Design

- **Desktop**: Full WebGL3D experience with dual interfaces
- **Tablet**: Optimized layout with touch-friendly interactions
- **Mobile**: Responsive typography and simplified navigation
- **Cross-browser**: Compatible with Chrome, Firefox, Safari, Edge

## 🔧 Performance

- **WebGL2 Rendering**: Hardware-accelerated 3D graphics
- **Optimized Assets**: Compressed images and efficient loading
- **Fast Loading**: <2s initial load time on broadband
- **Memory Efficient**: ~50MB RAM usage during operation
- **60fps**: Smooth animations and interactions

## 📄 Resume Access

**Note**: If you encounter issues accessing the resume at `/resume.pdf`, ensure:

1. **File exists**: Verify `resume.pdf` is in the root directory
2. **Server configuration**: Some servers require explicit MIME type configuration
3. **Alternative access**: Use the direct download link in the social icons

```bash
# Test resume access:
curl -I http://localhost:8000/resume.pdf

# Expected: 200 OK with Content-Type: application/pdf
```

## 🚀 Deployment

### **Vercel (Current Deployment)**
**Live URL:** [https://my-portfolio-hazel-seven-40.vercel.app](https://my-portfolio-hazel-seven-40.vercel.app)

```bash
# Deploy to Vercel
npm install -g vercel
vercel

# Or connect GitHub repository for auto-deployment
```

### **GitHub Pages**
```bash
# Push to main branch
git add .
git commit -m "Deploy portfolio"
git push origin main

# Enable GitHub Pages in repository settings
# Your site: https://shahzebfaisal5649.github.io/My-Portfolio
```

### **Netlify**
1. Connect GitHub repository to Netlify
2. Auto-deploy on every commit
3. Custom domain support available

## 🤝 Contributing

While this is a personal portfolio, feedback and suggestions are welcome:

1. Fork the repository
2. Create feature branch (`git checkout -b feature/improvement`)
3. Commit changes (`git commit -am 'Add improvement'`)
4. Push branch (`git push origin feature/improvement`)
5. Open Pull Request

## 🎓 About Me

I'm **Shahzeb Faisal**, a Data Science student at FAST NUCES Lahore with expertise in:
- **Machine Learning & AI**: TensorFlow, PyTorch, LSTM, NLP, Computer Vision
- **Full-Stack Development**: Next.js, React, Node.js, TypeScript
- **Data Science**: Predictive Modeling, Big Data Analytics, Visualization
- **Blockchain**: Solidity, Web3.js, Smart Contracts
- **Cloud Computing**: Azure, AKS, Bicep, Vercel

Currently conducting research on "Exploring Publicly Available LLMs for Conversational Chatbots" under Dr. Esha Tur Razia Babar.

## 📜 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

## 📞 Contact

- **Email**: [shahzebfaisal5649@gmail.com](mailto:shahzebfaisal5649@gmail.com)
- **University Email**: [l215649@lhr.nu.edu.pk](mailto:l215649@lhr.nu.edu.pk)
- **Phone**: [+92 302 0418510](tel:+923020418510)
- **Location**: Lahore, Pakistan
- **GitHub**: [ShahzebFaisal5649](https://github.com/ShahzebFaisal5649)
- **LinkedIn**: [shahzeb-faisal-8b9190321](https://www.linkedin.com/in/shahzeb-faisal-8b9190321/)
- **Portfolio**: [https://my-portfolio-hazel-seven-40.vercel.app](https://my-portfolio-hazel-seven-40.vercel.app)

---

**Built with ❤️ by Shahzeb Faisal** | *Transforming data into insights through machine learning and innovative AI solutions*

**Original Template by Sohaib Ahmed** | *Customized for Data Science Portfolio Showcase*
