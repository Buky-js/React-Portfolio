import React from "react";

export default function Navigation(props) {
  return (
    <div className="collapse navbar-collapse" id="navbarText">
      <ul className="nav nav-pills ms-auto">
        <li className="nav-item">
          <a
            href="#aboutme"
            onClick={() => props.handlePageChange("About Me")}
            className={
              props.currentPage === "About Me" ? "nav-link active" : "nav-link"
            }
          >
            About Me
          </a>
        </li>
        <li className="nav-item">
          <a
            href="#"
            onClick={() => props.handlePageChange("Portfolio")}
            className={
              props.currentPage === "Portfolio" ? "nav-link active" : "nav-link"
            }
          >
            Portfolio
          </a>
        </li>
        <li className="nav-item">
          <a
            href="#contact"
            onClick={() => props.handlePageChange("Contact")}
            className={
              props.currentPage === "Contact" ? "nav-link active" : "nav-link"
            }
          >
            Contact
          </a>
        </li>
        <li className="nav-item">
          <a
            href="#resume"
            onClick={() => props.handlePageChange("Resume")}
            className={
              currentPage === "Resume" ? "nav-link active" : "nav-link"
            }
          >
            Resume
          </a>
        </li>
      </ul>
    </div>
  );
}
