import { useState } from "react";
import Button from "./Button.jsx";
import Statistics from "./Statistics.jsx";

function App() {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const onClickSetGood = () => {
    setGood(good + 1);
  };
  const onClickSetNeutral = () => {
    setNeutral(neutral + 1);
  };
  const onClickSetBad = () => {
    setBad(bad + 1);
  };

  return (
    <div>
      <h1>give feedback</h1>
      <Button onClick={onClickSetGood} text="good"></Button>
      <Button onClick={onClickSetNeutral} text="neutral"></Button>
      <Button onClick={onClickSetBad} text="bad"></Button>
      <Statistics good={good} bad={bad} neutral={neutral}/>
    
    </div>
  );
}

export default App;
