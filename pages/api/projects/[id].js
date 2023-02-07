import { getSession } from "@auth0/nextjs-auth0";
import ProjectApi from "lib/api/project";

const handleProjectById = async (req, res) => {
  try {
    if (req.method === "GET") {
      const json = await new ProjectApi().getById(req.query.id);
      return res.json(json.data);
    }

    if (req.method === "PATCH") {
      const { accessToken } = await getSession(req, res);
      const json = await new ProjectApi(accessToken).update(req.query.id, req.body);
      return res.json(json.data);
    }

    if (req.method === "DELETE") {
      const { accessToken } = await getSession(req, res);
      const json = await new ProjectApi(accessToken).deleteById(req.query.id);
      return res.json(json.data);
    }
  } catch (error) {
    return res.status(error.response?.status || 422).json(error.response?.data);
  }
};

export default handleProjectById;
