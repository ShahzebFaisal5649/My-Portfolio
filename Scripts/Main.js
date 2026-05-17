/* ═══════════════════════════════════════════════════════════
   Main.js - Portfolio with Enhanced AI & Certificate Viewer
   ═══════════════════════════════════════════════════════════ */

(function () {
    'use strict';

    // ═══════════ COMPREHENSIVE PORTFOLIO DATA (For AI Context) ═══════════
    const PORTFOLIO_DATA = {
        name: "Shahzeb Faisal",
        title: "Data Scientist & Full Stack AI Developer",
        location: "Lahore, Pakistan (Remote/Hybrid OK)",
        email: "shahzebfaisal5649@gmail.com",
        phone: "+92 302 0418510",
        whatsapp: "https://wa.me/923020418510",
        github: "https://github.com/ShahzebFaisal5649",
        linkedin: "https://www.linkedin.com/in/shahzeb-faisal-8b9190321/",
        status: "Open to Work — Available from June 2026",
        education: {
            degree: "BS Data Science",
            university: "FAST NUCES Lahore",
            period: "2021–2025",
            status: "Graduated",
            focus: ["Machine Learning", "Deep Learning", "NLP", "Big Data Analytics"]
        },
        current_role: {
            title: "Research Assistant",
            org: "FAST NUCES Lahore",
            supervisor: "Dr. Esha Tur Razia Babar",
            topic: "LLM-based Conversational Chatbots",
            period: "2024–Present",
            description: "Exploring persona-based architectures and bias mitigation in large language models"
        },
        experience: [
            {
                role: "Research Assistant", org: "FAST NUCES", period: "2024–Present", current: true,
                tech: ["LLMs", "NLP", "Python", "Transformers", "RAG"],
                responsibilities: ["Researching LLM-based conversational chatbots", "Exploring persona-based architectures", "Bias mitigation in language models"]
            },
            {
                role: "AI-First Web Dev Intern", org: "Nexium", period: "Jul–Aug 2025",
                tech: ["Next.js 15", "GPT-4", "TypeScript", "Supabase", "Tailwind"],
                achievement: "30% resume-job matching accuracy improvement",
                responsibilities: ["Built AI-powered Resume Tailor with GPT-4", "Developed Blog Summarizer with NLP", "Built QuoteGen AI app"]
            },
            {
                role: "Software Dev Trainee", org: "Bright Network (Technology Academy)", period: "Sep 2024",
                program: "Couch to Coder 2024",
                tech: ["Python", "JavaScript", "Git"],
                responsibilities: ["Completed intensive software development training", "Project-based learning", "Earned certified completion"]
            },
            {
                role: "Data Science Intern", org: "CodeAlpha", period: "Jun–Jul 2024",
                tech: ["Python", "Pandas", "Scikit-Learn", "ML"],
                achievement: "25% decision-making improvement, 30% pipeline speed increase",
                responsibilities: ["Developed predictive models", "Built automated data pipelines", "Performed data analysis and visualization"]
            },
            {
                role: "Data & Software Intern", org: "Kashf Foundation", period: "Jul–Aug 2024",
                tech: ["SQL", "SQL Server", "Android", "Dashboard", "Analytics"],
                achievement: "40% SQL query response time reduction",
                responsibilities: ["Built real-time compliance dashboard with KPI monitoring", "Optimized SQL queries", "Enhanced Android app UI/UX with Material Design"]
            }
        ],
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
            projects: 12,
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
        apiKey: window.GEMINI_API_KEY || '',
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
2. AI-First Web Dev Intern at Nexium (January 2025) - Built AI apps, achieved 30% accuracy improvement
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

STATS: 12+ Projects | 30 Technologies | 4 Internships | 4 Certifications | 500+ GitHub Contributions

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
                return `Shahzeb Faisal is a Full Stack AI Developer from Lahore, Pakistan. Graduated with BS Data Science from FAST NUCES (2021-2025), one of Pakistan's top tech universities. Currently Research Assistant researching LLM chatbots under Dr. Esha Tur Razia Babar. Completed 4 internships (Nexium, CodeAlpha, Kashf, BRIGHT) with proven results: 30% accuracy improvements, 40% optimizations. Built 12+ projects across AI/ML, web development, data science, blockchain. Expertise: Python, JavaScript, TensorFlow, GPT-4, NLP, Next.js, React. OPEN TO WORK - Available immediately for AI/ML, Data Science, and Full-Stack roles! Contact: shahzebfaisal5649@gmail.com | LinkedIn: linkedin.com/in/shahzeb-faisal-8b9190321`;
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
                return `Shahzeb's AI-First Web Development Internship at Nexium (January 2025) was his most recent experience. He built the Resume Tailor using GPT-4 API achieving 30% accuracy improvement in resume-job matching. Developed 3 production-ready AI applications: Resume Tailor, Blog Summarizer, and QuoteGen AI. Technologies used: Next.js 15, GPT-4, TypeScript, Supabase, Tailwind CSS. All projects on GitHub: github.com/ShahzebFaisal5649`;
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
1. Nexium (January 2025) - AI-First Web Dev: Built Resume Tailor with GPT-4 (30% accuracy↑), developed 3 AI apps
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
🤗 HuggingFace: https://huggingface.co/ShahzebFaisal5649
🏆 Kaggle: https://www.kaggle.com/ShahzebFaisal5649
📍 Location: Lahore, Pakistan
💼 Status: OPEN TO WORK - Available immediately (June 2026 onwards)
Seeking: Full-time positions, internships, research roles in AI/ML, Data Science, Full-Stack Development
Work Preferences: Remote, Hybrid, or On-site in Lahore`;
            }
            if (q.includes('linkedin')) {
                return `Shahzeb's LinkedIn: https://linkedin.com/in/shahzeb-faisal-8b9190321 - Connect with him to discuss opportunities in AI/ML, Data Science, or Full-Stack Development. He's currently OPEN TO WORK and available immediately!`;
            }
            if (q.includes('github')) {
                return `Shahzeb's GitHub: https://github.com/ShahzebFaisal5649 - Check out his 12+ projects including AI/ML applications (Resume Tailor, Image Captioning), web apps (FLEX GYM, Edu Connect), blockchain DApps (Election), and more. 500+ contributions and counting!`;
            }
            if (q.includes('cgpa') || q.includes('grade') || q.includes('gpa') || q.includes('academic') || q.includes('performance') || q.includes('result')) {
                return `Shahzeb maintained strong academic performance throughout his BS Data Science at FAST NUCES Lahore (2021–2025). His coursework spanned Machine Learning, Deep Learning, NLP, Big Data Analytics, Database Systems, and Software Engineering — all of which directly power his 12+ production projects.`;
            }
            if (q.includes('research') || q.includes('publication') || q.includes('paper') || q.includes('thesis') || q.includes('babar')) {
                return `Shahzeb is working as a Research Assistant under Dr. Esha Tur Razia Babar at FAST NUCES Lahore. His research is focused on LLM chatbots, specifically exploring persona-based architectures and developing techniques for bias mitigation in AI conversational systems.`;
            }
            if (q.includes('huggingface') || q.includes('kaggle') || q.includes('social') || q.includes('profile')) {
                return `Shahzeb's professional social and coding profiles:
🤗 HuggingFace: https://huggingface.co/ShahzebFaisal5649
🏆 Kaggle: https://www.kaggle.com/ShahzebFaisal5649
🐙 GitHub: https://github.com/ShahzebFaisal5649
💼 LinkedIn: https://linkedin.com/in/shahzeb-faisal-8b9190321`;
            }
            if (q.includes('availability') || q.includes('hire') || q.includes('available') || q.includes('open to work') || q.includes('freelance') || q.includes('job')) {
                return `YES! Shahzeb is OPEN TO WORK and available immediately (June 2026 onwards). With 12+ projects, 4 internships, 4 certifications, and proven results (30% accuracy improvements, 40% optimization gains, 98.75% data quality), he brings strong AI/ML and full-stack development skills. Contact: shahzebfaisal5649@gmail.com or LinkedIn: linkedin.com/in/shahzeb-faisal-8b9190321. Seeking full-time, internships, research positions. Based in Lahore, open to remote/hybrid/on-site.`;
            }

            // ═══════════ RESUME DOWNLOAD ═══════════
            if ((q.includes('resume') || q.includes('cv')) && (q.includes('download') || q.includes('get') || q.includes('want') || q.includes('his'))) {
                return `To download Shahzeb's resume, type the command: resume
This will download his updated resume as PDF. You can also view his complete portfolio here, or contact him directly at shahzebfaisal5649@gmail.com for the latest version!`;
            }

            // ═══════════ EXPERIENCE QUERIES ═══════════
            if (q.includes('experience') || q.includes('background') || q.includes('intern')) {
                return `Shahzeb has 1+ year professional experience across 4 internships:
1️⃣ Nexium (January 2025) - AI-First Web Dev: Built Resume Tailor with GPT-4, achieved 30% accuracy improvement, developed 3 production AI apps
2️⃣ CodeAlpha (Jun-Jul 2024) - Data Science: Predictive models, 25% decision accuracy improvement, automated pipelines
3️⃣ Kashf Foundation (Jul-Aug 2024) - Data & Software: Compliance dashboard, 40% SQL query optimization
4️⃣ Technology Academy BRIGHT (Sep 2024) - Software Dev Training: Couch to Coder certification
Currently: Research Assistant at FAST NUCES researching LLM chatbots (2024-Present)
Total: 4 certifications earned, 12+ projects completed`;
            }

            // ═══════════ PROJECT LISTING QUERIES ═══════════
            if (q.includes('project') || q.includes('work') || q.includes('portfolio')) {
                return `Shahzeb's 12+ Projects:
🤖 AI/ML: Nexium Resume Tailor (GPT-4, 30%↑), Blog Summarizer (NLP, 85%), Image Captioning (0.875 BLEU), Smart City (13.5M records, 98.75% quality)
🌐 Web: Edu Connect (500+ users), FLEX GYM (fitness tracker), Movie Showcase (TMDb API), QuoteGen AI, E-Shop (e-commerce)
⛓️ Blockchain: Election DApp (100% integrity), Real Estate DApp
📊 Data: Environmental Analysis (90% accuracy), Azure Bicep (IaC)
All projects on GitHub: https://github.com/ShahzebFaisal5649
Ask about any specific project for details!`;
            }
            if (q.includes('how many') || q.includes('total project')) {
                return `Shahzeb has completed 12+ production projects across multiple domains: AI/ML (5 projects), Web Development (6 projects), Blockchain (2 projects), Data Science (3 projects). Key achievements: 30% accuracy improvements, 98.75% data quality scores, 0.875 BLEU scores, 500+ users. All available on GitHub: github.com/ShahzebFaisal5649. Which project would you like to know more about?`;
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
📊 12+ Projects Completed
💻 30+ Technologies Mastered
🎓 4 Internships (1+ year experience)
🏆 4 Professional Certifications
📈 500+ GitHub Contributions
💡 50,000+ Lines of Code Written
🎯 Key Achievements: 30% accuracy↑, 98.75% quality, 40% optimization↓, 0.875 BLEU score, 13.5M+ records processed, 500+ platform users`;
            }

            // ═══════════ DEFAULT/HELLO RESPONSES ═══════════
            if (q.includes('hello') || q.includes('hi ') || q === 'hi' || q.includes('hey')) {
                return `Hey there! 👋 I'm Shahzeb's AI portfolio assistant. I can tell you about his 12+ projects (Resume Tailor, Smart City, FLEX GYM, Movie Showcase, Election DApp, etc.), 4 internships (Nexium, CodeAlpha, Kashf, BRIGHT), skills (ML/AI, Web, Data Science, Blockchain), research work at FAST NUCES, or how to contact him. What would you like to know?`;
            }

            // ═══════════ FINAL FALLBACK ═══════════
            return `I can help you learn about Shahzeb's portfolio! Try asking about:
📋 Specific Projects: Nexium Resume Tailor, Smart City, FLEX GYM, Movie Showcase, Election DApp, Image Captioning, Edu Connect, Blog Summarizer, QuoteGen AI, E-Shop, Azure Bicep, Environmental Analysis
💼 Experience: His 4 internships (Nexium, CodeAlpha, Kashf, BRIGHT) or current research work
🎓 Education: BS Data Science from FAST NUCES, research on LLM chatbots, CGPA/academic performance
🛠️ Skills: Python, JavaScript, ML/AI, NLP, Web Development, Data Science, Blockchain
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

            switch (type) {
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
        const preloader = document.getElementById('preloader');
        const logo = document.getElementById('preloader-logo');
        const scan = document.getElementById('preloader-scan');
        const counter = document.getElementById('preloader-counter');
        const splitTop = document.querySelector('.split-top');
        const splitBottom = document.querySelector('.split-bottom');

        if (!preloader) {
            document.body.classList.add('loaded');
            setTimeout(initParticles, 100);
            return;
        }

        let skipped = false;
        function skip() {
            if (skipped) return;
            skipped = true;
            splitTop.style.transform = 'translateY(-100%)';
            splitBottom.style.transform = 'translateY(100%)';
            setTimeout(() => {
                preloader.style.display = 'none';
                document.body.classList.add('loaded');
                initParticles();
                document.dispatchEvent(new CustomEvent('preloaderDone'));
            }, 500);
        }

        preloader.addEventListener('click', skip);

        // Phase 1: Logo fade in
        setTimeout(() => {
            if (skipped) return;
            logo.style.opacity = '1';
            logo.style.transform = 'scale(1)';
            logo.classList.add('shine');
        }, 100);

        // Phase 2: Scan and counter
        setTimeout(() => {
            if (skipped) return;
            scan.style.opacity = '1';
            scan.style.animation = 'scan-line 0.7s linear';
            
            let count = 0;
            const int = setInterval(() => {
                if (skipped) { clearInterval(int); return; }
                count += 5;
                counter.innerText = count + '%';
                if (count >= 100) clearInterval(int);
            }, 30);
        }, 800);

        // Phase 3: Logo scale up
        setTimeout(() => {
            if (skipped) return;
            logo.style.transform = 'scale(1.3)';
        }, 1500);

        // Phase 4: Split reveal
        setTimeout(() => {
            if (skipped) return;
            skip();
        }, 2500);
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
║  repos      - List all featured GitHub projects           ║
║  live       - Show only deployed/live projects            ║
║  research   - Current LLM research details                ║
║  stats      - Portfolio statistics                        ║
║  contact    - Get contact information                     ║
║  social     - Social media links                          ║
║  hire       - Availability, contact, WhatsApp             ║
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
║         Data Scientist & Full Stack AI Developer          ║
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
║  🚀 12+ Projects | 30+ Technologies | 1+ Years Experience ║
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
║  🤖 AI-FIRST WEB DEV INTERN (January 2025)                ║
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
║  • Type 'huggingface' to see ML models                    ║
║  • Type 'kaggle' to see datasets                          ║
║                                                           ║
╚══════════════════════════════════════════════════════════╝`,

            social: `
╔══════════════════════════════════════════════════════════╗
║                     SOCIAL LINKS                          ║
╠══════════════════════════════════════════════════════════╣
║                                                           ║
║  🐙 GitHub:      github.com/ShahzebFaisal5649            ║
║  💼 LinkedIn:    linkedin.com/in/shahzeb-faisal-8b9190321║
║  📧 Email:       shahzebfaisal5649@gmail.com             ║
║  🤗 HuggingFace: huggingface.co/ShahzebFaisal5649        ║
║  📊 Kaggle:      kaggle.com/shahzebfaisal5649            ║
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
                switch (event.error) {
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
                switch (firstWord) {
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
                    case 'repos':
                        let reposOutput = `<div class="terminal-section">
                            <div class="t-title">📦 GitHub Repositories (${PORTFOLIO_DATA.projects.length} featured)</div>
                            ${PORTFOLIO_DATA.projects.map(p =>
                                `<div class="t-item">
                                    <span class="t-gold">${p.name}</span> 
                                    <span class="t-muted">[${p.tech.slice(0, 3).join(', ')}]</span>
                                    ${p.live ? `<a href="${p.live}" target="_blank" class="t-link">🌐 Live</a>` : ''}
                                    <a href="${p.github}" target="_blank" class="t-link">GitHub →</a>
                                 </div>`
                            ).join('')}
                            <div class="t-muted">Type 'live' to see only deployed projects</div>
                        </div>`;
                        this.addLine(reposOutput);
                        break;
                    case 'live':
                        const liveProjects = PORTFOLIO_DATA.projects.filter(p => p.live);
                        let liveOutput = `<div class="terminal-section">
                            <div class="t-title">🌐 Live Deployed Projects (${liveProjects.length})</div>
                            ${liveProjects.map(p =>
                                `<div class="t-item">
                                    <span class="t-gold">${p.name}</span><br>
                                    <span class="t-muted">Stack: ${p.tech.join(', ')}</span><br>
                                    <a href="${p.live}" target="_blank" class="t-link">→ ${p.live}</a>
                                 </div>`
                            ).join('')}
                        </div>`;
                        this.addLine(liveOutput);
                        break;
                    case 'hire':
                        let hireOutput = `<div class="terminal-section">
                            <div class="t-title">💼 Hire Shahzeb Faisal</div>
                            <div class="t-item"><span class="t-gold">Status:</span> ${PORTFOLIO_DATA.status}</div>
                            <div class="t-item"><span class="t-gold">Location:</span> ${PORTFOLIO_DATA.location}</div>
                            <div class="t-item"><span class="t-gold">Email:</span> <a href="mailto:${PORTFOLIO_DATA.email}" class="t-link">${PORTFOLIO_DATA.email}</a></div>
                            <div class="t-item"><span class="t-gold">LinkedIn:</span> <a href="${PORTFOLIO_DATA.linkedin}" target="_blank" class="t-link">View Profile →</a></div>
                            <div class="t-item"><span class="t-gold">WhatsApp:</span> <a href="${PORTFOLIO_DATA.whatsapp}" target="_blank" class="t-link">Chat Now →</a></div>
                            <div class="t-muted">Open to: Full-time / Contract / Remote / Hybrid</div>
                        </div>`;
                        this.addLine(hireOutput);
                        break;
                    case 'research':
                        let researchOutput = `<div class="terminal-section">
                            <div class="t-title">🔬 Research Work</div>
                            <div class="t-item"><span class="t-gold">Position:</span> ${PORTFOLIO_DATA.current_role.title}</div>
                            <div class="t-item"><span class="t-gold">Institution:</span> ${PORTFOLIO_DATA.current_role.org}</div>
                            <div class="t-item"><span class="t-gold">Supervisor:</span> ${PORTFOLIO_DATA.current_role.supervisor}</div>
                            <div class="t-item"><span class="t-gold">Topic:</span> ${PORTFOLIO_DATA.current_role.topic}</div>
                            <div class="t-item"><span class="t-gold">Focus:</span> ${PORTFOLIO_DATA.current_role.description}</div>
                            <div class="t-item"><span class="t-gold">Period:</span> ${PORTFOLIO_DATA.current_role.period}</div>
                        </div>`;
                        this.addLine(researchOutput);
                        break;
                    case 'stats':
                        let statsOutput = `<div class="terminal-section">
                            <div class="t-title">📊 Portfolio Stats</div>
                            <div class="t-item"><span class="t-gold">Projects:</span> ${PORTFOLIO_DATA.stats.projects}+</div>
                            <div class="t-item"><span class="t-gold">Live Apps:</span> ${PORTFOLIO_DATA.stats.live_apps}</div>
                            <div class="t-item"><span class="t-gold">Internships:</span> ${PORTFOLIO_DATA.stats.internships}</div>
                            <div class="t-item"><span class="t-gold">Research Positions:</span> ${PORTFOLIO_DATA.stats.research_positions}</div>
                            <div class="t-item"><span class="t-gold">GitHub Commits:</span> ${PORTFOLIO_DATA.stats.github_commits}</div>
                        </div>`;
                        this.addLine(statsOutput);
                        break;
                    case 'ai':
                        const aiQuery = cmd.replace(/^ai\s*/i, '').trim();
                        if (!aiQuery) {
                            this.addLine(`<div class="t-muted">Usage: ai &lt;your question&gt;<br>Example: ai what projects has Shahzeb built?</div>`);
                        } else {
                            this.addLine(`<div class="t-muted">🤖 Asking Gemini...</div>`);
                            (async () => {
                                try {
                                    const ctx = buildSystemContext(JSON.parse(sessionStorage.getItem('gh_repos_ai') || '[]'));
                                    const history = [
                                        { role: 'user', parts: [{ text: ctx }] },
                                        { role: 'model', parts: [{ text: 'Understood. I am ready to answer questions about Shahzeb Faisal.' }] },
                                        { role: 'user', parts: [{ text: aiQuery }] }
                                    ];
                                    const reply = await askGemini(history);
                                    this.addLine(`<div class="t-item"><span class="t-gold">Gemini:</span> ${reply}</div>`);
                                } catch(e) {
                                    this.addLine(`<div class="t-error">AI unavailable. Email: shahzebfaisal5649@gmail.com</div>`);
                                }
                            })();
                        }
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

            // 10-second timeout
            const timeoutPromise = new Promise((_, reject) =>
                setTimeout(() => reject(new Error('timeout')), 10000)
            );

            try {
                const response = await Promise.race([GeminiAI.chat(query), timeoutPromise]);
                document.getElementById(typingId)?.remove();
                await this.typewriterEffect(response);
                AudioSystem.play('success');
            } catch (error) {
                document.getElementById(typingId)?.remove();

                // Always show a useful fallback, never a raw error
                const fallback = GeminiAI.getFallbackResponse(query);
                const isTimeout = error.message === 'timeout';
                const prefix = isTimeout
                    ? '<span class="term-warning">⏱️ AI took too long — here\'s what I know:</span><br><br>'
                    : '<span class="term-warning">⚡ Using offline mode:</span><br><br>';

                this.addLine(prefix);
                await this.typewriterEffect(fallback);
                AudioSystem.play('success');
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

        // Add skill level bars on section enter
        const skillsSection = document.getElementById('skills');
        if (skillsSection) {
            const skillObserver = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        document.querySelectorAll('.skill-tags span[data-level]').forEach((span, i) => {
                            const level = span.getAttribute('data-level') || '70';
                            span.style.setProperty('--skill-level', level + '%');
                            setTimeout(() => span.classList.add('skill-active'), i * 40);
                        });
                        skillObserver.disconnect();
                    }
                });
            }, { threshold: 0.2 });
            skillObserver.observe(skillsSection);
        }
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

        const words = ["Data Scientist", "Full Stack AI Developer", "ML Engineer", "LLM Researcher"];
        let wordIndex = 0;
        let charIndex = 0;
        let isDeleting = false;
        let isPaused = false;

        function type() {
            const currentWord = words[wordIndex];

            if (isPaused) {
                setTimeout(type, 2000);
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

            let typeSpeed = isDeleting ? 40 : 80;

            if (!isDeleting && charIndex === currentWord.length) {
                isPaused = true;
            } else if (isDeleting && charIndex === 0) {
                isDeleting = false;
                wordIndex = (wordIndex + 1) % words.length;
                typeSpeed = 200;
            }

            setTimeout(type, typeSpeed);
        }

        type();
    }


    // ═══════════ 3D CARD TILT ═══════════
    function initCardTilt() {
        const card = document.getElementById('hero-card');
        if (card) {
            const inner = card.querySelector('.card-inner');
            card.addEventListener('mousemove', (e) => {
                const rect = card.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                const centerX = rect.width / 2;
                const centerY = rect.height / 2;
                const rotateX = (y - centerY) / 10;
                const rotateY = (centerX - x) / 10;
                if (inner) inner.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.03)`;
            });
            card.addEventListener('mouseleave', () => {
                if (inner) inner.style.transform = 'rotateX(0) rotateY(0) scale(1)';
            });
        }

        // Project cards tilt
        const projectCards = document.querySelectorAll('.project-card');
        projectCards.forEach(pCard => {
            pCard.addEventListener('mousemove', (e) => {
                const rect = pCard.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                const centerX = rect.width / 2;
                const centerY = rect.height / 2;
                const rotateX = (y - centerY) / 20;
                const rotateY = (centerX - x) / 20;
                pCard.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
            });
            pCard.addEventListener('mouseleave', () => {
                pCard.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg)';
            });
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
                    const isLive = card.getAttribute('data-live') === 'true';

                    const matchFilter = filter === 'all' || 
                                       (filter === 'live' && isLive) || 
                                       (filter !== 'live' && categories.includes(filter));

                    if (matchFilter) {
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
        document.getElementById('theme-btn')?.addEventListener('click', () => {
            const isDark = !document.documentElement.hasAttribute('data-theme') ||
                           document.documentElement.getAttribute('data-theme') === 'dark';
            const newTheme = isDark ? 'light' : 'dark';
            document.documentElement.setAttribute('data-theme', newTheme);
            localStorage.setItem('portfolio-theme', newTheme);

            const icon = document.querySelector('#theme-btn i');
            if (icon) icon.className = newTheme === 'light' ? 'fas fa-sun' : 'fas fa-moon';

            AudioSystem.play('click');
        });

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
            anchor.addEventListener('click', function (e) {
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
    function initCommandPalette() {
        const overlay = document.getElementById('cmd-palette');
        const searchInput = document.getElementById('cmd-search');
        const results = document.getElementById('cmd-results');
        if (!overlay || !searchInput) return;

        const commands = [
            { label: 'Go to Home', icon: 'fa-home', action: () => scrollTo('#home'), group: 'Navigate' },
            { label: 'Go to About', icon: 'fa-user', action: () => scrollTo('#about'), group: 'Navigate' },
            { label: 'Go to Projects', icon: 'fa-code', action: () => scrollTo('#projects'), group: 'Navigate' },
            { label: 'Go to Experience', icon: 'fa-briefcase', action: () => scrollTo('#experience'), group: 'Navigate' },
            { label: 'Go to Certifications', icon: 'fa-certificate', action: () => scrollTo('#certifications'), group: 'Navigate' },
            { label: 'Go to Skills', icon: 'fa-brain', action: () => scrollTo('#skills'), group: 'Navigate' },
            { label: 'Go to Contact', icon: 'fa-envelope', action: () => scrollTo('#contact'), group: 'Navigate' },
            { label: 'Download Resume', icon: 'fa-file-pdf', action: () => { const a=document.createElement('a'); a.href='resume.pdf'; a.download='Shahzeb_Faisal_Resume.pdf'; a.click(); triggerConfetti(); }, group: 'Actions' },
            { label: 'Open AI Terminal', icon: 'fa-terminal', action: () => Terminal.open(), group: 'Actions' },
            { label: 'Toggle Theme', icon: 'fa-moon', action: () => document.getElementById('theme-btn')?.click(), group: 'Actions' },
            { label: 'Toggle Sound', icon: 'fa-volume-up', action: () => AudioSystem.toggle(), group: 'Actions' },
            { label: 'Trigger Confetti 🎉', icon: 'fa-star', action: () => triggerConfetti(), group: 'Fun' },
            { label: 'Matrix Mode', icon: 'fa-terminal', action: () => toggleMatrix(), group: 'Fun' },
            { label: 'Open GitHub Profile', icon: 'fa-github', action: () => window.open('https://github.com/ShahzebFaisal5649','_blank'), group: 'Links', fab: true },
            { label: 'Open LinkedIn Profile', icon: 'fa-linkedin', action: () => window.open('https://www.linkedin.com/in/shahzeb-faisal-8b9190321/','_blank'), group: 'Links', fab: true },
            { label: 'Send Email', icon: 'fa-envelope', action: () => window.location.href='mailto:shahzebfaisal5649@gmail.com', group: 'Links' },
        ];

        let selectedIndex = 0;
        let filtered = [...commands];

        function scrollTo(id) {
            document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });
        }

        function open() {
            overlay.classList.add('active');
            overlay.setAttribute('aria-hidden', 'false');
            searchInput.value = '';
            renderResults('');
            setTimeout(() => searchInput.focus(), 50);
            document.body.style.overflow = 'hidden';
            AudioSystem.play('terminal');
        }

        function close() {
            overlay.classList.remove('active');
            overlay.setAttribute('aria-hidden', 'true');
            document.body.style.overflow = '';
            AudioSystem.play('click');
        }

        function renderResults(query) {
            const q = query.toLowerCase().trim();
            filtered = q ? commands.filter(c => c.label.toLowerCase().includes(q) || c.group.toLowerCase().includes(q)) : commands;
            selectedIndex = 0;

            if (filtered.length === 0) {
                results.innerHTML = '<div class="cmd-empty">No results for "' + query + '"</div>';
                return;
            }

            let html = '';
            let lastGroup = '';
            filtered.forEach((cmd, i) => {
                if (cmd.group !== lastGroup) {
                    html += `<div class="cmd-group-label">${cmd.group}</div>`;
                    lastGroup = cmd.group;
                }
                const fabClass = cmd.fab ? 'fab' : 'fas';
                html += `<div class="cmd-item ${i === 0 ? 'selected' : ''}" data-index="${i}">
                    <i class="${fabClass} fa-${cmd.icon} cmd-item-icon"></i>
                    <span>${cmd.label}</span>
                </div>`;
            });
            results.innerHTML = html;

            results.querySelectorAll('.cmd-item').forEach((item, i) => {
                item.addEventListener('mouseenter', () => setSelected(i));
                item.addEventListener('click', () => { execute(i); close(); });
            });
        }

        function setSelected(i) {
            selectedIndex = Math.max(0, Math.min(i, filtered.length - 1));
            results.querySelectorAll('.cmd-item').forEach((el, idx) => {
                el.classList.toggle('selected', idx === selectedIndex);
            });
            results.querySelector('.cmd-item.selected')?.scrollIntoView({ block: 'nearest' });
        }

        function execute(i) {
            filtered[i]?.action();
        }

        searchInput.addEventListener('input', (e) => renderResults(e.target.value));

        document.addEventListener('keydown', (e) => {
            if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
                e.preventDefault();
                overlay.classList.contains('active') ? close() : open();
                return;
            }
            if (!overlay.classList.contains('active')) return;

            if (e.key === 'Escape') { close(); return; }
            if (e.key === 'ArrowDown') { e.preventDefault(); setSelected(selectedIndex + 1); }
            if (e.key === 'ArrowUp') { e.preventDefault(); setSelected(selectedIndex - 1); }
            if (e.key === 'Enter') { execute(selectedIndex); close(); }
        });

        overlay.addEventListener('click', (e) => {
            if (e.target === overlay) close();
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

    // ═══════════ CONTACT FORM INITIALIZATION ═══════════
    function initContactForm() {
        const form = document.getElementById('contact-form');
        const status = document.getElementById('cf-status');
        const submitBtn = document.getElementById('cf-submit');

        if (!form || typeof emailjs === 'undefined') {
            console.warn('Contact form or EmailJS not found');
            return;
        }

        // Initialize EmailJS if public key is available
        const publicKey = window.ENV?.EMAILJS_PUBLIC;
        if (publicKey && publicKey !== 'PASTE_YOUR_EMAILJS_PUBLIC_KEY') {
            emailjs.init(publicKey);
        } else {
            console.warn('EmailJS public key not configured in env.local.js');
        }

        form.addEventListener('submit', function(event) {
            event.preventDefault();
            
            // Basic validation
            const name = document.getElementById('cf-name').value.trim();
            const email = document.getElementById('cf-email').value.trim();
            const message = document.getElementById('cf-message').value.trim();
            
            if (!name || !email || !message) {
                status.textContent = "Please fill out all fields.";
                status.className = "form-status error";
                return;
            }

            const serviceId = window.ENV?.EMAILJS_SERVICE;
            const templateId = window.ENV?.EMAILJS_TEMPLATE;

            if (!serviceId || serviceId === 'PASTE_YOUR_EMAILJS_SERVICE_ID' || !templateId || templateId === 'PASTE_YOUR_EMAILJS_TEMPLATE_ID') {
                status.textContent = "Form is not fully configured yet.";
                status.className = "form-status error";
                return;
            }

            // Loading state
            submitBtn.disabled = true;
            submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
            status.textContent = "";

            const params = {
                user_name: name,
                user_email: email,
                message: message
            };

            emailjs.send(serviceId, templateId, params)
                .then(function() {
                    status.textContent = "Message sent successfully!";
                    status.className = "form-status success";
                    form.reset();
                    submitBtn.innerHTML = '<span>Send Message</span><i class="fas fa-paper-plane"></i>';
                    submitBtn.disabled = false;
                    
                    if (window.triggerConfetti) {
                        window.triggerConfetti();
                    }
                    if (window.AudioSystem && typeof window.AudioSystem.play === 'function') {
                        window.AudioSystem.play('success');
                    }
                }, function(error) {
                    console.error('EmailJS Error:', error);
                    status.textContent = "Failed to send message. Please try again later.";
                    status.className = "form-status error";
                    submitBtn.innerHTML = '<span>Send Message</span><i class="fas fa-paper-plane"></i>';
                    submitBtn.disabled = false;
                });
        });
        console.log('✅ Contact form initialized');
    }

    // ═══════════ INITIALIZE EVERYTHING ═══════════
    
    // ═══════════ STATUS STRIP ═══════════
    function initStatusStrip() {
        const strip = document.getElementById('status-strip');
        const closeBtn = document.getElementById('status-strip-close');
        if (!strip || !closeBtn) return;

        // Hide if user already dismissed this session
        if (sessionStorage.getItem('status-strip-closed')) {
            strip.classList.add('hidden');
            return;
        }

        closeBtn.addEventListener('click', () => {
            strip.style.transition = 'opacity 0.3s';
            strip.style.opacity = '0';
            setTimeout(() => strip.classList.add('hidden'), 300);
            sessionStorage.setItem('status-strip-closed', '1');
        });
    }

    // ═══════════ PROJECT PREVIEWS ═══════════
    function initProjectPreviews() {
        const previewColors = {
            'ml web': { bg: '#0d1117', accent: '#cbff00', lang: 'TypeScript' },
            'web': { bg: '#0d1117', accent: '#61DAFB', lang: 'JavaScript' },
            'data ml': { bg: '#0a0f1e', accent: '#06b6d4', lang: 'Python' },
            'data': { bg: '#0a0f1e', accent: '#3776AB', lang: 'Python' },
            'blockchain web': { bg: '#0d0d1a', accent: '#627EEA', lang: 'Solidity' },
            'ml': { bg: '#0a0f1e', accent: '#FF6F00', lang: 'Python/TF' },
            'web data': { bg: '#0d1117', accent: '#61DAFB', lang: 'React' }
        };

        document.querySelectorAll('.project-card').forEach(card => {
            const preview = card.querySelector('.project-preview');
            if (!preview) return;

            const category = card.getAttribute('data-category') || 'web';
            const colors = previewColors[category] || previewColors['web'];
            const projectName = card.querySelector('h3')?.textContent || '';
            const techTags = [...card.querySelectorAll('.project-tech span')].map(s => s.textContent).slice(0, 3);

            preview.style.cssText = `
                background: ${colors.bg};
                display: flex;
                flex-direction: column;
                align-items: flex-start;
                justify-content: flex-end;
                padding: 1rem;
                font-family: 'JetBrains Mono', monospace;
                font-size: 11px;
                color: rgba(255,255,255,0.6);
                line-height: 1.6;
                border-radius: 8px 8px 0 0;
            `;

            preview.innerHTML = `
                <div style="margin-bottom:auto;color:${colors.accent};font-size:10px;opacity:0.6">
                    // ${projectName}
                </div>
                <div>
                    <span style="color:${colors.accent}">const</span>
                    <span style="color:#fff"> project</span>
                    <span style="color:rgba(255,255,255,0.4)"> = {</span>
                </div>
                <div style="padding-left:12px">
                    <span style="color:rgba(255,255,255,0.5)">lang:</span>
                    <span style="color:#a8daff"> '${colors.lang}'</span><span style="color:rgba(255,255,255,0.3)">,</span>
                </div>
                <div style="padding-left:12px">
                    <span style="color:rgba(255,255,255,0.5)">stack:</span>
                    <span style="color:#ffd700"> ['${techTags.join("','")}']</span>
                </div>
                <div>
                    <span style="color:rgba(255,255,255,0.4)">}</span>
                </div>
            `;
        });
    }

    
    // ═══════════ DOT NAVIGATION ═══════════
    function initDotNav() {
        const sections = document.querySelectorAll('section');
        const dotItems = document.querySelectorAll('.dot-nav-item');
        
        if (dotItems.length === 0) return;

        window.addEventListener('scroll', () => {
            let current = '';
            sections.forEach(section => {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.clientHeight;
                if (pageYOffset >= (sectionTop - 200)) {
                    current = section.getAttribute('id');
                }
            });

            dotItems.forEach(item => {
                item.classList.remove('active');
                if (item.getAttribute('href').slice(1) === current) {
                    item.classList.add('active');
                }
            });
        });
    }

    function init() {
        // Disable Zoom In/Out
        document.addEventListener('wheel', e => { if (e.ctrlKey) e.preventDefault(); }, { passive: false });
        document.addEventListener('keydown', e => { if (e.ctrlKey && ['+','-','=','0'].includes(e.key)) e.preventDefault(); });

        // Restore saved theme
        const savedTheme = localStorage.getItem('portfolio-theme') || 'dark';
        document.documentElement.setAttribute('data-theme', savedTheme);
        const themeIcon = document.querySelector('#theme-btn i');
        if (themeIcon) themeIcon.className = savedTheme === 'light' ? 'fas fa-sun' : 'fas fa-moon';
        AudioSystem.init();
        initNavigation();
        initTypingEffect();
        initStatsCounter(); // Correct statistics animator
        initCardTilt();
        initProjectFilters();
        initStatusStrip();
        initDotNav();
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

        initNetworkStatus();
        initPerformanceMonitor();

        initCertificateViewer();
        initProjectModals();
        initProjectPreviews();
        if (window.initSkillsRadar) window.initSkillsRadar();
        if (window.initStackDistribution) window.initStackDistribution();
        fetchGitHubStats();
        initCommandPalette();
        initContactForm();

        document.querySelector('.scroll-indicator')?.addEventListener('click', () => {
            document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
        });

        if (window.initNeuralBackground) {
            window.initNeuralBackground('neural-canvas');
        }



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
    /* ═══════════ NEW PRODUCTIVE FEATURES ═══════════ */

    // 2. Stats Counter Animation
    function initStatsCounter() {
        const stats = document.querySelectorAll('.stat-number');
        const observerOptions = { threshold: 0.15 };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const target = entry.target;
                    const countTo = parseInt(target.getAttribute('data-target'));
                    let count = 0;
                    const duration = 2000;
                    const increment = countTo / (duration / 16);

                    const updateCount = () => {
                        count += increment;
                        if (count < countTo) {
                            target.innerText = Math.floor(count);
                            requestAnimationFrame(updateCount);
                        } else {
                            target.innerText = countTo;
                        }
                    };
                    updateCount();
                    observer.unobserve(target);
                }
            });
        }, observerOptions);

        stats.forEach(stat => observer.observe(stat));
    }

    // 3. Project Detail Modals
    function initProjectModals() {
        const modal = document.getElementById('project-modal');
        const closeBtn = document.getElementById('modal-close');
        const cards = document.querySelectorAll('.project-card');

        const title = document.getElementById('modal-title');
        const desc = document.getElementById('modal-desc');
        const tech = document.getElementById('modal-tech');
        const github = document.getElementById('modal-github');
        const achContainer = document.getElementById('modal-achievements-container');

        cards.forEach(card => {
            card.addEventListener('click', (e) => {
                if (e.target.closest('.project-overlay')) return;

                const projectName = card.querySelector('h3').innerText;
                const pd = PORTFOLIO_DATA.projects.find(p => p.name === projectName) || {};

                title.innerText = projectName;

                // Use long_description if available, fall back to description
                desc.innerHTML = pd.long_description
                    ? `<p>${pd.long_description}</p>`
                    : `<p>${pd.description || 'No description available.'}</p>`;

                // Add achievements list if available
                if (pd.achievements && pd.achievements.length > 0) {
                    desc.innerHTML += `
                        <div class="modal-achievements">
                            <h4>Key Achievements</h4>
                            <ul>${pd.achievements.map(a => `<li><i class="fas fa-check-circle"></i> ${a}</li>`).join('')}</ul>
                        </div>`;
                }

                tech.innerHTML = card.querySelector('.project-tech')?.innerHTML || '';
                github.href = pd.github || card.querySelector('.project-overlay')?.href || '#';
                github.style.display = pd.github ? 'inline-flex' : 'none';

                // Add demo link if it exists
                const existingDemo = modal.querySelector('#modal-demo');
                if (pd.demo_url) {
                    if (!existingDemo) {
                        const demoBtn = document.createElement('a');
                        demoBtn.id = 'modal-demo';
                        demoBtn.className = 'btn btn-secondary';
                        demoBtn.target = '_blank';
                        demoBtn.innerHTML = '<i class="fas fa-external-link-alt"></i> Live Demo';
                        document.querySelector('.modal-links').appendChild(demoBtn);
                    }
                    modal.querySelector('#modal-demo').href = pd.demo_url;
                    modal.querySelector('#modal-demo').style.display = 'inline-flex';
                } else if (existingDemo) {
                    existingDemo.style.display = 'none';
                }

                modal.style.display = 'flex';
                document.body.style.overflow = 'hidden';
            });
        });

        closeBtn.addEventListener('click', () => {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
        });

        window.addEventListener('click', (e) => {
            if (e.target === modal) closeBtn.click();
        });
    }

    // 4. Skills Radar Chart (SVG Based)
    function initSkillsRadar() {
        const container = document.getElementById('skills-radar');
        if (!container) return;

        const skills = [
            { name: 'Machine Learning', value: 95 },
            { name: 'NLP & LLMs', value: 90 },
            { name: 'Full Stack AI', value: 85 },
            { name: 'Data Engineering', value: 88 },
            { name: 'Deep Learning', value: 92 },
            { name: 'Cloud/MLOps', value: 80 }
        ];

        const size = 400;
        const radius = size / 2 - 50;
        const centerX = size / 2;
        const centerY = size / 2;
        const angleStep = (Math.PI * 2) / skills.length;

        let svgContent = `<svg width="${size}" height="${size}" viewBox="0 0 ${size} ${size}">`;

        // Draw Grid Rings
        for (let i = 1; i <= 5; i++) {
            const r = (radius / 5) * i;
            let points = "";
            for (let j = 0; j < skills.length; j++) {
                const angle = j * angleStep - Math.PI / 2;
                points += `${centerX + Math.cos(angle) * r},${centerY + Math.sin(angle) * r} `;
            }
            svgContent += `<polygon points="${points}" class="radar-grid" />`;
        }

        // Draw Axes
        skills.forEach((skill, j) => {
            const angle = j * angleStep - Math.PI / 2;
            const x = centerX + Math.cos(angle) * radius;
            const y = centerY + Math.sin(angle) * radius;
            svgContent += `<line x1="${centerX}" y1="${centerY}" x2="${x}" y2="${y}" class="radar-axis" />`;

            // Labels
            const labelX = centerX + Math.cos(angle) * (radius + 30);
            const labelY = centerY + Math.sin(angle) * (radius + 20);
            svgContent += `<text x="${labelX}" y="${labelY}" text-anchor="middle" class="radar-label">${skill.name}</text>`;
        });

        // Draw Data Area
        let dataPoints = "";
        skills.forEach((skill, j) => {
            const angle = j * angleStep - Math.PI / 2;
            const r = (radius * skill.value) / 100;
            dataPoints += `${centerX + Math.cos(angle) * r},${centerY + Math.sin(angle) * r} `;
        });
        svgContent += `<polygon points="${dataPoints}" class="radar-area" />`;

        svgContent += `</svg>`;
        container.innerHTML = svgContent;
    }

    // 5. Live GitHub Stats
    async function fetchGitHubStats() {
        const username = 'ShahzebFaisal5649';

        // Update all elements with class "github-stat-[field]"
        const setVal = (cls, val) => {
            document.querySelectorAll('.' + cls).forEach(el => {
                el.textContent = val;
                el.classList.add('loaded');
            });
        };

        try {
            const [userRes, reposRes] = await Promise.all([
                fetch(`https://api.github.com/users/${username}`),
                fetch(`https://api.github.com/users/${username}/repos?per_page=100`)
            ]);

            if (userRes.ok) {
                const user = await userRes.json();
                setVal('github-stat-repos', user.public_repos + '+');
                setVal('github-stat-followers', user.followers + '+');
            }

            if (reposRes.ok) {
                const repos = await reposRes.json();
                const stars = repos.reduce((sum, r) => sum + r.stargazers_count, 0);
                setVal('github-stat-stars', stars || '—');
            }

            // Contributions approximation (GitHub doesn't expose this in REST)
            setVal('github-stat-contributions', '500+');

        } catch (err) {
            console.warn('GitHub API unavailable, using static values');
            setVal('github-stat-repos', '12+');
            setVal('github-stat-followers', '—');
            setVal('github-stat-stars', '—');
            setVal('github-stat-contributions', '500+');
        }
    }

    // 6. Interactive Command Palette (Ctrl+K)
    function initCommandPalette() {
        const palette = document.getElementById('command-palette');
        const searchInput = document.getElementById('palette-search');
        const resultsContainer = document.getElementById('palette-results');

        if (!palette || !searchInput || !resultsContainer) return;

        let activeIndex = 0;
        let filteredCommands = [];

        const commands = [
            {
                id: 'scroll-projects',
                title: 'Go to Projects',
                desc: 'Browse my deployed ML models, web apps, and data engineering projects',
                icon: 'fa-project-diagram',
                shortcut: '↵',
                action: () => {
                    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
                }
            },
            {
                id: 'scroll-experience',
                title: 'Go to Experience',
                desc: 'View my professional career timeline and achievements',
                icon: 'fa-history',
                shortcut: '↵',
                action: () => {
                    document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' });
                }
            },
            {
                id: 'scroll-skills',
                title: 'Go to Skills',
                desc: 'Analyze my technology stack, radar chart, and distribution',
                icon: 'fa-brain',
                shortcut: '↵',
                action: () => {
                    document.getElementById('skills')?.scrollIntoView({ behavior: 'smooth' });
                }
            },
            {
                id: 'scroll-contact',
                title: 'Go to Contact',
                desc: 'Get in touch for opportunities, collaboration, or consultation',
                icon: 'fa-envelope',
                shortcut: '↵',
                action: () => {
                    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                }
            },
            {
                id: 'toggle-terminal',
                title: 'Open Terminal',
                desc: 'Access the data science CLI with Llama-3.3 AI chatbot',
                icon: 'fa-terminal',
                shortcut: 'Ctrl+.',
                action: () => {
                    Terminal.open();
                }
            },
            {
                id: 'download-resume',
                title: 'Download Resume',
                desc: 'Get a clean PDF copy of my professional CV',
                icon: 'fa-file-pdf',
                shortcut: 'D',
                action: () => {
                    const link = document.createElement('a');
                    link.href = 'resume.pdf';
                    link.download = 'Shahzeb_Faisal_Resume.pdf';
                    document.body.appendChild(link);
                    link.click();
                    document.body.removeChild(link);
                    if (window.showToast) {
                        window.showToast('Starting Resume Download...');
                    }
                }
            },
            {
                id: 'toggle-music',
                title: 'Toggle Ambient Audio',
                desc: 'Turn background sci-fi sounds and clicks ON or OFF',
                icon: 'fa-volume-up',
                shortcut: 'S',
                action: () => {
                    AudioSystem.toggle();
                    const state = AudioSystem.muted ? 'MUTED' : 'ON';
                    if (window.showToast) {
                        window.showToast(`Ambient Audio: ${state}`);
                    }
                }
            }
        ];

        function renderResults() {
            resultsContainer.innerHTML = '';
            filteredCommands.forEach((cmd, index) => {
                const item = document.createElement('div');
                item.className = `palette-item ${index === activeIndex ? 'active' : ''}`;
                item.innerHTML = `
                    <i class="fas ${cmd.icon}"></i>
                    <div class="palette-item-info">
                        <span class="palette-item-title">${cmd.title}</span>
                        <span class="palette-item-desc">${cmd.desc}</span>
                    </div>
                    <span class="palette-item-shortcut">${cmd.shortcut}</span>
                `;

                item.addEventListener('mouseenter', () => {
                    activeIndex = index;
                    updateSelection();
                });

                item.addEventListener('click', () => {
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
            const items = resultsContainer.querySelectorAll('.palette-item');
            items.forEach((item, index) => {
                if (index === activeIndex) {
                    item.classList.add('active');
                    item.scrollIntoView({ block: 'nearest' });
                } else {
                    item.classList.remove('active');
                }
            });
        }

        function filterCommands(query) {
            const lowerQuery = query.toLowerCase().trim();
            filteredCommands = commands.filter(cmd => 
                cmd.title.toLowerCase().includes(lowerQuery) || 
                cmd.desc.toLowerCase().includes(lowerQuery)
            );
            activeIndex = 0;
            renderResults();
        }

        function openPalette() {
            palette.style.display = 'flex';
            searchInput.value = '';
            filterCommands('');
            document.body.style.overflow = 'hidden';
            AudioSystem.play('terminal');
            setTimeout(() => searchInput.focus(), 50);
        }

        function closePalette() {
            palette.style.display = 'none';
            document.body.style.overflow = 'auto';
            AudioSystem.play('click');
        }

        // Global keybinds
        document.addEventListener('keydown', (e) => {
            if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
                e.preventDefault();
                if (palette.style.display === 'none') {
                    openPalette();
                } else {
                    closePalette();
                }
            }

            if (palette.style.display === 'flex') {
                if (e.key === 'Escape') {
                    e.preventDefault();
                    closePalette();
                } else if (e.key === 'ArrowDown') {
                    e.preventDefault();
                    activeIndex = (activeIndex + 1) % filteredCommands.length;
                    updateSelection();
                    AudioSystem.play('click');
                } else if (e.key === 'ArrowUp') {
                    e.preventDefault();
                    activeIndex = (activeIndex - 1 + filteredCommands.length) % filteredCommands.length;
                    updateSelection();
                    AudioSystem.play('click');
                } else if (e.key === 'Enter') {
                    e.preventDefault();
                    if (filteredCommands[activeIndex]) {
                        filteredCommands[activeIndex].action();
                        closePalette();
                    }
                }
            }
        });

        // Click outside or overlay
        palette.addEventListener('click', (e) => {
            if (e.target === palette) {
                closePalette();
            }
        });

        searchInput.addEventListener('input', (e) => {
            filterCommands(e.target.value);
        });
        
        // Also bind the theme button in navigation/radial menu to the action
        document.getElementById('theme-btn')?.addEventListener('click', () => {
            if (window.showToast) window.showToast('Theme switching is disabled.');
        });
    }

    window.CertificateViewer = {
        init: initCertificateViewer
    };

})();

/* ═══════════════════════════════════════════════════════════════
   PART 5 — All new features appended below existing IIFE
═══════════════════════════════════════════════════════════════ */
(function () {
    'use strict';

    // ─────────────────────────────────────────────
    // BLOCK 1 — Console Easter Egg
    // ─────────────────────────────────────────────
    const asciiArt = `
%c
 ███████╗██╗  ██╗ █████╗ ██╗  ██╗███████╗███████╗██████╗
 ██╔════╝██║  ██║██╔══██╗██║  ██║╚══███╔╝██╔════╝██╔══██╗
 ███████╗███████║███████║███████║  ███╔╝ █████╗  ██████╔╝
 ╚════██║██╔══██║██╔══██║██╔══██║ ███╔╝  ██╔══╝  ██╔══██╗
 ███████║██║  ██║██║  ██║██║  ██║███████╗███████╗██████╔╝
 ╚══════╝╚═╝  ╚═╝╚═╝  ╚═╝╚═╝  ╚═╝╚══════╝╚══════╝╚═════╝
`;
    console.log(asciiArt, 'color: #d4ff33; font-weight: bold; font-family: monospace;');
    console.log('%cFull Stack AI Developer | FAST NUCES Lahore', 'color: #d4ff33; font-size: 14px; font-weight: bold;');
    console.log('%c📧 shahzebfaisal5649@gmail.com  |  🐙 github.com/ShahzebFaisal5649', 'color: #aaa; font-size: 12px;');
    console.log('%c💼 OPEN TO WORK — Available immediately (June 2026)', 'color: #10b981; font-size: 13px; font-weight: bold;');
    console.log('%c🎮 TIP: Try the Konami code on this page ↑↑↓↓←→←→BA', 'color: #888; font-size: 11px;');

    // ─────────────────────────────────────────────
    // BLOCK 0 — Toast Notification Engine
    // ─────────────────────────────────────────────
    function showToast(msg, duration) {
        duration = duration || 3000;
        let container = document.getElementById('toast-container');
        if (!container) {
            container = document.createElement('div');
            container.id = 'toast-container';
            document.body.appendChild(container);
        }
        const toast = document.createElement('div');
        toast.className = 'toast-notification';
        toast.textContent = msg;
        container.appendChild(toast);
        requestAnimationFrame(() => {
            requestAnimationFrame(() => { toast.classList.add('visible'); });
        });
        setTimeout(() => {
            toast.classList.remove('visible');
            setTimeout(() => toast.remove(), 400);
        }, duration);
    }
    window.showToast = showToast;

    // ─────────────────────────────────────────────
    // BLOCK 0B — Mobile Nav Guard & ScrollTrigger Refresh
    // ─────────────────────────────────────────────
    // Side-dot nav: skip creation on mobile
    const _origSideDots = window.initSideDotNav;
    if (typeof _origSideDots === 'function') {
        window.initSideDotNav = function () {
            if (window.innerWidth < 768) return;
            _origSideDots();
        };
    }

    // Refresh ScrollTrigger after preloader finishes
    document.addEventListener('preloaderDone', function () {
        if (typeof ScrollTrigger !== 'undefined') {
            ScrollTrigger.refresh();
        }
        // Kick off hero scramble
        const heroHeading = document.querySelector('.hero-title, .hero h1, #hero h1');
        if (heroHeading && window.scrambleText) {
            window.scrambleText(heroHeading);
        }
    });

    // ─────────────────────────────────────────────
    // BLOCK 2 — Cursor Particle Trail (desktop only)
    // ─────────────────────────────────────────────
    if (window.matchMedia('(pointer: fine)').matches) {
        const particles = [];
        const PARTICLE_COUNT = 15;
        let mouseX = 0, mouseY = 0;

        document.addEventListener('mousemove', (e) => {
            mouseX = e.clientX;
            mouseY = e.clientY;
            const p = document.createElement('div');
            p.className = 'cursor-particle';
            p.style.cssText = `left:${mouseX}px;top:${mouseY}px;`;
            document.body.appendChild(p);
            particles.push(p);
            requestAnimationFrame(() => { p.classList.add('active'); });
            setTimeout(() => {
                p.classList.remove('active');
                setTimeout(() => p.remove(), 400);
            }, 600);
            if (particles.length > PARTICLE_COUNT) {
                const old = particles.shift();
                if (old && old.parentNode) old.remove();
            }
        });
    }

    // ─────────────────────────────────────────────
    // BLOCK 3 — Title Glitch Scramble on Scroll
    // ─────────────────────────────────────────────
    const GLITCH_CHARS = '!<>-_\\/[]{}—=+*^?#@|~ABCDEFabcdef0123456789';
    function scrambleHeading(el) {
        if (el.dataset.scrambled) return;
        el.dataset.scrambled = '1';
        const original = el.textContent;
        let frame = 0;
        const totalFrames = 20;
        const interval = setInterval(() => {
            frame++;
            el.textContent = original.split('').map((ch, i) => {
                if (ch === ' ') return ' ';
                if (frame / totalFrames > i / original.length) return ch;
                return GLITCH_CHARS[Math.floor(Math.random() * GLITCH_CHARS.length)];
            }).join('');
            if (frame >= totalFrames) {
                clearInterval(interval);
                el.textContent = original;
            }
        }, 40);
    }

    const headingObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                scrambleHeading(entry.target);
                headingObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.6 });

    document.querySelectorAll('section h2').forEach(h => headingObserver.observe(h));

    // ─────────────────────────────────────────────
    // BLOCK 4 — 3D Card Flip
    // ─────────────────────────────────────────────
    document.querySelectorAll('.project-card').forEach(card => {
        card.addEventListener('click', function (e) {
            if (e.target.closest('a')) return; // let links work normally
            this.classList.toggle('flipped');
        });

        card.addEventListener('mousemove', function (e) {
            if (this.classList.contains('flipped')) return;
            const rect = this.getBoundingClientRect();
            const x = ((e.clientX - rect.left) / rect.width - 0.5) * 18;
            const y = ((e.clientY - rect.top) / rect.height - 0.5) * -18;
            this.style.transform = `perspective(800px) rotateY(${x}deg) rotateX(${y}deg) translateZ(8px)`;
            this.classList.add('is-tilting');
        });

        card.addEventListener('mouseleave', function () {
            this.style.transform = '';
            this.classList.remove('is-tilting');
        });
    });

    // ─────────────────────────────────────────────
    // BLOCK 5 — Scroll-Linked Background Color Morph
    // ─────────────────────────────────────────────
    const colorMap = [
        { selector: '#hero',       color: '#0b0b0b' },
        { selector: '#about',      color: '#0d0f0b' },
        { selector: '#skills',     color: '#0b0d0f' },
        { selector: '#projects',   color: '#0f0b0b' },
        { selector: '#experience', color: '#0b0b10' },
        { selector: '#contact',    color: '#0b100b' },
    ];

    colorMap.forEach(({ selector, color }) => {
        const el = document.querySelector(selector);
        if (!el || typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') return;
        ScrollTrigger.create({
            trigger: el,
            start: 'top center',
            end: 'bottom center',
            onEnter: () => gsap.to(document.body, { backgroundColor: color, duration: 1.2, ease: 'power2.out' }),
            onEnterBack: () => gsap.to(document.body, { backgroundColor: color, duration: 1.2, ease: 'power2.out' }),
        });
    });

    // ─────────────────────────────────────────────
    // BLOCK 6 — Skill Proficiency Counters
    // ─────────────────────────────────────────────
    const counterObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (!entry.isIntersecting) return;
            const bar = entry.target;
            const target = parseInt(bar.dataset.level || bar.getAttribute('style')?.match(/(\d+)%/)?.[1] || 0, 10);
            const label = bar.closest('.skill-item')?.querySelector('.skill-percentage, .skill-level');
            let current = 0;
            const step = Math.ceil(target / 50);
            const tick = setInterval(() => {
                current = Math.min(current + step, target);
                if (label) label.textContent = current + '%';
                bar.style.width = current + '%';
                if (current >= target) clearInterval(tick);
            }, 20);
            counterObserver.unobserve(bar);
        });
    }, { threshold: 0.5 });

    document.querySelectorAll('.skill-bar, .skill-progress').forEach(bar => counterObserver.observe(bar));

    // ─────────────────────────────────────────────
    // BLOCK 7 — Film Grain Overlay (Optimized Tiled Pattern)
    // ─────────────────────────────────────────────
    (function initFilmGrain() {
        const canvas = document.createElement('canvas');
        canvas.id = 'film-grain';
        canvas.style.cssText = 'position:fixed;top:0;left:0;width:100vw;height:100vh;pointer-events:none;z-index:9998;opacity:0.035;';
        document.body.appendChild(canvas);

        const ctx = canvas.getContext('2d');
        function resize() { 
            canvas.width = window.innerWidth; 
            canvas.height = window.innerHeight; 
        }
        resize();
        window.addEventListener('resize', resize);

        // Pre-render a few small noise patterns (150x150 px) at startup
        const patternSize = 150;
        const patterns = [];
        for (let f = 0; f < 6; f++) {
            const pCanvas = document.createElement('canvas');
            pCanvas.width = patternSize;
            pCanvas.height = patternSize;
            const pCtx = pCanvas.getContext('2d');
            const imgData = pCtx.createImageData(patternSize, patternSize);
            const data = imgData.data;
            for (let i = 0; i < data.length; i += 4) {
                const v = Math.random() * 255 | 0;
                data[i] = data[i + 1] = data[i + 2] = v;
                data[i + 3] = 35; // Alpha opacity of grain
            }
            pCtx.putImageData(imgData, 0, 0);
            patterns.push(pCanvas);
        }

        let frameIndex = 0;
        function grain() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            const pattern = ctx.createPattern(patterns[frameIndex], 'repeat');
            if (pattern) {
                ctx.fillStyle = pattern;
                ctx.fillRect(0, 0, canvas.width, canvas.height);
            }
            frameIndex = (frameIndex + 1) % patterns.length;
            setTimeout(() => {
                requestAnimationFrame(grain);
            }, 50); // 20 FPS for natural cinematic grain
        }

        if (document.readyState === 'complete') {
            grain();
        } else {
            window.addEventListener('load', grain);
        }
    })();

    // ─────────────────────────────────────────────
    // BLOCK 8 — Konami Code Easter Egg
    // ─────────────────────────────────────────────
    const KONAMI = [38,38,40,40,37,39,37,39,66,65];
    let konamiIdx = 0;
    document.addEventListener('keydown', function (e) {
        if (e.keyCode === KONAMI[konamiIdx]) {
            konamiIdx++;
            if (konamiIdx === KONAMI.length) {
                konamiIdx = 0;
                showToast('🎮 KONAMI CODE ACTIVATED! You found the secret!', 4000);
                // Spin the hero sphere if available
                if (window.heroMesh) {
                    if (typeof gsap !== 'undefined') {
                        gsap.to(window.heroMesh.rotation, { y: window.heroMesh.rotation.y + Math.PI * 6, duration: 2, ease: 'power2.out' });
                    }
                }
                // Confetti burst
                confettiBurst();
                // Terminal log
                const termOutput = document.getElementById('terminal-output');
                if (termOutput) {
                    const msg = document.createElement('p');
                    msg.style.color = '#d4ff33';
                    msg.textContent = '> [SYSTEM]: Konami sequence detected. Welcome, developer. 🎉';
                    termOutput.appendChild(msg);
                    termOutput.scrollTop = termOutput.scrollHeight;
                }
            }
        } else {
            konamiIdx = 0;
        }
    });

    function confettiBurst() {
        const colors = ['#d4ff33','#10b981','#ff0055','#fff','#7c3aed'];
        for (let i = 0; i < 80; i++) {
            const dot = document.createElement('div');
            dot.style.cssText = `
                position:fixed;
                width:8px;height:8px;border-radius:50%;
                background:${colors[i % colors.length]};
                left:${Math.random()*100}vw;top:${Math.random()*40 + 10}vh;
                pointer-events:none;z-index:99999;
                animation:confetti-fall 1.5s ease-out forwards;
            `;
            document.body.appendChild(dot);
            setTimeout(() => dot.remove(), 1600);
        }
    }

    // ─────────────────────────────────────────────
    // BLOCK 10 — Project Search Bar
    // ─────────────────────────────────────────────
    const searchInput = document.getElementById('project-search-input');
    const searchClear = document.getElementById('search-clear-btn');
    const searchCount = document.getElementById('search-results-count');

    function filterProjects(query) {
        const q = query.trim().toLowerCase();
        const cards = document.querySelectorAll('.project-card');
        let visible = 0;
        cards.forEach(card => {
            const text = (card.innerText + ' ' + (card.dataset.category || '') + ' ' + (card.dataset.tech || '')).toLowerCase();
            const match = !q || text.includes(q);
            card.classList.toggle('search-hidden', !match);
            if (match) visible++;
            // unflip when filtering
            if (!match) card.classList.remove('flipped');
        });
        if (searchCount) {
            searchCount.textContent = q ? `${visible} of ${cards.length} projects` : '';
        }
        if (searchClear) searchClear.style.display = q ? 'flex' : 'none';
    }

    if (searchInput) {
        searchInput.addEventListener('input', () => filterProjects(searchInput.value));
        searchInput.addEventListener('keydown', e => { if (e.key === 'Escape') { searchInput.value = ''; filterProjects(''); } });
    }
    if (searchClear) {
        searchClear.addEventListener('click', () => { searchInput.value = ''; filterProjects(''); searchInput.focus(); });
    }

    // ─────────────────────────────────────────────
    // BLOCK 11 — Copy Email to Clipboard
    // ─────────────────────────────────────────────
    const copyEmailBtn = document.getElementById('copy-email-btn');
    if (copyEmailBtn) {
        copyEmailBtn.addEventListener('click', function () {
            const email = this.dataset.email || 'shahzebfaisal5649@gmail.com';
            navigator.clipboard.writeText(email).then(() => {
                this.innerHTML = '<i class="fas fa-check"></i>';
                this.style.borderColor = '#10b981';
                this.style.color = '#10b981';
                showToast('📋 Email copied to clipboard!');
                setTimeout(() => {
                    this.innerHTML = '<i class="fas fa-copy"></i>';
                    this.style.borderColor = '';
                    this.style.color = '';
                }, 2500);
            }).catch(() => showToast('Could not copy — please copy manually.'));
        });
    }

    // ─────────────────────────────────────────────
    // BLOCK 13 — Stack Distribution Chart (SVG-based)
    // ─────────────────────────────────────────────
    function initStackDistribution() {
        const container = document.getElementById('stack-distribution');
        if (!container) return;

        const data = [
            { label: 'Frontend', value: 40, color: '#cbff00' },
            { label: 'Backend', value: 30, color: '#6366f1' },
            { label: 'AI / ML', value: 20, color: '#06b6d4' },
            { label: 'DevOps', value: 10, color: '#f59e0b' }
        ];


        const size = 220;
        const cx = size / 2;
        const cy = size / 2;
        const r = 80;
        const innerR = 45;

        let startAngle = -Math.PI / 2;
        let svgSlices = '';
        let svgLabels = '';

        data.forEach((d, i) => {
            const angle = (d.value / 100) * 2 * Math.PI;
            const endAngle = startAngle + angle;
            const midAngle = startAngle + angle / 2;

            const x1 = cx + r * Math.cos(startAngle);
            const y1 = cy + r * Math.sin(startAngle);
            const x2 = cx + r * Math.cos(endAngle);
            const y2 = cy + r * Math.sin(endAngle);
            const xi1 = cx + innerR * Math.cos(startAngle);
            const yi1 = cy + innerR * Math.sin(startAngle);
            const xi2 = cx + innerR * Math.cos(endAngle);
            const yi2 = cy + innerR * Math.sin(endAngle);
            const largeArc = angle > Math.PI ? 1 : 0;

            svgSlices += `<path d="M ${xi1} ${yi1} L ${x1} ${y1} A ${r} ${r} 0 ${largeArc} 1 ${x2} ${y2} L ${xi2} ${yi2} A ${innerR} ${innerR} 0 ${largeArc} 0 ${xi1} ${yi1} Z"
                fill="${d.color}" opacity="0.85" class="pie-slice" data-index="${i}" />`;

            if (d.value >= 15) {
                const lx = cx + (r + 18) * Math.cos(midAngle);
                const ly = cy + (r + 18) * Math.sin(midAngle);
                svgLabels += `<text x="${lx}" y="${ly}" text-anchor="middle" dominant-baseline="middle"
                    style="fill:rgba(255,255,255,0.85);font-size:11px;font-family:JetBrains Mono,monospace">${d.value}%</text>`;
            }

            startAngle = endAngle;
        });

        container.innerHTML = `
            <svg width="${size}" height="${size}" viewBox="0 0 ${size} ${size}" style="overflow:visible">
                ${svgSlices}
                ${svgLabels}
                <circle cx="${cx}" cy="${cy}" r="${innerR - 2}" fill="rgba(0,0,0,0.5)" />
                <text x="${cx}" y="${cy - 6}" text-anchor="middle" style="fill:#cbff00;font-size:13px;font-weight:600;font-family:JetBrains Mono,monospace">Stack</text>
                <text x="${cx}" y="${cy + 10}" text-anchor="middle" style="fill:rgba(255,255,255,0.6);font-size:10px;font-family:JetBrains Mono,monospace">Mix</text>
            </svg>`;
    }

    // ─────────────────────────────────────────────
    // BLOCK 14 — Grid / Timeline View Toggle
    // ─────────────────────────────────────────────
    const viewGrid     = document.getElementById('view-grid');
    const viewTimeline = document.getElementById('view-timeline');
    const projectsGrid = document.getElementById('projects-grid');

    if (viewGrid && viewTimeline && projectsGrid) {
        viewGrid.addEventListener('click', () => {
            projectsGrid.classList.remove('timeline-view');
            viewGrid.classList.add('active');
            viewTimeline.classList.remove('active');
        });

        viewTimeline.addEventListener('click', () => {
            projectsGrid.classList.add('timeline-view');
            viewTimeline.classList.add('active');
            viewGrid.classList.remove('active');
            document.querySelectorAll('.project-card.flipped').forEach(c => c.classList.remove('flipped'));
        });
    }

    // ─────────────────────────────────────────────
    // BLOCK 15 — Mobile Swipe Gestures on Project Cards
    // ─────────────────────────────────────────────
    if ('ontouchstart' in window) {
        document.querySelectorAll('.project-card').forEach(card => {
            let touchStartX = 0, touchStartY = 0;

            card.addEventListener('touchstart', (e) => {
                touchStartX = e.touches[0].clientX;
                touchStartY = e.touches[0].clientY;
            }, { passive: true });

            card.addEventListener('touchend', (e) => {
                const dx = e.changedTouches[0].clientX - touchStartX;
                const dy = e.changedTouches[0].clientY - touchStartY;
                if (Math.abs(dx) < 50 || Math.abs(dx) < Math.abs(dy)) return;

                const liveLink   = card.querySelector('a[href]:not([href*="github"])')?.href;
                const githubLink = card.querySelector('a[href*="github"]')?.href;

                if (dx < 0 && githubLink) {
                    window.open(githubLink, '_blank');
                    showToast('Opening GitHub ↗');
                } else if (dx > 0 && liveLink) {
                    window.open(liveLink, '_blank');
                    showToast('Opening Live Site ↗');
                }
            }, { passive: true });
        });
    }

    // Expose functions required by init()
    window.initStackDistribution = typeof initStackDistribution !== 'undefined' ? initStackDistribution : null;
    window.initSkillsRadar = typeof initSkillsRadar !== 'undefined' ? initSkillsRadar : null;

})();
