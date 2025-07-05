import React from "react";
import { useState } from "react";

export const Counter = () => {
  const [count, setCount] = useState(0);

  function increaseCount() {
    setCount(count + 1);
  }

  function decreaseCount() {
    setCount(count - 1);
  }

  function zeroCount() {
    setCount(0);
  }

  return (
    <>
      <h1 id="text">{count}</h1>
      <button onClick={increaseCount}>count increase</button>

      <button onClick={decreaseCount}>decrease increase</button>

      <button onClick={zeroCount}>zero increase</button>
    </>
  );
};
