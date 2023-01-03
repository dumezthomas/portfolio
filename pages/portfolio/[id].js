import React from "react";

import { useRouter } from "next/router";
import { useUser } from "@auth0/nextjs-auth0/client";
import { useGetPostById } from "@/actions/index";

import BaseLayout from "@/components/layouts/BaseLayout";
import BasePage from "@/components/BasePage";

const PortfolioDetail = ({ portfolioItem }) => {
  const { user, isLoading: userLoading } = useUser();
  const router = useRouter();
  const { id } = router.query;
  const { data, error, isLoading } = useGetPostById(id);

  const renderPortfolioItem = (portfolioItem) => {
    return (
      <>
        <h1>{portfolioItem.title}</h1>
        <p>BODY: {portfolioItem.body}</p>
        <p>ID: {portfolioItem.id}</p>
      </>
    );
  };

  return (
    <BaseLayout user={user} userLoading={userLoading}>
      <BasePage>
        {data && renderPortfolioItem(data)}
        {error && <div className="alert alert-danger">{error.message}</div>}
        {isLoading && <div className="alert alert-primary">Loading...</div>}
      </BasePage>
    </BaseLayout>
  );
};

export default PortfolioDetail;
