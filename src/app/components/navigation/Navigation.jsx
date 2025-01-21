"use client";
import Link from "next/link";
import "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

function Navigation() {
  const handleSideMenu = () => {
    const sidebar = document.getElementById("sidebarCollapsable");
    if (sidebar.classList.contains("show")) {
      sidebar.classList.remove("show");
      sidebar.classList.add("collapsed");
    } else {
      sidebar.classList.add("show");
      sidebar.classList.remove("collapsed");
    }
  };
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
        <FontAwesomeIcon icon={faBars} size="lg" />
      </div>

      <div className="sidebar shadow-lg">
        <div className="collapse sidebar-collapse" id="sidebarCollapsable">
          <div className="card card-body">
            <Link onClick={handleSideMenu} href="/">
              Home
            </Link>
            <Link onClick={handleSideMenu} href="userForm">
              Profile
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navigation;
