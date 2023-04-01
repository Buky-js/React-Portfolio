import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Footer() {
    return (
       
        <footer
          className="text-center text-lg-start text-white footer"
          style={{backgroundColor: '#1c2331'}}
          >
  
    <section
             className="d-flex justify-content-between p-4"
             style={{backgroundColor: '#6351ce'}}
             >
      
      <div className="me-5">
        <span>Get connected with me on my social networks:</span>
      </div>
     
      <div>
        <a href="https://www.facebook.com" className="text-white me-4">
        <FontAwesomeIcon icon={"fa-brands fa-facebook"} />
        </a>
        <a href="https://www.facebook.com" className="text-white me-4">
          <i className="fab fa-twitter"></i>
        </a>
        <a href="https://www.facebook.com" className="text-white me-4">
          <i className="fab fa-google"></i>
        </a>
        <a href="https://www.facebook.com" className="text-white me-4">
          <i className="fab fa-instagram"></i>
        </a>
        <a href="https://www.facebook.com" className="text-white me-4">
          <i className="fab fa-linkedin"></i>
        </a>
        <a href="https://www.facebook.com" className="text-white me-4">
          <i className="fab fa-github"></i>
        </a>
      </div>
   
    </section>
        {/* <div className="main-details contact-options">
            <ul className="contactlist">
                <li><a href="#">506-377-5720</a></li>
                <li><a href="mailto:bukyabiona@gmail.com">bukyabiona@gmail.com</a></li>
                <li><a href="https://github.com/Buky-js/">Github</a></li>
                <li><a href="#">Twitter</a></li>
                <li><a href="https://www.linkedin.com/in/olubukolaabiona">Linkedin</a></li>
            </ul>
        </div> */}
    </footer>
    )
}