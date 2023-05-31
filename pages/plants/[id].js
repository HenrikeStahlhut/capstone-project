import {
  StyledError,
  StyledErrorH3,
  StyledLoading,
} from "@/components/RoomList/RoomsList.Styled";
import useSWR from "swr";
import { useRouter } from "next/router";
import { fetcher } from "@/utils/fetcher";
import BackButton from "@/components/BackButton/BackButton";
import Header from "@/components/Header/Header";
import Navigation from "@/components/Navigation/Navigation";
import EditPlantModal from "@/components/EditPlantModal/EditPlantModal";

export default function PlantDetailPage() {
  const router = useRouter();
  const { id } = router.query;

  const {
    data: plant,
    error,
    isLoading,
  } = useSWR(`/api/plants/${id}`, fetcher);

  // Error handling
  if (!plant) {
    return null;
  }

  if (error || (plant && plant.error)) {
    console.log("render error");

    return (
      <StyledError>
        <StyledErrorH3>ERROR</StyledErrorH3>Failed to load room
        <code>{plant.error}</code>
      </StyledError>
    );
  }

  if (isLoading) {
    return <StyledLoading>Loading your rooms...</StyledLoading>;
  }

  return (
    <>
      <BackButton href="/plants/all" />
      <Header>
        {plant.title} <EditPlantModal plant={plant} />
      </Header>

      <p>{plant.room ? plant.room.title : "Kein Raum"}</p>

      <Navigation />
    </>
  );
}
