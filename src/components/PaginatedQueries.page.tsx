import React, { useState } from "react";
import { useQuery } from "react-query";
import { getNumbers } from "../axios";

interface INumber {
  id: number;
  text: string;
}

const PaginatedQueries = () => {
  const [pageNumber, setPageNumber] = useState(1);
  const { isLoading, isError, error, data, isFetching } = useQuery<
    INumber[],
    Error
  >(["numbers", pageNumber], () => getNumbers(pageNumber), {
    keepPreviousData: true,
  });

  if (isLoading) {
    return <h2>is Loading...</h2>;
  }

  if (isError) {
    return <h2>{error}</h2>;
  }

  console.log(data);

  return (
    <div>
      <h2>PaginatedQueries</h2>
      {data?.map((number) => (
        <div key={number.id}>{number.text}</div>
      ))}
      <button
        onClick={() => {
          setPageNumber((prev) => prev - 1);
        }}
        disabled={pageNumber === 1}
      >
        Prev Page
      </button>
      <button
        onClick={() => {
          setPageNumber((prev) => prev + 1);
        }}
        disabled={pageNumber === 4}
      >
        Next Page
      </button>
    </div>
  );
};

export default PaginatedQueries;
