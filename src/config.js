import { createChatBotMessage } from 'react-chatbot-kit';

const config = { 
  botName: "InFeedo",
  initialMessages: [createChatBotMessage("Hi, I'm here to help.")],
  customStyles: {
    botMessageBox: {
      backgroundColor: "#376B7E",
    },
    chatButton: {
      backgroundColor: "#376B7E",
    },
    customComponents: {
       
       header: () => (<div style={{ backgroundColor: 'red', padding: "5px", borderRadius: "3px" }}>This is the header</div>)
     },
  },
}

export default config