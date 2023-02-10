import React from "react";
import { Email } from "react-obfuscate-email";

import { useUser } from "@auth0/nextjs-auth0/client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

import BaseLayout from "components/layouts/BaseLayout";
import BasePage from "components/BasePage";
import Typed from "components/shared/Typed";
import { Container, Row, Col, Button } from "reactstrap";

const TypedText = () => {
  const roles = [
    "Developer",
    "React JS",
    "MongoDB",
    "Node JS",
    "JavaScript",
    "Next JS",
    "Full Stack",
  ];

  return (
    <Typed
      loop
      typeSpeed={70}
      backSpeed={70}
      backDelay={1000}
      loopCount={0}
      showCursor
      cursorChar="|"
      strings={roles}
      className="self-typed"
    />
  );
};

const Home = () => {
  const { user, isLoading: userLoading } = useUser();

  return (
    <BaseLayout user={user} userLoading={userLoading} navBarBg="transparent" className="cover">
      <BasePage indexPage>
        <div className="main-section">
          <div className="background-image">
            <img src="/images/background-index.png" />
          </div>

          <Container>
            <Row>
              <Col md="6">
                <div className="hero-section">
                  <div className="hero-section-image">
                    <div className="hero-section-content">
                      <h2>
                        Full Stack
                        <br />
                        Web Developer
                      </h2>
                      <div className="hero-section-contact">
                        <Email email="contact@dumezthomas.dev" subject="Information">
                          <Button color="contact" className="hero-section-contact">
                            <FontAwesomeIcon icon={faEnvelope} className="me-2" />
                            Contact Me
                          </Button>
                        </Email>
                      </div>
                    </div>
                  </div>
                  <div className="shadow-custom">
                    <div className="shadow-inner"> </div>
                  </div>
                </div>
              </Col>

              <Col md="6" className="hero-welcome-wrapper">
                <div className="hero-welcome-text">
                  <h1>
                    Welcome to my portfolio. Get informed, collaborate and discover projects I was
                    working on through the years!
                  </h1>
                </div>
                <TypedText />
                <div className="hero-welcome-bio">
                  <h1>Let's take a look on my work.</h1>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </BasePage>
    </BaseLayout>
  );
};

export default Home;
