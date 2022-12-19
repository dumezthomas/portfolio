import React from "react";
import axios from "axios";

import BaseLayout from "../../components/layouts/BaseLayout";
import BasePage from "../../components/BasePage";

const PortfolioDetail = ({ portfolio }) => {
  return (
    <BaseLayout>
      <BasePage>
        <h1>{portfolio.title}</h1>
        <p>BODY: {portfolio.body}</p>
        <p>ID: {portfolio.id}</p>
      </BasePage>
    </BaseLayout>
  );
};

PortfolioDetail.getInitialProps = async ({ query }) => {
  let post = {};

  try {
    const res = await axios.get(`http://jsonplaceholder.typicode.com/posts/${query.id}`);
    post = res.data;
  } catch (error) {
    console.error(`Cannot fetch post (id: ${query.id}):`, error.message);
  }

  return { portfolio: post };
};

export default PortfolioDetail;
