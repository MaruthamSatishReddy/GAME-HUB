import { Box } from "@chakra-ui/react";
import { ReactNode } from "react";
interface Props {
  childern: ReactNode;
}
const GameCardContainer = ({ childern }: Props) => {
  return (
    <Box borderRadius={10} overflow="hidden" width="300px">
      {childern}
    </Box>
  );
};

export default GameCardContainer;
