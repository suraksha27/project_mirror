const recognition = new webkitSpeechRecognition();
recognition.continuous = true;
recognition.lang = "en-US";
recognition.interimResults = false;
recognition.maxAlternatives = 1;

function startRecognition() {
  recognition.start();
}

function startEva() {
  const evaAudio = document.querySelector("#eva-sound");
  window.evaIsListening = true;
  const evaIcon = document.querySelector("#eva");
  evaIcon.setAttribute(
    "class",
    "animate__animated animate__bounce eva-is-listening"
  );
  evaAudio.play();
  setTimeout(() => {
    evaIcon.setAttribute("class", "");
  }, 5000);
}

recognition.onresult = function (event) {
  console.log(event.results);
  const lastInput = event.results.length;
  const userInput = event.results[lastInput - 1][0].transcript;
  const cleanTranscript = userInput.toLowerCase().trim();
  if (
    cleanTranscript.includes("hey eva") ||
    cleanTranscript.includes("hey evva")
  ) {
    startEva();
  } else if (window.evaIsListening) {
    if (cleanTranscript.startsWith("search youtube for")) {
      const searchCriteria = cleanTranscript.slice(19).trim();
      searchYoutubeVideoId(searchCriteria);
    } else if (cleanTranscript === "play this") {
      playPlayer();
    } else if (cleanTranscript === "pause") {
      pausePlayer();
    } else if (cleanTranscript === "stop player") {
      stopPlayer();
    } else if (cleanTranscript === "switch to audio") {
      toggleVideoAndAudio(false);
    } else if (cleanTranscript === "switch to video") {
      toggleVideoAndAudio(true);
    } else if (cleanTranscript === "show command list") {
      bringCommandList();
      window.evaIsListening = false;
    } else if (cleanTranscript === "hide command list") {
      removeCommandList();
      window.evaIsListening = false;
    } else if (cleanTranscript.startsWith("show calendar for")) {
      const searchCriteria = cleanTranscript.slice(18).trim();
      if (searchCriteria === "today") {
        injectCalenderTodo(searchCriteria);
      } else {
        let [monthName, day] = searchCriteria.split(" ");
        if (day.length > 2) {
          day = day.substring(0, day.length - 2);
          injectCalenderTodo(monthName + "-" + day);
        }
      }
    }
  }
};
