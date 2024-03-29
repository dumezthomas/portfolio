import React from "react";

import { useUser } from "@auth0/nextjs-auth0/client";
import SkillApi from "lib/api/skill";

import BaseLayout from "components/layouts/BaseLayout";
import BasePage from "components/BasePage";
import SkillBadge from "components/shared/SkillBadge";
import { Row, Col } from "reactstrap";

const About = ({ skillsByCategorie }) => {
  const { user, isLoading: userLoading } = useUser();
  const bgColor = "DDDDDD";
  const style = "flat";

  const mapSkills = (skills) =>
    skills.map((skill) => (
      <SkillBadge key={skill._id} skill={skill} bgColor={bgColor} style={style} />
    ));

  return (
    <BaseLayout user={user} userLoading={userLoading}>
      <BasePage className="about-page" title="About Me | Thomas Dumez">
        <Row>
          <Col md="6">
            <div>
              <h1 className="title">Hi, I'm Thomas 👋</h1>
              <p>
                I am a <b>Full Stack Web Developer</b> with a Bachelor of Science degree in
                Information Systems.
              </p>
              <p>
                I have recently completed various courses about <em>Amazon Web Services (AWS)</em>,{" "}
                <em>Agile Project Management</em>, and front-end and back-end modern technologies,
                such as <em>React.js</em>, <em>Next.js</em>, <em>Node.js</em>, <em>Express.js</em>,
                and <em>MongoDB</em>.
              </p>
              <p>
                Additionally, I have over three years of experience working as a software developer
                on complex projects and systems.
              </p>
            </div>
          </Col>
          <Col md="6">
            <div>
              <h1 className="title">Technical skills</h1>
              <p>{mapSkills(skillsByCategorie.programmingLanguage)}</p>
              <p>{mapSkills(skillsByCategorie.web)}</p>
              <p>{mapSkills(skillsByCategorie.webFramework)}</p>
              <p>{mapSkills(skillsByCategorie.database)}</p>
              <p>{mapSkills(skillsByCategorie.tool)}</p>
              <p>{mapSkills(skillsByCategorie.software)}</p>
              <p>{mapSkills(skillsByCategorie.system)}</p>
            </div>
          </Col>
        </Row>
      </BasePage>
    </BaseLayout>
  );
};

const getSkillsByCategorie = (skills) => {
  const skillsByCategorie = {
    programmingLanguage: [],
    web: [],
    webFramework: [],
    database: [],
    tool: [],
    software: [],
    system: [],
  };

  skills.forEach((skill) => {
    switch (skill.categorie) {
      case "Programming Language":
        skillsByCategorie.programmingLanguage.push(skill);
        break;
      case "Web":
        skillsByCategorie.web.push(skill);
        break;
      case "Web Framework":
        skillsByCategorie.webFramework.push(skill);
        break;
      case "Database":
        skillsByCategorie.database.push(skill);
        break;
      case "Tool":
        skillsByCategorie.tool.push(skill);
        break;
      case "Software":
        skillsByCategorie.software.push(skill);
        break;
      case "System":
        skillsByCategorie.system.push(skill);
        break;
    }
  });

  return skillsByCategorie;
};

export const getStaticProps = async () => {
  const json = await new SkillApi().getAll();
  const skillsByCategorie = getSkillsByCategorie(json.data);

  return {
    props: { skillsByCategorie },
    revalidate: 60,
  };
};

export default About;
