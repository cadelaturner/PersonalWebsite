import React from 'react';
import './App.css';
import ChatInterface from './components/ChatInterface';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <Header />
      <main className="main-content">
        <ChatInterface />
      </main>
    </div>
  );
}

export default App;
