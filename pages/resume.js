import React from "react";

import { useUser } from "@auth0/nextjs-auth0/client";

import BaseLayout from "components/layouts/BaseLayout";
import BasePage from "components/BasePage";

import { Row, Col } from "reactstrap";

const Resume = () => {
  const { user, isLoading: userLoading } = useUser();

  return (
    <BaseLayout user={user} userLoading={userLoading}>
      <BasePage title="Resume | Thomas Dumez">
        <Row>
          <Col md={{ size: 8, offset: 2 }}>
            <iframe
              style={{ width: "100%", height: "800px" }}
              src="/files/Thomas_Dumez_Resume.pdf"
            />
          </Col>
        </Row>
      </BasePage>
    </BaseLayout>
  );
};

export default Resume;
