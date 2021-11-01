import React from "react";
import "./menu.css";
// Router
import { NavLink } from "../../components/Nav/NavLink/NavLink";
export const Menu = ({ menuOpen, setMenuOpen }) => {
  return (
   
    <div className={"menu " + (menuOpen && "active")}>
      <ul>
        <NavLink text="Home" path="home" onClick={() => setMenuOpen(false)} />
        <div className="line right">  
           <div class="scanner"></div>
           </div>
        <NavLink
          text="Skills"
          path="services"
          onClick={() => setMenuOpen(false)}
        />
        <NavLink
          text="Portfolio"
          path="portfolio"
          onClick={() => setMenuOpen(false)}
        />
        <NavLink
          text="Contact"
          path="contact"
          onClick={() => setMenuOpen(false)}
        />
      </ul>
    </div>
    
  );
};
