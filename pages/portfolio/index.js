import React from "react";
import Link from "next/link";

import { useGetPosts } from "@/actions/index";

import BaseLayout from "@/components/layouts/BaseLayout";
import BasePage from "@/components/BasePage";

const Portfolio = () => {
  const { data, error, isLoading } = useGetPosts();

  const renderPortfolio = (portfolio) => {
    return portfolio.map((portfolioItem) => {
      return (
        <li key={portfolioItem.id}>
          <Link href={`/portfolio/${portfolioItem.id}`}>{portfolioItem.title}</Link>
        </li>
      );
    });
  };

  return (
    <>
      <BaseLayout>
        <BasePage>
          <h1>Portfolio</h1>
          {data && <ul>{renderPortfolio(data)}</ul>}
          {error && <div className="alert alert-danger">{error.message}</div>}
          {isLoading && <div className="alert alert-primary">Loading...</div>}
        </BasePage>
      </BaseLayout>
    </>
  );
};

export default Portfolio;
