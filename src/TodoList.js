import React, { Fragment } from "react";
import PropTypes from "prop-types";
import Chore from "./Chore";

export const ChoreContext = React.createContext({});

const TodoList = props => {
  const { chores } = props;

  return (
    <Fragment>
      {chores.map((chore, i) => (
        <ChoreContext.Provider key={i} value={chore}>
          <Chore />
        </ChoreContext.Provider>
      ))}
    </Fragment>
  );
};

TodoList.propTypes = {
  chores: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default TodoList;
