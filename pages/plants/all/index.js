import useSWR from "swr";
import { useRouter } from "next/router";
import { fetcher } from "@/utils/fetcher";
import AllPlantsList from "@/components/AllPlantsList/AllPlantsList";
import BackButton from "@/components/BackButton/BackButton";
import Header from "@/components/Header/Header";
import {
  StyledError,
  StyledErrorH3,
  StyledLoading,
} from "@/components/RoomList/RoomsList.Styled";
import Navigation from "@/components/Navigation/Navigation";

export default function AllPlants() {
  const router = useRouter();
  const { id } = router.query;

  const { data: room, error, isLoading } = useSWR(`/api/rooms`, fetcher);

  console.log("room", room);

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
      <BackButton href="/" />
      <Header>Your Plants</Header>
      <AllPlantsList room={room._id} />
      <Navigation />
    </>
  );
}
