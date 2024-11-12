import axios from "axios";

const API_BASE_URL = "https://global-warming.org/api";

export const apiClient = axios.create({
  baseURL: API_BASE_URL,
  timeout: 10000,
});
