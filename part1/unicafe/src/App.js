import React, { useState } from "react";

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handelClick = () => {
    setGood(good + 1);
  };
  const handelClickNeutral = () => {
    setNeutral(neutral + 1);
  };
  const handelClickBad = () => {
    setBad(bad - 1);
  };

  return (
    <div>
      <h1>Give Feedback</h1>
      <button onClick={handelClick}>good</button>{" "}
      <button onClick={handelClickNeutral}>neutral</button>{" "}
      <button onClick={handelClickBad}>bad</button>
      <h1>statistics</h1>
      <p>good {good}</p>
      <p>neutral {neutral}</p>
      <p>bad {bad}</p>
    </div>
  );
};

export default App;
