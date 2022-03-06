import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:4000",
});

export const getHeroes = async () => {
  const response = await instance.get("/superheroes");
  return response.data;
};

export const getFriends = async () => {
  const response = await instance.get("/friends");
  return response.data;
};

export const getHeroesDetail = async (heroId: string) => {
  const response = await instance.get(`/superheroes/${heroId}`);
  return response.data;
};
