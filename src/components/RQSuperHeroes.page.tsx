import React from "react";
import { getHeroes } from "../axios";
import { useQuery } from "react-query";
import { useSuperHeroesData } from "../hooks";

interface IHero {
  id: number;
  name: string;
  alterEgo: string;
}

const RQSuperHeroes = () => {
  const onSuccess = (data: any) => {
    console.log(data);
    alert("데이터를 성공적으로 불러왔습니다.");
  };

  const onError = (error: any) => {
    console.log(error);
    alert("에러가 발생하였습니다.");
  };

  const { data, isLoading, isError, error, isFetching, isStale, refetch } =
    useSuperHeroesData(onSuccess, onError);

  if (isLoading || isFetching) {
    return <h2>loading</h2>;
  }

  if (isError) {
    return <h2>{error.message}</h2>;
  }

  const getHeroesList = () => {
    refetch();
  };

  return (
    <>
      <h2>RQSuperHeroes pages</h2>
      <button onClick={getHeroesList}>Fetch heroes</button>
      {data?.map((hero) => (
        <div key={hero.id}>{hero.name}</div>
      ))}
      {/* {data?.map((heroName) => (
        <div>{heroName}</div>
      ))} */}
    </>
  );
};

export default RQSuperHeroes;
