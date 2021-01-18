function bringCommandList() {
    const evaCommandsList=document.querySelector("#eva-commands-list")
    evaCommandsList.removeAttribute('style')
    evaCommandsList.setAttribute('class','animate__animated animate__bounceInLeft')
}

function removeCommandList(){
    const evaCommandsList=document.querySelector("#eva-commands-list")
    evaCommandsList.setAttribute('class','animate__animated animate__bounceOutLeft')
}

// bringCommandList()
