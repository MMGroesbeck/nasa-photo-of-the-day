import React, {useState, useEffect} from "react";
import axios from "axios";
import "./Card.css";

function Card(props) {
    const [incoming, setIncoming]=useState({});
    useEffect(()=>{
      axios.get(`https://api.nasa.gov/planetary/apod?api_key=wz6guOf0CG6OCDt1i32EonxAgoxLb2dBGRbIAVwd&date=${props.date}`)
      .then(response => {
        setIncoming(response.data);
        console.log(response.data);
      })
      .catch(error => {
        console.log("Nope. ", error);
      });
    },[]);
    return (
      <div className="card">
          <h2>{incoming.title}</h2>
          <img src={incoming.url} />
          <p>{incoming.explanation}</p>
      </div>
    );
  }
  
  export default Card;