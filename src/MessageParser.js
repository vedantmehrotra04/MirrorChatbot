class MessageParser {
    constructor(actionProvider) {
      this.actionProvider = actionProvider;
    }
  
    parse(message) {
        console.log(message,"hi")
      const lowerCaseMessage = message.toLowerCase()
      
      if(message){
        this.actionProvider.greet(message)
      }
      
    }
  }
  
  export default MessageParser