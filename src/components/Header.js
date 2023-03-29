import React from "react";

export default function Header({ currentPage, handlePageChange }) {
  return (
    <div>
  <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <div className="container-fluid">
      <p className="navbar-brand" href="#">Olubukola</p>
      
      <Navigation currentPage={currentPage} handlePageChange={handlePageChange}/>
    </div>
  </nav>
    </div>
  
  );
}
