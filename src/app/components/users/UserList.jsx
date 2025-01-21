"use client";
import { UserContext } from "@/app/UserContext";
import "../../styles/userList.css";
import { useState, useEffect, useContext } from "react";

function UserList() {
  const [users, setUsers] = useState([]);
  const { usersList, getUsersList } = useContext(UserContext);

  useEffect(() => {
    setUsers(getUsersList);
  }, [usersList]);

  const list = users.map((user) =>
    user.key > 0 ? (
      <tr key={user.key}>
        <td>{user.name}</td>
        <td>{user.surname}</td>
      </tr>
    ) : null
  );

  return (
    <>
      <h4 className="font-weight-bold">User List</h4>
      <hr />

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
