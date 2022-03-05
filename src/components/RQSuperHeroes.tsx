import React from "react";
import { getHeroes } from "../axios";
import { useQuery } from "react-query";

interface IHero {
  id: number;
  name: string;
  alterEgo: string;
}

const RQSuperHeroes = () => {
  const { data, isLoading, isError, error, isFetching, isStale } = useQuery<
    IHero[],
    Error
  >("rq-super-heroes", getHeroes, {
    cacheTime: 5000, // maintaining cache time, default: 5m
    staleTime: 3000, // 마운트된 컴포넌의 데이터가 fresh인지, stale인지 판단
  });

  console.log({ isLoading, isFetching, isStale });

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
