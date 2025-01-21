class UserService {
  getUsers() {
    return [
      {
        name: "Nimfa",
        surname: "Cookie",
        key: "1",
      },
    ];
  }
}

const userService = new UserService();
export default userService;
