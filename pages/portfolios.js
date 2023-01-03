import React from "react";
import axios from "axios";

import BaseLayout from "../components/layouts/BaseLayout";

const Portfolios = ({ posts }) => {
  const renderPosts = () => {
    return posts.map((post) => <li key={post.id}>{post.id}</li>);
  };

  return (
    <>
      <BaseLayout>
        <h1>Portfolios</h1>
        <br />
        <ul>{renderPosts()}</ul>
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

  return { posts: posts.slice(0, 10) };
};

export default Portfolios;
