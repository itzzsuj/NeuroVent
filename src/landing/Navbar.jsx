import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); // Sidebar state
  const navigate = useNavigate();

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen); // Toggle sidebar
  };

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" }); // Smooth scroll
      setIsSidebarOpen(false); // Close sidebar after scrolling
    }
  };

  return (
    <>
      {/* Navbar */}
      <div className="navmain">
        <div className="navtitle">
          <h1>NEUROVENT</h1>
        </div>
        <div className="navcontent">
          <p onClick={() => scrollToSection("home")}>HOME</p>
          <p onClick={() => scrollToSection("about")}>ABOUT</p>
          <p onClick={() => scrollToSection("contact")}>CONTACT</p>
          <div className="navbutton">
            <button onClick={() => navigate("/login")}>LOGIN</button>
          </div>
        </div>
        <div className="hamburger" onClick={toggleSidebar}>
          {/* Hamburger menu icon */}
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>

      {/* Sidebar */}
      {isSidebarOpen && (
        <div className="sidebar">
          <button className="exitbutton" onClick={toggleSidebar}>
            &times;
          </button>
          <div className="sidebarcontent">
            <p onClick={() => scrollToSection("home")}>HOME</p>
            <p onClick={() => scrollToSection("about")}>ABOUT</p>
            <p onClick={() => scrollToSection("contact")}>CONTACT</p>
            <button onClick={() => navigate("/login")}>LOGIN</button>
          </div>
        </div>
      )}
    </>
  );
}

export default Navbar;
