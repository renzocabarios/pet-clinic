import axios from "axios";

const BASE_URL = "http://localhost:9000/api/";

export function get(url) {
  return axios.get(`${BASE_URL}${url}`);
}

export function post(url, body) {
  return axios.post(`${BASE_URL}${url}`, body);
}

export function deleteById(url) {
  return axios.delete(`${BASE_URL}${url}`);
}

export default { get, deleteById, post };
