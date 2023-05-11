import Image from "next/image";
import { StyledTileTitle, StyledImageContainer } from "./RoomTile.Styled";

// Freezed Object which contains all types of rooms (e.g. kitchen) that the user can choose from later on when adding a room
export const RoomType = Object.freeze({
  INVALID: "invalid",
  KITCHEN: "kitchen",
  LIVING_ROOM: "living_room",
  BEDROOM: "bedroom",
  BATHROOM: "bathroom",
  DINING_ROOM: "dining_room",
  HALLWAY: "hallway",
  OFFICE: "office",
});

export default function RoomTile({ title, type }) {
  return (
    <div>
      <StyledImageContainer>
        <Image
          src={`/images/rooms/${type}.png`}
          width={128}
          height={128}
          alt={title}
        />
      </StyledImageContainer>
      <StyledTileTitle>{title}</StyledTileTitle>
    </div>
  );
}
