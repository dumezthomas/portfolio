import React from "react";
import Link from "next/link";

import { useUser } from "@auth0/nextjs-auth0/client";
import { useGetPosts } from "@/actions/index";

import BaseLayout from "@/components/layouts/BaseLayout";
import BasePage from "@/components/BasePage";

const Portfolio = () => {
  const { user, isLoading: userLoading } = useUser();
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
    <BaseLayout user={user} userLoading={userLoading}>
      <BasePage>
        <h1>Portfolio</h1>
        {data && <ul>{renderPortfolio(data)}</ul>}
        {error && <div className="alert alert-danger">{error.message}</div>}
        {isLoading && <div className="alert alert-primary">Loading...</div>}
      </BasePage>
    </BaseLayout>
  );
};

export default Portfolio;
