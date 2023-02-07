import React from "react";
import Head from "next/head";
import { useRouter } from "next/router";

import { Container } from "reactstrap";

const PageHeader = ({ header }) => {
  return (
    header && (
      <div className="page-header">
        <h1 className="page-header-title">{header}</h1>
      </div>
    )
  );
};

const BasePage = ({
  className = "",
  header,
  indexPage,
  noWrapper,
  title = "Thomas Dumez | Full Stack Web Developer",
  metaDescription = "Hi, I'm Thomas! A Full Stack Web Developer with a BS Degree in Information Systems. I am proficient with JavaScript, React, Node, Express, MongoDB & Next.",
  children,
}) => {
  const router = useRouter();
  const pageType = indexPage ? "index-page" : "base-page";
  const Wrapper = noWrapper ? React.Fragment : Container;

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="title" key="title" content={title} />
        <meta name="description" key="description" content={metaDescription.substring(0, 154)} />
        <meta property="og:title" key="og:title" content={title} />
        <meta property="og:locale" key="og:locale" content="en_CA" />
        <meta property="og:url" key="og:url" content={`${process.env.BASE_URL}${router.asPath}`} />
        <meta property="og:type" key="og:type" content="website" />
        <meta
          property="og:description"
          key="og:description"
          content={metaDescription.substring(0, 154)}
        />
        <meta
          property="og:image"
          key="og:image"
          content={`${process.env.BASE_URL}/images/profile.png`}
        />
        <link rel="canonical" href={`${process.env.BASE_URL}${router.asPath}`} />
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <div className={`${pageType} ${className}`}>
        <Wrapper>
          <PageHeader header={header} />
          {children}
        </Wrapper>
      </div>
    </>
  );
};

export default BasePage;
