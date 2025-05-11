import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import CatiaLogo from "../../Assets/logos/catia.svg";
import AutoCADLogo from "../../Assets/logos/Autocad.svg";
import CreoLogo from "../../Assets/logos/Creo.svg";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiGit,
  DiJava,
} from "react-icons/di";
import {
  SiRedis,
  SiFirebase,
  SiNextdotjs,
  SiSolidity,
  SiPostgresql,
} from "react-icons/si";
import { TbBrandGolang } from "react-icons/tb";


function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px",}}>
      
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiNodejs />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiReact />
      </Col>
      
      <Col xs={4} md={2} className="tech-icons">
        <DiMongodb />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiNextdotjs />
      </Col>
      
      <Col xs={4} md={2} className="tech-icons" style={{ justifyContent: "center", paddingBottom: "50px",}}>
        <img src={CatiaLogo} alt="CATIA V5" className="tech-logo" />
        </Col>
      <Col xs={4} md={2} className="tech-icons">
         <img src={AutoCADLogo} style={{backgroundColor:"white",marginTop:"5px"}} alt="AutoCAD" className="tech-logo" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
         <img src={CreoLogo} alt="Creo" className="tech-logo" />
        </Col>
      <Col xs={4} md={2} className="tech-icons ">
        <DiPython/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJava />
      </Col>
    </Row>
  );
}

export default Techstack;
