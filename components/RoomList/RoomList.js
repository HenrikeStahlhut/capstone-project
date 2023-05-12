import RoomTile from "@/components/RoomTile/RoomTile.js";
import { fetcher } from "@/utils/fetcher";
import styled from "styled-components";
import useSWR from "swr";

// Styled Component
const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  justify-items: center;
  gap: 20px;
  margin: 0px 40px 100px 40px;
`;

// List of Rooms (mapped over dummy array which represents user rooms from e.g. db/localstroage )
// export default function RoomList({ rooms }) {
export default function RoomList() {
  const { data: rooms, error, isLoading } = useSWR("/api/rooms", fetcher);

  // TODO: style
  if (error) {
    return <div>failed to load</div>;
  }

  // TODO: style
  if (isLoading) {
    return <div>loading...</div>;
  }

  // TODO: empty state
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
