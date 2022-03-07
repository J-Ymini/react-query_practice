import React, { useState } from "react";
import { useSuperHeroesData } from "../hooks";
import { Link } from "react-router-dom";
import { useAddSuperheroData } from "../hooks/useSuperHeroesData";

interface IHero {
  id: number;
  name: string;
  alterEgo: string;
}

const RQSuperHeroes = () => {
  const [name, setName] = useState<string>("");
  const [alterEgo, setAlterEgo] = useState<string>("");
  const { mutate: addHero } = useAddSuperheroData();

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

  const handleAddHeroClick = () => {
    console.log({ name, alterEgo });
    const hero = { name, alterEgo };
    addHero(hero);
  };

  return (
    <>
      <h2>RQSuperHeroes pages</h2>
      <div>
        <input
          type="text"
          value={name}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setName(e.target.value)
          }
        />
        <input
          type="text"
          value={alterEgo}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setAlterEgo(e.target.value)
          }
        />
      </div>
      <button
        onClick={() => {
          refetch();
        }}
      >
        reFresh
      </button>
      <button onClick={handleAddHeroClick}>Add Hero</button>
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
