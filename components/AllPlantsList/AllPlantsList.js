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

  //! plants.rooms[0].title returns 0 sometimes because some rooms were deleted, which means those plants have no assigned room

  return (
    <>
      <StyledList>
        {plants.map((plant) => (
          <StyledCard key={plant._id}>
            <StyledListItem key={plant._id}>
              🪴 {plant.title} - Room:
              {plant.rooms.length > 0
                ? plant.rooms[0].title
                : "currently no room assigned"}
            </StyledListItem>
          </StyledCard>
        ))}
      </StyledList>
    </>
  );
}
