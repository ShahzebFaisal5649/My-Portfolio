// All previous outputs from commands and such
let OutputsText = "";
// Lets user scroll through the past outputs
let ScrollOffset = 0;

// String to store the current text input
let InputText = "";
// Dictionary to store info about the text blinker
let Blinker = {Index: 0, Time: Date.now() * 0.001};

// Current directory
let Directory = "C:/Users/datasci";

// Stores whether to render data visualization or normal terminal
let DisplayDataViz = false;

// Chat history for GroqCloud integration
let ChatHistory = [];
let IsProcessingChat = false;

// Your GroqCloud API key - replace with your actual key
const GROQ_API_KEY = "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";

// Function to give text for rendering
function GetText()
{
    // Text to be displayed
    let FinalText = "";

    if (Time < 5 || OutputsText.split("\n").length < 19) // If in boot sequence
    {
        BootSequence();
        FinalText = OutputsText;
    }

    else if (!DisplayDataViz) // If not in boot sequence
    {
        // Trim the previous output to be displayed
        let Lines = OutputsText.split("\n");
        FinalText += Lines.slice(ScrollOffset, Math.min(ScrollOffset + 30, Lines.length)).join("\n");

        // Check if command input is on screen
        if (ScrollOffset + 30 >= Lines.length)
        {
            if ((Date.now() * 0.001 - Blinker.Time) % 1 < 0.5) // Show blinker
            {
                FinalText += `${Directory}> ${InputText.slice(0, Blinker.Index)}█${InputText.slice(Blinker.Index + 1, InputText.length)}`;
            }

            else // Dont show blinker
            {
                FinalText += `${Directory}> ${InputText}`;
            }
        }
    }

    else
    {
        return GetDataVisualization();
    }

    return FinalText;
}

// Function to handle key press and text input
function KeyPressed(key)
{
    if (DisplayDataViz)
    {
        if (key === "Escape")
        {
            DisplayDataViz = false;
        }
    }

    else if (Time > 5)
    {
        let LinesCount = OutputsText.split("\n").length;

        if (key.length === 1 && InputText.length + Directory.length + 3 < 50) // Add character
        {
            InputText = InputText.slice(0, Blinker.Index) + key.toLowerCase() + InputText.slice(Blinker.Index, InputText.length);
            Blinker = {Index: Blinker.Index + 1, Time: Date.now() * 0.001}; // Update blinker pos and reset its time
            if (ScrollOffset < LinesCount - 30) {ScrollOffset = Math.max(0, LinesCount - 30);} // Reset the scroll if off screen
        }
        
        else if (key === "Backspace" && InputText && Blinker.Index > 0) // Remove character
        {
            InputText = InputText.slice(0, Blinker.Index - 1) + InputText.slice(Blinker.Index, InputText.length);
            Blinker = {Index: Blinker.Index - 1, Time: Date.now() * 0.001}; // Update blinker pos and reset its time
            if (ScrollOffset < LinesCount - 30) {ScrollOffset = Math.max(0, LinesCount - 30);} // Reset the scroll if off screen
        }

        else if (key === "ArrowLeft") // Move blinker left
        {
            Blinker = {Index: Math.max(0, Blinker.Index - 1), Time: Date.now() * 0.001};
        }

        else if (key === "ArrowRight") // Move blinker right
        {
            Blinker = {Index: Math.min(InputText.length, Blinker.Index + 1), Time: Date.now() * 0.001};
        }

        else if (key === "ArrowUp") // Scroll text upwards
        {
            ScrollOffset = Math.max(0, ScrollOffset - 1);
        }

        else if (key === "ArrowDown") // Scroll text downwards
        {
            ScrollOffset = Math.min(LinesCount - 1, ScrollOffset + 1);
        }

        else if (key === "Tab") // Auto complete
        {
            AutoComplete(); // Complete input text
            Blinker = {Index: InputText.length, Time: Date.now() * 0.001}; // Update blinker pos and reset its time
            if (ScrollOffset < LinesCount - 30) {ScrollOffset = Math.max(0, LinesCount - 30);} // Reset the scroll if off screen
        }

        else if (key === "Enter") // Submit text
        {
            OutputsText += `${Directory}> ${InputText}\n`;
            ExecuteCommand();

            InputText = "";
            Blinker = {Index: 0, Time: Date.now() * 0.001};

            LinesCount = OutputsText.split("\n").length;
            if (ScrollOffset < LinesCount - 30) {ScrollOffset = Math.max(0, LinesCount - 30);}
        }
    }
}

function BootSequence()
{
    OutputsText = "";
    let LoadingChars = ["-", "\\", "|", "/"];

    if (Time > 0.1) {OutputsText += " ██████╗  █████╗ ████████╗ █████╗ \n";}
    if (Time > 0.2) {OutputsText += " ██╔══██╗██╔══██╗╚══██╔══╝██╔══██╗\n";}
    if (Time > 0.3) {OutputsText += " ██║  ██║███████║   ██║   ███████║\n";}
    if (Time > 0.4) {OutputsText += " ██║  ██║██╔══██║   ██║   ██╔══██║\n";}
    if (Time > 0.5) {OutputsText += " ██████╔╝██║  ██║   ██║   ██║  ██║\n";}
    if (Time > 0.6) {OutputsText += " ╚═════╝ ╚═╝  ╚═╝   ╚═╝   ╚═╝  ╚═╝\n\n\n";}
    if (Time > 1.1) {OutputsText += "Welcome to DataSci-OS 4.2.0 x86_64\n";}
    if (Time > 1.2) {OutputsText += "AI-Enhanced Data Science Terminal\n";}
    if (Time > 1.3) {OutputsText += "Type 'help' for commands or 'ai [query]' for ML assistance\n\n\n";}
    if (Time > 1.7) {OutputsText += `Loading ML Models ${LoadingChars[Math.ceil((Math.min(3.7, Time) % 0.4) / 0.1) - 1]} ${Math.ceil(Math.min(100, (Time - 1.7) / 0.02))}%\n`;}
    if (Time > 3.7) {OutputsText += "TensorFlow: Ready\n";}
    if (Time > 3.8) {OutputsText += "PyTorch: Ready\n";}
    if (Time > 3.9) {OutputsText += "Scikit-learn: Ready\n";}
    if (Time > 4.0) {OutputsText += "GroqCloud API: Connected\n\n";}

    ScrollOffset = Math.min(OutputsText.split("\n").length - 1, ScrollOffset);
}

// Data Science focused file system
const FileSystem = {
    "root": {type: "directory", contents: {

        "projects": {type: "directory", contents: {
            "readme.txt": {type: "file", content: "Data Science Portfolio Projects\n\nThis directory contains my machine learning and data\nscience projects spanning multiple domains:\n- Natural Language Processing\n- Computer Vision\n- Time Series Analysis\n- Deep Learning\n- MLOps and Production Systems\n\nEach project demonstrates end-to-end ML workflows\nfrom data preprocessing to model deployment."},
            "insightai.lnk": {type: "link", content: "https://github.com/LeoRigasaki/InSightAI"},
            "stock_prediction.lnk": {type: "link", content: "https://github.com/LeoRigasaki/stock-prediction-engine"},
            "climate_predictor.lnk": {type: "link", content: "https://github.com/LeoRigasaki/climate-impact-predictor"},
            "urdu_whisper.lnk": {type: "link", content: "https://huggingface.co/leorigasaki54/whisper-small-urdu"},
            "dqn_atari.lnk": {type: "link", content: "https://github.com/LeoRigasaki/dqn-atari"},
            "ecommerce_ml.lnk": {type: "link", content: "https://github.com/LeoRigasaki/ecommerce-warehouse-ml"},
        }},

        "datasets": {type: "directory", contents: {
            "financial.csv": {type: "file", content: "Stock market data with 10M+ records\nFeatures: OHLCV, technical indicators\nTimeframe: 2010-2024\nAccuracy: 94.2% prediction rate"},
            "nlp_corpus.txt": {type: "file", content: "Multilingual text dataset\n500K+ documents in 12 languages\nPreprocessed and tokenized\nUsed for Urdu speech recognition model"},
            "climate_data.json": {type: "file", content: "Global climate measurements\nTemperature, precipitation, CO2 levels\n50 years of historical data\nMLOps pipeline ready"},
        }},

        "models": {type: "directory", contents: {
            "lstm_stock.pkl": {type: "file", content: "LSTM Neural Network for Stock Prediction\nAccuracy: 94.2%\nParameters: 2.1M\nTraining time: 48 hours\nProduction ready"},
            "whisper_urdu.bin": {type: "file", content: "Fine-tuned Whisper Model (Urdu)\nWER: 12.3%\nModel size: 244MB\nHuggingFace deployed\nReal-time inference"},
            "climate_rf.joblib": {type: "file", content: "Random Forest Climate Model\nF1-Score: 0.89\nFeatures: 127 environmental variables\nDeployment: Docker container"},
        }},

        "about.txt": {type: "file", content: "Data Scientist & ML Engineer\n\nI'm passionate about transforming complex data into\nactionable insights through advanced machine learning.\nMy expertise spans the entire ML lifecycle:\n\n• Data Engineering & ETL Pipelines\n• Feature Engineering & Selection  \n• Model Development & Optimization\n• MLOps & Production Deployment\n• A/B Testing & Model Monitoring\n\nTechnical Stack:\nPython, TensorFlow, PyTorch, scikit-learn\nDocker, Kubernetes, AWS, GCP\nSparkl Airflow, MLflow, DVC\n\nI've deployed ML models serving millions of\npredictions daily and created open-source\ntools used by the data science community."},

        "experience.txt": {type: "file", content: "Professional Experience\n\n3+ years developing production ML systems:\n\n• Built stock prediction engine with 94.2% accuracy\n• Created PyPI package (InSightAI) with 1K+ downloads\n• Fine-tuned speech recognition for low-resource languages\n• Deployed climate impact models in cloud infrastructure\n• Published technical articles on Medium (@sohaibahmedDS)\n\nKey Achievements:\n- Reduced model inference time by 73%\n- Increased prediction accuracy by 12%\n- Automated ML pipeline reducing manual work by 80%\n- Presented at 2 data science conferences\n\nContinuous Learning:\n- Kaggle Competitions Expert\n- HuggingFace contributor\n- Active in ML research community"},

        "dataviz.exe": {type: "executable", content: "dataviz"},
    }},
};

// GroqCloud API Integration
async function CallGroqAPI(userMessage) {
    if (GROQ_API_KEY === "YOUR_GROQ_API_KEY_HERE") {
        return "Error: GroqCloud API key not configured. Please set your API key.";
    }

    const messages = [
        {
            "role": "system",
            "content": "You are DataSci AI, an expert data science assistant. Provide concise, technical responses about machine learning, statistics, and data analysis. Keep responses under 300 characters for terminal display. Use technical terminology appropriately and answer everything without any buzzwords."
        },
        ...ChatHistory.slice(-5), // Keep last 5 messages for context
        {
            "role": "user", 
            "content": userMessage
        }
    ];

    try {
        const response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${GROQ_API_KEY}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                model: "llama-3.3-70b-versatile",
                messages: messages,
                max_tokens: 200,
                temperature: 0.7,
                tools: [
                    {
                        "type": "function",
                        "function": {
                            "name": "analyze_model_performance",
                            "description": "Analyze ML model performance metrics",
                            "parameters": {
                                "type": "object",
                                "properties": {
                                    "accuracy": {"type": "number", "description": "Model accuracy"},
                                    "model_type": {"type": "string", "description": "Type of ML model"}
                                },
                                "required": ["accuracy", "model_type"]
                            }
                        }
                    },
                    {
                        "type": "function",
                        "function": {
                            "name": "suggest_algorithm",
                            "description": "Suggest best ML algorithm for a problem",
                            "parameters": {
                                "type": "object",
                                "properties": {
                                    "problem_type": {"type": "string", "description": "Type of ML problem"},
                                    "data_size": {"type": "string", "description": "Size of dataset"}
                                },
                                "required": ["problem_type"]
                            }
                        }
                    }
                ],
                tool_choice: "auto"
            })
        });

        const data = await response.json();
        
        if (data.choices && data.choices[0]) {
            const message = data.choices[0].message;
            
            // Handle tool calls
            if (message.tool_calls && message.tool_calls.length > 0) {
                const toolCall = message.tool_calls[0];
                const functionName = toolCall.function.name;
                const args = JSON.parse(toolCall.function.arguments);
                
                let toolResponse = "";
                
                if (functionName === "analyze_model_performance") {
                    toolResponse = `Model Analysis:\n${args.model_type} with ${args.accuracy}% accuracy\nStatus: ${args.accuracy > 90 ? 'Excellent' : args.accuracy > 80 ? 'Good' : 'Needs improvement'}`;
                } else if (functionName === "suggest_algorithm") {
                    const suggestions = {
                        "classification": "Random Forest or XGBoost for tabular data, CNN for images",
                        "regression": "Linear/Ridge regression for simple, Neural Networks for complex",
                        "clustering": "K-Means for spherical, DBSCAN for arbitrary shapes",
                        "nlp": "Transformers (BERT/GPT) for text understanding",
                        "time_series": "LSTM/GRU for sequences, ARIMA for traditional"
                    };
                    toolResponse = suggestions[args.problem_type.toLowerCase()] || "Consider ensemble methods for best results";
                }
                
                return toolResponse;
            }
            
            return message.content;
        } else {
            return "Error: Invalid response from GroqCloud API";
        }
    } catch (error) {
        return `Error: ${error.message}`;
    }
}

function ListFiles()
{
    // Move to current folder
    let DirectoryContents = FileSystem.root;
    for (let Dir of Directory.slice(17).split("/").filter(Boolean)) {DirectoryContents = DirectoryContents.contents[Dir];}

    // Print directory being listed
    OutputsText += `\n${Directory.split("/").slice(-1)[0] || "root"}/ [${Object.keys(DirectoryContents.contents).length} items]`;

    // Print each file with data science styling
    const Files = Object.keys(DirectoryContents.contents);
    for (let [Index, File] of Files.entries()) {
        const item = DirectoryContents.contents[File];
        let icon = "📁";
        if (item.type === "file") {
            if (File.endsWith(".py")) icon = "🐍";
            else if (File.endsWith(".csv")) icon = "📊";
            else if (File.endsWith(".pkl") || File.endsWith(".joblib")) icon = "🤖";
            else if (File.endsWith(".txt")) icon = "📄";
            else if (File.endsWith(".json")) icon = "📋";
            else icon = "📄";
        } else if (item.type === "link") icon = "🔗";
        else if (item.type === "executable") icon = "⚡";
        
        OutputsText += `\n${Index == Files.length - 1 ? "┗" : "┣"}━━ ${icon} ${File}`;
    }

    OutputsText += "\n\n";
}

function ChangeDirectory(InputDirectory)
{
    let CurrentDirectory = Directory.slice(17).split("/").filter(Boolean);

    // Go back a folder
    if (InputDirectory === "..") {CurrentDirectory.pop();}
    
    // Return to root folder
    else if (InputDirectory === "/") {CurrentDirectory = [];}
    
    // Move to new folder
    else
    {
        // Move to current folder
        let DirectoryContents = FileSystem.root;
        for (let Dir of CurrentDirectory) {DirectoryContents = DirectoryContents.contents[Dir];}

        // Add new folder to path
        if (DirectoryContents.contents[InputDirectory] && DirectoryContents.contents[InputDirectory].type === "directory")
        {CurrentDirectory.push(InputDirectory);}
        
        // Desired path doesn't exist
        else {OutputsText += `\ncd: '${InputDirectory}' No such directory\n\n`;return;}
    }

    Directory = `C:/Users/datasci${CurrentDirectory.length ? "/" : ""}${CurrentDirectory.join("/")}`;
}

function StartFile(InputFile)
{
    // Move to current folder
    let DirectoryContents = FileSystem.root;
    for (let Dir of Directory.slice(17).split("/").filter(Boolean)) {DirectoryContents = DirectoryContents.contents[Dir];}

    // Perform action based on what file is opened
    if (DirectoryContents.contents[InputFile] && DirectoryContents.contents[InputFile].type === "file")
    {
        OutputsText += `\n📄 ${InputFile}\n${DirectoryContents.contents[InputFile].content}\n\n`;
    }

    else if (DirectoryContents.contents[InputFile] && DirectoryContents.contents[InputFile].type === "link")
    {
        OutputsText += `\n🔗 Opening: ${DirectoryContents.contents[InputFile].content}\n\n`;
        window.open(DirectoryContents.contents[InputFile].content);
    }

    else if (DirectoryContents.contents[InputFile] && DirectoryContents.contents[InputFile].type === "executable")
    {
        OutputsText += `\n⚡ Launching Data Visualization Suite...\n\n`;
        DisplayDataViz = true;
    }
    
    // Selected file doesn't exist
    else {OutputsText += `\nopen: '${InputFile}' No such file\n\n`;}
}

// Enhanced ExecuteCommand function with AI integration
async function ExecuteCommand()
{
    const [Command, ...Arguments] = InputText.split(" ");

    if (Command)
    {
        ComputerBeep.play();
        ComputerBeep.currentTime = 0;
    }

    switch (Command)
    {
        case "ls":
        case "dir":
            if (Arguments.length) {OutputsText += "\nError: 'ls' doesn't accept any arguments\n\n";}
            else {ListFiles();}
            break;

        case "cd":
            if (Arguments.length > 1) {OutputsText += "\nError: 'cd' doesn't accept more that one argument\n\n";}
            else {ChangeDirectory(Arguments[0]);}
            break;

        case "open":
        case "start":
            if (Arguments.length > 1) {OutputsText += "\nError: 'open' doesn't accept more that one argument\n\n";}
            else {StartFile(Arguments[0]);}
            break;

        case "clear":
            if (Arguments.length) {OutputsText += "\nError: 'clear' doesn't accept any arguments\n\n";}
            else {BootSequence();}
            break;

        case "ai":
            if (!Arguments.length) {
                OutputsText += "\nDataSci AI Assistant\nUsage: ai [your question]\nExample: ai what is overfitting?\n\n";
            } else {
                const query = Arguments.join(" ");
                OutputsText += "\n🤖 DataSci AI: Processing...\n";
                
                if (!IsProcessingChat) {
                    IsProcessingChat = true;
                    try {
                        const response = await CallGroqAPI(query);
                        // Add to chat history
                        ChatHistory.push({role: "user", content: query});
                        ChatHistory.push({role: "assistant", content: response});
                        
                        // Remove "Processing..." line
                        OutputsText = OutputsText.replace("🤖 DataSci AI: Processing...\n", "");
                        OutputsText += `🤖 DataSci AI: ${response}\n\n`;
                    } catch (error) {
                        OutputsText = OutputsText.replace("🤖 DataSci AI: Processing...\n", "");
                        OutputsText += `🤖 DataSci AI: Error - ${error.message}\n\n`;
                    }
                    IsProcessingChat = false;
                }
            }
            break;

        case "stats":
            OutputsText += "\n📊 Portfolio Statistics\n";
            OutputsText += "Models Deployed: 12\n";
            OutputsText += "Accuracy Average: 91.7%\n";
            OutputsText += "Data Processed: 2.1TB\n";
            OutputsText += "GitHub Stars: 89\n";
            OutputsText += "HuggingFace Downloads: 1.2K\n\n";
            break;

        case "models":
            OutputsText += "\n🤖 Available ML Models\n";
            OutputsText += "┣━━ LSTM Stock Predictor (94.2% accuracy)\n";
            OutputsText += "┣━━ Whisper Urdu Speech (12.3% WER)\n";
            OutputsText += "┣━━ Climate Random Forest (F1: 0.89)\n";
            OutputsText += "┗━━ DQN Atari Agent (Stable)\n\n";
            break;

        case "help":
            if (Arguments.length) {OutputsText += "\nError: 'help' doesn't accept any arguments\n\n";}
            else {OutputsText += "\n📚 DataSci Terminal Commands\n\nNavigation:\nLS/DIR     List directory contents\nCD         Change directory ('..' = back, '/' = root)\nOPEN       Open files and launch programs\nCLEAR      Clear terminal output\n\nData Science:\nAI [query] Chat with DataSci AI assistant\nSTATS      Show portfolio statistics\nMODELS     List available ML models\nDATA       Show dataset information\n\nPress ESC to exit programs | TAB for autocomplete\n\n";}
            break;

        case "data":
            OutputsText += "\n📈 Dataset Overview\n";
            OutputsText += "Financial: 10M+ stock records (2010-2024)\n";
            OutputsText += "NLP Corpus: 500K documents, 12 languages\n";
            OutputsText += "Climate: 50 years global measurements\n";
            OutputsText += "Total Storage: 847GB processed\n\n";
            break;

        case "":
            break;

        default:
            OutputsText += `\n❌ Command not found: '${Command}'\nType 'help' for available commands\n\n`;
    }
}
  
// Enhanced Autocomplete function
function AutoComplete()
{
    const [Command, ...Arguments] = InputText.split(" ");
    const CommandsList = ["ls", "dir", "cd", "open", "start", "clear", "ai", "help", "stats", "models", "data"];
    
    // Auto completing a command
    if (!Arguments.length)
    {
        const CompletedCommand = CommandsList.filter(Element => Element.startsWith(Command));
        if (CompletedCommand.length) {InputText = CompletedCommand[0]};
    }
  
    // Auto completing a file name
    if (["cd", "open", "start"].includes(Command) && Arguments.length < 2)
    {
        // Move to current folder
        let DirectoryContents = FileSystem.root;
        for (let Dir of Directory.slice(17).split("/").filter(Boolean)) {DirectoryContents = DirectoryContents.contents[Dir];}

        // Possible file names
        const PossibleCompletions = Object.keys(DirectoryContents.contents).filter(Item => Item.startsWith(Arguments[0] || ""));
        if (PossibleCompletions.length) {InputText = `${Command} ${PossibleCompletions[0]}`;}
    }
}

// Data Visualization replacement for plasma
function GetDataVisualization()
{
    const chars = [" ", ".", ":", ";", "|", "▌", "▓", "█"];
    let Text = "";

    for (let Row = 1; Row < 31; Row++)
    {
        for (let Col = 1; Col < 56; Col++)
        {
            const Intensity = GetDataIntensity(Row / 30, Col / 55);
            Text += chars[Math.max(Math.min(Math.floor(Intensity), chars.length - 1), 0)];
        }

        Text += "\n";
    }

    return Text;
}

function GetDataIntensity(Row, Col)
{ 
    let Intensity = 0.0;

    // Create data flow patterns
    Intensity += 2 * Math.sin(8 * Col + Time * 2) * Math.exp(-Math.abs(Row - 0.5) * 3);
    Intensity += 3 * Math.sin(12 * Row + Time * 1.5) * Math.exp(-Math.abs(Col - 0.3) * 4);
    
    // Neural network node simulation
    const nodeX = 0.7 + 0.1 * Math.sin(Time);
    const nodeY = 0.6 + 0.1 * Math.cos(Time * 1.2);
    const distToNode = Math.sqrt((Col - nodeX) ** 2 + (Row - nodeY) ** 2);
    Intensity += 4 * Math.exp(-distToNode * 15) * (1 + Math.sin(Time * 3));

    // Data stream visualization
    Intensity += 1.5 * Math.sin(Row * 15 + Col * 8 + Time * 4) * Math.exp(-Math.abs(Col - 0.8) * 2);

    return 8 * (0.5 + 0.5 * Math.sin(Intensity + Time));
}