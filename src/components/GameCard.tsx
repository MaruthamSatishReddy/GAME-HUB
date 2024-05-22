import { Card, CardBody, HStack, Heading, Image } from "@chakra-ui/react";
import { Game } from "../hooks/useGames";
import PlatformIconsList from "../components/PlatformIconsList";
import CriticScore from "./CriticScore";
import getCroppedImageURl from "../services/imageUrl";
import Emoji from "./Emoji";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <Card>
      <CardBody>
        <Image src={getCroppedImageURl(game.background_image)} />

        <HStack justifyContent="space-between" marginBottom={3}>
          <PlatformIconsList
            platforms={game.parent_platforms.map(
              (platform) => platform.platform
            )}
          />
          <CriticScore score={game.metacritic} />
        </HStack>
        <Heading fontSize="2xl"> {game.name}</Heading>
        <Emoji rating={game.rating_top} />
      </CardBody>
    </Card>
  );
};

export default GameCard;
