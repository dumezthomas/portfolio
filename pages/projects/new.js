import React from "react";

import withAuth from "@/hoc/withAuth";
import { useCreateProject } from "@/actions/project";

import BaseLayout from "@/components/layouts/BaseLayout";
import BasePage from "@/components/BasePage";
import ProjectForm from "@/components/ProjectForm";
import Redirect from "@/components/shared/Redirect";
import { Row, Col } from "reactstrap";

const ProjectNew = ({ user, userLoading }) => {
  const [createProject, { data, error }] = useCreateProject();

  if (data) return <Redirect to="/projects" />;

  return (
    <BaseLayout user={user} userLoading={userLoading}>
      <BasePage header="Create Project">
        <Row>
          <Col md="8">
            {error && <div className="alert alert-danger">{error}</div>}
            <ProjectForm onSubmit={createProject} />
          </Col>
        </Row>
      </BasePage>
    </BaseLayout>
  );
};

export default withAuth(ProjectNew)("admin");
