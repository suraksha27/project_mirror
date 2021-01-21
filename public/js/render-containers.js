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

function injectCalenderTodo(dateString){
    const nowDate=new Date();
    const year = nowDate.getFullYear();
    const month = nowDate.getMonth()+1;
    const dayNum=nowDate.getDate()
    const todayString=month+"/"+dayNum+"/"+year;
    const today=todayString===dateString
    let calenderToDoHtml=`<h3>${today?"Today's Reminders":`${dateString}`}</h3>`;
    console.log(calenderData)
    if(calenderData[dateString]){
        calenderToDoHtml+=`<ul>`
        calenderData[dateString].forEach(todo=>{
            calenderToDoHtml+=`<li>${todo}</li>`
        })
        calenderToDoHtml+=`</ul>`
    }else{
        calenderToDoHtml+=`<p style="text-align:center;margin-top:100px;font-size:35px;">No calender todos..</p>`
    }
    document.querySelector('#calender-div').innerHTML=calenderToDoHtml
}
