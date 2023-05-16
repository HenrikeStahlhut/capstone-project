import useSWR from "swr";
import { fetcher } from "@/utils/fetcher";
import {
  StyledError,
  StyledErrorH3,
  StyledLoading,
} from "../RoomList/RoomsList.Styled";

export default function PlantList({ room }) {
  const {
    data: plants,
    error,
    isLoading,
  } = useSWR(`/api/plants/${room}`, fetcher);
  // const { data: rooms } = useSWR("/api/rooms", fetcher);

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

  // Filter plants that have certain room and compare to rooms _id
  // const plantsInRoom = plants.filter(plants.room === rooms._id);

  return (
    <div>
      <h2>All Plants</h2>
      {plants.map((plant) => (
        <li key={plant._id}>{plant.title}</li>
      ))}
    </div>
  );
}
