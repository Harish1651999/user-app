import React from "react";
import classes from "./user.module.css";

const User = (props) => {
  return <li key={props.key}>{props.name}</li>;
};

export default User;
