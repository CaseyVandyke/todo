import React from "react";

const TodoList = props => {
  console.log(props);
  return (
    <div>
      {props.chores.map((chore, i) => {
        return <p key={i}>{chore.text}</p>;
      })}
    </div>
  );
};

export default TodoList;
