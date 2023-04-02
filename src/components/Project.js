import React from "react";
import Card from "react-bootstrap/Card";
// import Card.Link from "react-bootstrap";

export default function Project(props){
    return (
<Card className="mb-3 col-5 me-4">
<Card.Header> 
<h4>{props.name}</h4>
</Card.Header>
<Card.Img src={props.src} alt={props.alt}/>



<Card.Footer>
<Card.Link className="primary p-1 p-sm-2" href={props.deployed}>Live App</Card.Link>

<Card.Link className="secondary p-1 p-sm-2" href={props.git}>GitHub Repo</Card.Link>
</Card.Footer>


</Card>
    )
}