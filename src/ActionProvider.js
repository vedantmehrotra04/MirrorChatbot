class ActionProvider {
    constructor(createChatBotMessage, setStateFunc,createClientMessage) {
      this.createChatBotMessage = createChatBotMessage;
      this.setState = setStateFunc;
      this.createClientMessage = createClientMessage;
    }
    
    greet(message) {
      const greetingMessage = this.createChatBotMessage(message)
      this.updateChatbotState(greetingMessage)
    }
    
    updateChatbotState(message) {
   
  // NOTE: This function is set in the constructor, and is passed in      // from the top level Chatbot component. The setState function here     // actually manipulates the top level state of the Chatbot, so it's     // important that we make sure that we preserve the previous state.
   
     this.setState(prevState => 
         {
             console.log(prevState,"check");
             localStorage.setItem('chat_messages',JSON.stringify([...prevState.messages,message]))
         return {
        
         ...prevState, messages: [...prevState.messages, message]
         
      }})
    }
  }
  
  export default ActionProvider