import React from "react";

import { useUser } from "@auth0/nextjs-auth0/client";
import PortfolioApi from "@/lib/api/portfolio";

import BaseLayout from "@/components/layouts/BaseLayout";
import BasePage from "@/components/BasePage";
import PortfolioCard from "@/components/PortfolioCard";

const PortfolioDetail = ({ portfolioItem }) => {
  const { user, isLoading: userLoading } = useUser();

  return (
    <BaseLayout user={user} userLoading={userLoading}>
      <BasePage header="Portfolio Detail">
        <PortfolioCard portfolio={portfolioItem} />
      </BasePage>
    </BaseLayout>
  );
};

export const getStaticPaths = async () => {
  const json = await new PortfolioApi().getAll();
  const portfolio = json.data;

  const paths = portfolio.map((portfolioItem) => {
    return {
      params: { id: portfolioItem._id },
    };
  });

  return { paths, fallback: false };
};

export const getStaticProps = async ({ params }) => {
  const json = await new PortfolioApi().getById(params.id);
  const portfolioItem = json.data;

  return {
    props: { portfolioItem },
  };
};

export default PortfolioDetail;
