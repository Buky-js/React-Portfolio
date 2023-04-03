import React from "react";


export default function Footer() {
  return (
    <footer
      className="text-center text-lg-start text-white mt-auto"
      style={{backgroundColor: '#264653'}}
    >
      <div className="container">
        <section>
          <div className="row text-center">
            {/* <div className="col-md-6 col-lg-6 text-center text-md-start">
              <div className="p-3">
                © 2020 Copyright:
                <a className="text-white" href="https://mdbootstrap.com/">
                  MDBootstrap.com
                </a>
              </div>
            </div> */}

            <div className="col text-center mt-2 mb-2">
              <a
                className="btn btn-outline-light btn-floating m-1 text-white" 
                role="button"
                href="https://github.com/Buky-js"
              >
                <i className="fa fa-github"></i>
              </a>

              <a
                className="btn btn-outline-light btn-floating m-1 text-white"
                role="button"
                href="https://www.linkedin.com/in/olubukolaabiona
                "
              >
                <i className="fa fa-linkedin"></i>
              </a>

              <a
                className="btn btn-outline-light btn-floating m-1 text-white"
                role="button"
                href="https://twitter.com/BkayDev?t=2vc1OKCVdZeiHnIZqliHtw&s=09"
              >
                <i className="fa fa-twitter"></i>
              </a>

              {/* <a
                className="btn btn-outline-light btn-floating m-1 text-white"
                role="button"
              >
                <i className="fa fa-instagram"></i>
              </a> */}
            </div>
          </div>
        </section>
      </div>
    </footer>
  );
}
