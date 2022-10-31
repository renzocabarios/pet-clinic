import axios from "axios";

const BASE_URL = "http://localhost:9000/api/";

function get(url) {
  return axios.get(`${BASE_URL}${url}`);
}

function post(url, body) {
  return axios.post(`${BASE_URL}${url}`, body);
}

function update(url, body) {
  return axios.patch(`${BASE_URL}${url}`, body);
}

function deleteById(url) {
  return axios.delete(`${BASE_URL}${url}`);
}

export default { get, deleteById, post, update };
