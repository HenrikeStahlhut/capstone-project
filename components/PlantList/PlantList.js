import useSWR from "swr";
import { fetcher } from "@/utils/fetcher";
import {
  StyledError,
  StyledErrorH3,
  StyledLoading,
} from "../RoomList/RoomsList.Styled";
import Header from "../Header/Header";
import { StyledList, StyledListItem, StyledCard } from "./PlantList.Styled";

export default function PlantList({ room }) {
  const {
    data: plants,
    error,
    isLoading,
  } = useSWR(`/api/plants/${room}`, fetcher);

  if (error) {
    return (
      <StyledError>
        <StyledErrorH3>ERROR</StyledErrorH3>Failed to load plants 🥀
      </StyledError>
    );
  }

  if (isLoading) {
    return <StyledLoading>Loading your plants 🪴...</StyledLoading>;
  }

  console.log("plants", plants);

  return (
    <>
      <Header>All Plants</Header>
      <StyledList>
        {plants.map((plant) => (
          <StyledCard key={plant._id}>
            <StyledListItem key={plant._id}>🪴 {plant.title}</StyledListItem>
          </StyledCard>
        ))}
      </StyledList>
    </>
  );
}
