const App = Vue.createApp({
    data(){
        return{
            chatSwitch: false,
            featuresSwitch: false,
            optionsSwitch: false,
            notsSwitch: false,
            librarySwitch: false,
            todoSwitch: false,
            notes:"",
            theme: "night",
            timerSwitch: false,
        }
    },
    
    methods:{
        switchChat(){
            if (this.chatSwitch){ 
                this.chatSwitch = false;
                document.getElementById('ch1').style.backgroundColor="aliceblue";
            }
            else {
                this.chatSwitch = true;
                document.getElementById('ch1').style.backgroundColor="aqua";
            }
        },
        switchFeatures(){
            if (this.featuresSwitch) this.featuresSwitch = false;
            else this.featuresSwitch = true;
        },
        switchOptions(){
            if(this.optionsSwitch) this.optionsSwitch = false;
            else this.optionsSwitch = true;
        },
        switchLibrary(){
            if(this.librarySwitch){ 
                this.librarySwitch = false;
                document.getElementById('libraryButton').style.backgroundColor="transparent";
            }
            else {
                this.librarySwitch = true;
                document.getElementById('libraryButton').style.backgroundColor="aliceblue";
            }
        },
        switchTodo(){
            if(this.todoSwitch){
                this.todoSwitch = false;
                document.getElementById('f2').style.backgroundColor="rgb(65, 149, 223)";
            }
            else {
                this.notsSwitch = false;
                this.todoSwitch = true;
                document.getElementById('f2').style.backgroundColor="aliceblue";
                document.getElementById('f3').style.backgroundColor="rgb(65, 149, 223)";
            }
        },
        switchNotes(){
            if(this.notsSwitch){ 
                this.notsSwitch = false;
                document.getElementById('f3').style.backgroundColor="rgb(65, 149, 223)";
            }
            else{ 
                this.notsSwitch = true;
                this.todoSwitch = false;
                document.getElementById('f3').style.backgroundColor="aliceblue";
                document.getElementById('f2').style.backgroundColor="rgb(65, 149, 223)";
            }
        },
        
        switchTimer(){
            if (this.timerSwitch){ 
                this.timerSwitch = false;
                document.getElementById('f1').style.backgroundColor="rgb(65, 149, 223)";
            }
            else {
                this.timerSwitch = true;
                document.getElementById('f1').style.backgroundColor="aliceblue";
            }
        },
        addNote(){
            var data = document.getElementById('noteText').value;
            this.notes+='\n';
            this.notes+= data;

            document.getElementById('noteText').value = null;
        },
        clearNotes(){
            this.notes = "";
        },
        changeTheme(){
            if (this.theme === "day"){
                this.theme = "night";
                document.querySelector("body").classList.replace("bg-light", "bg-dark");
                document.querySelector("#themeButton").classList.replace("fa-moon", "fa-sun");
            }
            else {
                this.theme = "day";
                document.querySelector("body").classList.replace("bg-dark", "bg-light");
                document.querySelector("#themeButton").classList.replace("fa-sun", "fa-moon");
            }
        },
        
    }
});

App.mount('body');