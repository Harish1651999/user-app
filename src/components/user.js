import React, { Component } from "react";
import classes from "./user.module.css";

class User extends Component {
  render() {
    return (
      <li className={classes.user} key={this.props.key}>
        {this.props.name}
      </li>
    );
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
