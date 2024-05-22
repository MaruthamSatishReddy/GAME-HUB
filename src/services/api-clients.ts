import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "40c115d7a44c4e15a5f43f5ddf480865",
  },
});
