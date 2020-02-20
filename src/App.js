import React, { useState, useEffect } from "react";
import "./App.css";
import Card from "./Card";
import styled from "styled-components";

const WholePage = styled.div`
  text-align: center;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  background-color: lightblue;
`;

const Heading = styled.h1`
  color: midnightblue;
  background-color: skyblue;
  padding: 0.5rem;
  border: 1px dotted midnightblue;
`;

function App() {
  const startDates = ["2020-02-19", "2020-02-18", "2020-02-17"];
  const [dates, setDates] = useState(startDates);
  return (
    <WholePage>
      <p>
        <Heading>
          Space time! <span role="img">🚀</span>
        </Heading>
      </p>
      {dates.map((date, index) => {
        return <Card date={date} key={index} />;
      })}
    </WholePage>
  );
}

export default App;

/*  {data:{
      date: "2020-02-19"
    }}
*/
