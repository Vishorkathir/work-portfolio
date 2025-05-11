import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Pradeep Kumar R </span>
            from <span className="purple"> TamilNadu, India.</span>
            <br />
            I am currently doing  <span className="purple">BE Mechanical Engineering </span>at Kongunadu college of Engineering and Technology in Namakkal.
            <br />
            I am also the secretary of iEDC (Innovation and Entrepreneurship Development cell).
            <br/>
            I have completed  <span className="purple"> The Innovation Ambassador (IA) training ' Advance Level '</span>
            Mesra.
            <br />
            <br />
          
            Apart from activities, some other achievement that I love to do completed!
            
          </p>
        
          <ul>
            <li className="about-activity">
              <ImPointRight />   I completed my internship at Bharat Heavy Electricals limited, Trichy.
            </li>
            <br/>
            <li className="about-activity">
              <ImPointRight />   Participated in '3D printing Technology ' workshop conducted by SNS Institute of technology , coimbatore.
            </li>
            <br/>
            <li className="about-activity">
              <ImPointRight />   Then I also participated in the paper presentation on the topic of " Under water welding with Robot" .
            </li>
            <br/>
            <li className="about-activity">
              <ImPointRight />   I also won second prize on Mechanical quiz conducted by Sri Venkateshwara hi tech Engineering college, Gopichetipalayam.
            </li>
            <br/>
            <li className="about-activity">
              <ImPointRight />   I also participated in the department Events as a Master of Ceremony (MoC) .
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Pradeep</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
