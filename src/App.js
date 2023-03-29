import React, { useState } from "react";
import Header from "./Header";
import AboutMe from "./pages/AboutMe";
import Contact from "./pages/Contact";
import Portfolio from "./pages/Portfolio";
import Resume from "./pages/Resume";

// import PortfolioContainer from './components/PortfolioContainer';

export default function App() {
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
    }
  };

  const handlePageChange = (page) => setCurrentPage(page);
  return (
    <div>
      <Header currentPage={currentPage} setCurrentPage={setCurrentPage} />
      <div> {renderPage} </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}
