import React from "react";

import { Card, CardHeader, CardBody, CardTitle, CardText } from "reactstrap";

const ProjectCard = ({ project }) => {
  return (
    <Card className="project-card">
      <CardHeader className="project-card-header">{project.client}</CardHeader>
      <CardBody>
        <p>{project.technologies}</p>
        <CardTitle className="project-card-title">{project.project}</CardTitle>
        <CardText className="project-card-text">{project.description}</CardText>
      </CardBody>
    </Card>
  );
};

export default ProjectCard;
