import React from "react";
import UserInfo from "./UserInfo";
import DisplayInfor from "./DisplyInfor";

class MyComponent extends React.Component {
  render() {
    return (
      <div>
        <UserInfo />
        <DisplayInfor name="Duy" age="30"></DisplayInfor>
        <hr />
        <DisplayInfor name="Duy Can" age="33"></DisplayInfor>
      </div>
    );
  }
}

export default MyComponent;
