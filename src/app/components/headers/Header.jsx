import "../../header.css";
import Counter from "../counter/Counter";

function Header() {
  return (
    <div className="container bg-secondary d-flex justify-content-center">
      <div className="d-flex gap-4 align-items-center">
        <h2>My React App</h2>
        <Counter />
      </div>
    </div>
  );
}

export default Header;
