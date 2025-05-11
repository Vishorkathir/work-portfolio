import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
            I am a passionate mechanical engineering student with a strong drive to solve real-world challenges
             through innovation and technology. My academic journey has been enriched by <b className="purple fs-6"> an internship at BHEL Trichy</b>,
             where I explored manufacturing processes and the concepts of Thermal Power Plant.
              <br />
              <br/>
              Beyond engineering, I thrive in leadership and communication. As the Secretary of the <b className="purple fs-6">
              Innovation and Entrepreneurship Development Cell (iEDC)</b>, I actively foster an environment for innovation 
              and entrepreneurship among students. I also have a deep passion for public speaking and have served as the Master of Ceremony 
              for my college department events, ensuring smooth and engaging sessions.
              <br/>
              <br/>
              Writing is another key aspect of my journey—I share my thoughts on Medium and Substack platform. 
              I also enjoy reading books that expand my perspective on leadership, and self-improvement.
<br/>
              <br/>
              I am particularly interested in  <b className="purple fs-6"> additive manufacturing, Thermal Engineering, Refrigeration and Air conditioning</b>,
               Robotics and sustainable solutions. My project on the Development of a Refrigerant Boiler for Organic Rankine Cycle in Solar
               Energy Conversion reflects my commitment to renewable energy applications.
               <br/>
              <br />I am fluent in classics like
           
                <b className="purple fs-6">  MERN Stack Developer | Mechanical Designer | CAD Developer </b>
            
              <br />
              <br />
              My field of Interest's are building: 
              <br/>
              <b style={{marginLeft:"10px"}}>
              <b className="purple fs-6 " >Technical Skills: </b> React.js, Node.js, Express.js, MongoDB 
              </b>
              <br/>
              <b style={{marginLeft:"10px"}}>
              <b className="purple fs-6">Design Tools: </b> CATIA V5, AutoCAD, Creo
              </b>
              
              <br />
              
              <br/>
             
           
             
            </p>
          </Col>


          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/soumyajit4419"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                 
                >
                  <AiFillGithub />
                </a>
              </li>
             
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/pradeep-kumar-r-bb79bb292?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/_lucky__lad__5?igsh=MnFrbzgxanByN3Rl"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
              <li className="social-icons"> 
                <a
                  href="mailto:pradeepkumarr921@gmail.com" 
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <MdEmail />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
