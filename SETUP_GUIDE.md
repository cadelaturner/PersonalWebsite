# Quick Setup Guide - Shingo AI Avatar

## 🚀 Get Started in 5 Minutes

### Step 1: Install Dependencies
```bash
# Install all project dependencies
npm run install-all
```

### Step 2: Configure Backend
If your Ollama server is on a different machine, edit `backend/.env`:
```env
OLLAMA_HOST=your-server-ip-address
```

### Step 3: Start the Application
```bash
# Start both frontend and backend
npm run dev
```

### Step 4: Open Your Browser
Navigate to: **http://localhost:3000**

## ✅ Verification Checklist

- [ ] Ollama is running on your Linux server
- [ ] phi3:3.8b model is pulled: `ollama pull phi3:3.8b`
- [ ] Backend shows "Connected to AI" status
- [ ] Avatar animations are working
- [ ] You can send messages and receive responses

## 🔧 Quick Troubleshooting

**Can't connect to AI?**
1. Check if Ollama is running: `curl http://your-server:11434/api/tags`
2. Update `OLLAMA_HOST` in `backend/.env` if needed
3. Restart the application: `npm run dev`

**Frontend won't load?**
1. Make sure port 3000 is available
2. Check if backend is running on port 3001
3. Clear browser cache and reload

## 🎯 Test Questions

Try asking the avatar:
- "What is the Shingo Model?"
- "How do I implement continuous improvement?"
- "What are the key principles of operational excellence?"

## 📞 Need Help?

Check the full README.md for detailed troubleshooting and customization options.