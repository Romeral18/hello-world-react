import React from "react";
import "./Navbar.module.css";
import cl from "./Navbar.module.css";

const Navbar = (props) => {
  return (
    <nav className={cl.nav}>
      <div>
        <a href="projects/hello-world-1/hello-world-react/src/components/Navbar/Navbar">
          Profile
        </a>
      </div>
      <div>
        <a href="projects/hello-world-1/hello-world-react/src/components/Navbar/Navbar">
          Messages
        </a>
      </div>
      <div>
        <a href="projects/hello-world-1/hello-world-react/src/components/Navbar/Navbar">
          News
        </a>
      </div>
      <div>
        <a href="projects/hello-world-1/hello-world-react/src/components/Navbar/Navbar">
          Music
        </a>
      </div>
      <div>
        <a href="projects/hello-world-1/hello-world-react/src/components/Navbar/Navbar">
          Settings
        </a>
      </div>
    </nav>
  );
};
export default Navbar;
