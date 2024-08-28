import React, { useEffect, useState } from "react";
import { mockAPIResponse } from "./mockData";

const UsersList = () => {
  const [usersList, setUsersList] = useState([]);

  useEffect(() => {
    // on page load, call users list API inside useEffect hook using fetch and store it in state and render it
    setUsersList(mockAPIResponse);
  }, []);

  return (
    <div>
      {usersList.map((user, index) => (
        <div key={index}>
          <div>First Name:{user.firstName}</div>
          <div>Last Name:{user.lastName}</div>
          <div>Email:{user.email}</div>
          <div>Mobile:{user.mobile}</div>
          <div>
            <img src={user.file} alt="usericon" />
          </div>
          <br />
        </div>
      ))}
    </div>
  );
};

export default UsersList;
