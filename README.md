# Shingo Institute AI-Enabled Avatar

A modern web application featuring an animated 2D avatar of Dr. Shingo that provides expert guidance on operational excellence, the Shingo Model, and lean manufacturing principles. The avatar connects to your local Ollama AI server for intelligent responses.

![Shingo AI Avatar](https://img.shields.io/badge/Shingo-AI%20Avatar-blue)
![React](https://img.shields.io/badge/React-18.x-61dafb)
![Node.js](https://img.shields.io/badge/Node.js-Express-green)
![Ollama](https://img.shields.io/badge/Ollama-phi3%3A3.8b-orange)

## 🎯 Features

- **Animated 2D Avatar**: Professional avatar with thinking animations, blinking eyes, and thought bubbles
- **AI-Powered Conversations**: Connects to your local Ollama server running phi3:3.8b
- **Shingo-Focused Responses**: AI configured to act as Dr. Shingo with domain-specific knowledge
- **Modern UI**: Clean, professional interface with Shingo Institute branding
- **Real-time Status**: Connection monitoring with visual indicators
- **Responsive Design**: Works on desktop and mobile devices
- **Professional Styling**: Gradient backgrounds, smooth animations, and modern design patterns

## 🏗️ Architecture

```
shingo-ai-avatar/
├── backend/                 # Express.js API server
│   ├── server.js           # Main server file
│   ├── package.json        # Backend dependencies
│   └── .env               # Environment configuration
├── frontend/               # React TypeScript application
│   ├── src/
│   │   ├── components/    # React components
│   │   │   ├── Avatar.tsx        # Animated avatar component
│   │   │   ├── ChatInterface.tsx # Main chat interface
│   │   │   └── Header.tsx        # Header with branding
│   │   └── App.tsx        # Main app component
│   └── package.json       # Frontend dependencies
└── package.json           # Root package with scripts
```

## 🚀 Prerequisites

Before setting up the Shingo AI Avatar, ensure you have:

1. **Node.js** (v16 or higher)
2. **npm** or **yarn**
3. **Ollama** installed and running on your Linux server
4. **phi3:3.8b model** pulled in Ollama

### Setting up Ollama (if not already done)

```bash
# Install Ollama (on your Linux server)
curl -fsSL https://ollama.ai/install.sh | sh

# Pull the phi3:3.8b model
ollama pull phi3:3.8b

# Start Ollama service (it should start automatically)
ollama serve
```

Verify Ollama is running:
```bash
curl http://localhost:11434/api/tags
```

## 📦 Installation

1. **Clone or create the project structure**:
```bash
mkdir shingo-ai-avatar
cd shingo-ai-avatar
```

2. **Install all dependencies**:
```bash
npm run install-all
```

This will install dependencies for the root project, backend, and frontend.

## ⚙️ Configuration

### Backend Configuration

Edit `backend/.env` to match your setup:

```env
# Ollama Server Configuration
OLLAMA_HOST=localhost          # Change if Ollama is on different server
OLLAMA_PORT=11434             # Default Ollama port
OLLAMA_MODEL=phi3:3.8b        # Model name in Ollama

# Backend Server Configuration
PORT=3001                     # Backend API port
NODE_ENV=development

# CORS Configuration
FRONTEND_URL=http://localhost:3000
```

**Important**: If your Ollama server is on a different machine, update `OLLAMA_HOST` to the IP address of your Linux server.

### Frontend Configuration

The frontend automatically connects to `http://localhost:3001` for the backend API. If you change the backend port, update the fetch URLs in `frontend/src/components/ChatInterface.tsx`.

## 🏃‍♂️ Running the Application

### Option 1: Run Everything Together (Recommended)

```bash
# From the root directory
npm run dev
```

This starts both the backend API server and React development server simultaneously.

### Option 2: Run Separately

**Terminal 1 - Backend**:
```bash
cd backend
npm run dev
```

**Terminal 2 - Frontend**:
```bash
cd frontend
npm start
```

## 🌐 Accessing the Application

1. **Frontend**: Open http://localhost:3000 in your browser
2. **Backend API**: Available at http://localhost:3001
3. **Health Check**: Visit http://localhost:3001/api/health to verify Ollama connection

## 🔧 API Endpoints

### Health Check
```
GET /api/health
```
Returns the connection status to Ollama and model information.

### Chat
```
POST /api/chat
Content-Type: application/json

{
  "message": "What is the Shingo Model?"
}
```

Returns AI response from Dr. Shingo avatar.

## 🎨 Avatar Features

The animated avatar includes:

- **Idle State**: Normal expression with occasional blinking
- **Thinking State**: 
  - Bouncing animation
  - Blinking eyes
  - Animated mouth
  - Floating thought bubbles
  - Pulsing ring effect
- **Professional Appearance**: Business suit with tie
- **Responsive Design**: Adapts to different screen sizes

## 🤖 AI Behavior

The AI is configured to:

- Act as Dr. Shingo Shingo, the renowned industrial engineer
- Focus only on Shingo Model, operational excellence, and lean manufacturing topics
- Politely redirect off-topic questions back to relevant subjects
- Provide wisdom-based responses emphasizing principles over tools
- Maintain respect for people and systems thinking approach

## 🔍 Troubleshooting

### Connection Issues

**Problem**: "Disconnected - Check backend & Ollama" status

**Solutions**:
1. Verify Ollama is running: `curl http://localhost:11434/api/tags`
2. Check backend server is running on port 3001
3. Verify the correct IP address in `backend/.env` if Ollama is on remote server
4. Check firewall settings if using remote Ollama server

### Backend Issues

**Problem**: Backend fails to start

**Solutions**:
1. Ensure Node.js is installed: `node --version`
2. Install dependencies: `cd backend && npm install`
3. Check port 3001 is available: `lsof -i :3001`
4. Verify `.env` file exists and has correct values

### Frontend Issues

**Problem**: Frontend shows error or won't load

**Solutions**:
1. Ensure React dependencies are installed: `cd frontend && npm install`
2. Check port 3000 is available
3. Verify backend is running and accessible
4. Clear browser cache and reload

### AI Response Issues

**Problem**: AI gives generic responses or ignores Shingo context

**Solutions**:
1. Verify you're using the correct model: `ollama list`
2. Check the system prompt in `backend/server.js`
3. Restart the backend server to reload the prompt
4. Try asking more specific Shingo-related questions

## 🛠️ Customization

### Changing the AI Model

1. Pull a different model in Ollama: `ollama pull <model-name>`
2. Update `OLLAMA_MODEL` in `backend/.env`
3. Restart the backend server

### Modifying the Avatar

Edit `frontend/src/components/Avatar.tsx` and `frontend/src/components/Avatar.css` to customize:
- Avatar appearance
- Animation behaviors
- Colors and styling
- Responsive breakpoints

### Updating the System Prompt

Modify the `SHINGO_SYSTEM_PROMPT` constant in `backend/server.js` to change how the AI behaves.

## 📱 Mobile Support

The application is fully responsive and works on:
- Desktop browsers (Chrome, Firefox, Safari, Edge)
- Tablet devices
- Mobile phones (iOS Safari, Android Chrome)

On mobile devices, the layout automatically adjusts to a vertical stack for better usability.

## 🔒 Security Notes

- The application runs locally and doesn't send data to external services
- All AI processing happens on your local Ollama server
- No chat history is stored or transmitted
- CORS is configured to only allow requests from the frontend URL

## 📈 Performance

- **Frontend**: React with TypeScript for type safety and performance
- **Backend**: Express.js with minimal middleware for fast API responses
- **AI**: Local Ollama server eliminates network latency to external APIs
- **Animations**: CSS-based animations for smooth 60fps performance

## 🤝 Contributing

To extend this application:

1. **Add new avatar states**: Extend the Avatar component with new animations
2. **Enhance AI responses**: Modify the system prompt or add context processing
3. **Add features**: Implement chat history, user preferences, or additional UI elements
4. **Improve mobile experience**: Add touch gestures or mobile-specific features

## 📄 License

This project is created for the Shingo Institute demonstration purposes.

## 🆘 Support

For issues or questions:

1. Check the troubleshooting section above
2. Verify all prerequisites are met
3. Ensure Ollama is properly configured and running
4. Check browser console for error messages

## 🎉 Enjoy Your Shingo AI Avatar!

Your AI-enabled avatar is now ready to provide expert guidance on operational excellence and the Shingo Model. The avatar will help users understand lean manufacturing principles, continuous improvement, and leadership development through the wisdom of Dr. Shingo.