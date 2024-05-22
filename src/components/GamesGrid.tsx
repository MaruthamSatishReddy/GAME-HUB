import { SimpleGrid } from "@chakra-ui/react";
import GameCard from "./GameCard";

import GameCardSkeleton from "./GameCardSkeleton";

import { GameQuery } from "../App";
import useGames from "../hooks/useGames";
interface Props {
  gameQuery: GameQuery;
}
const GamesGrid = ({ gameQuery }: Props) => {
  const { data, isLoading } = useGames(gameQuery);
  const skeletons = [1, 2, 3, 4, 5, 6];
  return (
    <>
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
        padding="10px"
        spacing={6}
      >
        {isLoading &&
          skeletons.map((skeleton) => <GameCardSkeleton key={skeleton} />)}
        {data && data.map((game) => <GameCard game={game} key={game.id} />)}
      </SimpleGrid>
    </>
  );
};

export default GamesGrid;
