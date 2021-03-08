const days = [
  "Sun",
  "Mon",
  "Tue",
  "Wed",
  "Thu",
  "Fri",
  "Sat",
];
function showTime(){
  var date = new Date();
  var h = date.getHours(); // 0 - 23
  var m = date.getMinutes(); // 0 - 59
  var s = date.getSeconds(); // 0 - 59
  var session = "AM";
  
  if(h == 0){
      h = 12;
      if(m===0 && s===0){
        setDate();
      }   
  }
  
  if(h > 12){
      h = h - 12;
      session = "PM";
  }
  
  h = (h < 10) ? "0" + h : h;
  m = (m < 10) ? "0" + m : m;
  s = (s < 10) ? "0" + s : s;
  
  var time = h + ":" + m + ":" + s + " " + session;
  // document.getElementById("MyClockDisplay").innerText = time;
  document.getElementById("MyClockDisplay").textContent = time;

  setTimeout(showTime, 1000);
}

function setDate(){
  const date = new Date();
  const year = date.getFullYear();
  const month = date.getMonth()+1;
  const dayNum=date.getDate()
  const day = date.getDay();
  document.getElementById("date").innerHTML=days[day]+", "+month+"/"+dayNum+"/"+year;
}

showTime();
setDate()