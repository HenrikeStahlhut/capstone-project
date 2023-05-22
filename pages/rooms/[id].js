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
import EditIcon from "@/components/EditRoomModal/EditRoomModal";
import EditRoomModal from "@/components/EditRoomModal/EditRoomModal";

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

  // return room details (plants, name, etc.)

  return (
    <>
      <BackButton href="/" />
      <Header>{room.title}</Header>
      <EditRoomModal room={room} />
      <PlantList room={room._id} />
      <Navigation />
    </>
  );
}
