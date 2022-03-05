import React from "react";
import { getHeroes } from "../axios";
import { useQuery } from "react-query";

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
    useQuery<IHero[], Error>("rq-super-heroes", getHeroes, {
      // cacheTime: 1000, // maintaining cache time, default: 5m
      // staleTime: 5000, // 마운트된 컴포넌의 데이터가 fresh인지, stale인지 판단
      // refetchOnMount: "always", // 데이터가 stale 상태일때 refetch 여부 설정
      // refetchOnWindowFocus: "always", // window에 focusing 시 refetch 여부 설정
      // refetchInterval: 5000, // polling
      // refetchIntervalInBackground: true, // polling in not focusing
      enabled: false, // 쿼리를 날렸을때 데이터를 받아오지 못하도록
      onSuccess,
      onError,
    });

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
      {data?.map(
        (hero: {
          id: React.Key | null | undefined;
          name:
            | boolean
            | React.ReactChild
            | React.ReactFragment
            | React.ReactPortal
            | null
            | undefined;
        }) => (
          <div key={hero.id}>{hero.name}</div>
        )
      )}
    </>
  );
};

export default RQSuperHeroes;
