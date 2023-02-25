import axios from "axios";

class SkillApi {
  constructor(accessToken) {
    this.apiUrl = `${process.env.API_BASE_URL}/skills`;
    this.config = {};

    if (accessToken) {
      this.config.headers = { authorization: `Bearer ${accessToken}` };
    }
  }

  getAll = () => axios.get(this.apiUrl);

  getById = (id) => axios.get(`${this.apiUrl}/${id}`);

  create = (data) => axios.post(this.apiUrl, data, this.config);

  update = (id, data) => axios.patch(`${this.apiUrl}/${id}`, data, this.config);

  deleteById = (id) => axios.delete(`${this.apiUrl}/${id}`, this.config);
}

export default SkillApi;
