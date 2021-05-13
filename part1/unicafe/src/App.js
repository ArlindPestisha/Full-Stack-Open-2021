import React, { useState } from "react";

const Statistic = ({ text, value }) => {
  return (
    <tr>
      <td>{text}</td>
      <td>{value}</td>
    </tr>
  );
};

const Statistics = ({ statistics }) => {
  const { good, neutral, bad } = statistics;
  const all = good + neutral + bad;

  if (all === 0) return <p>No feedback given</p>;

  return (
    <div>
      <Statistic text="good" value={good} />
      <Statistic text="neutral" value={neutral} />
      <Statistic text="bad" value={bad} />
      <Statistic text="all" value={all} />
      <Statistic
        text="average"
        value={(good * 1 + neutral * 0 + bad * -1) / all}
      />
      <Statistic text="positive" value={(good / all) * 100 + " %"} />
    </div>
  );
};

const Button = ({ handelClick, text }) => {
  return <button onClick={handelClick}>{text}</button>;
};

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handelClickGood = () => {
    setGood(good + 1);
  };
  const handelClickNeutral = () => {
    setNeutral(neutral + 1);
  };
  const handelClickBad = () => {
    setBad(bad + 1);
  };

  return (
    <div>
      <h1>Give Feedback</h1>
      <Button handelClick={handelClickGood} text="good" />{" "}
      <Button handelClick={handelClickNeutral} text="neutral" />{" "}
      <Button handelClick={handelClickBad} text="bad" />
      <h1>Statistics</h1>
      <Statistics statistics={{ good, neutral, bad }} />
      {/* <p>good {good}</p>
      <p>neutral {neutral}</p>
      <p>bad {bad}</p>
      <p>all {good + neutral + bad}</p> */}
    </div>
  );
};

export default App;
