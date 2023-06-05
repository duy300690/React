import React from "react";

class AddUserInfo extends React.Component {
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
  handleOnChangeName = (event) => {
    this.setState({
      name: event.target.value,
    });
  };
  handleOnChangeAge = (event) => {
    this.setState({
      age: event.target.value,
    });
  };

  handleonSubmit = (e) => {
    e.preventDefault();
    this.props.handleAddUserInfo({
      id: Math.floor(Math.random() * 100 + 1) + "-random",
      name: this.state.name,
      age: this.state.age,
    });
  };
  render() {
    return (
      <div>
        My name {this.state.name}, I`m from {this.state.address}. I`m{" "}
        {this.state.age} years old
        <br />
        <button onClick={() => this.handleSetState()}>Set State</button>
        <form onSubmit={(e) => this.handleonSubmit(e)}>
          Your name:{" "}
          <input
            onChange={(e) => this.handleOnChangeName(e)}
            value={this.state.name}
          />
          Your age:{" "}
          <input
            onChange={(e) => this.handleOnChangeAge(e)}
            value={this.state.age}
          />
          <button>Submit</button>
        </form>
      </div>
    );
  }
}

export default AddUserInfo;
