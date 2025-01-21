// services/userList.js
export const getUserList = async () => {
  const response = await fetch("/userList");
  const data = await response.json();
  console.log(data);
  return data.users;
};
