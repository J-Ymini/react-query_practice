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

interface Iparams {
  queryKey: readonly unknown[];
}

export const getHeroesDetail = async (params: Iparams) => {
  console.log(params);
  const heroId = params.queryKey[1];
  const response = await instance.get(`/superheroes/${heroId}`);
  return response.data;
};

export const getNumbers = async (pageNumber: number) => {
  const response = await instance.get(`/number?_limit=2&_page=${pageNumber}`);
  return response.data;
};
