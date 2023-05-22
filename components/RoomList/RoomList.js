import useSWR from "swr";
import { fetcher } from "@/utils/fetcher";
import RoomTile from "@/components/RoomTile/RoomTile.js";
import {
  StyledError,
  StyledErrorH3,
  StyledLoading,
  GridContainer,
} from "./RoomsList.Styled";
import StyledLink from "../StyledLink/StyledLink";

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

  return (
    <>
      <GridContainer>
        {rooms.map((room, index) => (
          <StyledLink key={index} href={`/rooms/${room._id}`}>
            <RoomTile title={room.title} type={room.type} />
          </StyledLink>
        ))}
      </GridContainer>
    </>
  );
}
