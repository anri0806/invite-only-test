import { Link } from "react-router-dom";

function NavBar({ currentUser, onLogout }) {
  function handleClick() {
    fetch("/logout", {
      method: "DELETE",
    }).then(() => onLogout());
  }

  return (
    <>
      {currentUser ? (
        <>
          <Link to="feed">Feed</Link>|{" "}
          <Link onClick={handleClick}>
            Logout
          </Link>
        </>
      ) : (
        <>
          {" "}
          <Link to="/">Home</Link> |{" "}
          <Link to="register">Register</Link>
        </>
      )}
    </>
  );
}

export default NavBar;
