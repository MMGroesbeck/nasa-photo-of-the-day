import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Card.css";
import styled from "styled-components";

const CardStyle = styled.div`
  display: flex;
  flex-flow: column nowrap;
  border: 1px midnightblue dotted;
  background-color: ivory;
  width: 75%;
  align-items: center;
  margin: 20px;
`;

const CardText = styled.p`
  border: 1px midnightblue dotted;
  margin: 3%;
  background-color: rgb(255, 255, 245);
`;

const CardTitle = styled(CardText)`
  padding: 0.7rem;
`;

const Image = styled.img`
  max-width: 40%;
  height: auto;
`;

const Description = styled(CardText)`
  padding: 1rem;
`;

function Card(props) {
  const [incoming, setIncoming] = useState({});
  useEffect(() => {
    axios
      .get(
        `https://api.nasa.gov/planetary/apod?api_key=wz6guOf0CG6OCDt1i32EonxAgoxLb2dBGRbIAVwd&date=${props.date}`
      )
      .then(response => {
        setIncoming(response.data);
        console.log(response.data);
      })
      .catch(error => {
        console.log("Nope. ", error);
      });
  }, []);
  return (
    <CardStyle>
      <CardTitle><h2>{incoming.title}</h2></CardTitle>
      <Image src={incoming.url} />
      <Description>{incoming.explanation}</Description>
    </CardStyle>
  );
}

export default Card;
