async function searchYoutubeVideoId(searchText){
    const uri=encodeURI(searchText)
    const url='http://localhost:3001/search?yt='+uri;
    const response = await fetch(url);
    const result= await response.json();
    injectPlayer(result.videoId)
}

function injectPlayer(mediaId){
    document.querySelector("#videoContainer").innerHTML=`
    <div id="player" data-plyr-provider="youtube" data-plyr-embed-id=`+mediaId+`>
          </div>  `
        const player = new Plyr('#player');
      // Expose player so it can be used from the console
      window.player = player;
      setTimeout(()=>{
        player.play()
      },1500)
}

function pausePlayer(){if(window.player){player.pause()}}

function playPlayer(){if(window.player){player.play()}}

function stopPlayer(){if(window.player){player.stop()}}

function toggleVideoAndAudio(isVideo){
    if(isVideo){
        document.querySelector("#videoContainer").hidden=false
        document.querySelector("#audioContainer").hidden=true
    }else{
        document.querySelector("#videoContainer").hidden=true
        document.querySelector("#audioContainer").hidden=false
    }
}

// injectPlayer('ShfabTBpnaA')