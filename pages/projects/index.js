import React, { useState } from "react";
import { useRouter } from "next/router";

import { useUser } from "@auth0/nextjs-auth0/client";
import { useDeleteProject } from "actions/project";
import ProjectApi from "lib/api/project";
import isAuthorized from "utils/isAuthorized";

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

  const onClickEditHandler = (event, projectId) => {
    event.stopPropagation();
    router.push(`/projects/[id]/edit`, `/projects/${projectId}/edit`);
  };

  const onClickDeleteHandler = async (event, projectId) => {
    event.stopPropagation();
    const isConfirm = confirm("Are you sure you want to delete this project?");
    if (isConfirm) {
      try {
        await deleteProject(projectId);
        setProjects(projects.filter((project) => project._id !== projectId));
      } catch (error) {}
    }
  };

  return (
    <BaseLayout user={user} userLoading={userLoading}>
      <BasePage header="Projects" className="projects-page" title="Projects | Thomas Dumez">
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
                      color="warning"
                    >
                      Edit
                    </Button>
                    <Button
                      onClick={(event) => onClickDeleteHandler(event, project._id)}
                      color="danger"
                    >
                      Delete
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
