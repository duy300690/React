import React from "react";

class UserInfo extends React.Component {
  state = {
    name: "Minh Duy",
    address: "Q7",
    age: 33,
  };

  handleSetState = () => {
    this.setState({
      name: "Vo Minh Duy",
      address: "HCM",
    });
  };
  handleOnChange = (event) => {
    this.setState({
      name: event.target.value,
    });
  };

  handleonSubmit = (event) => {
    event.preventDefault();
    console.log("onSubmit", this.state);
  };
  render() {
    return (
      <div>
        My name {this.state.name}, I`m from {this.state.address}. I`m{" "}
        {this.state.age} years old
        <br />
        <button onClick={(e) => this.handleSetState(e)}>Set State</button>
        <form onSubmit={(e) => this.handleonSubmit(e)}>
          <input
            onChange={(e) => this.handleOnChange(e)}
            value={this.state.name}
          />
          <button>Submit</button>
        </form>
      </div>
    );
  }
}

export default UserInfo;
