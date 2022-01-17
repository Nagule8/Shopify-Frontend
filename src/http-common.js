import axios from "axios";

export default axios.create({
  baseURL: "https://oneshop.azurewebsites.net/api",
  headers: {
    "Content-type": "application/json"
  }
});