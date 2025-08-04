import { useState } from "react";

const Header = (props) => {
  return <h1>{props.Header}</h1>;
};

const Content = (props) => {
  // console.log(props);
  let content = props.Parts.map((obj,index) => {
    return (
      <p key={index}>
        {obj.name} {obj.exercises}
      </p>
    );
  });
  return <>{content}</>;
};
const Total = (props) => {
  let total = 0;
  props.Parts.forEach(obj=> total += obj.exercises)
  return <p>Number of exercises {total}</p>;
};

const App = () => {
  const course = { name: "Half Stack application development",
   Parts : [{
    name: "Fundamentals of React",
    exercises: 10,
  },
   {
    name: "Using props to pass data",
    exercises: 7,
  },
  {
    name: "State of a component",
    exercises: 14,
  }],
}
  return (
    <div>
      <Header Header={course.name} />
      <Content Parts={course.Parts} />
      <Total Parts={course.Parts} />
    </div>
  );
};

export default App;
