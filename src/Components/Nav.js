// import React from "react";
import React, { useState } from "react";

function Nav() {
  const [state, setState] = React.useState(true);
  return (
    <div>
      <nav>
        <div className="container">
          <div className="naav-left">
            <img src="/images/logo.png" alt="" />
          </div>
          <div className={state ? "list" : "list none"}>
            <ul>
              <li>home</li>
              <li>home</li>
              <li>home</li>
              <li>home</li>
            </ul>
          </div>
          <div className="togglebar" onClick={() => setState(!state)}>
            T
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Nav;
