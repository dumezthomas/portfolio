import React from "react";
import { useRouter } from "next/router";

import { useUser } from "@auth0/nextjs-auth0/client";
import ProjectApi from "@/lib/api/project";

import BaseLayout from "@/components/layouts/BaseLayout";
import BasePage from "@/components/BasePage";
import ProjectCard from "@/components/ProjectCard";
import { Row, Col } from "reactstrap";

const Projects = ({ projects }) => {
  const { user, isLoading: userLoading } = useUser();
  const router = useRouter();

  return (
    <BaseLayout user={user} userLoading={userLoading}>
      <BasePage header="Projects" className="projects-page">
        <Row>
          {projects.map((project) => (
            <Col
              key={project._id}
              onClick={() => {
                router.push(`/projects/[id]`, `/projects/${project._id}`);
              }}
              md="4"
            >
              <ProjectCard project={project} />
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
  };
};

export default Projects;
