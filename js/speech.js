// let SpeechRecognition = SpeechRecognition || webkitSpeechRecognition
// let SpeechRecognitionEvent = webkitSpeechRecognitionEvent
const recognition=new webkitSpeechRecognition()
recognition.continuous=true;
recognition.lang = 'en-US';
recognition.interimResults = false;
recognition.maxAlternatives = 1;

function startRecognition(){
    recognition.start();
    console.log("Say Something");
}

function startEva(){
    console.log('Eva has started');
    window.evaIsListening=true
    const evaIcon=document.querySelector('#eva');
    evaIcon.setAttribute('class','eva-is-listening')
    setTimeout(()=>{
        evaIcon.classList.remove('eva-is-listening')
    },5000)
}

function startMusic(){
    if(window.evaIsListening){
        console.log('Music is on')
    }else{
        console.log('Eva is not listening')
    }
    window.evaIsListening=false
    
}

recognition.onresult=function(event){
    const userInput=event.results[0][0].transcript
    console.log(userInput)
    delete event.results[0]
    console.log(event.results)
    switch(userInput.toLowerCase()){
        case 'hey eva':startEva();
                        break;
        case 'play music':startMusic();
                        break;
        case 'eva stop':recognition.stop()
    }
}