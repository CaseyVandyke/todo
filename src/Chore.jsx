import React, { Fragment } from "react";
import ChoreCompleted from "./ChoreCompleted";
import ChoreText from "./ChoreText";

// 2 new components
// 1st Chore Text

const Chore = () => {
  return (
    <Fragment>
      <ChoreCompleted />
      <ChoreText />
    </Fragment>
  );
};

export default Chore;
