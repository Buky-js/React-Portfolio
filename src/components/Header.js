import React from "react";
import Navigation from "./Navigation";

export default function Header({ currentPage, handlePageChange }) {
  return (
    <div>
  <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <div className="container-fluid">
      <p className="navbar-brand">Olubukola</p>
      
      <Navigation currentPage={currentPage} handlePageChange={handlePageChange}/>
    </div>
  </nav>
    </div>
  
  );
}
