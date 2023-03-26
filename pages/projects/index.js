import React, { useState } from "react";
import { useRouter } from "next/router";

import { useUser } from "@auth0/nextjs-auth0/client";
import { useDeleteProject } from "actions/project";
import ProjectApi from "lib/api/project";
import isAuthorized from "utils/isAuthorized";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAdd, faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";

import BaseLayout from "components/layouts/BaseLayout";
import BasePage from "components/BasePage";
import ProjectCard from "components/ProjectCard";
import { Row, Col, Button } from "reactstrap";

const Projects = ({ projects: initialProjects }) => {
  const { user, isLoading: userLoading } = useUser();
  const [projects, setProjects] = useState(initialProjects);
  const [deleteProject, { error: errorDeleteProject }] = useDeleteProject();
  const router = useRouter();

  const onClickProjectHandler = (projectId) => {
    router.push(`/projects/[id]`, `/projects/${projectId}`);
  };

  const onClickAddHandler = (event) => {
    event.stopPropagation();
    router.push(`/projects/new`, `/projects/new`);
  };

  const onClickEditHandler = (event, projectId) => {
    event.stopPropagation();
    router.push(`/projects/[id]/edit`, `/projects/${projectId}/edit`);
  };

  const onClickDeleteHandler = async (event, projectId, projectName) => {
    event.stopPropagation();
    const isConfirm = confirm(`Are you sure you want to delete "${projectName}"?`);
    if (isConfirm) {
      try {
        await deleteProject(projectId);
        setProjects(projects.filter((project) => project._id !== projectId));
      } catch (error) {}
    }
  };

  return (
    <BaseLayout user={user} userLoading={userLoading}>
      <BasePage className="projects-page" title="Projects | Thomas Dumez">
        <Row>
          <Col>
            <h1 className="project-title">Projects</h1>
          </Col>
          <Col>
            {isAuthorized(user, "admin") && (
              <div className="project-add-button">
                <Button onClick={(event) => onClickAddHandler(event)} color="success" size="lg">
                  <FontAwesomeIcon icon={faAdd} />
                </Button>
              </div>
            )}
          </Col>
        </Row>
        <Row>
          {errorDeleteProject && <div className="alert alert-danger">{errorDeleteProject}</div>}
          {projects.map((project) => (
            <Col key={project._id} onClick={() => onClickProjectHandler(project._id)} md="4">
              <ProjectCard project={project}>
                {isAuthorized(user, "admin") && (
                  <>
                    <Button
                      onClick={(event) => onClickEditHandler(event, project._id)}
                      className="me-2"
                      color="dark"
                    >
                      <FontAwesomeIcon icon={faEdit} />
                    </Button>
                    <Button
                      onClick={(event) => onClickDeleteHandler(event, project._id, project.project)}
                      color="danger"
                    >
                      <FontAwesomeIcon icon={faTrash} />
                    </Button>
                  </>
                )}
              </ProjectCard>
            </Col>
          ))}
        </Row>
      </BasePage>
    </BaseLayout>
  );
};

export const getStaticProps = async () => {
  const json = await new ProjectApi().getAll();
  const projects = json.data;

  return {
    props: { projects },
    revalidate: 10,
  };
};

export default Projects;
