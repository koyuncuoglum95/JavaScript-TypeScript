import './App.css';
import React, { useEffect } from 'react'

const App = () => {

  function clockTime() {

    let clock = new Date();
    let hour = clock.getHours();
    let minutes = clock.getMinutes();
    let seconds = clock.getSeconds();
    var session = "AM";


    if(hour === 0) {
        hour = 12;
    }

    if(hour > 12) {
        hour = hour - 12;
        session = "PM";
    }


    hour = (hour < 10) ? '0' + hour : hour;
    minutes = (minutes < 10) ? '0' + minutes : minutes;
    seconds = (seconds < 10) ? '0' + seconds : seconds;

    let time = hour + ':' + minutes + ':' + seconds + " " + session;

    document.getElementById('clock').innerText = time;

    setTimeout(clockTime, 1000);
}

useEffect(() => {
  clockTime();
});


  return (
    <div>
      <h1 id="app-title">JavaScript Digital Clock</h1>
      <p id="clock"></p>
    </div>
  )
}

export default App