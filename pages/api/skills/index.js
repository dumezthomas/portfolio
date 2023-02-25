import { getSession } from "@auth0/nextjs-auth0";
import SkillApi from "lib/api/skill";

const handleSkills = async (req, res) => {
  try {
    const { accessToken } = await getSession(req, res);
    const json = await new SkillApi(accessToken).create(req.body);
    return res.json(json.data);
  } catch (error) {
    return res.status(error.response?.status || 422).json(error.response?.data);
  }
};

export default handleSkills;
