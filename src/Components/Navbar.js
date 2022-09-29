import React from "react";

function Navbar() {
  const [state, setState] = React.useState(true);

  return (
    <div className="container">
      <nav className="navbar">
        <div className="navbar-container">
          <ul className="navbar-left-logo">
            <div className="logo">
              <img src="/images/logo.png" alt="logo" />
            </div>
          </ul>
          {/* className={state ? "list" : "list none"} */}
          <ul className={state ? "navbar-right" : "navbar-right none"}>
            <li>
              <a href="#">home</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Contect</a>
            </li>
            <li>
              <a href="#">Project</a>
            </li>
            <li>
              <a href="#">Sign in</a>
            </li>
          </ul>
        </div>
      </nav>
      <div className="toggle" onClick={() => setState(!state)}>
        T
      </div>
    </div>
  );
}

export default Navbar;
