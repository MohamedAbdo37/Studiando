<template>
    <div class="textBox"  @keyup.enter="submitText()" >
        <div class="icon">
            <i class="fa-solid fa-face-smile-wink" style=""></i>
        </div>
        <input type="text" v-model="text" name="text" class="mainInput">
        <SubmitButton @submitText="submitText()" :text="text" />
        
    </div>
</template>

<script>

import SubmitButton from './SubmitButton.vue';

export default{
    name: 'TextInput',
    data(){
        return{
            text: ''
        }
    },
    props:{
        noOfMessages: Number
    },
    components: {
        SubmitButton
    },
    methods: {
        submitText(){

            if(this.text !== ''){
                const newMessage = {
                    index: this.noOfMessages+1,
                    message: this.text,
                    name: localStorage.getItem('name')
                }
                this.text = '';
                return this.$emit('submitText', newMessage);
            }
        
        }
    },
    watch: {
        noOfMessages(){  
                    
            var messageBody = document.querySelector('.allMessages');
            messageBody.scrollTop = messageBody.scrollHeight - messageBody.clientHeight;

        }
    }
}


</script>

<style>



.icon{
    color: #aaa5a5; 
    cursor: pointer;
    cursor: pointer;
    border: 0px;
    height: 100%;
    width: 20%;
    position: absolute;
    top: auto;
    bottom: auto;
    display: flex;
    align-items: center;
    justify-content: center;
}

.textBox {
    /* left: 2.5%;
    bottom: 1%; */
    width: 95%;
    height: 10%;
    background-color: rgba(86, 93, 100, 0.461);
    text-align: center;
    border-radius: 30px;
    border: 1px solid black;
    transform: translate(3.5%, -140%);
}

.mainInput{
    cursor:text;    
    width: 60%;
    height: 100%;
    padding: 10px;
    box-sizing: border-box;
    text-overflow: clip;
    color: white;
    border-inline: none;
    border: none;
}

.mainInput:focus{
    /* border: 2px solid lightgrey; */
    outline: none;
    /* background: lightgrey; */
}

.icon:hover{
    color: white;
}

</style>