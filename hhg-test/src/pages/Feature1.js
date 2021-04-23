import React, { useState } from "react";
import { Container, Button } from "react-bootstrap";

const Feature1 = () => {
  const [num, setNum] = useState(0);
  const handleIncrease = () => {
    setNum(num + 1);
  };
  const handleReset = () => {
    setNum(0);
  };
  return (
    <div className="text-center mt-5">
      <Container className="feature1">
        <h1 style={{
                      fontFamily: "'Roboto Condensed', sans-serif",
                      letterSpacing: "0.1em",
                    }}>Let's try</h1>
        <h1 style={{
                      fontFamily: "'Roboto Condensed', sans-serif",
                      marginTop:"30px"
                    }}>{num}</h1>
        <div >
          <button className="mx-3 btn" onClick={handleIncrease}>Click me</button>
          <button className="mx-3 btn" onClick={handleReset}>Reset</button>
        </div>
      </Container>
    </div>
  );
};

export default Feature1;
