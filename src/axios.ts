import axios from "axios";

export const getHeroes = async () => {
  const response = await axios.get("http://localhost:4000/superheroes");
  return response.data;
};
