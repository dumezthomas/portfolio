import React from "react";
import { Email } from "react-obfuscate-email";

import { useUser } from "@auth0/nextjs-auth0/client";
import SkillApi from "lib/api/skill";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

import BaseLayout from "components/layouts/BaseLayout";
import BasePage from "components/BasePage";
import Typed from "components/shared/Typed";
import { Container, Row, Col, Button } from "reactstrap";

const Home = ({ skills }) => {
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
                  <p className="hero-welcome-text-title">Welcome to my portfolio!</p>
                  <p>I have a passion for creating innovative and dynamic web applications.</p>
                  <Typed
                    loop
                    typeSpeed={70}
                    backSpeed={70}
                    backDelay={1000}
                    loopCount={0}
                    showCursor
                    cursorChar="|"
                    strings={skills}
                    className="hero-welcome-text-self-typed"
                  />
                  <p>Take a look at my projects.</p>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </BasePage>
    </BaseLayout>
  );
};

const shuffleArray = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }

  return array;
};

export const getStaticProps = async () => {
  const json = await new SkillApi().getAll();
  const skillsSorted = json.data.filter((skill) => skill.showcase).map((skill) => skill.name);
  const skills = shuffleArray(skillsSorted);

  return {
    props: { skills },
    revalidate: 60,
  };
};

export default Home;
