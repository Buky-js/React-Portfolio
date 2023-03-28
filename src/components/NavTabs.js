import React from "react";

export default function NavTabs({ currentPage, handlePageChange }) {
  return (
    <div>
  <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <div className="container-fluid">
      <a className="navbar-brand" href="#">Olubukola</a>
      
      <div className="collapse navbar-collapse" id="navbarText">
        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
          <li className="nav-item">
            
            <a href='#aboutme' onClick={() => handlePageChange('About Me')}
            className={currentPage === 'About Me' ? 'nav-link active' : 'nav-link'} >About Me</a>
          </li>
          <li className="nav-item">
            <a href='#portfolio' onClick={() => handlePageChange('Portfolio')}
            className={currentPage === 'Portfolio' ? 'nav-link active' : 'nav-link'} >Portfolio</a>
          </li>
          <li className="nav-item">
            <a href='#contact' onClick={() => handlePageChange('Contact')}
            className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}>Contact</a>
          </li>
          <li className="nav-item">
            <a href='#resume' onClick={() => handlePageChange('Resume')}
            className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}>Resume</a>
          </li>
        </ul>
        
      </div>
    </div>
  </nav>
    </div>
  
  );
}
