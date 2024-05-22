import bullsEye from "../assets/bulls-eye.webp";
import thumpsUP from "../assets/thumbs-up.webp";
import meh from "../assets/meh.webp";
import { Image, ImageProps } from "@chakra-ui/react";
interface Props {
  rating: number;
}
const Emoji = ({ rating }: Props) => {
  if (rating < 3) return null;
  const emojiMap: { [key: number]: ImageProps } = {
    3: { src: meh, alt: "meh" },
    4: { src: thumpsUP, alt: "Recommanded" },
    5: { src: bullsEye, alt: "Exceptional" },
  };
  return <Image {...emojiMap[rating]} boxSize="25px" />;
};

export default Emoji;
