import React from "react";
import "./DisplayInfo.scss";

class DisplayInfor extends React.Component {
  state = { showUser: true };
  isShowUser = () => {
    this.setState({ showUser: !this.state.showUser });
  };
  render() {
    const { listUser } = this.props;
    return (
      <div>
        <button onClick={() => this.isShowUser()}>
          {this.state.showUser ? "Hide user" : "Show user"}
        </button>
        <div className="display-info-content">
          {this.state.showUser &&
            listUser.map((user) => {
              return (
                <div key={user.id} className={user.age > 30 ? "red" : "green"}>
                  <div>My name is {user.name}</div>
                  <div>I'm {user.age} year old</div>
                  <button
                    onClick={() => this.props.handleDeleteUserInfo(user.id)}
                  >
                    Removt user
                  </button>
                  <hr />
                </div>
              );
            })}
        </div>
      </div>
    );
  }
}

export default DisplayInfor;
