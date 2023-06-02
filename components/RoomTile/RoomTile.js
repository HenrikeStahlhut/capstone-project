import Image from "next/image";
import { StyledTileTitle, StyledImageContainer } from "./RoomTile.Styled";

// Freezed Object which contains all types of rooms (e.g. kitchen) that the user can choose from when adding a room
export const RoomType = Object.freeze({
  INVALID: "INVALID",
  KITCHEN: "KITCHEN",
  LIVING_ROOM: "LIVING_ROOM",
  BEDROOM: "BEDROOM",
  BATHROOM: "BATHROOM",
  DINING_ROOM: "DINING_ROOM",
  HALLWAY: "HALLWAY",
  OFFICE: "OFFICE",
});

export default function RoomTile({ title, type }) {
  return (
    <div>
      <StyledImageContainer>
        <Image
          src={`/rooms/${type}.png`}
          key={`/rooms/${type}.png`}
          width={128}
          height={128}
          alt={title}
        />
      </StyledImageContainer>
      <StyledTileTitle>{title}</StyledTileTitle>
    </div>
  );
}
