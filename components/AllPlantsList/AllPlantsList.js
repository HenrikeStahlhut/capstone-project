import useSWR from "swr";
import { fetcher } from "@/utils/fetcher";
import {
  StyledList,
  StyledListItem,
  StyledCard,
} from "@/components/PlantList/PlantList.Styled";
import {
  StyledError,
  StyledErrorH3,
  StyledLoading,
} from "../RoomList/RoomsList.Styled";

export default function AllPlantsList({ room }) {
  const { data: plants, error, isLoading } = useSWR(`/api/plants`, fetcher);

  console.log("plants", plants);

  if (error) {
    return (
      <StyledError>
        <StyledErrorH3>ERROR</StyledErrorH3>Failed to load plants
      </StyledError>
    );
  }

  if (isLoading) {
    return <StyledLoading>Loading your plants ...</StyledLoading>;
  }

  return (
    <>
      <StyledList>
        {plants.map((plant) => (
          <StyledCard key={plant._id}>
            <StyledListItem key={plant._id}>
              🪴 {plant.title} <br /> Room:
              {plant.rooms.length > 0
                ? plant.rooms[0].title
                : "No room assigned"}
            </StyledListItem>
          </StyledCard>
        ))}
      </StyledList>
    </>
  );
}
