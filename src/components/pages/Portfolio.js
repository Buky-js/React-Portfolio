import React from "react";

export default function Portfolio(){
return (
   
<div className="row row-cols-1 row-cols-md-2 g-4">
      <div className="col">
        <div className="card">
        <a href="https://aqueous-plateau-28230.herokuapp.com/" target="_blank"> <img src="images/events.jpg" className="card-img-top" alt="..."/></a>
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
          </div>
        </div>
      </div>
      <div className="col">
        <div className="card">
        <a href="https://buky-js.github.io/FIFA-Fever/" target="_blank"><img src="images/fifa-world-cup.jpg" className="card-img-top" alt="..."/></a>
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
          </div>
        </div>
      </div>
      <div className="col">
        <div className="card">
        <a href="https://buky-js.github.io/Weather-Dashboard/" target="_blank"><img src="images/weather.jpg" className="card-img-top" alt="..."/></a>
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p>
          </div>
        </div>
      </div>
      <div className="col">
        <div className="card">
          <img src="images/notepad.jpg" className="card-img-top" alt="..."/>
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
          </div>
        </div>
      </div>
      <div className="col">
        <div className="card">
          <img src="images/runbuddy.png" className="card-img-top" alt="..."/>
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
          </div>
        </div>
      </div>
    </div>
    
)
};