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
          <div class="cover-container d-flex h-100 p-3 mx-auto flex-column">
            <main role="main" class="inner page-cover">
              <p class="lead info mb-0">{project.technologies}</p>
              <h1 class="cover-heading">{project.project}</h1>
              <p class="lead dates">{project.client}</p>
              <p class="lead">{project.description}</p>
              <p class="lead">
                {project.website && (
                  <a href={project.website} target="_blank" class="btn btn-lg btn-secondary">
                    Live
                  </a>
                )}
                {project.github && (
                  <a href={project.github} target="_blank" class="btn btn-lg btn-secondary">
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

  return { paths, fallback: false };
};

export const getStaticProps = async ({ params }) => {
  const json = await new ProjectApi().getById(params.id);
  const project = json.data;

  return {
    props: { project },
  };
};

export default ProjectDetail;
