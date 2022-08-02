import React from "react";
import { useState } from "react";

const UseState = () => {
  const [num, setNum] = useState(0);
  const [inputValue, setInputValue] = useState("");

  const increment = () => {
    setNum(num + 1);
  };

  const decrement = () => {
    setNum(num - 1);
  };

  const onChange = (event) => {
    const newValue = event.target.value;
    setInputValue(newValue);
  };

  return (
    <div>
      <p>
        The useState() is a Hook that allows you to have state variables in
        functional components . so basically useState is the ability to
        encapsulate local state in a functional component.
      </p>
      <h1>{num}</h1>
      <p>Click the button below to increment the number above!</p>
      <button onClick={increment}>Increment</button>
      <p>Click the button below to decrement the number above!</p>
      <button onClick={decrement}>Decrement</button>
      <br />
      <br />
      <div>
        <input
          type="text"
          placeholder="Enter something here"
          onChange={onChange}
        />
        <h2>{inputValue}</h2>
      </div>
    </div>
  );
};

export default UseState;
