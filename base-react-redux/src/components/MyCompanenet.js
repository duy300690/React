import React, { useState } from "react";
import AddUserInfo from "./AddUserInfo";
import DisplayInfor from "./DisplyInfor";

// class MyComponent extends React.Component {
//   state = {
//     listUser: [
//       { id: 1, name: "Duy", age: 30 },
//       { id: 2, name: "Duy Can", age: 33 },
//       { id: 3, name: "Vi", age: 32 },
//     ],
//   };

//   handleAddUserInfo = (userObj) => {
//     this.setState({
//       listUser: [userObj, ...this.state.listUser],
//     });
//   };

//   handleDeleteUserInfo = (userId) => {
//     let cloneUser = [...this.state.listUser];
//     this.setState({
//       listUser: cloneUser.filter((user) => user.id !== userId),
//     });
//   };
//   render() {
//     return (
//       <div>
//         <AddUserInfo handleAddUserInfo={this.handleAddUserInfo} />
//         <br />
//         <DisplayInfor
//           listUser={this.state.listUser}
//           handleDeleteUserInfo={this.handleDeleteUserInfo}
//         />
//       </div>
//     );
//   }
// }

const MyComponent = (props) => {
  const [listUser, setListUser] = useState([
    { id: 1, name: "Duy", age: 30 },
    { id: 2, name: "Duy Can", age: 33 },
    { id: 3, name: "Vi", age: 32 },
  ]);

  const handleAddUserInfo = (user) => {
    setListUser([user, ...listUser]);
  };

  const handleDeleteUserInfo = (userId) => {
    let cloneUser = [...listUser];
    setListUser(cloneUser.filter((user) => user.id !== userId));
  };
  return (
    <>
      <AddUserInfo handleAddUserInfo={handleAddUserInfo} />
      <br />
      <DisplayInfor
        listUser={listUser}
        handleDeleteUserInfo={handleDeleteUserInfo}
      />
    </>
  );
};
export default MyComponent;
