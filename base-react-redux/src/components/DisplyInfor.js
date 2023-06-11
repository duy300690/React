import React, { useEffect, useState } from "react";
import "./DisplayInfo.scss";

const DisplayInfor = (props) => {
  const { listUser } = props;
  const [isShowHideUser, setShowHideUser] = useState(true);

  const handleShowHideUser = () => {
    setShowHideUser(!isShowHideUser);
  };

  useEffect(() => {
    console.log(">>>>useEffect",listUser.length)
    if (listUser.length === 0) {
      alert("The user has not been");
    }
  }, [listUser]);

  return (
    <>
      <button onClick={handleShowHideUser}>
        {!isShowHideUser ? "Show" : "Hide"} users
      </button>
      <div className="display-info-content">
        {isShowHideUser &&
          listUser.map((user) => {
            return (
              <div key={user.id} className={user.age > 30 ? "red" : "green"}>
                <div>My name is {user.name}</div>
                <div>I'm {user.age} year old</div>
                <button onClick={() => props.handleDeleteUserInfo(user.id)}>
                  Remove
                </button>
                <hr />
              </div>
            );
          })}
      </div>
    </>
  );
};

export default DisplayInfor;
