import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { Counter } from "./Component/Counter.jsx";
// import Todo from "./Component/Todo.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* <Todo /> */}
    <Counter></Counter>
    <App />
  </StrictMode>
);
