import Image from "next/image";
import styled from "styled-components";

// Alle Möglichkeiten,die ein Raum sein kann - Object Roomtype: hat den Key KITCHEN und value "kitchen", object.freeze: object kann nicht mehr verändert werden
export const RoomType = Object.freeze({
  KITCHEN: "kitchen",
  LIVING_ROOM: "living_room",
  BEDROOM: "bedroom",
  BATHROOM: "bathroom",
  DINING_ROOM: "dining_room",
  HALLWAY: "hallway",
  OFFICE: "office",
});

// Styled Components

const Title = styled.p`
  font-size: 15px;
`;

export default function RoomTile({ title, type }) {
  return (
    <>
      <Image
        src={`/images/rooms/${type}.png`}
        width={128}
        height={128}
        alt="Room"
      />
      <Title>{title}</Title>
    </>
  );
}
