import styled from "styled-components";
import RoomTile, { RoomType } from "@/components/RoomTile/RoomTile.js";

// Styled Component
const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  justify-items: center;
  gap: 20px;
  margin: 0px 40px 100px 40px;
`;

// List of Rooms (mapped over dummy array which represents user rooms from e.g. db/localstroage )
export default function RoomList({ rooms }) {
  return (
    <>
      <GridContainer>
        {rooms.map((room, index) => (
          <RoomTile key={index} title={room.title} type={room.type} />
        ))}
      </GridContainer>
    </>
  );
}
