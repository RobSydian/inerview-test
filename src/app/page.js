import Header from "./components/headers/Header";
import UserList from "./components/users/UserList";

export default function Home() {
  return (
    <div className="d-flex flex-column gap-2 w-100">
      <Header />
      <div className="container-fluid">
        <UserList />
      </div>
    </div>
  );
}
