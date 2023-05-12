import styled from "styled-components";
import useSWR from "swr";
import { fetcher } from "@/utils/fetcher";
import {
  StyledError,
  StyledErrorH3,
  StyledLoading,
  GridContainer,
} from "./RoomsList.Styled";
import RoomTile from "@/components/RoomTile/RoomTile.js";

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
