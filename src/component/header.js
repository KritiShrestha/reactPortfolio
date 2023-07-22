import React from "react";
import Navtabs from "../PortfolioContainer";
import "../styles/header.css"; // Import the custom CSS file

export default function Header() {
  return (
    <div className="header">
      <div className="header-column">
        <div className="col">
          <h1 className="logo">Kriti Shrestha</h1>
          <div className="col nav">
          <Navtabs className="custom-navtabs" />
        </div>
        </div>
        
      </div>
    </div>
  );
}
