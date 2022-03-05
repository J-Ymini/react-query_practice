import React from "react";
import { getHeroes } from "../axios";
import { useQuery } from "react-query";

interface IHero {
  id: number;
  name: string;
  alterEgo: string;
}

const RQSuperHeroes = () => {
  const { data, isLoading, isError, error } = useQuery<IHero[], Error>(
    "rq-super-heroes",
    getHeroes
  );

  if (isLoading) {
    return <h2>loading</h2>;
  }

  if (isError) {
    return <h2>{error.message}</h2>;
  }

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
