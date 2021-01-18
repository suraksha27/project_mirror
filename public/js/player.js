async function searchYoutubeVideoId(searchText){
    const uri=encodeURI(searchText)
    const url='http://localhost:3000/search?yt='+uri;
    const response = await fetch(url);
    const result= await response.json();
    injectPlayer(result.videoId)
    window.evaIsListening=false
}

function injectPlayer(mediaId){
    document.querySelector("#videoContainer").innerHTML=`
    <div id="player" data-plyr-provider="youtube" data-plyr-embed-id=`+mediaId+`>
          </div>  `
        const player = new Plyr('#player');
      // Expose player so it can be used from the console
      window.player = player;
}

function pausePlayer(){
    if(window.player && window.evaIsListening){
        player.pause()
        window.evaIsListening=false
    }
}

function playPlayer(){
    if(window.player && window.evaIsListening){
        player.play()
        window.evaIsListening=false
    }
}

function stopPlayer(){
    if(window.player && window.evaIsListening){
        player.stop()
        window.player=null
        const videoContainer=document.querySelector("#videoContainer");
        while (videoContainer.firstChild) {
            videoContainer.removeChild(videoContainer.firstChild);
        }
        document.querySelector("#audioContainer").hidden=true
        window.evaIsListening=false
    }
}

function toggleVideoAndAudio(isVideo){
    if(window.player && window.evaIsListening){
        if(isVideo){
            document.querySelector("#videoContainer").hidden=false
            document.querySelector("#audioContainer").hidden=true
        }else{
            document.querySelector("#videoContainer").hidden=true
            document.querySelector("#audioContainer").hidden=false
        }
        window.evaIsListening=false
    }
    
}

// injectPlayer('ShfabTBpnaA')