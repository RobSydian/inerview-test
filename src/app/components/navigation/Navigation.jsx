import Link from "next/link";
import "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

function Navigation() {
  return (
    <nav className="h-100">
      <div
        id="sidebarBtn"
        className=""
        data-bs-toggle="collapse"
        data-bs-target="#sidebarCollapsable"
        aria-expanded="false"
        aria-controls="sidebarCollapse"
      >
        <FontAwesomeIcon icon={faBars} />
      </div>

      <div className="sidebar">
        <div className="collapse sidebar-collapse" id="sidebarCollapsable">
          <div className="card card-body">
            <Link href="/">Home</Link>
            <Link href="userList">User List</Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navigation;
