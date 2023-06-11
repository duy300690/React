import React, { useState } from "react";


const AddUserInfo = (props) => {
  const [user, setUser] = useState({
    name: "Minh Duy",
    age: 33,
  });

  const handleOnChangeName = (e) => {
    setUser({ name: e.target.value });
  };
  const handleOnChangeAge = (e) => {
    setUser({ age: e.target.value });
  };
  const handleonSubmit = (e) => {
    e.preventDefault();
     props.handleAddUserInfo({
      id: Math.floor(Math.random() * 100 + 1) + "-random",
      name: user.name,
      age: user.age,
    });
    
  };

  return (
    <>
      <p>
        My name is: {user.name}, I'm {user.age} years old
      </p>
      <form onSubmit={handleonSubmit}>
        <p>
          Your name: <input value={user.name} onChange={handleOnChangeName} />
        </p>
        <p>
          Your age: <input value={user.age} onChange={handleOnChangeAge} />
        </p>
        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default AddUserInfo;
