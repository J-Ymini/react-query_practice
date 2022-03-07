import { useQuery, useMutation, useQueryClient } from "react-query";
import { getHeroes, addSuperHero } from "./../axios";

interface IHero {
  id: number;
  name: string;
  alterEgo: string;
}

const useSuperHeroesData = (onSuccess: any, onError: any) => {
  return useQuery<
    IHero[],
    Error
    // string[] // filtered data's type
  >("rq-super-heroes", getHeroes, {
    // cacheTime: 1000, // maintaining cache time, default: 5m
    // staleTime: 5000, // 마운트된 컴포넌의 데이터가 fresh인지, stale인지 판단
    // refetchOnMount: "always", // 데이터가 stale 상태일때 refetch 여부 설정
    // refetchOnWindowFocus: "always", // window에 focusing 시 refetch 여부 설정
    // refetchInterval: 5000, // polling
    // refetchIntervalInBackground: true, // polling in not focusing
    // enabled: false, // 쿼리를 날렸을때 데이터를 받아오지 못하도록
    // onSuccess,
    // onError,
    // select: (data) => { // filtering data
    //   return data.map((hero) => hero.name);
    // },
    retry: 0,
  });
};

export default useSuperHeroesData;

export const useAddSuperheroData = () => {
  const queryClient = useQueryClient();

  return useMutation(addSuperHero, {
    onSuccess: () => {
      queryClient.invalidateQueries("rq-super-heroes");
    },
  });
};
