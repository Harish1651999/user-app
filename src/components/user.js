import classes from "./user.module.css";
import React, { Component } from "react";

class User extends Component {
  componentWillUnmount() {
    console.log("Users will unmounted!");
  }
  render() {
    return <li className={classes.user}>{this.props.name}</li>;
  }
}

// const User = (props) => {
//   return (
//     <li className={classes.user} key={props.key}>
//       {props.name}
//     </li>
//   );
// };

export default User;
