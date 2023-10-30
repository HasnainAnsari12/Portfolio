import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import blocktopia from "../../Assets/Projects/blocktopia.jpg";
import calculator from "../../Assets/Projects/calculator.jpg";
import crud from "../../Assets/Projects/crud.jpg";
import stopwatch from "../../Assets/Projects/stopwatch.jpg";
import ticimage from "../../Assets/Projects/ticimage.jpg";


function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={blocktopia}
              title="Blocktopia"
              description=".Blocktopia user experience UI website"
              ghLink="https://hasnainansari12.github.io/blocktopia"
              demoLink=" https://github.com/HasnainAnsari12/blocktopia"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={calculator}
              title="Calculator"
              description="Personal reactjs calculator with user Experience."
              ghLink="https://reactjs-calculator-3hzw.vercel.app/"
              demoLink="https://github.com/HasnainAnsari12/reactjs-calculator"
            />
          </Col>
          
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={crud}
              title="react CRUD"
              description="Personal reactjs CRUD OPERATION with user Experience."
              ghLink="https://react-with-todo-ptot1czwl-hasnainansari12.vercel.app"
              demoLink="https://github.com/HasnainAnsari12/React-with-todo/deployments"/>
          </Col>
         
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={stopwatch}
              title="stop watch"
              description="Personal reactjs CRUD stopo watch with user Experience."
              ghLink="https://hasnainansari12.github.io/STOPWATCH/"
              demoLink="https://github.com/HasnainAnsari12/STOPWATCH/deployments"/>
              
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ticimage}
              title="Tic-tac-toe"
              description="Personal reactjs CRUD tic-tac-toe game with user Experience."
              ghLink="https://hasnainansari12.github.io/tic.tac.toe/"
              demoLink=" https://github.com/HasnainAnsari12/tic.tac.toe"/>
              
          </Col>
         
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
