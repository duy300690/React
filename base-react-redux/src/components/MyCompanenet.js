import React from "react";
import UserInfo from "./UserInfo";
import DisplayInfor from "./DisplyInfor";

class MyComponent extends React.Component {
  state = {
    listUser: [
      { id: 1, name: "Duy", age: 30 },
      { id: 2, name: "Duy Can", age: 33 },
      { id: 3, name: "Vi", age: 32 },
    ],
  };
  render() {
    return (
      <div>
        <UserInfo />
        <br />
        <DisplayInfor listUser={this.state.listUser} />
      </div>
    );
  }
}

export default MyComponent;
