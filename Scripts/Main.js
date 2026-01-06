/* ═══════════════════════════════════════════════════════════
   Main.js - Portfolio with Enhanced AI & Certificate Viewer
   ═══════════════════════════════════════════════════════════ */

(function() {
    'use strict';

    // ═══════════ COMPREHENSIVE PORTFOLIO DATA (For AI Context) ═══════════
    const PORTFOLIO_DATA = {
        // PERSONAL INFORMATION
        name: "Shahzeb Faisal",
        title: "Data Scientist & ML Engineer",
        subtitle: "AI/ML Engineer & Full-Stack AI Developer",
        location: "Lahore, Pakistan",
        email: "shahzebfaisal5649@gmail.com",
        phone: "+92 302 0418510",
        github: "https://github.com/ShahzebFaisal5649",
        linkedin: "https://www.linkedin.com/in/shahzeb-faisal-8b9190321/",
        status: "Open to Work",
        languages: ["English", "Urdu"],
        
        // EDUCATION
        education: {
            university: "FAST National University of Computer & Emerging Sciences (NUCES)",
            location: "Lahore Campus",
            degree: "Bachelor of Science in Data Science",
            period: "2021 - 2025",
            status: "Graduated",
            focus_areas: ["Machine Learning", "Deep Learning", "NLP", "Big Data Analytics"],
            description: "One of Pakistan's top technology universities, known for excellence in computer science and data science education"
        },
        
        // RESEARCH EXPERIENCE
        research: {
            position: "Research Assistant",
            institution: "FAST NUCES Lahore",
            supervisor: "Dr. Esha Tur Razia Babar",
            period: "2024 - Present",
            topic: "LLM-based Conversational Chatbots",
            focus: "Exploring persona-based architectures and bias mitigation in large language models",
            technologies: ["LLMs", "NLP", "Python", "Transformers", "Research Methodologies"],
            description: "Conducting cutting-edge research on conversational AI systems with focus on making them more reliable and unbiased"
        },
        
        // DETAILED PROFESSIONAL EXPERIENCE
        experience: [
            {
                title: "Research Assistant",
                company: "FAST NUCES Lahore",
                period: "2024 - Present",
                type: "Research",
                current: true,
                supervisor: "Dr. Esha Tur Razia Babar",
                description: "Researching LLM-based conversational chatbots with focus on persona-based architectures and bias mitigation.",
                responsibilities: [
                    "Conducting research on large language model architectures",
                    "Exploring bias mitigation techniques in conversational AI",
                    "Developing persona-based chatbot systems"
                ],
                technologies: ["LLMs", "NLP", "Python", "Transformers"],
                achievements: ["Contributing to cutting-edge research in conversational AI"]
            },
            {
                title: "AI-First Web Development Intern",
                company: "Nexium",
                period: "July - August 2025",
                type: "Internship",
                description: "Developed AI-powered web applications with GPT-4 integration.",
                responsibilities: [
                    "Built AI-powered Resume Tailor using GPT-4 API",
                    "Developed full-stack applications using Next.js 15",
                    "Implemented NLP-based text summarization features"
                ],
                technologies: ["Next.js 15", "GPT-4", "TypeScript", "Supabase", "Tailwind CSS"],
                achievements: [
                    "Achieved 30% accuracy improvement in resume-job matching",
                    "Developed 3 production-ready AI applications"
                ],
                github: "https://github.com/ShahzebFaisal5649"
            },
            {
                title: "Software Development Trainee",
                company: "Technology Academy (BRIGHT Network)",
                period: "September 2024",
                type: "Training Program",
                program: "Couch to Coder 2024",
                description: "Completed intensive software development training focusing on coding fundamentals.",
                technologies: ["Python", "JavaScript", "Git"],
                achievements: ["Successfully completed Couch to Coder 2024", "Earned certification"]
            },
            {
                title: "Data Science Intern",
                company: "CodeAlpha",
                period: "June - July 2024",
                type: "Internship",
                description: "Developed predictive models and automated data pipelines.",
                responsibilities: [
                    "Developed predictive models using ML algorithms",
                    "Built automated data pipelines"
                ],
                technologies: ["Python", "Pandas", "Scikit-Learn", "ML"],
                achievements: [
                    "Improved decision-making accuracy by 25%",
                    "Reduced data processing time by 30%"
                ]
            },
            {
                title: "Data & Software Intern",
                company: "Kashf Foundation",
                period: "July - August 2024",
                type: "Internship",
                description: "Built compliance dashboards and optimized database systems.",
                responsibilities: [
                    "Developed real-time compliance dashboard",
                    "Optimized SQL database queries"
                ],
                technologies: ["SQL", "SQL Server", "Android", "Analytics"],
                achievements: ["Reduced SQL query response time by 40%"]
            }
        ],
        
        // COMPREHENSIVE SKILLS
        skills: {
            programming_languages: {
                proficient: ["Python", "JavaScript", "TypeScript", "SQL"],
                familiar: ["C++", "Solidity", "HTML/CSS"]
            },
            ml_ai_frameworks: {
                primary: ["TensorFlow", "PyTorch", "Scikit-Learn", "Keras"],
                specialized: ["Transformers", "Hugging Face", "OpenAI API", "LangChain"],
                techniques: ["Computer Vision", "Deep Learning", "Neural Networks", "CNN", "LSTM"]
            },
            nlp_llms: {
                models: ["GPT-4", "BERT", "Llama", "RAG"],
                libraries: ["spaCy", "NLTK", "Transformers"],
                applications: ["Text Generation", "Sentiment Analysis", "Text Summarization", "Chatbots"]
            },
            web_development: {
                frontend: ["React", "Next.js 15", "Tailwind CSS", "Bootstrap"],
                backend: ["Node.js", "Express.js", "REST APIs"],
                full_stack: ["Next.js", "MERN Stack", "TypeScript"]
            },
            data_science: {
                libraries: ["Pandas", "NumPy", "Matplotlib", "Seaborn"],
                tools: ["Jupyter", "Apache Spark", "ETL Pipelines"],
                techniques: ["Data Analysis", "Data Visualization", "Big Data"]
            },
            databases: {
                sql: ["PostgreSQL", "MySQL", "SQL Server"],
                nosql: ["MongoDB", "Supabase"]
            },
            cloud_devops: {
                platforms: ["Azure", "Vercel"],
                tools: ["Git/GitHub", "Docker", "Azure Bicep"],
                practices: ["Version Control", "CI/CD", "Infrastructure as Code"]
            },
            blockchain: {
                platforms: ["Ethereum"],
                languages: ["Solidity"],
                tools: ["Web3.js", "Truffle", "Smart Contracts"],
                applications: ["DApps", "Decentralized Voting"]
            }
        },
        
        // DETAILED PROJECTS
        projects: [
            {
                name: "Nexium Resume Tailor",
                year: 2025,
                category: ["ml", "web", "ai"],
                featured: true,
                description: "AI-powered resume optimization platform using GPT-4 to match job descriptions with 30% accuracy improvement.",
                long_description: "Advanced full-stack application built with Next.js 15 leveraging OpenAI's GPT-4 API for intelligent resume optimization. Analyzes job descriptions using NLP and automatically tailors resumes to maximize ATS compatibility.",
                technologies: ["Next.js 15", "TypeScript", "GPT-4", "Supabase", "Tailwind CSS", "NLP"],
                achievements: [
                    "30% improvement in resume-job matching accuracy",
                    "Real-time ATS score calculation",
                    "100+ active users",
                    "Sub-2-second AI processing times"
                ],
                github: "https://github.com/ShahzebFaisal5649/Nexium_Shahzeb_Faisal_Grand_Project"
            },
            {
                name: "Blog Summarizer",
                year: 2025,
                category: ["ml", "nlp", "web"],
                description: "Full-stack AI web app for intelligent NLP summarization with Urdu translation support.",
                long_description: "Intelligent text summarization platform using transformer models and NLP to extract key information from articles. Supports multi-language including Urdu translation.",
                technologies: ["Next.js", "MongoDB", "NLP", "Transformers", "Python", "React"],
                achievements: [
                    "85% accuracy in key point extraction",
                    "Urdu translation with 90%+ accuracy",
                    "Processes articles in under 3 seconds"
                ],
                github: "https://github.com/ShahzebFaisal5649/Nexium_Shahzeb_Faisal_Assign2"
            },
            {
                name: "Smart City Management System",
                year: 2025,
                category: ["data", "big-data"],
                description: "Big data pipeline processing 13.5M+ vehicle records with 98.75% data quality score.",
                long_description: "Enterprise-grade data engineering solution handling massive datasets for urban analytics. Implements ETL pipelines, data quality checks, and generates actionable insights for city planning.",
                technologies: ["Python", "Pandas", "NumPy", "ETL Pipelines", "Data Engineering"],
                achievements: [
                    "98.75% data quality score",
                    "13.5M+ records processed",
                    "60% reduction in processing time"
                ],
                github: "https://github.com/ShahzebFaisal5649/smart-city-management-system"
            },
            {
                name: "Election DApp",
                year: 2025,
                category: ["blockchain", "web3"],
                description: "Decentralized voting application on Ethereum ensuring transparent, tamper-proof elections.",
                long_description: "Revolutionary blockchain-based voting system leveraging Ethereum smart contracts for transparent yet anonymous voting. Features include real-time counting and audit trails.",
                technologies: ["Solidity", "Web3.js", "React", "Ethereum", "Truffle", "Smart Contracts"],
                achievements: [
                    "100% vote integrity through blockchain",
                    "Successfully tested with 1000+ concurrent voters",
                    "Gas-optimized smart contracts"
                ],
                github: "https://github.com/ShahzebFaisal5649/election-dapp"
            },
            {
                name: "Image Captioning LSTM",
                year: 2024,
                category: ["ml", "deep-learning"],
                description: "Deep learning model generating image captions using CNN-LSTM architecture with 0.875 BLEU score.",
                long_description: "Sophisticated computer vision and NLP system combining CNNs for feature extraction with LSTMs for sequence generation.",
                technologies: ["TensorFlow", "Keras", "CNN", "LSTM", "Computer Vision", "Python"],
                achievements: [
                    "0.875 BLEU score (state-of-the-art)",
                    "95%+ coherent captions",
                    "Processing under 1 second per image"
                ],
                github: "https://github.com/ShahzebFaisal5649/Visual-Description-Generator-For-Images-Data"
            },
            {
                name: "Edu Connect Platform",
                year: 2024,
                category: ["web", "full-stack"],
                description: "Full-stack educational platform connecting students with tutors with real-time chat and scheduling.",
                long_description: "Complete learning management system with advanced features like real-time chat, intelligent tutor matching, and secure payment processing.",
                technologies: ["React", "Node.js", "Express", "MySQL", "Socket.io", "JWT"],
                achievements: [
                    "500+ registered users",
                    "100+ tutoring sessions monthly",
                    "99.5% uptime reliability"
                ],
                github: "https://github.com/ShahzebFaisal5649/DB_Lab_Project"
            },
            {
                name: "QuoteGen AI",
                year: 2025,
                category: ["web", "ai"],
                description: "AI-inspired quote generator with topic-based generation and modern UI design.",
                technologies: ["Next.js 15", "TypeScript", "Tailwind CSS", "shadcn/ui"],
                github: "https://github.com/ShahzebFaisal5649/Nexium_Shahzeb_Faisal_Assign1"
            },
            {
                name: "Environmental Impact Analysis",
                year: 2024,
                category: ["data", "ml"],
                description: "Satellite data analysis using NDVI to monitor deforestation and urban sprawl with 90%+ accuracy.",
                technologies: ["Python", "NDVI Analysis", "GIS", "Remote Sensing"],
                achievements: ["90%+ accuracy in deforestation detection"],
                github: "https://github.com/ShahzebFaisal5649/Environmental_Impact_Analysis_using_Satellite_Data"
            },
            {
                name: "FLEX GYM Website",
                year: 2024,
                category: ["web"],
                description: "Smart gym platform with workout tracker, nutrition panel, BMI calculator, and AI chatbot trainer.",
                technologies: ["HTML/CSS", "JavaScript", "Tailwind CSS", "AI Chatbot"],
                github: "https://github.com/ShahzebFaisal5649/GYM-Website"
            },
            {
                name: "Movie Showcase",
                year: 2024,
                category: ["web"],
                description: "Responsive movie browsing app with TMDb API integration and advanced filtering.",
                technologies: ["Bootstrap 5", "JavaScript", "TMDb API", "REST API"],
                github: "https://github.com/ShahzebFaisal5649/Movie-Showcase"
            },
            {
                name: "Azure Bicep Templates",
                year: 2024,
                category: ["cloud", "devops"],
                description: "Automated Azure infrastructure deployment using modular Bicep templates.",
                technologies: ["Azure", "Bicep", "CLI", "Infrastructure as Code"],
                github: "https://github.com/ShahzebFaisal5649/Bicep-Shahzeb-Ass"
            },
            {
                name: "E-Shop Platform",
                year: 2024,
                category: ["web", "full-stack"],
                description: "Complete e-commerce platform with cart, authentication, admin panel, and payment processing.",
                technologies: ["PHP", "SQL Server", "Bootstrap", "JavaScript"],
                github: "https://github.com/ShahzebFaisal5649/E-Shop"
            }
        ],
        
        // CERTIFICATIONS
        certifications: [
            {
                name: "AI-First Web Development",
                issuer: "Nexium",
                date: "January 2025",
                description: "Completed intensive internship program focusing on building AI-powered web applications",
                skills: ["Next.js", "GPT-4", "TypeScript", "AI Integration"]
            },
            {
                name: "Data Science Internship",
                issuer: "CodeAlpha",
                date: "June - July 2024",
                description: "Completed data science internship with focus on predictive modeling and analytics",
                skills: ["Python", "Machine Learning", "Data Analytics", "Pandas"]
            },
            {
                name: "Data & Software Internship",
                issuer: "Kashf Foundation",
                date: "July - August 2024",
                description: "Completed internship focusing on dashboard development and database optimization",
                skills: ["SQL", "Database Optimization", "Dashboard Development"]
            },
            {
                name: "Couch to Coder 2024",
                issuer: "Technology Academy (BRIGHT NETWORK)",
                date: "September 2024",
                description: "Completed intensive software development training program",
                skills: ["Software Development", "Coding Fundamentals", "Best Practices"]
            }
        ],
        
        // STATISTICS
        stats: {
            projects: 16,
            technologies: 30,
            internships: 4,
            certifications: 4,
            years_experience: "1+",
            github_contributions: "500+",
            lines_of_code: "50,000+"
        },
        
        // CAREER INFORMATION
        career: {
            seeking: ["Full-time positions", "Internship opportunities", "Research positions", "Freelance projects"],
            interests: ["AI/ML Research", "LLM Applications", "Full-Stack Development", "Data Science"],
            specializations: ["NLP", "Deep Learning", "Web Development", "Big Data", "Blockchain"],
            availability: "Immediately available (June 2026 onwards)",
            work_preferences: ["Remote", "Hybrid", "On-site in Lahore"],
            salary_expectation: "60,000-80,000 PKR for entry-level"
        }
    };

    // ═══════════ ENHANCED GEMINI AI INTEGRATION ═══════════
    const GeminiAI = {
        apiKey: 'AIzaSyDlU5GZPlxMCegciZS3Jyab0z0wym8WynY',
        apiUrl: 'https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent',
        conversationHistory: [],
        
        getSystemPrompt() {
            return `You are Shahzeb Faisal's portfolio AI assistant. Provide detailed, accurate information about his work.

PERSONAL INFO:
Name: Shahzeb Faisal | Email: shahzebfaisal5649@gmail.com | Phone: +92 302 0418510
Location: Lahore, Pakistan | Status: OPEN TO WORK | GitHub: github.com/ShahzebFaisal5649
LinkedIn: linkedin.com/in/shahzeb-faisal-8b9190321

EDUCATION:
BS Data Science from FAST NUCES Lahore (2021-2025, Graduated) - Top Pakistan tech university
Research Assistant under Dr. Esha Tur Razia Babar researching LLM-based conversational chatbots

EXPERIENCE:
1. Research Assistant at FAST NUCES (2024-Present) - LLM chatbots research
2. AI-First Web Dev Intern at Nexium (Jul-Aug 2025) - Built AI apps, achieved 30% accuracy improvement
3. Data Science Intern at CodeAlpha (Jun-Jul 2024) - 25% decision accuracy improvement
4. Data & Software Intern at Kashf Foundation (Jul-Aug 2024) - 40% query optimization
5. Software Dev Trainee at Technology Academy BRIGHT (Sep 2024) - Certified completion

SKILLS:
Programming: Python, JavaScript, TypeScript, SQL, C++, Solidity
ML/AI: TensorFlow, PyTorch, GPT-4, NLP, LLMs, Computer Vision, Deep Learning
Web: React, Next.js 15, Node.js, Tailwind CSS, MERN Stack
Data: Pandas, NumPy, Apache Spark, ETL Pipelines
Cloud: Azure, Docker, Git, Vercel
Blockchain: Ethereum, Web3.js, Smart Contracts

KEY PROJECTS (with GitHub links):
1. Nexium Resume Tailor ⭐ (2025) - AI resume optimizer using GPT-4, 30% accuracy↑, Next.js 15, TypeScript, Supabase
   GitHub: github.com/ShahzebFaisal5649/Nexium_Shahzeb_Faisal_Grand_Project
   
2. Blog Summarizer (2025) - NLP summarization app, 85% accuracy, Urdu translation, Next.js, MongoDB
   GitHub: github.com/ShahzebFaisal5649/Nexium_Shahzeb_Faisal_Assign2
   
3. Smart City Management (2025) - Big data pipeline, 13.5M+ records, 98.75% quality score, Python, Pandas
   GitHub: github.com/ShahzebFaisal5649/smart-city-management-system
   
4. Election DApp (2025) - Blockchain voting, 100% integrity, Solidity, Web3.js, React
   GitHub: github.com/ShahzebFaisal5649/election-dapp
   
5. Image Captioning LSTM (2024) - CNN-LSTM model, 0.875 BLEU score, TensorFlow
   GitHub: github.com/ShahzebFaisal5649/Visual-Description-Generator-For-Images-Data
   
6. Edu Connect Platform (2024) - Full-stack education platform, 500+ users, React, Node.js, MySQL
   GitHub: github.com/ShahzebFaisal5649/DB_Lab_Project
   
7. QuoteGen AI (2025) - AI quote generator, Next.js 15, TypeScript
   GitHub: github.com/ShahzebFaisal5649/Nexium_Shahzeb_Faisal_Assign1
   
8. Environmental Analysis (2024) - Satellite NDVI analysis, 90%+ accuracy, Python, GIS
   GitHub: github.com/ShahzebFaisal5649/Environmental_Impact_Analysis_using_Satellite_Data
   
9. FLEX GYM Website (2024) - Smart gym platform with workout tracker, nutrition panel, AI chatbot, Tailwind CSS
   GitHub: github.com/ShahzebFaisal5649/GYM-Website
   
10. Movie Showcase (2024) - Movie browsing app, TMDb API, Bootstrap 5
    GitHub: github.com/ShahzebFaisal5649/Movie-Showcase
    
11. Azure Bicep Templates (2024) - Infrastructure as Code, Azure deployment automation
    GitHub: github.com/ShahzebFaisal5649/Bicep-Shahzeb-Ass
    
12. E-Shop Platform (2024) - E-commerce with cart, auth, payments, PHP, SQL Server
    GitHub: github.com/ShahzebFaisal5649/E-Shop

CERTIFICATIONS:
1. AI-First Web Development - Nexium (Jan 2025)
2. Data Science Internship - CodeAlpha (Jun-Jul 2024)
3. Data & Software Internship - Kashf Foundation (Jul-Aug 2024)
4. Couch to Coder 2024 - Technology Academy BRIGHT (Sep 2024)

STATS: 16+ Projects | 30 Technologies | 4 Internships | 4 Certifications | 500+ GitHub Contributions

RESPONSE RULES:
✅ Always include GitHub links when discussing projects
✅ Cite specific achievements (30% accuracy, 40% optimization, 98.75% quality, 0.875 BLEU)
✅ Be conversational, detailed, and helpful
✅ For hiring: Emphasize availability, skills, contact info
✅ Keep responses 3-5 sentences for simple questions, more for complex ones
❌ Never make up information

EXAMPLE RESPONSES:
Q: "Tell me about Nexium Resume Tailor"
A: "The Nexium Resume Tailor is Shahzeb's featured AI project built with Next.js 15 and GPT-4 API. It intelligently optimizes resumes for job descriptions, achieving a 30% improvement in matching accuracy with real-time ATS scoring. Built using TypeScript, Supabase, and Tailwind CSS, it has 100+ active users. Check it out: github.com/ShahzebFaisal5649/Nexium_Shahzeb_Faisal_Grand_Project"

Q: "What about FLEX GYM?"
A: "FLEX GYM is Shahzeb's smart fitness website featuring a workout tracker, nutrition information panel, BMI calculator, and an AI-powered chatbot trainer. Built with HTML/CSS, JavaScript, and Tailwind CSS for a modern, responsive design. GitHub: github.com/ShahzebFaisal5649/GYM-Website"

Q: "Movie Showcase project?"
A: "The Movie Showcase is a responsive movie browsing application that integrates the TMDb API for real-time movie data. It features search functionality, genre-based filtering, detailed movie pages, and user ratings. Built with Bootstrap 5 and JavaScript. GitHub: github.com/ShahzebFaisal5649/Movie-Showcase"

Remember: Be helpful, cite achievements with numbers, always include GitHub links, and guide users to contact Shahzeb for opportunities!`;
        },
        
        async chat(userMessage) {
            this.conversationHistory.push({
                role: 'user',
                parts: [{ text: userMessage }]
            });
            
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
                                parts: [{ text: 'I understand. I am the AI assistant for Shahzeb Faisal\'s portfolio. I will help visitors learn about his skills, projects, and experience with detailed information. How can I help you today?' }]
                            },
                            ...this.conversationHistory
                        ],
                        generationConfig: {
                            temperature: 0.7,
                            topK: 40,
                            topP: 0.95,
                            maxOutputTokens: 800
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
            
            // ═══════════ BIO/ABOUT SHAHZEB - CHECK FIRST ═══════════
            if ((q.includes('about shahzeb') || q.includes('who is shahzeb') || (q.includes('shahzeb') && q.includes('faisal'))) && !q.includes('project')) {
                return `Shahzeb Faisal is a Data Scientist & ML Engineer from Lahore, Pakistan. Graduated with BS Data Science from FAST NUCES (2021-2025), one of Pakistan's top tech universities. Currently Research Assistant researching LLM chatbots under Dr. Esha Tur Razia Babar. Completed 4 internships (Nexium, CodeAlpha, Kashf, BRIGHT) with proven results: 30% accuracy improvements, 40% optimizations. Built 16+ projects across AI/ML, web development, data science, blockchain. Expertise: Python, JavaScript, TensorFlow, GPT-4, NLP, Next.js, React. OPEN TO WORK - Available immediately for AI/ML, Data Science, and Full-Stack roles! Contact: shahzebfaisal5649@gmail.com | LinkedIn: linkedin.com/in/shahzeb-faisal-8b9190321`;
            }
            
            // ═══════════ BLOCKCHAIN EXPERIENCE ═══════════
            if (q.includes('blockchain') && (q.includes('experience') || q.includes('work') || q.includes('project'))) {
                return `Shahzeb's Blockchain Experience: Built 2 production blockchain projects using Ethereum and Solidity. Election DApp: Decentralized voting system with 100% vote integrity, tested with 1000+ concurrent voters, smart contracts for transparency. Real Estate DApp: Property transaction platform with smart contract escrow and IPFS integration. Technologies: Ethereum, Solidity, Web3.js, Truffle, Smart Contracts, IPFS, React. Skills: Smart contract development, gas optimization, DApp architecture, blockchain security. GitHub: github.com/ShahzebFaisal5649`;
            }
            
            // ═══════════ ML PROJECTS LIST (NOT SKILLS) ═══════════
            if ((q.includes('ml project') || q.includes('machine learning project') || q.includes('ai project')) && !q.includes('skill')) {
                return `Shahzeb's 5 ML/AI Projects:

1️⃣ Nexium Resume Tailor ⭐ - AI resume optimizer using GPT-4 API, 30% accuracy improvement, 100+ users
   Tech: Next.js 15, GPT-4, TypeScript | GitHub: github.com/ShahzebFaisal5649/Nexium_Shahzeb_Faisal_Grand_Project

2️⃣ Image Captioning LSTM - CNN-LSTM deep learning model, 0.875 BLEU score (state-of-the-art), 95%+ coherent captions
   Tech: TensorFlow, Keras, CNN, LSTM | GitHub: github.com/ShahzebFaisal5649/Visual-Description-Generator-For-Images-Data

3️⃣ Blog Summarizer - NLP text summarization, 85% accuracy, Urdu translation support
   Tech: Next.js, MongoDB, NLP, Transformers | GitHub: github.com/ShahzebFaisal5649/Nexium_Shahzeb_Faisal_Assign2

4️⃣ Smart City Management - Big data pipeline, 13.5M+ records, 98.75% quality score
   Tech: Python, Pandas, ETL | GitHub: github.com/ShahzebFaisal5649/smart-city-management-system

5️⃣ Environmental Analysis - Satellite NDVI analysis, 90%+ deforestation detection accuracy
   Tech: Python, GIS, Remote Sensing | GitHub: github.com/ShahzebFaisal5649/Environmental_Impact_Analysis_using_Satellite_Data

All demonstrate strong ML/AI capabilities with measurable results!`;
            }
            
            // ═══════════ SPECIFIC PROJECT QUERIES ═══════════
            if (q.includes('nexium') || q.includes('resume tailor') || (q.includes('resume') && (q.includes('project') || q.includes('tailor')))) {
                return `The Nexium Resume Tailor is Shahzeb's featured AI project built with Next.js 15 and GPT-4 API. It intelligently optimizes resumes for job descriptions, achieving a 30% improvement in matching accuracy with real-time ATS scoring. Built using TypeScript, Supabase, and Tailwind CSS, it has 100+ active users and processes resumes in under 2 seconds. GitHub: https://github.com/ShahzebFaisal5649/Nexium_Shahzeb_Faisal_Grand_Project`;
            }
            if (q.includes('blog summarizer') || q.includes('summarizer')) {
                return `The Blog Summarizer is a full-stack NLP application that generates intelligent summaries of blog posts and articles. It achieved 85% accuracy in key point extraction and includes Urdu translation support (90%+ accuracy). Processes articles in under 3 seconds. Built with Next.js, MongoDB, NLP libraries, and transformer models. GitHub: https://github.com/ShahzebFaisal5649/Nexium_Shahzeb_Faisal_Assign2`;
            }
            if (q.includes('smart city')) {
                return `Smart City Management is a big data pipeline processing 13.5M+ vehicle registration records with a 98.75% data quality score. It implements ETL pipelines, automated validation, data cleaning (50K+ inconsistencies corrected), and generates urban analytics insights. Reduced processing time by 60%. Built with Python, Pandas, and NumPy. GitHub: https://github.com/ShahzebFaisal5649/smart-city-management-system`;
            }
            if (q.includes('election') || (q.includes('dapp') && !q.includes('real estate')) || q.includes('voting')) {
                return `The Election DApp is a decentralized voting application on Ethereum blockchain ensuring 100% vote integrity through smart contracts. It features transparent audit trails, anonymous voting, gas-optimized contracts, and has been tested with 1000+ concurrent voters. Built with Solidity, Web3.js, React, and Truffle. GitHub: https://github.com/ShahzebFaisal5649/election-dapp`;
            }
            if (q.includes('image caption') || q.includes('captioning')) {
                return `The Image Captioning system is a deep learning model using CNN-LSTM architecture that generates natural language descriptions of images. It achieved a 0.875 BLEU score (state-of-the-art) and generates coherent captions for 95%+ of images in under 1 second. Trained on 8000+ images. Built with TensorFlow, Keras, and Python. GitHub: https://github.com/ShahzebFaisal5649/Visual-Description-Generator-For-Images-Data`;
            }
            if (q.includes('edu connect') || q.includes('education platform')) {
                return `Edu Connect is a full-stack educational platform connecting students with tutors. Features include real-time chat (Socket.io), intelligent tutor matching, scheduling system, payment integration, and 4.7/5 star ratings. Successfully deployed with 500+ registered users, 100+ monthly tutoring sessions, and 99.5% uptime. Built with React, Node.js, Express, MySQL, Socket.io. GitHub: https://github.com/ShahzebFaisal5649/DB_Lab_Project`;
            }
            if (q.includes('quotegen') || (q.includes('quote') && q.includes('gen'))) {
                return `QuoteGen AI is an AI-inspired quote generator with topic-based generation and modern UI design. Features include dark mode support, social sharing capabilities, category-based filtering, and responsive design. Built with Next.js 15, TypeScript, Tailwind CSS, and shadcn/ui. GitHub: https://github.com/ShahzebFaisal5649/Nexium_Shahzeb_Faisal_Assign1`;
            }
            if (q.includes('environmental') || q.includes('satellite') || q.includes('ndvi')) {
                return `Environmental Impact Analysis uses satellite data and NDVI (Normalized Difference Vegetation Index) to monitor deforestation patterns and urban sprawl. Achieved 90%+ accuracy in deforestation detection and tracked changes across 1000+ sq km. Built with Python, GIS tools, and remote sensing techniques. GitHub: https://github.com/ShahzebFaisal5649/Environmental_Impact_Analysis_using_Satellite_Data`;
            }
            if (q.includes('flex') || (q.includes('gym') && !q.includes('about'))) {
                return `FLEX GYM is a smart fitness website featuring a workout tracker, nutrition information panel, BMI calculator, and AI-powered chatbot trainer. Provides personalized workout recommendations, progress analytics, and meal planning. Built with HTML/CSS, JavaScript, and Tailwind CSS for modern, responsive design. GitHub: https://github.com/ShahzebFaisal5649/GYM-Website`;
            }
            if (q.includes('movie showcase') || (q.includes('movie') && !q.includes('about'))) {
                return `Movie Showcase is a responsive movie browsing application integrated with TMDb API for real-time movie data. Features include search functionality, genre-based filtering, detailed movie information pages, cast details, and user ratings display. Built with Bootstrap 5, JavaScript, and REST API integration. GitHub: https://github.com/ShahzebFaisal5649/Movie-Showcase`;
            }
            if (q.includes('azure') || q.includes('bicep')) {
                return `Azure Bicep Templates is an Infrastructure as Code project for automated Azure cloud infrastructure deployment. Features modular template structure, automated deployment scripts, resource provisioning, and environment management (dev/staging/prod). Enables repeatable, scalable cloud infrastructure. Built with Azure Bicep and CLI tools. GitHub: https://github.com/ShahzebFaisal5649/Bicep-Shahzeb-Ass`;
            }
            if (q.includes('e-shop') || q.includes('e-commerce') || (q.includes('shop') && !q.includes('showcase'))) {
                return `E-Shop is a complete e-commerce platform featuring shopping cart, user authentication, admin panel, product management, inventory tracking, and payment processing. Includes order history, search functionality, and responsive design. Built with PHP, SQL Server, Bootstrap, and JavaScript. GitHub: https://github.com/ShahzebFaisal5649/E-Shop`;
            }
            
            // ═══════════ INTERNSHIP/EXPERIENCE QUERIES ═══════════
            if ((q.includes('nexium') || q.includes('ai-first') || q.includes('ai first')) && q.includes('intern')) {
                return `Shahzeb's AI-First Web Development Internship at Nexium (July-August 2025) was his most recent experience. He built the Resume Tailor using GPT-4 API achieving 30% accuracy improvement in resume-job matching. Developed 3 production-ready AI applications: Resume Tailor, Blog Summarizer, and QuoteGen AI. Technologies used: Next.js 15, GPT-4, TypeScript, Supabase, Tailwind CSS. All projects on GitHub: github.com/ShahzebFaisal5649`;
            }
            if (q.includes('codealpha') && q.includes('intern')) {
                return `At CodeAlpha (June-July 2024), Shahzeb worked as a Data Science Intern developing predictive models using machine learning algorithms. Achievements: Improved decision-making accuracy by 25%, built automated data pipelines reducing processing time by 30%. Technologies: Python, Pandas, NumPy, Scikit-Learn, Jupyter Notebooks. Earned certification upon completion.`;
            }
            if (q.includes('kashf') && q.includes('intern')) {
                return `At Kashf Foundation (July-August 2024), Shahzeb served as Data & Software Intern building a real-time compliance dashboard with analytics. Major achievement: Reduced SQL query response time by 40% through optimization. Technologies: SQL, SQL Server, Android development, dashboard development, analytics. Earned certification.`;
            }
            if (q.includes('bright') || q.includes('technology academy') || q.includes('couch to coder')) {
                return `Shahzeb completed the Couch to Coder 2024 program at Technology Academy (BRIGHT Network) in September 2024. It was an intensive software development training program focusing on coding fundamentals, best practices, and project-based learning through live workshops. Successfully completed and earned certification.`;
            }
            if (q.includes('each intern') || q.includes('all intern') || (q.includes('detail') && q.includes('intern'))) {
                return `Shahzeb's 4 Internships in detail:
1. Nexium (Jul-Aug 2025) - AI-First Web Dev: Built Resume Tailor with GPT-4 (30% accuracy↑), developed 3 AI apps
2. CodeAlpha (Jun-Jul 2024) - Data Science: Predictive models, 25% decision accuracy↑, 30% faster processing
3. Kashf Foundation (Jul-Aug 2024) - Data & Software: Compliance dashboard, 40% query optimization
4. Technology Academy BRIGHT (Sep 2024) - Software Dev Training: Couch to Coder program, certified completion
Total: 1+ year experience, 4 certifications earned. Currently Research Assistant at FAST NUCES researching LLM chatbots under Dr. Esha Tur Razia Babar.`;
            }
            
            // ═══════════ EDUCATION QUERIES ═══════════
            if (q.includes('bachelor') || q.includes('degree') || q.includes('university') || q.includes('study') || q.includes('education')) {
                return `Shahzeb completed his Bachelor of Science in Data Science from FAST National University of Computer & Emerging Sciences (NUCES), Lahore Campus (2021-2025, Graduated). FAST NUCES is one of Pakistan's top technology universities known for excellence in computer science and data science education. Focus areas: Machine Learning, Deep Learning, NLP, Big Data Analytics. Currently serving as Research Assistant under Dr. Esha Tur Razia Babar researching LLM-based conversational chatbots.`;
            }
            if (q.includes('research')) {
                return `Shahzeb is a Research Assistant at FAST NUCES Lahore (2024-Present) under Dr. Esha Tur Razia Babar, researching LLM-based conversational chatbots. Focus areas: persona-based architectures and bias mitigation in large language models. Technologies: LLMs, NLP, Python, Transformers, Research Methodologies. Contributing to cutting-edge research in conversational AI systems.`;
            }
            
            // ═══════════ SKILLS QUERIES ═══════════
            if (q.includes('skill') || q.includes('technology') || q.includes('tech') || q.includes('stack')) {
                return `Shahzeb's Technical Skills:
💻 Programming: Python, JavaScript, TypeScript, SQL, C++, Solidity, HTML/CSS
🧠 ML/AI: TensorFlow, PyTorch, Scikit-Learn, Keras, GPT-4, NLP, LLMs, Computer Vision, Deep Learning, Transformers, Hugging Face
🌐 Web: React, Next.js 15, Node.js, Express, Tailwind CSS, Bootstrap, REST APIs, MERN Stack
📊 Data Science: Pandas, NumPy, Matplotlib, Seaborn, Apache Spark, Jupyter, ETL Pipelines
☁️ Cloud/DevOps: Azure, Vercel, Docker, Git/GitHub, Azure Bicep, CI/CD
💾 Databases: PostgreSQL, MySQL, SQL Server, MongoDB, Supabase
⛓️ Blockchain: Ethereum, Solidity, Web3.js, Truffle, Smart Contracts, IPFS
Total: 30+ technologies mastered across all domains!`;
            }
            if (q.includes('ml ') || q.includes('machine learning') || q.includes('ai ') && !q.includes('intern') && !q.includes('project')) {
                return `Shahzeb's ML/AI Expertise: TensorFlow, PyTorch, Scikit-Learn, Keras for deep learning. NLP specialization: GPT-4, BERT, Llama, spaCy, NLTK, Transformers. Computer Vision: CNN, LSTM, image processing. Projects: Resume Tailor (GPT-4), Image Captioning (0.875 BLEU), Blog Summarizer (NLP), Smart City (Big Data). Research: LLM-based chatbots at FAST NUCES. Proven results: 30% accuracy improvements, 0.875 BLEU score, 98.75% data quality.`;
            }
            
            // ═══════════ CONTACT & HIRING QUERIES ═══════════
            if (q.includes('contact') || q.includes('reach') || q.includes('email') || q.includes('phone')) {
                return `Contact Shahzeb Faisal:
📧 Email: shahzebfaisal5649@gmail.com
📱 Phone: +92 302 0418510
💼 LinkedIn: https://linkedin.com/in/shahzeb-faisal-8b9190321
🐙 GitHub: https://github.com/ShahzebFaisal5649
📍 Location: Lahore, Pakistan
💼 Status: OPEN TO WORK - Available immediately (June 2026 onwards)
Seeking: Full-time positions, internships, research roles in AI/ML, Data Science, Full-Stack Development
Work Preferences: Remote, Hybrid, or On-site in Lahore`;
            }
            if (q.includes('linkedin')) {
                return `Shahzeb's LinkedIn: https://linkedin.com/in/shahzeb-faisal-8b9190321 - Connect with him to discuss opportunities in AI/ML, Data Science, or Full-Stack Development. He's currently OPEN TO WORK and available immediately!`;
            }
            if (q.includes('github')) {
                return `Shahzeb's GitHub: https://github.com/ShahzebFaisal5649 - Check out his 16+ projects including AI/ML applications (Resume Tailor, Image Captioning), web apps (FLEX GYM, Edu Connect), blockchain DApps (Election), and more. 500+ contributions and counting!`;
            }
            if (q.includes('hire') || q.includes('available') || q.includes('open to work')) {
                return `YES! Shahzeb is OPEN TO WORK and available immediately (June 2026 onwards). With 16+ projects, 4 internships, 4 certifications, and proven results (30% accuracy improvements, 40% optimization gains, 98.75% data quality), he brings strong AI/ML and full-stack development skills. Contact: shahzebfaisal5649@gmail.com or LinkedIn: linkedin.com/in/shahzeb-faisal-8b9190321. Seeking full-time, internships, research positions. Based in Lahore, open to remote/hybrid/on-site.`;
            }
            
            // ═══════════ RESUME DOWNLOAD ═══════════
            if ((q.includes('resume') || q.includes('cv')) && (q.includes('download') || q.includes('get') || q.includes('want') || q.includes('his'))) {
                return `To download Shahzeb's resume, type the command: resume
This will download his updated resume as PDF. You can also view his complete portfolio here, or contact him directly at shahzebfaisal5649@gmail.com for the latest version!`;
            }
            
            // ═══════════ EXPERIENCE QUERIES ═══════════
            if (q.includes('experience') || q.includes('background') || q.includes('intern')) {
                return `Shahzeb has 1+ year professional experience across 4 internships:
1️⃣ Nexium (Jul-Aug 2025) - AI-First Web Dev: Built Resume Tailor with GPT-4, achieved 30% accuracy improvement, developed 3 production AI apps
2️⃣ CodeAlpha (Jun-Jul 2024) - Data Science: Predictive models, 25% decision accuracy improvement, automated pipelines
3️⃣ Kashf Foundation (Jul-Aug 2024) - Data & Software: Compliance dashboard, 40% SQL query optimization
4️⃣ Technology Academy BRIGHT (Sep 2024) - Software Dev Training: Couch to Coder certification
Currently: Research Assistant at FAST NUCES researching LLM chatbots (2024-Present)
Total: 4 certifications earned, 16+ projects completed`;
            }
            
            // ═══════════ PROJECT LISTING QUERIES ═══════════
            if (q.includes('project') || q.includes('work') || q.includes('portfolio')) {
                return `Shahzeb's 16+ Projects:
🤖 AI/ML: Nexium Resume Tailor (GPT-4, 30%↑), Blog Summarizer (NLP, 85%), Image Captioning (0.875 BLEU), Smart City (13.5M records, 98.75% quality)
🌐 Web: Edu Connect (500+ users), FLEX GYM (fitness tracker), Movie Showcase (TMDb API), QuoteGen AI, E-Shop (e-commerce)
⛓️ Blockchain: Election DApp (100% integrity), Real Estate DApp
📊 Data: Environmental Analysis (90% accuracy), Azure Bicep (IaC)
All projects on GitHub: https://github.com/ShahzebFaisal5649
Ask about any specific project for details!`;
            }
            if (q.includes('how many') || q.includes('total project')) {
                return `Shahzeb has completed 16+ production projects across multiple domains: AI/ML (5 projects), Web Development (6 projects), Blockchain (2 projects), Data Science (3 projects). Key achievements: 30% accuracy improvements, 98.75% data quality scores, 0.875 BLEU scores, 500+ users. All available on GitHub: github.com/ShahzebFaisal5649. Which project would you like to know more about?`;
            }
            
            // ═══════════ CERTIFICATION QUERIES ═══════════
            if (q.includes('certificate') || q.includes('certification')) {
                return `Shahzeb has earned 4 Professional Certifications:
1. AI-First Web Development - Nexium (January 2025)
2. Data Science Internship - CodeAlpha (June-July 2024)
3. Data & Software Internship - Kashf Foundation (July-August 2024)
4. Couch to Coder 2024 - Technology Academy (BRIGHT Network) (September 2024)
All certificates are verified and showcase his expertise in AI/ML, Data Science, and Software Development.`;
            }
            
            // ═══════════ STATISTICS QUERIES ═══════════
            if (q.includes('stat') || q.includes('achievement') || q.includes('number')) {
                return `Shahzeb's Key Statistics:
📊 16+ Projects Completed
💻 30+ Technologies Mastered
🎓 4 Internships (1+ year experience)
🏆 4 Professional Certifications
📈 500+ GitHub Contributions
💡 50,000+ Lines of Code Written
🎯 Key Achievements: 30% accuracy↑, 98.75% quality, 40% optimization↓, 0.875 BLEU score, 13.5M+ records processed, 500+ platform users`;
            }
            
            // ═══════════ DEFAULT/HELLO RESPONSES ═══════════
            if (q.includes('hello') || q.includes('hi ') || q === 'hi' || q.includes('hey')) {
                return `Hey there! 👋 I'm Shahzeb's AI portfolio assistant. I can tell you about his 16+ projects (Resume Tailor, Smart City, FLEX GYM, Movie Showcase, Election DApp, etc.), 4 internships (Nexium, CodeAlpha, Kashf, BRIGHT), skills (ML/AI, Web, Data Science, Blockchain), research work at FAST NUCES, or how to contact him. What would you like to know?`;
            }
            
            // ═══════════ FINAL FALLBACK ═══════════
            return `I can help you learn about Shahzeb's portfolio! Try asking about:
📋 Specific Projects: Nexium Resume Tailor, Smart City, FLEX GYM, Movie Showcase, Election DApp, Image Captioning, Edu Connect, Blog Summarizer, QuoteGen AI, E-Shop, Azure Bicep, Environmental Analysis
💼 Experience: His 4 internships (Nexium, CodeAlpha, Kashf, BRIGHT) or current research work
🎓 Education: BS Data Science from FAST NUCES, research on LLM chatbots
🛠️ Skills: Python, JavaScript, ML/AI, NLP, Web Development, Data Science, Blockchain
📞 Contact: Email, LinkedIn, GitHub, phone
💾 Resume: How to download his CV
Type 'help' for available commands or ask naturally about anything!`;
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
                case 'voice':
                    osc.frequency.value = 440;
                    osc.type = 'sine';
                    gain.gain.setValueAtTime(0.12, this.ctx.currentTime);
                    gain.gain.exponentialRampToValueAtTime(0.01, this.ctx.currentTime + 0.2);
                    osc.start();
                    osc.stop(this.ctx.currentTime + 0.2);
                    break;
                case 'error':
                    osc.frequency.value = 200;
                    osc.type = 'sawtooth';
                    gain.gain.setValueAtTime(0.1, this.ctx.currentTime);
                    gain.gain.exponentialRampToValueAtTime(0.01, this.ctx.currentTime + 0.15);
                    osc.start();
                    osc.stop(this.ctx.currentTime + 0.15);
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
                
                if (p.x < 0) p.x = canvas.width;
                if (p.x > canvas.width) p.x = 0;
                if (p.y < 0) p.y = canvas.height;
                if (p.y > canvas.height) p.y = 0;
                
                ctx.beginPath();
                ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(99, 102, 241, ${p.opacity})`;
                ctx.shadowBlur = 10;
                ctx.shadowColor = 'rgba(99, 102, 241, 0.5)';
                ctx.fill();
                ctx.shadowBlur = 0;
            });
            
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
        
        const interactiveElements = document.querySelectorAll('a, button, .project-card, .skill-tags span, .filter-btn, input, .timeline-item, .suggestion');
        
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

    // ═══════════ SPOTLIGHT ═══════════
    function initSpotlight() {
        const spotlight = document.getElementById('spotlight');
        if (!spotlight || window.matchMedia('(hover: none)').matches) return;
        
        let targetX = 0, targetY = 0, currentX = 0, currentY = 0;
        
        document.addEventListener('mousemove', (e) => {
            targetX = e.clientX;
            targetY = e.clientY;
        });
        
        function animateSpotlight() {
            currentX += (targetX - currentX) * 0.1;
            currentY += (targetY - currentY) * 0.1;
            spotlight.style.left = currentX + 'px';
            spotlight.style.top = currentY + 'px';
            requestAnimationFrame(animateSpotlight);
        }
        
        animateSpotlight();
    }

    // ═══════════ BACK TO TOP BUTTON ═══════════
    function initBackToTop() {
        const btn = document.getElementById('back-to-top');
        if (!btn) return;
        
        let isVisible = false;
        
        window.addEventListener('scroll', () => {
            if (window.pageYOffset > 400) {
                if (!isVisible) {
                    btn.classList.add('show');
                    isVisible = true;
                }
            } else {
                if (isVisible) {
                    btn.classList.remove('show');
                    isVisible = false;
                }
            }
        });
        
        btn.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
            AudioSystem.play('success');
        });
    }

    // [Continue with Terminal, Mobile functions, Matrix, Confetti, Certificate Viewer, and all initialization functions...]
    // [Due to character limits, the rest of the code from your document continues here exactly as provided]

    // ═══════════ ENHANCED TERMINAL WITH GEMINI AI & MOBILE FIXES ═══════════
    const Terminal = {
        terminal: null,
        input: null,
        output: null,
        history: [],
        historyIndex: -1,
        isProcessing: false,
        isMaximized: false,
        recognition: null,
        isListening: false,
        
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
║  AI ASSISTANT                                             ║
║  ────────────                                             ║
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
║  🚀 16+ Projects | 30+ Technologies | 1+ Years Experience ║
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
║  • Nexium Resume Tailor - AI resume optimizer (30%↑)      ║
║  • Blog Summarizer - NLP text summarization               ║
║  • Image Captioning - CNN-LSTM (0.875 BLEU)               ║
║  • Smart City System - Big data (98.75% quality)          ║
║                                                           ║
║  🌐 WEB DEVELOPMENT                                       ║
║  ─────────────────────                                    ║
║  • Edu Connect - Full-stack education platform            ║
║  • E-Commerce Platform - Complete shopping site           ║
║  • FLEX GYM - Smart fitness website                       ║
║                                                           ║
║  ⛓️ BLOCKCHAIN                                            ║
║  ────────────                                             ║
║  • Election DApp - Decentralized voting (100% integrity)  ║
║                                                           ║
║  Type 'ai tell me more about [project]' for details!      ║
╚══════════════════════════════════════════════════════════╝`,

            experience: `
╔══════════════════════════════════════════════════════════╗
║                      EXPERIENCE                           ║
╠══════════════════════════════════════════════════════════╣
║                                                           ║
║  🔬 RESEARCH ASSISTANT (2024 - Present)                   ║
║     FAST NUCES • Dr. Esha Tur Razia Babar                 ║
║     LLM-based conversational chatbots research            ║
║                                                           ║
║  🤖 AI-FIRST WEB DEV INTERN (Jul-Aug 2025)                ║
║     Nexium • 30% accuracy improvement in AI matching      ║
║                                                           ║
║  📊 DATA SCIENCE INTERN (Jun-Jul 2024)                    ║
║     CodeAlpha • 25% decision accuracy improvement         ║
║                                                           ║
║  💾 DATA & SOFTWARE INTERN (Jul-Aug 2024)                 ║
║     Kashf Foundation • 40% query optimization             ║
║                                                           ║
║  🎓 SOFTWARE DEV TRAINEE (Sep 2024)                       ║
║     Technology Academy (BRIGHT) • Certified completion    ║
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
            document.getElementById('terminal-minimize')?.addEventListener('click', () => this.close());
            document.getElementById('terminal-maximize')?.addEventListener('click', () => this.toggleMaximize());
            
            document.addEventListener('keydown', (e) => {
                if (e.ctrlKey && e.key === '.') {
                    e.preventDefault();
                    this.toggle();
                }
                if (e.key === 'Escape' && !this.terminal.classList.contains('terminal-hidden')) {
                    this.close();
                }
            });
            
            this.initVoiceRecognition();
            this.initQuickSuggestions();
        },
        
        // ═══════════ VOICE RECOGNITION (DESKTOP & MOBILE FIXED) ═══════════
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
            
            // CRITICAL FIX: Proper mobile detection
            const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
            
            console.log('Voice Recognition Mode:', isMobile ? 'MOBILE' : 'DESKTOP');
            
            // ════════════════════════════════════════════════════════
            // MOBILE MODE: Touch Events Only
            // ════════════════════════════════════════════════════════
            if (isMobile) {
                let touchStartTime = 0;
                
                voiceBtn.addEventListener('touchstart', (e) => {
                    e.preventDefault();
                    touchStartTime = Date.now();
                }, { passive: false });
                
                voiceBtn.addEventListener('touchend', (e) => {
                    e.preventDefault();
                    const touchDuration = Date.now() - touchStartTime;
                    
                    if (touchDuration < 100) return; // Ignore accidental taps
                    
                    if (!this.isListening) {
                        try {
                            finalTranscript = '';
                            this.recognition.start();
                            this.isListening = true;
                            voiceBtn.classList.add('listening');
                            this.addLine('<span class="term-info">🎤 Listening... Speak now!</span>');
                            this.scrollToBottom();
                            AudioSystem.play('voice');
                            
                            if (navigator.vibrate) {
                                navigator.vibrate(50);
                            }
                        } catch (error) {
                            console.error('Voice start error:', error);
                            this.addLine('<span class="term-error">⚠️ Could not start voice recognition.</span>');
                            voiceBtn.classList.remove('listening');
                        }
                    } else {
                        this.recognition.stop();
                        this.isListening = false;
                        voiceBtn.classList.remove('listening');
                    }
                }, { passive: false });
                
                console.log('✅ Mobile touch events registered');
            }
            
            // ════════════════════════════════════════════════════════
            // DESKTOP MODE: Click Events (CRITICAL FIX)
            // ════════════════════════════════════════════════════════
            else {
                voiceBtn.addEventListener('click', (e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    
                    console.log('🖱️ Desktop click detected, isListening:', this.isListening);
                    
                    if (!this.isListening) {
                        try {
                            finalTranscript = '';
                            this.recognition.start();
                            this.isListening = true;
                            voiceBtn.classList.add('listening');
                            this.addLine('<span class="term-info">🎤 Listening... Speak now!</span>');
                            this.scrollToBottom();
                            AudioSystem.play('voice');
                            
                            console.log('✅ Voice recognition STARTED (Desktop)');
                        } catch (error) {
                            console.error('Voice start error:', error);
                            this.addLine('<span class="term-error">⚠️ Voice error: ' + error.message + '</span>');
                            voiceBtn.classList.remove('listening');
                            this.isListening = false;
                        }
                    } else {
                        this.recognition.stop();
                        this.isListening = false;
                        voiceBtn.classList.remove('listening');
                        console.log('🛑 Voice recognition STOPPED (Desktop)');
                    }
                });
                
                console.log('✅ Desktop click events registered');
            }
            
            // ════════════════════════════════════════════════════════
            // RECOGNITION EVENT HANDLERS (Same for both)
            // ════════════════════════════════════════════════════════
            
            this.recognition.onstart = () => {
                this.isListening = true;
                voiceBtn.classList.add('listening');
                console.log('🎤 Recognition started');
            };
            
            this.recognition.onresult = (event) => {
                let interimTranscript = '';
                for (let i = event.resultIndex; i < event.results.length; i++) {
                    const transcript = event.results[i][0].transcript;
                    if (event.results[i].isFinal) {
                        finalTranscript += transcript;
                    } else {
                        interimTranscript += transcript;
                    }
                }
                
                if (interimTranscript) {
                    this.input.value = interimTranscript;
                    this.input.placeholder = 'Listening...';
                }
                
                console.log('📝 Transcript:', interimTranscript || finalTranscript);
            };
            
            this.recognition.onend = () => {
                this.isListening = false;
                voiceBtn.classList.remove('listening');
                this.input.placeholder = "Type 'help' or ask AI anything...";
                
                console.log('🛑 Recognition ended, final:', finalTranscript.trim());
                
                if (finalTranscript.trim()) {
                    this.input.value = finalTranscript.trim();
                    this.addLine(`<span class="term-success">🎤 Heard: "${finalTranscript.trim()}"</span>`);
                    AudioSystem.play('success');
                    
                    setTimeout(() => {
                        this.execute(finalTranscript.trim());
                        this.input.value = '';
                    }, 500);
                }
            };
            
            this.recognition.onerror = (event) => {
                this.isListening = false;
                voiceBtn.classList.remove('listening');
                
                console.error('❌ Voice error:', event.error);
                
                let errorMsg = '⚠️ Voice error: ';
                switch(event.error) {
                    case 'not-allowed':
                        errorMsg += 'Microphone access denied. Please enable it in settings.';
                        break;
                    case 'no-speech':
                        errorMsg += 'No speech detected. Try again.';
                        break;
                    case 'network':
                        errorMsg += 'Network error. Check your connection.';
                        break;
                    case 'audio-capture':
                        errorMsg += 'No microphone found. Connect a microphone.';
                        break;
                    default:
                        errorMsg += event.error || 'Unknown error.';
                }
                
                this.addLine(`<span class="term-error">${errorMsg}</span>`);
                AudioSystem.play('error');
                this.scrollToBottom();
                
                if (isMobile && window.showMobileNotification) {
                    showMobileNotification(errorMsg.replace('⚠️ Voice error: ', ''), 'error');
                }
            };
            
            console.log('✅ Voice recognition initialized for', isMobile ? 'MOBILE' : 'DESKTOP');
        },
        
        initQuickSuggestions() {
            document.querySelectorAll('.suggestion').forEach(sug => {
                sug.addEventListener('click', () => {
                    const cmd = sug.getAttribute('data-cmd');
                    if (cmd) {
                        this.input.value = cmd;
                        this.input.focus();
                        AudioSystem.play('click');
                        setTimeout(() => {
                            this.execute(cmd);
                            this.input.value = '';
                        }, 300);
                    }
                });
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
            const hint = document.querySelector('.terminal-hint-persistent');
            if (hint) hint.classList.add('terminal-open');
        },
        
        close() {
            this.terminal.classList.add('terminal-hidden');
            AudioSystem.play('click');
            const hint = document.querySelector('.terminal-hint-persistent');
            if (hint) hint.classList.remove('terminal-open');
        },
        
        // ═══════════ TERMINAL MAXIMIZE (MOBILE FIXED) ═══════════
        toggleMaximize() {
            this.isMaximized = !this.isMaximized;
            const termWindow = document.querySelector('.terminal-window');
            const icon = document.querySelector('#terminal-maximize i');
            const isMobile = window.innerWidth <= 768;
            
            if (this.isMaximized) {
                if (isMobile) {
                    termWindow.style.maxWidth = '100vw';
                    termWindow.style.width = '100vw';
                    termWindow.style.height = '95vh';
                    termWindow.style.maxHeight = '95vh';
                } else {
                    termWindow.style.maxWidth = '95vw';
                    termWindow.style.width = '95vw';
                }
                termWindow.classList.add('maximized');
                icon?.classList.replace('fa-expand', 'fa-compress');
            } else {
                if (isMobile) {
                    termWindow.style.maxWidth = '100vw';
                    termWindow.style.width = '100vw';
                    termWindow.style.height = '85vh';
                    termWindow.style.maxHeight = '85vh';
                } else {
                    termWindow.style.maxWidth = '650px';
                    termWindow.style.width = '';
                }
                termWindow.classList.remove('maximized');
                icon?.classList.replace('fa-compress', 'fa-expand');
            }
            AudioSystem.play('click');
            
            if (navigator.vibrate && isMobile) {
                navigator.vibrate(30);
            }
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
            const firstWord = parts[0].toLowerCase();
            const restOfCommand = parts.slice(1).join(' ').trim();
            
            // AI query triggers - treat these as AI queries, not commands
            const aiTriggers = ['tell', 'give', 'show', 'what', 'how', 'who', 'where', 'when', 'why', 
                               'can', 'could', 'would', 'should', 'is', 'are', 'does', 'do', 'explain'];
            
            // Special case: "about" with topic should be AI query, not command
            if (firstWord === 'about' && restOfCommand.length > 0) {
                await this.handleAI(cmd);
                return;
            }
            
            // If starts with AI trigger or has question mark, send to AI
            if (aiTriggers.includes(firstWord) || cmd.includes('?')) {
                await this.handleAI(cmd);
                return;
            }
            
            // Special handling for "ai" command
            if (firstWord === 'ai' && restOfCommand) {
                await this.handleAI(restOfCommand);
                return;
            }
            
            // Check if it's a built-in command
            if (this.commands[firstWord]) {
                this.addLine(`<pre class="term-response">${this.commands[firstWord]}</pre>`);
            } else {
                // Handle action commands
                switch(firstWord) {
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
                        // If not a command, treat as AI query
                        await this.handleAI(cmd);
                }
            }
            
            this.scrollToBottom();
        },
        
        async handleAI(query) {
            this.isProcessing = true;
            this.input.disabled = true;
            
            const typingId = 'typing-' + Date.now();
            this.addLine(`<div id="${typingId}" class="term-typing">
                <span class="typing-dots">
                    <span>●</span><span>●</span><span>●</span>
                </span>
                <span class="typing-text">AI thinking...</span>
            </div>`);
            
            this.scrollToBottom();
            
            try {
                const response = await GeminiAI.chat(query);
                
                document.getElementById(typingId)?.remove();
                
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
            this.output.innerHTML = `<div class="welcome-box">
                <div class="welcome-title">👋 Welcome to Shahzeb's AI Portfolio Terminal</div>
                <div class="quick-suggestions">
                    <span class="suggestion" data-cmd="ai what ML projects has Shahzeb done?">ML Projects</span>
                    <span class="suggestion" data-cmd="skills">Skills</span>
                    <span class="suggestion" data-cmd="ai tell me about his experience">Experience</span>
                    <span class="suggestion" data-cmd="contact">Contact</span>
                </div>
            </div>`;
            GeminiAI.clearHistory();
            this.initQuickSuggestions();
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

    // [Continue with all remaining functions: Mobile notifications, Matrix, Confetti, Certificate Viewer, and initialization]
    // ═══════════ MOBILE NOTIFICATION HELPER ═══════════
    function showMobileNotification(message, type = 'info') {
        const notification = document.createElement('div');
        notification.style.cssText = `
            position: fixed;
            top: 80px;
            left: 50%;
            transform: translateX(-50%);
            padding: 12px 20px;
            background: ${type === 'success' ? 'rgba(16, 185, 129, 0.95)' : 
                         type === 'error' ? 'rgba(239, 68, 68, 0.95)' : 
                         'rgba(99, 102, 241, 0.95)'};
            color: white;
            border-radius: 8px;
            box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
            z-index: 10001;
            font-size: 14px;
            font-weight: 500;
            max-width: 90vw;
            text-align: center;
            animation: slideInDown 0.3s ease;
        `;
        notification.textContent = message;
        document.body.appendChild(notification);
        
        setTimeout(() => {
            notification.style.animation = 'slideOutUp 0.3s ease';
            setTimeout(() => notification.remove(), 300);
        }, 2500);
    }

    // ═══════════ MOBILE BUTTON POSITIONING FIX ═══════════
    function fixMobileButtonPositions() {
        const isMobile = window.innerWidth <= 768;
        if (!isMobile) return;
        
        const backToTop = document.getElementById('back-to-top');
        if (backToTop) {
            backToTop.style.cssText = `
                position: fixed;
                bottom: 140px;
                right: 20px;
                width: 48px;
                height: 48px;
                z-index: 9997;
            `;
        }
        
        const terminalBtn = document.getElementById('terminal-btn');
        if (terminalBtn) {
            terminalBtn.style.cssText = `
                position: fixed;
                bottom: 80px;
                right: 20px;
                width: 50px;
                height: 50px;
                z-index: 9997;
            `;
        }
        
        const quickActions = document.querySelector('.quick-actions');
        if (quickActions) {
            quickActions.style.cssText = `
                position: fixed;
                bottom: 20px;
                right: 20px;
                z-index: 9998;
            `;
        }
    }

    // ═══════════ MATRIX RAIN EFFECT ═══════════
    let matrixActive = false;
    let matrixCanvas = null;
    let matrixAnimationId = null;
    
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
            opacity: 0.12;
        `;
        document.body.appendChild(matrixCanvas);
        
        const ctx = matrixCanvas.getContext('2d');
        matrixCanvas.width = window.innerWidth;
        matrixCanvas.height = window.innerHeight;
        
        const chars = 'アイウエオカキクケコサシスセソタチツテト0123456789ABCDEF<>{}[]';
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
            
            matrixAnimationId = requestAnimationFrame(draw);
        }
        
        draw();
        
        setTimeout(() => {
            if (matrixActive) stopMatrix();
        }, 10000);
    }
    
    function stopMatrix() {
        matrixActive = false;
        if (matrixAnimationId) {
            cancelAnimationFrame(matrixAnimationId);
            matrixAnimationId = null;
        }
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
        
        for (let i = 0; i < 150; i++) {
            particles.push({
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height - canvas.height,
                vx: (Math.random() - 0.5) * 12,
                vy: Math.random() * 5 + 3,
                color: colors[Math.floor(Math.random() * colors.length)],
                size: Math.random() * 10 + 4,
                rotation: Math.random() * 360,
                rotationSpeed: (Math.random() - 0.5) * 12
            });
        }
        
        let frame = 0;
        
        function animate() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            
            particles.forEach(p => {
                p.x += p.vx;
                p.y += p.vy;
                p.vy += 0.12;
                p.vx *= 0.99;
                p.rotation += p.rotationSpeed;
                
                ctx.save();
                ctx.translate(p.x, p.y);
                ctx.rotate(p.rotation * Math.PI / 180);
                ctx.fillStyle = p.color;
                ctx.fillRect(-p.size / 2, -p.size / 4, p.size, p.size / 2);
                ctx.restore();
            });
            
            if (++frame < 200) {
                requestAnimationFrame(animate);
            } else {
                ctx.clearRect(0, 0, canvas.width, canvas.height);
            }
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
        
        hint.addEventListener('click', () => {
            Terminal.open();
            AudioSystem.play('click');
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
        const floatingElements = document.querySelectorAll('.floating-elements .float-item, .floating-elements .float-icon');
        
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
                    }, index * 80);
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
                    tag.style.animationDelay = `${i * 0.08}s`;
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
        
        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                element.textContent = target;
                clearInterval(timer);
            } else {
                element.textContent = Math.floor(current);
            }
        }, 33);
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
            
            const rotateX = (y - centerY) / 10;
            const rotateY = (centerX - x) / 10;
            
            inner.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.03)`;
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

    // ═══════════ KONAMI CODE ═══════════
    function initKonamiCode() {
        const pattern = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];
        let current = 0;
        
        document.addEventListener('keydown', (e) => {
            if (e.key === pattern[current]) {
                current++;
                if (current === pattern.length) {
                    triggerConfetti();
                    setTimeout(triggerConfetti, 300);
                    setTimeout(triggerConfetti, 600);
                    startMatrix();
                    setTimeout(stopMatrix, 8000);
                    current = 0;
                    if (Terminal.output) {
                        Terminal.open();
                        Terminal.addLine('<span class="term-success" style="font-size:1.2rem;">🎮 KONAMI CODE!</span>');
                    }
                }
            } else {
                current = 0;
            }
        });
    }

    // ═══════════ KEYBOARD SHORTCUTS ═══════════
    function initKeyboardShortcuts() {
        document.addEventListener('keydown', (e) => {
            if (e.ctrlKey && e.key === 'k') {
                e.preventDefault();
                document.getElementById('quick-main')?.click();
            }
        });
    }

    // ═══════════ NETWORK STATUS ═══════════
    function initNetworkStatus() {
        window.addEventListener('online', () => {
            showMobileNotification('🟢 Back Online', 'success');
        });
        
        window.addEventListener('offline', () => {
            showMobileNotification('🔴 No Internet', 'error');
        });
    }

    // ═══════════ PERFORMANCE MONITOR ═══════════
    function initPerformanceMonitor() {
        if ('performance' in window) {
            window.addEventListener('load', () => {
                setTimeout(() => {
                    const perfData = performance.getEntriesByType('navigation')[0];
                    if (perfData) {
                        console.log('📊 Performance Metrics:');
                        console.log(`⚡ Load: ${(perfData.loadEventEnd - perfData.fetchStart).toFixed(0)}ms`);
                        console.log(`🎨 DOM: ${(perfData.domContentLoadedEventEnd - perfData.fetchStart).toFixed(0)}ms`);
                    }
                }, 0);
            });
        }
    }

    // Add mobile notification animations
    const mobileAnimStyle = document.createElement('style');
    mobileAnimStyle.textContent = `
        @keyframes slideInDown {
            from { transform: translate(-50%, -100px); opacity: 0; }
            to { transform: translate(-50%, 0); opacity: 1; }
        }
        @keyframes slideOutUp {
            from { transform: translate(-50%, 0); opacity: 1; }
            to { transform: translate(-50%, -100px); opacity: 0; }
        }
    `;
    document.head.appendChild(mobileAnimStyle);

    // ═══════════ CERTIFICATE VIEWER FUNCTIONALITY ═══════════
    function initCertificateViewer() {
        const modal = document.getElementById('certificate-modal');
        if (!modal) {
            console.warn('⚠️ Certificate modal not found in HTML');
            return;
        }
        
        const img = document.getElementById('certificate-image');
        const title = document.getElementById('certificate-title');
        const issuer = document.getElementById('certificate-issuer');
        const date = document.getElementById('certificate-date');
        const close = document.querySelector('.certificate-close');
        const downloadBtn = document.getElementById('download-certificate');
        
        // Certificate data mapping
        const certificates = {
            'nexium': {
                file: 'nexium_cert.jpeg',
                title: 'AI-First Web Development Internship',
                issuer: 'Nexium',
                date: 'January 2025'
            },
            'codealpha': {
                file: 'codealpha_cert.jpeg',
                title: 'Data Science Internship',
                issuer: 'CodeAlpha',
                date: 'June - July 2024'
            },
            'kashf': {
                file: 'kashf_cert.jpeg',
                title: 'Data & Software Internship',
                issuer: 'Kashf Foundation',
                date: 'July - August 2024'
            },
            'bright': {
                file: 'bright_cert.jpeg',
                title: 'Couch to Coder 2024',
                issuer: 'Technology Academy (BRIGHT Network)',
                date: 'September 2024'
            }
        };
        
        // Add buttons to timeline items
        const timelineItems = document.querySelectorAll('.timeline-content');
        timelineItems.forEach((item) => {
            const company = item.querySelector('.company')?.textContent.toLowerCase() || '';
            let certKey = null;
            
            if (company.includes('nexium')) certKey = 'nexium';
            else if (company.includes('codealpha')) certKey = 'codealpha';
            else if (company.includes('kashf')) certKey = 'kashf';
            else if (company.includes('technology academy') || company.includes('bright')) certKey = 'bright';
            
            if (certKey && certificates[certKey]) {
                const btnContainer = document.createElement('div');
                btnContainer.style.cssText = 'margin-top: 15px;';
                
                const certBtn = document.createElement('button');
                certBtn.className = 'view-certificate-btn';
                certBtn.innerHTML = '<i class="fas fa-certificate"></i> View Certificate';
                certBtn.setAttribute('aria-label', `View ${certificates[certKey].title} certificate`);
                
                certBtn.onclick = (e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    showCertificate(certificates[certKey]);
                    AudioSystem.play('success');
                };
                
                btnContainer.appendChild(certBtn);
                item.appendChild(btnContainer);
            }
        });
        
        function showCertificate(cert) {
            // Update modal content
            img.src = `Certificates/${cert.file}`;
            img.alt = `${cert.title} Certificate`;
            title.textContent = cert.title;
            issuer.textContent = cert.issuer;
            date.textContent = cert.date;
            
            // Update download button
            downloadBtn.onclick = () => {
                const link = document.createElement('a');
                link.href = img.src;
                link.download = `${cert.issuer.replace(/\s+/g, '_')}_Certificate.jpg`;
                link.click();
                AudioSystem.play('success');
            };
            
            // Show modal
            modal.style.display = 'block';
            document.body.style.overflow = 'hidden';
        }
        
        function closeModal() {
            modal.style.display = 'none';
            document.body.style.overflow = '';
        }
        
        // Close button handler
        if (close) {
            close.onclick = closeModal;
        }
        
        // Click outside modal to close
        modal.onclick = (e) => {
            if (e.target === modal) {
                closeModal();
            }
        };
        
        // ESC key to close
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && modal.style.display === 'block') {
                closeModal();
            }
        });
        
        // Prevent modal content clicks from closing modal
        const modalContent = modal.querySelector('.certificate-modal-content');
        if (modalContent) {
            modalContent.onclick = (e) => {
                e.stopPropagation();
            };
        }
        
        console.log('✅ Certificate viewer initialized');
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
        initPerformanceMonitor();
        fixMobileButtonPositions();
        initCertificateViewer();
        
        window.addEventListener('resize', fixMobileButtonPositions);
        
        window.triggerConfetti = triggerConfetti;
        window.toggleMatrix = toggleMatrix;
        window.Terminal = Terminal;
        
        console.log('%c✨ Portfolio v7.0 - Enhanced AI System!', 'color: #6366f1; font-size: 16px; font-weight: bold;');
        console.log('%cPress Ctrl+. for AI Terminal with comprehensive knowledge', 'color: #10b981; font-size: 12px;');
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }

    window.addEventListener('load', hidePreloader);
    setTimeout(hidePreloader, 3000);

    // ═══════════ EXPOSE TO WINDOW (Optional) ═══════════
    window.CertificateViewer = {
        init: initCertificateViewer
    };

})();