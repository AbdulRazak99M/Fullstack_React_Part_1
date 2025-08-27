import { useState } from "react";
import Display from "./Display.jsx";
import Button from "./Button.jsx";

// const Header = (props) => {
//   return <h1>{props.Header}</h1>;
// };

// const Content = (props) => {
//   // console.log(props);
//   let content = props.Parts.map((obj, index) => {
//     return (
//       <p key={index}>
//         {obj.name} {obj.exercises}
//       </p>
//     );
//   });
//   return <>{content}</>;
// };
// const Total = (props) => {
//   let total = 0;
//   props.Parts.forEach((obj) => (total += obj.exercises));
//   return <p>Number of exercises {total}</p>;
// };

const App = () => {
  //   const course = { name: "Half Stack application development",
  //    Parts : [{
  //     name: "Fundamentals of React",
  //     exercises: 10,
  //   },
  //    {
  //     name: "Using props to pass data",
  //     exercises: 7,
  //   },
  //   {
  //     name: "State of a component",
  //     exercises: 14,
  //   }],
  // }
  //   return (
  //     <div>
  //       <Header Header={course.name} />
  //       <Content Parts={course.Parts} />
  //       <Total Parts={course.Parts} />
  //     </div>
  //   );
  // COUNTER EXAMPLE STARTS *******************************
  const [counter, setCounter] = useState(0);

  // const handleClick = () => {
  //   console.log("clicked");
  // };
  const increaseByOne = () => {
    setCounter(counter + 1);
  };
  const setToZero = () => {
    setCounter(0);
  };
  const decreasedByOne = () => {
    setCounter(counter - 1);
  };

  return (
    // <div>
    //   <div>{counter}</div>
    //   {/* <button onClick={() => setCounter(counter + 1)}>Plus</button>
    //   <button onClick={() => setCounter(0)}>Reset</button> */}
    //   <button onClick={increaseByOne}>Plus</button>
    //   <button onClick={setToZero}>Reset</button>
    // </div>
    // *******************************
    <div>
      <Display counter={counter} />
      <Button text="Plus" onClick={increaseByOne} />
      <Button text="Reset" onClick={setToZero} />
      <Button text="Minus" onClick={decreasedByOne} />
      
    </div>
     // *******************************
  );
};

export default App;
