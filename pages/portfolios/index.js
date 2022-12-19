import React from "react";
import Link from "next/link";
import axios from "axios";

import BaseLayout from "../../components/layouts/BaseLayout";
import BasePage from "../../components/BasePage";

const Portfolios = ({ portfolios }) => {
  const renderPortfolios = () => {
    return portfolios.map((portfolio) => {
      return (
        <li key={portfolio.id}>
          <Link href={`/portfolios/${portfolio.id}`}>{portfolio.title}</Link>
        </li>
      );
    });
  };

  return (
    <>
      <BaseLayout>
        <BasePage>
          <h1>Portfolios</h1>
          <ul>{renderPortfolios()}</ul>
        </BasePage>
      </BaseLayout>
    </>
  );
};

Portfolios.getInitialProps = async () => {
  let posts = [];

  try {
    const res = await axios.get("http://jsonplaceholder.typicode.com/posts");
    posts = res.data;
  } catch (error) {
    console.error("Cannot fetch posts:", error.message);
  }

  return { portfolios: posts.slice(0, 10) };
};

export default Portfolios;
