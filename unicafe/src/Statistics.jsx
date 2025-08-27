import StatisticsLine from "./StatisticsLine.jsx";

const statistics = (props) => {
  let good = props.good;
  let bad = props.bad;
  let neutral = props.neutral;
  let all = good + bad + neutral;
  let percentage = all / 100;
  let positive = good > 0 ? (good / all) * 100 : 0;

  if (good > 0 || bad > 0 || neutral > 0) {
    return (
      <>
        <h1>statistics</h1>
        <table>
          <tbody>
            <StatisticsLine text="good" value={good}></StatisticsLine>
            <StatisticsLine text="neutral" value={neutral}></StatisticsLine>
            <StatisticsLine text="bad" value={bad}></StatisticsLine>
            <StatisticsLine text="all" value={all}></StatisticsLine>
            <StatisticsLine
              text="percentage"
              value={percentage}
            ></StatisticsLine>
            <StatisticsLine text="positive %" value={positive}></StatisticsLine>
          </tbody>
        </table>

        {/* <p>good {good}</p>
        <p>neutral {neutral}</p>
        <p>bad {bad}</p>
        <p>all {all}</p>
        <p>percentage {percentage}</p>
        <p>positive {positive}%</p> */}
      </>
    );
  } else {
    return (
      <>
        <h2>No feedback given</h2>
      </>
    );
  }
};
export default statistics;
