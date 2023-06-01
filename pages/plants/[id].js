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
import styled from "styled-components";
import Image from "next/image";
import { plantTypeName } from "@/utils/PlantTypeName";

const StyledHeaderContainer = styled.div`
  display: flex;
`;

const StyledImage = styled(Image)`
  border-radius: 10px;
  margin: 0 50px;
  width: 300px;
  height: 100%;
`;

const StyledDetail = styled.p`
  margin: 20px 50px;
  font-size: 20px;
`;

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

  console.log(plantTypeName(plant));

  return (
    <>
      <BackButton href="/plants/all" />
      <StyledHeaderContainer>
        <Header>{plant.title}</Header>
        <EditPlantModal plant={plant} />
      </StyledHeaderContainer>
      <StyledImage
        key={plant._id}
        src={`/plants/${plant.type}.jpeg`}
        width={90}
        height={90}
        alt={plant.title}
      ></StyledImage>
      <StyledDetail>
        Room: {plant.room ? plant.room.title : "No room assigned :("}
      </StyledDetail>
      <StyledDetail> Type: {plantTypeName(plant)}</StyledDetail>

      <Navigation />
    </>
  );
}
