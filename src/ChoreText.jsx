import React from "react";
import { ChoreContext } from "./TodoList";

const ChoreText = () => {
  return (
    <ChoreContext.Consumer>
      {chore => <p>{chore.text}</p>}
    </ChoreContext.Consumer>
  );
};

export default ChoreText;
