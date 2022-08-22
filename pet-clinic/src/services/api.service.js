import axios from "axios";

const BASE_URL = "http://localhost:9000/api/";

export function get(url) {
  return axios.get(`${BASE_URL}${url}`);
}

export default { get };
