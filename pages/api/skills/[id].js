import { getSession } from "@auth0/nextjs-auth0";
import SkillApi from "lib/api/skill";

const handleSkillById = async (req, res) => {
  try {
    if (req.method === "GET") {
      const json = await new SkillApi().getById(req.query.id);
      return res.json(json.data);
    }

    if (req.method === "PATCH") {
      const { accessToken } = await getSession(req, res);
      const json = await new SkillApi(accessToken).update(req.query.id, req.body);
      return res.json(json.data);
    }

    if (req.method === "DELETE") {
      const { accessToken } = await getSession(req, res);
      const json = await new SkillApi(accessToken).deleteById(req.query.id);
      return res.json(json.data);
    }
  } catch (error) {
    return res.status(error.response?.status || 422).json(error.response?.data);
  }
};

export default handleSkillById;
