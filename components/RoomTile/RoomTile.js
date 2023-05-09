import Image from "next/image";
import styled from "styled-components";

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

// Styled Component
const Title = styled.p`
  font-size: 15px;
  margin: 10px 0px 0px 0px;
`;

const ImageContainer = styled.div`
  overflow: hidden;
  border-radius: 20px;
  width: 128px;
  height: 128px;
`;

export default function RoomTile({ title, type }) {
  return (
    <div>
      <ImageContainer>
        <Image
          src={`/images/rooms/${type}.png`}
          width={128}
          height={128}
          alt={title}
        />
      </ImageContainer>
      <Title>{title}</Title>
    </div>
  );
}
