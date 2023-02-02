import React, { Component, useState } from "react";
import classes from "./users.module.css";
import User from "./User";

class Users extends Component {
  constructor() {
    super();
    this.state = {
      ShowUsers: true,
      more: "test",
    };
  }

  componentDidUpdate() {
    // try{
    //   someCodeWhichMightFail()
    // }catch(err){
    //   //handle error
    // }

    if (this.props.users.length === 0) {
      throw new Error("No users provided!");
    }
  }

  toggleUserHandler() {
    this.setState((curState) => {
      return { ShowUsers: !curState.ShowUsers };
    });
  }

  render() {
    const userslist = (
      <ul>
        {this.props.users.map((user) => (
          <User key={user.id} name={user.name} />
        ))}
      </ul>
    );

    return (
      <div className={classes.users}>
        <button onClick={this.toggleUserHandler.bind(this)}>
          {this.state.ShowUsers ? "Hide" : "Show"} Users
        </button>
        {this.state.ShowUsers && userslist}
      </div>
    );
  }
}

// const Users = () => {
//   const [ShowUsers, setShowUsers] = useState(true);

//   const toggleUserHandler = () => {
//     setShowUsers((curState) => !curState);
//   };

//   const userslist = (
//     <ul>
//       {DUMMY_USERS.map((user) => (
//         <User key={user.id} name={user.name} />
//       ))}
//     </ul>
//   );
//   return (
//     <div className={classes.users}>
//       <button onClick={toggleUserHandler}>
//         {ShowUsers ? "Hide" : "Show"} Users
//       </button>
//       {ShowUsers && userslist}
//     </div>
//   );
// };

export default Users;
