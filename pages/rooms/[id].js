import useSWR from "swr";
import { fetcher } from "@/utils/fetcher";
import Header from "@/components/Header/Header";
import {
  StyledError,
  StyledErrorH3,
  StyledLoading,
} from "@/components/RoomList/RoomsList.Styled";
import BackButton from "@/components/BackButton/BackButton";
import styled from "styled-components";
import { useRouter } from "next/router";

//Styled Components

const StyledCard = styled.div``;

export default function RoomDetailPage() {
  const router = useRouter();
  const { id } = router.query;

  const { data: room, error, isLoading } = useSWR(`/api/rooms/${id}`, fetcher);

  console.log("room", room, "error", error);

  // const findRoom = rooms.find((room) => room._id === id);

  // const { title } = findRoom;

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
      <BackButton href="/" />
      <Header>{room.title}</Header>
    </>
  );
}
