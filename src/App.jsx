import { useState } from "react";

export default function App() {
  const [count, setCount] = useState(0);

  function handelClick() {
    setCount(count + 1);
  }

  return (
    <>
      <button onClick={handelClick}>clickMe{count}</button>
    </>
  );
}
