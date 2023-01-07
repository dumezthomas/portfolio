import axios from "axios";

class ProjectApi {
  constructor() {
    this.apiUrl = `${process.env.API_BASE_URL}/projects`;
  }

  getAll() {
    return axios.get(this.apiUrl);
  }

  getById(id) {
    return axios.get(`${this.apiUrl}/${id}`);
  }
}

export default ProjectApi;
