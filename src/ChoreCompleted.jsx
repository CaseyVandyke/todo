import React from "react";
import { ChoreContext } from "./TodoList";

const getIsCompletedMessage = isCompleted =>
  isCompleted ? "your chore is completed" : "you are very lazy, for real";

const ChoreCompleted = props => {
  return (
    <ChoreContext.Consumer>
      {chore => <p>{getIsCompletedMessage(chore.isCompleted)}</p>}
    </ChoreContext.Consumer>
  );
};

export default ChoreCompleted;
