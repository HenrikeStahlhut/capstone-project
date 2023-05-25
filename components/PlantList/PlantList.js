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

  console.log("plants", plants);

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

  return (
    <>
      <Header>All Plants</Header>
      <StyledList>
        {plants.map((plant) => (
          <StyledCard key={plant._id}>
            <StyledListItem key={plant._id}>
              🪴 {plant.title} <br />
              Room: {plant.rooms[0].title}
            </StyledListItem>
          </StyledCard>
        ))}
      </StyledList>
    </>
  );
}
