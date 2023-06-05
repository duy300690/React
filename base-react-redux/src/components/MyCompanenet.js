import React from "react";
import AddUserInfo from "./AddUserInfo";
import DisplayInfor from "./DisplyInfor";

class MyComponent extends React.Component {
  state = {
    listUser: [
      { id: 1, name: "Duy", age: 30 },
      { id: 2, name: "Duy Can", age: 33 },
      { id: 3, name: "Vi", age: 32 },
    ],
  };

  handleAddUserInfo = (userObj) => {
    this.setState({
      listUser: [userObj, ...this.state.listUser],
    });
  };
  render() {
    return (
      <div>
        <AddUserInfo handleAddUserInfo={this.handleAddUserInfo} />
        <br />
        <DisplayInfor listUser={this.state.listUser} />
      </div>
    );
  }
}

export default MyComponent;
