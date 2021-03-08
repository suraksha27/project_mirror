function bringCommandList() {
  const evaCommandsList = document.querySelector("#eva-commands-list");
  evaCommandsList.removeAttribute("style");
  evaCommandsList.setAttribute(
    "class",
    "animate__animated animate__bounceInLeft"
  );
}

function removeCommandList() {
  const evaCommandsList = document.querySelector("#eva-commands-list");
  evaCommandsList.setAttribute(
    "class",
    "animate__animated animate__bounceOutLeft"
  );
}

// bringCommandList()

function injectCalenderTodo(dateString) {
  let incomingDate = dateString;
  window.calenderKey={
      dateString:dateString,
      todayDate:null
  }
  console.log(dateString);
  let calenderToDoHtml = "";
  if (dateString === "today") {
    calenderToDoHtml = `<h3>Today's Reminders</h3>`;
    const monthNames = [
      "january",
      "february",
      "march",
      "april",
      "may",
      "june",
      "july",
      "august",
      "september",
      "october",
      "november",
      "december",
    ];
    const d = new Date();
    incomingDate = monthNames[d.getMonth()] + "-" + d.getDate();
    window.calenderKey.todayDate=monthNames[d.getMonth()] + "-" + d.getDate();
  } else {
    calenderToDoHtml = `<h3>${
      dateString.charAt(0).toUpperCase() + dateString.slice(1)
    }</h3>`;
  }
  if (calenderData[incomingDate]) {
    calenderToDoHtml += `<ol>`;
    calenderData[incomingDate].forEach((todo) => {
      calenderToDoHtml += `<li>${todo}</li>`;
    });
    calenderToDoHtml += `</ol>`;
  } else {
    calenderToDoHtml += `<p style="text-align:center;margin-top:100px;font-size:35px;">No calender todos..</p>`;
  }
  document.querySelector("#calender-div").innerHTML = calenderToDoHtml;
}
