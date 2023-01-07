import React from "react";

import { useUser } from "@auth0/nextjs-auth0/client";
import ProjectApi from "@/lib/api/project";

import BaseLayout from "@/components/layouts/BaseLayout";
import BasePage from "@/components/BasePage";
import ProjectCard from "@/components/ProjectCard";

const ProjectDetail = ({ project }) => {
  const { user, isLoading: userLoading } = useUser();

  return (
    <BaseLayout user={user} userLoading={userLoading}>
      <BasePage header="Project Detail">
        <ProjectCard project={project} />
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
