"use client";

import { useState, useEffect } from "react";

const jsonData = [
  {
    name: "Nimfa",
    surname: "Cookie",
    key: "1",
  },
  {
    name: "Dafne",
    surname: "Cookie",
    key: "2",
  },
];

function UserList() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    setUsers(jsonData);
  }, []);

  const list = users.map((user) =>
    user.key > 0 ? (
      <li key={user.key}>
        {user.name} {user.surname}
      </li>
    ) : null
  );

  const addName = () => {
    setUsers((prevUsers) => [
      ...prevUsers,
      { key: Math.random(), name: "Trevor", surname: "Noah" },
    ]);
  };

  console.log(users);

  return (
    <>
      <h5>User List</h5>
      <ul>{list.length > 0 ? list : <li>No users available</li>}</ul>
      <button onClick={addName}>Add name</button>
    </>
  );
}

export default UserList;
