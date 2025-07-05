import React from "react";
import { useState, useEffect } from "react";

export const Counter = () => {
  // mounting rerendaring unmounting
  const [count, setCount] = useState(0);

  useEffect(function () {
    setInterval(function () {
      setCount((count) => count + 1);
    }, 100);
  }, []);

  //   function increaseCount() {
  //     setCount(count + 1);
  //   }

  //   function decreaseCount() {
  //     setCount(count - 1);
  //   }

  //   function zeroCount() {
  //     setCount(0);
  //   }

  return (
    <>
      <h1 id="text">{count}</h1>
      {/* <button onClick={increaseCount}>count increase</button> */}

      {/* <button onClick={decreaseCount}>decrease increase</button> */}

      {/* <button onClick={zeroCount}>zero increase</button> */}
    </>
  );
};
