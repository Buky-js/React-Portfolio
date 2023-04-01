import React, { useState } from "react";
import Header from "./components/Header";
import AboutMe from "./components/pages/AboutMe";
import Contact from "./components/pages/Contact";
import Portfolio from "./components/pages/Portfolio";
import Resume from "./components/pages/Resume";
import Footer from "./components/Footer";


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
      <Header currentPage={currentPage} handlePageChange={handlePageChange} />
      <div> {renderPage()} </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}
