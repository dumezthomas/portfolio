import React from "react";

import { useUser } from "@auth0/nextjs-auth0/client";
import ProjectApi from "lib/api/project";

import BaseLayout from "components/layouts/BaseLayout";
import BasePage from "components/BasePage";

const ProjectDetail = ({ project }) => {
  const { user, isLoading: userLoading } = useUser();

  return (
    <BaseLayout user={user} userLoading={userLoading} navBarBg="transparent">
      <BasePage
        indexPage
        noWrapper
        title={`${project.project} | Thomas Dumez`}
        metaDescription={project.description}
      >
        <div className="project-details">
          <div className="cover-container d-flex h-100 p-3 mx-auto flex-column">
            <main role="main" className="inner page-cover">
              <p className="lead info mb-0">{project.technologies}</p>
              <h1 className="cover-heading">{project.project}</h1>
              <p className="lead dates">{project.client}</p>
              <p className="lead">{project.description}</p>
              <p className="lead">
                {project.website && (
                  <a href={project.website} target="_blank" className="btn btn-lg btn-secondary">
                    Live
                  </a>
                )}
                {project.github && (
                  <a href={project.github} target="_blank" className="btn btn-lg btn-secondary">
                    Code
                  </a>
                )}
              </p>
            </main>
          </div>
        </div>
      </BasePage>
    </BaseLayout>
  );
};

export const getStaticPaths = async () => {
  const json = await new ProjectApi().getAll();
  const projects = json.data;

  const paths = projects.map((project) => {
    return {
      params: { id: project._id },
    };
  });

  return { paths, fallback: true };
};

export const getStaticProps = async ({ params }) => {
  const json = await new ProjectApi().getById(params.id);
  const project = json.data;

  return {
    props: { project },
    revalidate: 10,
  };
};

export default ProjectDetail;
