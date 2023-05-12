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

const StyledError = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 75vh;
  font-weight: bold;
  color: red;
`;

const StyledErrorH3 = styled.h3`
  margin: 5px;
`;

const StyledLoading = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 75vh;
  font-weight: bold;
`;

export default function RoomList() {
  const { data: rooms, error, isLoading } = useSWR("/api/rooms", fetcher);

  if (error) {
    return (
      <StyledError>
        <StyledErrorH3>ERROR</StyledErrorH3>Failed to load rooms ☹︎
      </StyledError>
    );
  }

  if (isLoading) {
    return <StyledLoading>Loading your rooms...</StyledLoading>;
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
