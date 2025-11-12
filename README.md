# Data Science Portfolio - Shahzeb Faisal

![Portfolio Preview](https://img.shields.io/badge/Portfolio-Live-brightgreen) ![Tech Stack](https://img.shields.io/badge/Tech-WebGL2%20%7C%20JavaScript%20%7C%20HTML5-blue) ![AI Powered](https://img.shields.io/badge/AI-GroqCloud%20Enabled-purple)

Welcome to my interactive data science portfolio! This project showcases my work as a **Data Scientist & ML Engineer** through a unique dual-interface design featuring modern web aesthetics and an AI-powered terminal interface.

![Portfolio Banner](Images/portfolio-preview.png)

## 🚀 Live Demo

**Portfolio URL:** [View Live Portfolio](https://your-username.github.io)

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
- **Project Showcase**: ML models, PyPI packages, and production systems
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
    ├── HuggingFaceIcon.png
    ├── MediumIcon.png
    ├── KaggleIcon.png
    ├── EmailIcon.png
    └── CVIcon.png
```

## 🚀 Quick Start

### **Local Development**

1. **Clone the repository:**
```bash
git clone https://github.com/your-username/portfolio.git
cd portfolio
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
- **InSightAI**: PyPI package for ML model insights and analysis
- **Stock Predictor**: LSTM neural network achieving 94.2% accuracy
- **Climate Predictor**: Random Forest model for environmental impact analysis
- **Urdu Speech Recognition**: Fine-tuned Whisper model on HuggingFace
- **DQN Atari Agent**: Deep Q-Learning for game playing AI
- **Ecommerce ML System**: Production ML pipeline for recommendation systems

### **Technical Achievements**
- 📊 **12 Models Deployed** in production environments
- 🎯 **91.7% Average Accuracy** across ML models
- 📈 **2.1TB Data Processed** through ML pipelines
- ⭐ **89 GitHub Stars** across open source projects
- 📦 **1.2K Downloads** on PyPI and HuggingFace

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

### **Color Scheme**
```css
/* Primary blue palette in Styles/Main.css */
--accent-primary: #3B82F6;
--accent-secondary: #1D4ED8;
--accent-light: #93C5FD;
--text-primary: #FFFFFF;
--text-secondary: #94A3B8;
```

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

### **GitHub Pages**
```bash
# Push to main branch
git add .
git commit -m "Deploy portfolio"
git push origin main

# Enable GitHub Pages in repository settings
# Your site: https://username.github.io
```

### **Netlify**
1. Connect GitHub repository to Netlify
2. Auto-deploy on every commit
3. Custom domain support available

### **Vercel**
1. Import from GitHub
2. Zero-configuration deployment
3. Edge function support for API calls

## 🤝 Contributing

While this is a personal portfolio, feedback and suggestions are welcome:

1. Fork the repository
2. Create feature branch (`git checkout -b feature/improvement`)
3. Commit changes (`git commit -am 'Add improvement'`)
4. Push branch (`git push origin feature/improvement`)
5. Open Pull Request

## 📜 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

## 📞 Contact

- **Email**: [riorigasaki65@gmail.com](mailto:riorigasaki65@gmail.com)
- **GitHub**: [LeoRigasaki](https://github.com/LeoRigasaki)
- **HuggingFace**: [leorigasaki54](https://huggingface.co/leorigasaki54)
- **Medium**: [@sohaibahmedDS](https://medium.com/@sohaibahmedDS)

---

**Built with ❤️ by Sohaib Ahmed** | *Transforming data into actionable insights through advanced machine learning*