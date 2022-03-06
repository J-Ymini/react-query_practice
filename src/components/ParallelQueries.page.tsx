import React from "react";
import { useQuery } from "react-query";
import { getHeroes, getFriends } from "../axios";

const ParallelQueries = () => {
  const { data: heroData } = useQuery("super-heroes", getHeroes);
  const { data: friendData } = useQuery("friends", getFriends);

  return <h2>ParallelQueries</h2>;
};

export default ParallelQueries;
