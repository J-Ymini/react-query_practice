import React from "react";
import { useQueries } from "react-query";
import { getHeroesDetail } from "../axios";

interface IParallelQueries {
  heroIds: string[];
}

const DynamicParallel = ({ heroIds }: IParallelQueries) => {
  const queryResult = useQueries(
    heroIds.map((id) => {
      return {
        queryKey: ["super-hero", id],
        queryFn: () => getHeroesDetail(id),
      };
    })
  );

  console.log(queryResult);

  return <div>DynamicParallel</div>;
};

export default DynamicParallel;
