import useSWR from "swr";
import { useRouter } from "next/router";
import { fetcher } from "@/utils/fetcher";
import Header from "@/components/Header/Header";
import BackButton from "@/components/BackButton/BackButton";
import Navigation from "@/components/Navigation/Navigation";
import {
  StyledError,
  StyledErrorH3,
  StyledLoading,
} from "@/components/RoomList/RoomsList.Styled";
import PlantList from "@/components/PlantList/PlantList";
import EditRoomModal from "@/components/EditRoomModal/EditRoomModal";
import DeleteButton from "@/components/DeleteButton/DeleteButton";
import styled from "styled-components";

const StyledHeaderContainer = styled.div`
  display: flex;
`;

// Detail page of room
export default function RoomDetailPage() {
  const router = useRouter();
  const { id } = router.query;

  const { data: room, error, isLoading } = useSWR(`/api/rooms/${id}`, fetcher);

  // Error handling

  if (!room) {
    return null;
  }

  if (error || (room && room.error)) {
    console.log("render error");

    return (
      <StyledError>
        <StyledErrorH3>ERROR</StyledErrorH3>Failed to load room
        <code>{room.error}</code>
      </StyledError>
    );
  }

  if (isLoading) {
    return <StyledLoading>Loading your rooms...</StyledLoading>;
  }

  return (
    <>
      <BackButton href="/rooms/all" />

      <StyledHeaderContainer>
        <Header>{room.title}</Header>
        <EditRoomModal room={room} />
        <DeleteButton room={room} />
      </StyledHeaderContainer>

      <PlantList room={room} />
      <Navigation />
    </>
  );
}
