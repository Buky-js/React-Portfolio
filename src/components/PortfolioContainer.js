import React, { useState } from "react";
import NavTabs from "./NavTabs";
import AboutMe from "./pages/AboutMe";
import Contact from "./pages/Contact";
import Portfolio from "./pages/Portfolio";
import Resume from "./pages/Resume";

export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState("About Me");

  const renderPage = () => {
    // return the corresponding component depending on the value of currentPage
    if (currentPage === "About Me") {
      return <AboutMe />;
    }
 
  if (currentPage === "Portfolio") {
    return <Portfolio />;
  }
  if (currentPage === "Contact") {
    return <Contact />;
  }
  if (currentPage === "Resume") {
    return <Resume />;
  };
}
  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      <NavTabs currentPage={currentPage} handlePageChange= {handlePageChange}/>
      {renderPage()}
    </div>

  );
}
