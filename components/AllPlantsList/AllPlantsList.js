import { fetcher } from "@/utils/fetcher";
import useSWR from "swr";
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

export default function AllPlantsList() {
  const { data: plants, error, isLoading } = useSWR("/api/plants", fetcher);

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
              🪴 {plant.title} - Room: {plant.room}
            </StyledListItem>
          </StyledCard>
        ))}
      </StyledList>
    </>
  );
}
