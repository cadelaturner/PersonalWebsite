const express = require('express');
const cors = require('cors');
const axios = require('axios');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors({
  origin: process.env.FRONTEND_URL || 'http://localhost:3000'
}));
app.use(express.json());

// Shingo-specific system prompt
const SHINGO_SYSTEM_PROMPT = `You are Dr. Shingo Shingo, the renowned industrial engineer and quality expert who developed the Shingo Model for operational excellence. You should only answer questions related to:

1. The Shingo Model and its principles
2. Operational excellence
3. Lean manufacturing and continuous improvement
4. Quality management systems
5. Leadership and culture transformation
6. The Shingo Institute and its programs
7. Manufacturing and industrial engineering best practices

If someone asks about topics unrelated to these areas, politely redirect them to Shingo-related topics and explain that you focus specifically on operational excellence and the Shingo Model.

Respond as Dr. Shingo would - with wisdom, focus on principles over tools, emphasis on respect for people, and a deep understanding of systems thinking. Keep responses concise but insightful.`;

// Chat endpoint
app.post('/api/chat', async (req, res) => {
  try {
    const { message } = req.body;
    
    if (!message) {
      return res.status(400).json({ error: 'Message is required' });
    }

    // Prepare the prompt with system context
    const fullPrompt = `${SHINGO_SYSTEM_PROMPT}\n\nUser: ${message}\n\nDr. Shingo:`;

    // Make request to Ollama
    const ollamaResponse = await axios.post(`http://${process.env.OLLAMA_HOST}:${process.env.OLLAMA_PORT}/api/generate`, {
      model: process.env.OLLAMA_MODEL,
      prompt: fullPrompt,
      stream: false,
      options: {
        temperature: 0.7,
        top_p: 0.9,
        max_tokens: 500
      }
    });

    const aiResponse = ollamaResponse.data.response;

    res.json({ 
      response: aiResponse,
      timestamp: new Date().toISOString()
    });

  } catch (error) {
    console.error('Error communicating with Ollama:', error.message);
    
    if (error.code === 'ECONNREFUSED') {
      res.status(503).json({ 
        error: 'Unable to connect to Ollama server. Please ensure Ollama is running.' 
      });
    } else {
      res.status(500).json({ 
        error: 'Internal server error while processing your request.' 
      });
    }
  }
});

// Health check endpoint
app.get('/api/health', async (req, res) => {
  try {
    const ollamaHealth = await axios.get(`http://${process.env.OLLAMA_HOST}:${process.env.OLLAMA_PORT}/api/tags`);
    res.json({ 
      status: 'healthy',
      ollama: 'connected',
      model: process.env.OLLAMA_MODEL,
      timestamp: new Date().toISOString()
    });
  } catch (error) {
    res.status(503).json({ 
      status: 'unhealthy',
      ollama: 'disconnected',
      error: error.message,
      timestamp: new Date().toISOString()
    });
  }
});

app.listen(PORT, () => {
  console.log(`🚀 Shingo AI Backend running on port ${PORT}`);
  console.log(`📡 Connecting to Ollama at ${process.env.OLLAMA_HOST}:${process.env.OLLAMA_PORT}`);
  console.log(`🤖 Using model: ${process.env.OLLAMA_MODEL}`);
});