import React from "react";
import { useRouter } from "next/router";

import { useUser } from "@auth0/nextjs-auth0/client";
import PortfolioApi from "@/lib/api/portfolio";

import BaseLayout from "@/components/layouts/BaseLayout";
import BasePage from "@/components/BasePage";
import PortfolioCard from "@/components/PortfolioCard";
import { Row, Col } from "reactstrap";

const Portfolio = ({ portfolio }) => {
  const { user, isLoading: userLoading } = useUser();
  const router = useRouter();

  return (
    <BaseLayout user={user} userLoading={userLoading}>
      <BasePage header="Portfolio" className="portfolio-page">
        <Row>
          {portfolio.map((portfolioItem) => (
            <Col
              key={portfolioItem._id}
              onClick={() => {
                router.push(`/portfolio/[id]`, `/portfolio/${portfolioItem._id}`);
              }}
              md="4"
            >
              <PortfolioCard portfolio={portfolioItem} />
            </Col>
          ))}
        </Row>
      </BasePage>
    </BaseLayout>
  );
};

export const getStaticProps = async () => {
  const json = await new PortfolioApi().getAll();
  const portfolio = json.data;

  return {
    props: { portfolio },
  };
};

export default Portfolio;
