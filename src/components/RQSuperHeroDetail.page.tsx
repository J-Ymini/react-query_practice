import React from "react";
import { useParams } from "react-router-dom";
import { useSuperHeroDetail } from "../hooks";

const RQSuperHeroDetail = () => {
  const { id } = useParams();

  const { data, isLoading, isError, error } = useSuperHeroDetail(id as string);

  return (
    <>
      <h2>RQSuperHeroDetail</h2>
      <div>{data?.id}</div>
      <div>{data?.name}</div>
      <div>{data?.alterEgo}</div>
    </>
  );
};

export default RQSuperHeroDetail;
