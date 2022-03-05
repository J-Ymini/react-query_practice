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
    cacheTime: 1000, // maintaining cache time, default: 5m
    staleTime: 5000, // 마운트된 컴포넌의 데이터가 fresh인지, stale인지 판단
    refetchOnMount: "always", // 데이터가 stale 상태일때 refetch 여부 설정
    refetchOnWindowFocus: "always", // window에 focusing 시 refetch 여부 설정
    refetchInterval: 5000, // polling
    refetchIntervalInBackground: true, // polling in not focusing
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
