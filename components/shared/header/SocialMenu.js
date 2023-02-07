import React from "react";
import { Email } from "react-obfuscate-email";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const SocialMenu = () => {
  return (
    <div className="port-navbar-social">
      <Email email="info@dumezthomas.dev" subject="More information about your work">
        <FontAwesomeIcon icon={faEnvelope} className="port-navbar-link" />
      </Email>
      <a href="https://github.com/dumezthomas" target="_blank">
        <FontAwesomeIcon icon={faGithub} className="port-navbar-link ms-3" />
      </a>
      <a href="https://www.linkedin.com/in/dumezthomas/" target="_blank">
        <FontAwesomeIcon icon={faLinkedin} className="port-navbar-link ms-3" />
      </a>
    </div>
  );
};

export default SocialMenu;
