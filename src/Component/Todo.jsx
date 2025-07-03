import { useState } from "react";

export default function Todo() {
  const [Todo, setTodo] = useState([
    {
      title: "go to gym",
      description: "go to gym at 6am",
      isDone: false,
    },
  ]);
  function addTodo() {
    let newArray = [];
    for (let i = 0; i < Todo.length; i++) {
      newArray.push(Todo[i]);
    }
    newArray.push({
      title: "eat food",
      description: "eat food at 12pm",
      isDome: false,
    });
    setTodo(newArray);
  }
  return (
    <>
      <div>
        <input input="text" placeholder="title"></input>
        <input input="text" placeholder="description"></input>
        <br />
        <button onClick={addTodo}>Add</button>
        <br />
        <Todos
          tital={Todo.title}
          description={Todo.description}
          isDone={Todo.isDone}
        />
      </div>
    </>
  );
}

function Todos(props) {
  return (
    <div>
      <h1>{props.title}</h1>
      <p>{props.description}</p>
    </div>
  );
}
