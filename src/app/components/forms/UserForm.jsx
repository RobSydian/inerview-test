"use client";

import { useState } from "react";

function UserForm() {
  const [newUser, setNewUser] = useState({ key: "", name: "", surname: "" });

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
    <div className="d-flex justify-content-center align-items-center w-100">
      <div className="border border-secondary rounded p-3 shadow-lg">
        <h4 className="mb-4">Add Profile</h4>
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
      </div>
    </div>
  );
}

export default UserForm;
