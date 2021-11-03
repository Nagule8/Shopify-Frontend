import axios from "axios";

export default axios.create({
  baseURL: "https://localhost:44385/api",
  headers: {
    "Content-type": "application/json"
  }
});