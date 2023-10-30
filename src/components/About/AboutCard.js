import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Hasnain Ansari </span>
            from <span className="purple"> karachi, pakistan.</span>
            <br /> I am a final year student in CMS goverment college and continue study in federal urdu university <br/>
            And currently completely MERN stack study in  <span className="purple" > SMIT </span> 
          
            <br />
            Additionally, I am currently as a software developer and <br/>
            and AutoElectrician in <span className="purple" >  EFI VEHICLE </span>  
            
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> love with coding 
            </li>
            <li className="about-activity">
              <ImPointRight /> Cars technician
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer"><span className="purple" >   Hasnain Ansari </span> </footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
