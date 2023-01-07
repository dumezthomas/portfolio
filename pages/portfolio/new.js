import React from "react";

import withAuth from "@/hoc/withAuth";

import BaseLayout from "@/components/layouts/BaseLayout";
import BasePage from "@/components/BasePage";
import PortfolioForm from "@/components/PortfolioForm";
import { Row, Col } from "reactstrap";

const PortfolioNew = ({ user, userLoading }) => {
  return (
    <BaseLayout user={user} userLoading={userLoading}>
      <BasePage header="Create Portfolio">
        <Row>
          <Col md="8">
            <PortfolioForm />
          </Col>
        </Row>
      </BasePage>
    </BaseLayout>
  );
};

export default withAuth(PortfolioNew)("admin");
