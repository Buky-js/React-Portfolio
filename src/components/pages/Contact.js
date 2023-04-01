import React, { useState } from "react";
import checkEmail from "../../utils/helpers";

export default function Contact() {
  
  
  function formHandler(e){
    e.preventDefault();
  }
  
  
  
  
    return (
    <div className="col-lg-8 col-md-8 col-sm-8 container justify-content-center">
      <div className="mt-5">
        <h2>Contact Me</h2>
      </div>
      <form onSubmit={formHandler} className="justify-content-center">
        <div className="form-group col-md-6">
          <label for="InputName">Name</label>
          <input
            type="text"
            className="form-control"
            id="InputName"
            placeholder="Enter name"
          />
        </div>
        <div className="form-group col-md-6 mt-5">
          <label for="InputEmail">Email address</label>
          <input
            type="email"
            className="form-control"
            id="InputEmail"
            placeholder="Enter email"
          />
        </div>
        <div className="form-group col-md-6 mt-5">
          <label for="message">Message</label>
          <textarea
            className="form-control"
            id="message"
            rows="3"
          ></textarea>
        </div>
        <button type="submit" className="btn btn-primary mt-5">Submit</button>
      </form>
    </div>
  );
}
