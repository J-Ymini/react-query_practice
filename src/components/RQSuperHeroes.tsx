import axios from "axios";
import React from "react";
import { useQuery } from "react-query";

interface IHero {
  id: number;
  name: string;
  alterEgo: string;
}

const fetchHeroes = async () => {
  const response = await axios.get("http://localhost:4000/superheroes");
  return response.data;
};

const RQSuperHeroes = () => {
  const { data, isLoading, isError, error } = useQuery<IHero[], Error>(
    "rq-super-heroes",
    fetchHeroes
  );

  if (isLoading) {
    return <h2>loading</h2>;
  }

  if (isError) {
    return <h2>{error}</h2>;
  }

  console.log(data);

  return (
    <>
      <h2>RQSuperHeroes pages</h2>
      {data?.map((hero) => (
        <div key={hero.id}>{hero.name}</div>
      ))}
    </>
  );
};

export default RQSuperHeroes;
