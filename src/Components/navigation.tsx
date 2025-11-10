import React, { useContext } from "react";
import { useState } from "react";
import Button from "@mui/material/Button";
import { IconButton } from "@mui/material";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import ZThemeContext from "../Contexts/ZThemeContext";
import "./nav_style.css";
import { useNavigate, useLocation } from "react-router-dom";
import { isMobile } from "react-device-detect";

const Navigation = ({ isSticky }: { isSticky: boolean }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { setUiSettings, uiSettings } = useContext(ZThemeContext);
  const navigate = useNavigate();
  const location = useLocation();

  // Check if we're on the home page
  const isHomePage = location.pathname === "/";


  // For non-home pages, always use sticky style
  const shouldUseWhiteNav = !isHomePage || isSticky;
  const navItems = [
    { name: "Home", path: "/" },
    { name: "Projects", path: "/projects" },
    { name: "Team", path: "/teams" },
    { name: "Services", path: "/services" },
    { name: "About", path: "/about_us" },



    // { name: "Departments", path: "/departments" },

    // { name: "Blog", path: "/blog" },
  ];

  const handleNavClick = (path: string) => {
    if (path.startsWith("/#")) {
      // Handle anchor links on home page
      const sectionId = path.substring(2);
      if (window.location.pathname === "/") {
        // Already on home page, just scroll
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      } else {
        // Navigate to home page first, then scroll
        navigate("/");
        setTimeout(() => {
          const element = document.getElementById(sectionId);
          if (element) {
            element.scrollIntoView({ behavior: "smooth", block: "start" });
          }
        }, 100);
      }
    } else {
      // Regular navigation
      navigate(path);
    }
    setIsOpen(false); // Close mobile menu after navigation
  };

  return (
    <nav
      className={`w-full ${shouldUseWhiteNav ? "bg-white header_slide_in" : "bg-transparent"}`}
      style={
        shouldUseWhiteNav ? ({
          background: "rgba(255, 255, 255, 0.34)",
          color: "black",
          zIndex: 1000,
          position: "sticky",
          top: 0,
        }) : ({
          color: "white",
          backdropFilter: "blur(5px)",
          zIndex: 1000,
          position: "relative"
        })}
    >
      <div className="container mx-auto px-6 md:px-18 py-1">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2 hover:cursor-pointer" onClick={() => navigate("/")}>
            <img
              src={shouldUseWhiteNav ? "/images/bgtras.png" : "/images/b.png"}
              alt="Kacha Logo"
              className="rounded-md"
              style={{ width: isMobile ? "170px" : "250px" }}
            />
            {/* <img
              src="/images/Group.png"
              alt="Kacha Group Logo"
              className="h-4"
            /> */}
          </div>

          {/* Desktop Navigation Items */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => {
              const isActive = location.pathname === item.path;

              return (
                <div
                  key={item.name}
                  onClick={() => handleNavClick(item.path)}
                  className={`relative font-medium group cursor-pointer transition-colors duration-200 ${isActive
                    ? "text-yellow-500"
                    : shouldUseWhiteNav
                      ? "text-black hover:text-yellow-500"
                      : "text-white hover:text-yellow-400"
                    }`}
                  style={{ height: "30px", overflow: "hidden" }}
                >
                  <div className="inner_nav">
                    <div className="innver_nav_item">{item.name}</div>
                    <div className="innver_nav_item">{item.name}</div>
                  </div>
                </div>
              );
            })}

          </div>

          {/* Right Side Buttons (Desktop only) */}
          <div className="hidden md:flex items-center gap-2">
            {/* <IconButton onClick={() => setUiSettings(!uiSettings)}>
              <SettingsOutlinedIcon sx={{ fontSize: 20, color: shouldUseWhiteNav ? "black" : "white" }} />
            </IconButton> */}

            <button className="btn zbtn rounded-1 px-4 py-2 md:px-6 md:py-3 text-sm md:text-base" onClick={() => navigate("/contact_us")}>
              Contact Us
            </button>
          </div>

          {/* Mobile Right Side */}
          <div className="md:hidden flex items-center gap-2">
            {/* <IconButton onClick={() => setUiSettings(!uiSettings)}>
              <SettingsOutlinedIcon sx={{ fontSize: 20, color: shouldUseWhiteNav ? "black" : "white" }} />
            </IconButton> */}
            <button
              className="p-2 rounded-md hover:bg-gray-100 transition-colors"
              onClick={() => setIsOpen(!isOpen)}
              style={{
                background: shouldUseWhiteNav ? "rgba(255, 255, 255, 0.34)" : "none",
                color: shouldUseWhiteNav ? "black" : "white",
              }}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-md px-6 py-4 space-y-4">
          {navItems.map((item) => (

            <div
              key={item.name}
              onClick={() => handleNavClick(item.path)}
              className={`font-medium transition-colors duration-200 cursor-pointer ${location.pathname === item.path
                ? "text-yellow-500"
                : "text-gray-800 hover:text-yellow-500"
                }`}
            >
              {item.name}
            </div>

          ))}
          <button
            className="btn zbtn rounded-1 px-4 py-2 md:px-6 md:py-3 text-sm md:text-base"
            onClick={() => {
              navigate("/contact_us");
              setIsOpen(false);
            }}
          >
            Contact Us
          </button>
        </div>
      )}
    </nav>

  );
};

export default Navigation;





