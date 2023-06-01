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
import { FaCouch } from "react-icons/fa";
import { RiPlantFill } from "react-icons/ri";

const StyledHeaderContainer = styled.div`
  display: flex;
`;

const StyledImage = styled(Image)`
  border-radius: 10px;
  margin: 0 50px;
`;

const StyledCardsContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const StyledCard = styled.div`
  display: flex;
  flex-direction: column;
  width: 8em;
  height: 8em;
  background-color: var(--white);
  border-radius: 15px;
  padding: 20px;
  margin: 20px 10px 0 10px;
`;

const StyledText = styled.p`
  margin: 10px 0 0 0;
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
        width={270}
        height={270}
        alt={plant.title}
      ></StyledImage>

      <StyledCardsContainer>
        <StyledCard>
          <FaCouch size={40} />
          <StyledText>
            Room: <br /> {plant.room ? plant.room.title : "No room assigned"}
          </StyledText>
        </StyledCard>

        <StyledCard>
          {" "}
          <RiPlantFill size={35} />
          <StyledText>
            Type:
            <br /> {plantTypeName(plant)}
          </StyledText>
        </StyledCard>
      </StyledCardsContainer>

      <Navigation />
    </>
  );
}
