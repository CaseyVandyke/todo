import React, { useState } from "react";
import TodoList from "./TodoList";

const Todo = () => {
  const [chores, addChore] = useState([
    {
      text: "Learn React",
      isCompleted: false
    },
    {
      text: "Vacuum stairs",
      isCompleted: false
    }
  ]);

  const handleChoreChange = e => {
    addChore(e.target.value);
  };

  const handleChoreSubmit = e => {
    e.preventDefault();
    console.log(chores);
  };

  return (
    <form action="#">
      <label htmlFor="chore-todo" />
      <input type="text" onChange={handleChoreChange} />
      <button onClick={handleChoreSubmit}>Submit</button>
      <TodoList chores={chores} />
    </form>
  );
};

export default Todo;
