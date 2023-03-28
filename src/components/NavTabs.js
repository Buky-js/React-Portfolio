import React from "react";

export default function NavTabs({ currentPage, handlePageChange }) {
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">Olubukola</a>
      
      <div class="collapse navbar-collapse" id="navbarText">
        <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
          <li class="nav-item">
            
            <a href='#aboutme' onClick={() => handlePageChange('About Me')}
            className={currentPage === 'About Me' ? 'nav-link active' : 'nav-link'} >About Me</a>
          </li>
          <li class="nav-item">
            <a href='#portfolio' onClick={() => handlePageChange('Portfolio')}
            className={currentPage === 'Portfolio' ? 'nav-link active' : 'nav-link'} >Portfolio</a>
          </li>
          <li class="nav-item">
            <a href='#contact' onClick={() => handlePageChange('Contact')}
            className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}>Contact</a>
          </li>
          <li class="nav-item">
            <a href='#resume' onClick={() => handlePageChange('Resume')}
            className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}>Resume</a>
          </li>
        </ul>
        
      </div>
    </div>
  </nav>
  );
}
