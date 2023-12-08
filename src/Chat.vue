<template>
  <div class="chatOptions">
    <div class="chatOptionButton" id="textCh" @click="openTextChat">
      <i class="fa-brands fa-rocketchat"></i>
    </div>
    <div class="chatOptionButton" id="voiceCh" @click="openVoiceChat">
      <i class="fa-solid fa-microphone"></i>
    </div>
    <div class="chatOptionButton" id="videoCh" @click="openVideoChat">
      <i class="fa-solid fa-video"></i>
    </div>
  </div>
  <div class="textChatCanvas" v-show="this.textChatSwitch">
    <Messages :messages="messages"/>
  </div>
  <div class="voiceChatCanvas" v-show="this.voiceChatSwitch">
    
  </div>
  <div class="videoChatCanvas" v-show="this.videoChatSwitch">
    
  </div>
    <TextInput @submitText="submitText" :noOfMessages="messages.length" />
  
</template>

<script>

import TextInput from './components/TextInput.vue'
import Messages from './components/Messages.vue'

export default {
  name: 'Chat',
  components: {
    TextInput,
    Messages
  },
  data() {
    return{
      messages: [],
      textChatSwitch: true,
      voiceChatSwitch: false,
      videoChatSwitch: false
    }
  },
  async created(){
    this.messages = await this.fetchData()
  },
  watch: {
    async messages(){
      this.messages = await this.fetchData()
    }
  },
  methods:{
    // Sending new messages to Database
    async submitText(newMessage){

      const newMess =  fetch("https://studiando-a6bec-default-rtdb.firebaseio.com/chats.json", {
            method: "post",
            referrer: this.messages.length,
            headers: {
              'Content-type': "application/json; charset=UTF-8"
            },
            body: [JSON.stringify(newMessage)],

        })
      this.messages = [ ...this.messages,  newMessage]
      
    },
    // Getting Messages from firebase Database
    async fetchData(){
      const jsonFile = await fetch('https://studiando-a6bec-default-rtdb.firebaseio.com/chats.json')
      let chat = await jsonFile.json();
      
      let arrayChat = []

      for( let message in chat )
        arrayChat[chat[message]['index']-1] = chat[message]

      return arrayChat
    },
    openTextChat(){
            this.textChatSwitch = true;
            this.voiceChatSwitch = false;
            this.videoChatSwitch = false;
            document.getElementById('textCh').style.backgroundColor="rgb(26, 130, 220)";
            document.getElementById('voiceCh').style.backgroundColor="rgba(98, 140, 180, 0.34)";
            document.getElementById('videoCh').style.backgroundColor="rgba(98, 140, 180, 0.34)";
        },
        openVoiceChat(){
            this.textChatSwitch = false;
            this.voiceChatSwitch = true;
            this.videoChatSwitch = false;
            document.getElementById('voiceCh').style.backgroundColor="rgb(26, 130, 220)";
            document.getElementById('textCh').style.backgroundColor="rgba(98, 140, 180, 0.34)";
            document.getElementById('videoCh').style.backgroundColor="rgba(98, 140, 180, 0.34)";
        },
        openVideoChat(){
            this.textChatSwitch = false;
            this.voiceChatSwitch = false;
            this.videoChatSwitch = true;
            document.getElementById('voiceCh').style.backgroundColor="rgba(98, 140, 180, 0.34)";
            document.getElementById('textCh').style.backgroundColor="rgba(98, 140, 180, 0.34)";
            document.getElementById('videoCh').style.backgroundColor="rgb(26, 130, 220)";
        },
  },
  computed: {
    //Scroll always to the bottom
    scrollUpdate(){
        var messageBody = document.querySelector('.allMessages');

        messageBody.scrollTop = messageBody.scrollHeight - messageBody.clientHeight;

    }
  },

}
</script>

<style>

* {
  margin: 0;

}


#chat {
  position: absolute;
  top: 0;
  /* left: 5%; */
  height: 98vh;
  width: 25vw;
  border: 1px solid rgb(92, 90, 90);
  box-shadow: 0px 0px 10px rgba(130, 129, 129, 0.582);
  border-radius: 10px;
  box-sizing: border-box;
  /* padding: 20px; */
  background-image: linear-gradient(rgba(0, 0, 255, 0), rgb(0, 179, 255));
  /* display: none; */
  transform: translate(40px, 0px);
  animation-name: entry;
  animation-duration: 0.5s;
  animation-delay: 0.5s;
  animation-fill-mode: both;
  animation-direction: alternate;
}
.chatOptions{
  display: flex;
  font-size: 20px;
  justify-content: flex-start;
}
#textCh{
  background-color: rgb(26, 130, 220);
}
.textChatCanvas{
  height: 96%;
  margin: 0%;
}

.voiceChatCanvas{
  height: 96%;
  margin: 0%;
}

.videoChatCanvas{
  height: 96%;
  margin: 0%;
}
.chatOptionButton{
  color: rgb(255, 255, 255);
  margin: 2%;
  border-radius: 20px;
  background-color: rgba(98, 140, 180, 0.34);
  width: 40px;
  height: 40px;
  justify-content: center;
  align-items: center;
  display: flex;
  cursor: pointer;
}

.chatOptionButton:hover{
  background-color: rgb(26, 130, 220);
}
.hidden {
  animation-name: exit;
  animation-duration: 0.5s;
  animation-delay: 0.5s;
  animation-fill-mode: both;
  animation-direction: alternate;
}
@keyframes entry{
  0% { 
    opacity: 0;
    left: 0%;
  }
  100% { 
    opacity: 1; 
    left: 5%;
  }
}

@keyframes exit{
  0% { 
    opacity: 1;
    left: 5%;
  }
  100% { 
    opacity: 0; 
    left: 0%;
  }
}

</style>
