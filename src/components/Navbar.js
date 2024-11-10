import React, { useState, useEffect } from "react";
import TopBar from "./TopBar";

const Navbar = () => {
  const [isCollapsed, setIsCollapsed] = useState(true);
  const [selectedNav, setSelectedNav] = useState('home');
  const [bgColor, setBgColor] = useState('transparent');
  const [textColor, setTextColor] = useState('#FFF');

  const handleToggle = () => {
    setIsCollapsed(!isCollapsed);
  };

  const handleNav = (item) => {
    console.log("what", item);
    setSelectedNav(item);
  };

  // Effect to detect scroll and change navbar background color
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 88) {
        setBgColor('#FFF'); // Set to white background after scroll
        setTextColor('#000');
      } else {
        setBgColor('transparent'); // Revert to transparent when at the top
        setTextColor('#FFF');
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll); // Cleanup the event listener
    };
  }, []);

  return (
    <>
      <nav
        className="navbar navbar-expand-lg fixed-top p-3"
        style={{ backgroundColor: bgColor, color: textColor, transition: "background-color 0.3s ease" }}
      >
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            {/* <span className="fw-semibold"><span className="text-white">Explore</span>Solo</span> */}
            <img src="https://cgp.lk/img/logo-new.jpeg" width="90" height="50"/>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            onClick={handleToggle}
            aria-controls="navbarNav"
            aria-expanded={!isCollapsed}
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className={`collapse navbar-collapse ${
              !isCollapsed ? "show full-page" : ""
            }`}
            id="navbarNav"
          >
            <ul
              className={`navbar-nav ${
                isCollapsed ? "justify-content-center ms-auto" : ""
              }`}
            >
              <li className="nav-item" onClick={() => handleNav("home")}>
                <a className={`nav-link ${selectedNav === "home" && "nav-active"}`} style={{color: textColor}} href="#">
                  Home
                </a>
              </li>
              <li className="nav-item" onClick={() => handleNav("about")}>
                <a className={`nav-link ${selectedNav === "about" && "nav-active"}`} style={{color: textColor}} href="#">
                  About
                </a>
              </li>
              <li className="nav-item" onClick={() => handleNav("community")}>
                <a className={`nav-link ${selectedNav === "community" && "nav-active"}`} style={{color: textColor}} href="#">
                  Community
                </a>
              </li>
              <li className="nav-item" onClick={() => handleNav("blog")}>
                <a className={`nav-link ${selectedNav === "blog" && "nav-active"}`} style={{color: textColor}} href="#">
                  Blog
                </a>
              </li>
            </ul>
            <div className={isCollapsed ? "ms-auto" : ""}>
              <button className="btn btn-outline-dark rounded-pill btn-sm py-2 px-3">Book a Meet</button>
            </div>
            {!isCollapsed && (
              <button
                className="btn-close position-absolute top-0 right-1 m-3"
                onClick={handleToggle}
                aria-label="Close"
              ></button>
            )}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
