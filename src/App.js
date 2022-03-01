import logo from './logo.svg';
import React  from 'react';
// import './App.css';
import Chatbot from 'react-chatbot-kit';
import ActionProvider from './ActionProvider';
import MessageParser from './MessageParser';
import config from './config';
import 'react-chatbot-kit/build/main.css';
function App() {

  
  const saveMessages = (messages, HTMLString) => {
  };
  const loadMessages = () => {
    
    const messages = JSON.parse(localStorage.getItem('chat_messages'));
    
    
    if (messages)
    return messages;

    return "";
  };
  
  return (
    <div className="App">
      <header className="App-header">
        <Chatbot config={config} actionProvider={ActionProvider} 
       messageParser={MessageParser}
       saveMessages={saveMessages}
       messageHistory={loadMessages()}
       />
       
      </header>
    </div>
  );
}

export default App;
