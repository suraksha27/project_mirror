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
    window.evaIsListening=true
    const evaIcon=document.querySelector('#eva');
    evaIcon.setAttribute('class','animate__animated animate__bounce eva-is-listening')
    setTimeout(()=>{
        evaIcon.setAttribute('class','')
    },5000)
}

function searchYoutube(){

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
    const cleanTranscript=userInput.toLowerCase().trim()
    if(cleanTranscript==='hey eva'){
        startEva()
    }else if(window.evaIsListening){
        if(cleanTranscript.startsWith('search youtube for')){
            const searchCriteria=cleanTranscript.slice(19)
            console.log(searchCriteria)
            searchYoutubeVideoId(searchCriteria)
        }else if(cleanTranscript==="play media"){
            playPlayer()   
        }else if(cleanTranscript==="pause media"){
            pausePlayer()
        }else if(cleanTranscript==="stop media"){
            stopPlayer()
        }else if(cleanTranscript==="disable video"){
            toggleVideoAndAudio(false)
        }else if(cleanTranscript==="enable video"){
            toggleVideoAndAudio(true)
        }

    }
}