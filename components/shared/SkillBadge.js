import React from "react";

const SkillBadge = ({ skill, bgColor, style }) => {
  const baseUrl = "https://img.shields.io/badge/";

  return (
    <img
      src={`${baseUrl}-${skill.name}-${bgColor}?style=${style}${
        skill.logo && skill.logoColor ? `&logo=${skill.logo}&logoColor=${skill.logoColor}` : ""
      }`}
      className="me-1"
      key={skill._id}
    />
  );
};

export default SkillBadge;
