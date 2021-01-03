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
    console.log('Start music triggered')
    if(window.evaIsListening){
        searchYoutubeVideoId('satayera')
    }else{
        console.log('Eva is not listening')
    }
    window.evaIsListening=false
    
}

recognition.onresult=function(event){
    console.log(event.results)
    const lastInput=event.results.length
    const userInput=event.results[lastInput-1][0].transcript
    console.log(userInput)
    switch(userInput.toLowerCase().trim()){
        case 'hey eva':startEva();
                        break;
        case 'play music':startMusic();
                        break;
        case 'pause music':pausePlayer();
                        break;
        case 'unpause music': playPlayer();
                        break;
        case 'stop music': stopPlayer()
                        break;
        case 'play only audio':toggleVideoAndAudio(false);
                        break;
        case 'play with video':toggleVideoAndAudio(true);
                        break;
        case 'eva stop':recognition.stop()
    }
}