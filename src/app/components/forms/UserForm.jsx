"use client";

import { UserContext } from "@/app/UserContext";
import { useContext, useState } from "react";
import Notification from "../ui/Notification";

function UserForm() {
  const [newUser, setNewUser] = useState({
    key: "",
    name: "",
    email: "",
    password: "",
  });
  const { setUsersList } = useContext(UserContext);
  const [sendNotification, setSendNotification] = useState(false);

  const [nameError, setNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewUser((prevNewUser) => ({ ...prevNewUser, [name]: value }));

    if (name === "name") {
      const nameRegex = /^[^\$%&/(·"_]+$/u;
      setNameError(!nameRegex.test(value));
    }

    if (name === "email") {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      setEmailError(!emailRegex.test(value));
    }

    if (name === "password") {
      const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{12,}$/;
      setPasswordError(!passwordRegex.test(value));
    }
  };

  const addName = () => {
    if (
      newUser.name.length === 0 ||
      newUser.email.length === 0 ||
      newUser.password.length === 0
    ) {
      return;
    }
    setSendNotification(true);
    setUsersList((prevUsers) => [
      ...prevUsers,
      { ...newUser, key: prevUsers.length + 1 },
    ]);
    setNewUser({ key: "", name: "", email: "", password: "" }); // Reset key and password fields
  };

  return (
    <div className="d-flex flex-column gap-3 justify-content-center align-items-center w-100">
      <div className="d-flex justify-content-center align-items-center ">
        <div className="border border-secondary rounded p-3 shadow-lg">
          <h4 className="mb-4">Add Profile</h4>
          <div className="d-flex gap-3 align-items-start mb-5">
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
                required
              />
              {nameError && (
                <span className="small-text text-danger">
                  * Incorrect character for a name
                </span>
              )}
            </div>
            <div className="form-group input-group-size-md">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                className="form-control"
                name="email"
                id="email"
                placeholder="ex: name@company.com"
                onChange={handleChange}
                value={newUser.email}
                required
              />
              {emailError && (
                <span className="small-text text-danger">
                  * Insert correct email format
                </span>
              )}
            </div>
            <div className="form-group input-group-size-md">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                className="form-control"
                name="password"
                id="password"
                placeholder="Enter password"
                onChange={handleChange}
                value={newUser.password}
                required
              />
              {passwordError && (
                <span className="small-text text-danger">
                  * Minimum 12 alphanumeric chars
                </span>
              )}
            </div>
            <button
              className="btn btn-dark align-self-center"
              onClick={addName}
            >
              Add name
            </button>
          </div>
        </div>
      </div>
      {sendNotification && <Notification message="User List updated!" />}
    </div>
  );
}

export default UserForm;
