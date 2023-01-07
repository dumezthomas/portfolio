import axios from "axios";

const createProject = (data) => {
  return axios.post("api/projects", data);
};
