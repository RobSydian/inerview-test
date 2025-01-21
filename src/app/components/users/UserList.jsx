"use client";
import "../../styles/userList.css";
import { useState, useEffect } from "react";

const jsonData = [
  {
    name: "Nimfa",
    surname: "March",
    key: 1,
  },
  {
    name: "Dafne",
    surname: "Montefusco",
    key: 2,
  },
];

function UserList() {
  const [users, setUsers] = useState([]);
  const [newUser, setNewUser] = useState({ key: "", name: "", surname: "" });

  useEffect(() => {
    setUsers(jsonData);
  }, []);

  const list = users.map((user) =>
    user.key > 0 ? (
      <tr key={user.key}>
        <td>{user.name}</td>
        <td>{user.surname}</td>
      </tr>
    ) : null
  );

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewUser((prevNewUser) => ({ ...prevNewUser, [name]: value }));
  };

  const addName = () => {
    setUsers((prevUsers) => [
      ...prevUsers,
      { ...newUser, key: prevUsers.length + 1 },
    ]);

    setNewUser({ key: "", name: "", surname: "" });
  };

  return (
    <>
      <h4 className="font-weight-bold">User List</h4>
      <hr />
      <div className="d-flex gap-3 align-items-end">
        <div className="form-group input-group-size-md">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            className="form-control"
            name="name"
            id="name"
            placeholder="Enter name"
            onChange={handleChange}
            value={newUser.name}
          />
        </div>
        <div className="form-group input-group-size-md">
          <label htmlFor="surname">Surname</label>
          <input
            type="text"
            className="form-control"
            name="surname"
            id="surname"
            placeholder="Enter surname"
            onChange={handleChange}
            value={newUser.surname}
          />
        </div>
        <button className="btn btn-dark" onClick={addName}>
          Add name
        </button>
      </div>
      <table className="table w-75">
        <thead className="thead-dark">
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Surname</th>
          </tr>
        </thead>
        <tbody>
          {list.length > 0 ? (
            list
          ) : (
            <tr>
              <td>No users available</td>
            </tr>
          )}
        </tbody>
      </table>
    </>
  );
}

export default UserList;
