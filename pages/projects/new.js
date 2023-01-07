import React from "react";

import withAuth from "@/hoc/withAuth";

import BaseLayout from "@/components/layouts/BaseLayout";
import BasePage from "@/components/BasePage";
import ProjectForm from "@/components/ProjectForm";
import { Row, Col } from "reactstrap";

const ProjectNew = ({ user, userLoading }) => {
  const createProject = (data) => {
    alert(JSON.stringify(data));
  };

  return (
    <BaseLayout user={user} userLoading={userLoading}>
      <BasePage header="Create Project">
        <Row>
          <Col md="8">
            <ProjectForm onSubmit={createProject} />
          </Col>
        </Row>
      </BasePage>
    </BaseLayout>
  );
};

export default withAuth(ProjectNew)("admin");
