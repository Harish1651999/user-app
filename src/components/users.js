import React, { useState } from "react";
import classes from "./users.module.css";
import User from "./User";

const DUMMY_USERS = [
  { id: "u1", name: "Max" },
  { id: "u2", name: "Manuel" },
  { id: "u3", name: "Julie" },
];

const Users = () => {
  const [ShowUsers, setShowUsers] = useState(true);

  const toggleUserHandler = () => {
    setShowUsers((curState) => !curState);
  };

  const userslist = (
    <ul>
      {DUMMY_USERS.map((user) => (
        <User key={user.id} name={user.name} />
      ))}
    </ul>
  );
  return (
    <div className={classes.users}>
      <button onClick={toggleUserHandler}>
        {ShowUsers ? "Hide" : "Show"} Users
      </button>
      {ShowUsers && userslist}
    </div>
  );
};

export default Users;
