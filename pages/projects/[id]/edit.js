import React from "react";
import { useRouter } from "next/router";

import withAuth from "hoc/withAuth";
import { useGetProjectById, useUpdateProject } from "actions/project";
import { useGetSkills } from "actions/skill";

import { toast } from "react-toastify";

import BaseLayout from "components/layouts/BaseLayout";
import BasePage from "components/BasePage";
import ProjectForm from "components/ProjectForm";
import { Row, Col } from "reactstrap";

const ProjectEdit = ({ user, userLoading }) => {
  const router = useRouter();
  const { data: initialData, error: errorGetInitialData } = useGetProjectById(router.query.id);
  const { data: skills, error: errorGetSkills } = useGetSkills();
  const [updateProject, { error: errorUpdateData }] = useUpdateProject();

  const onSubmitHandler = async (data) => {
    try {
      await updateProject(router.query.id, data);
      toast.success("Project has been successfuly updated!", { autoClose: 2000 });
    } catch (error) {}
  };

  return (
    <BaseLayout user={user} userLoading={userLoading}>
      <BasePage header="Edit Project">
        <Row>
          <Col md="8">
            {errorGetInitialData && <div className="alert alert-danger">{errorGetInitialData}</div>}
            {errorGetSkills && <div className="alert alert-danger">{errorGetSkills}</div>}
            {errorUpdateData && <div className="alert alert-danger">{errorUpdateData}</div>}
            {initialData && skills && (
              <ProjectForm
                initialData={initialData}
                skills={skills.filter((skill) => skill.showcase)}
                onSubmit={onSubmitHandler}
              />
            )}
          </Col>
        </Row>
      </BasePage>
    </BaseLayout>
  );
};

export default withAuth(ProjectEdit)("admin");
