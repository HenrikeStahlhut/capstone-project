import useSWR from "swr";
import { fetcher } from "@/utils/fetcher";
import {
  StyledList,
  StyledListItem,
  StyledCard,
  StyledPlantDetails,
} from "@/components/PlantList/PlantList.Styled";
import {
  StyledError,
  StyledErrorH3,
  StyledLoading,
} from "../RoomList/RoomsList.Styled";
import { StyledImage } from "@/pages";
import StyledLink from "../StyledLink/StyledLink";

export default function AllPlantsList() {
  const { data: plants, error, isLoading } = useSWR(`/api/plants`, fetcher);

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
        {plants.map((plant, index) => (
          <StyledCard key={plant._id}>
            <StyledLink key={index} href={`/plants/${plant._id}`}>
              <StyledListItem key={plant._id}>
                <StyledImage
                  key={plant._id}
                  src={`/plants/${plant.type}.jpeg`}
                  width={90}
                  height={90}
                  alt={plant.title}
                ></StyledImage>{" "}
                <StyledPlantDetails>
                  {plant.title} <br />
                  Room:
                  {plant.rooms.length > 0
                    ? plant.rooms[0].title
                    : "No room assigned"}
                </StyledPlantDetails>
              </StyledListItem>
            </StyledLink>
          </StyledCard>
        ))}
      </StyledList>
    </>
  );
}
