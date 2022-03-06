import React from "react";
import { useSuperHeroesData } from "../hooks";
import { Link } from "react-router-dom";

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

  return (
    <>
      <h2>RQSuperHeroes pages</h2>
      {/* <button onClick={getHeroesList}>Fetch heroes</button> */}
      <div style={{ display: "flex", flexDirection: "column" }}>
        {data?.map((hero) => (
          <Link key={hero.id} to={`/heroes/${hero.id}`}>
            {hero.name}
          </Link>
        ))}
      </div>
      {/* {data?.map((heroName) => (
        <div>{heroName}</div>
      ))} */}
    </>
  );
};

export default RQSuperHeroes;
