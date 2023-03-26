import React from "react";

import { Card, CardHeader, CardBody, CardTitle, CardSubtitle, CardText } from "reactstrap";

const ProjectCard = ({ project, children }) => {
  return (
    <Card className="project-card">
      <CardHeader className="project-card-header">
        {project.technologies.map((skill) => (
          <span>
            &nbsp;
            <img height="18" width="18" src={`https://cdn.simpleicons.org/${skill.logo}/white`} />
          </span>
        ))}
      </CardHeader>
      <CardBody>
        <CardTitle className="project-card-title">{project.project}</CardTitle>
        <CardSubtitle className="project-card-text">{project.client}</CardSubtitle>
        <CardText className="project-card-text">{project.description}</CardText>
        {children}
      </CardBody>
    </Card>
  );
};

export default ProjectCard;
