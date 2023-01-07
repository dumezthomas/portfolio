import axios from "axios";

class PortfolioApi {
  constructor() {
    this.apiUrl = `${process.env.API_BASE_URL}/portfolio`;
  }

  getAll() {
    return axios.get(this.apiUrl);
  }

  getById(id) {
    return axios.get(`${this.apiUrl}/${id}`);
  }
}

export default PortfolioApi;
