import { useQuery } from "react-query";
import { getHeroesDetail } from "./../axios";

interface IHero {
  id: number;
  name: string;
  alterEgo: string;
}

const useSuperHeroDetail = (heroId: string) => {
  return useQuery<IHero, Error>(["hero-detail", heroId], () =>
    getHeroesDetail(heroId)
  );
};

export default useSuperHeroDetail;
