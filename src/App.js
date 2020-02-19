import React, {useState, useEffect} from "react";
import "./App.css";
import Card from "./Card";

function App() {
  const startDates=['2020-02-19', '2020-02-18', '2020-02-17'];
  const [dates, setDates]=useState(startDates);
  return (
    <div className="App">
      <p>
        Space time! <span role="img">🚀</span>
      </p>
      {dates.map((date,index) => {
        return (<Card date={date} key={index}/>)
      })}
    </div>
  );
}

export default App;

/*  {data:{
      date: "2020-02-19"
    }}
*/