import styled from "styled-components";
import { RoomType } from "@/components/RoomTile/RoomTile";
import {
  StyledForm,
  StyledLabel,
  StyledInput,
  StyledSelect,
} from "../AddPlantForm/AddPlantForm.Styled";
import Button from "@/components/Button/Button";
import {
  StyledError,
  StyledErrorH3,
  StyledLoading,
} from "../RoomList/RoomsList.Styled";

import useSWR from "swr";
import { fetcher } from "@/utils/fetcher";

//TODO not list of RoomTypes --> user rooms need to be displayed, map over initialUserRooms[] in select
export default function AddPlantForm() {
  const { data: rooms, error, isLoading } = useSWR("/api/rooms", fetcher);

  if (error) {
    return (
      <StyledError>
        <StyledErrorH3>ERROR</StyledErrorH3>Failed to load rooms ☹︎
      </StyledError>
    );
  }

  if (isLoading) {
    return <StyledLoading>Loading your rooms...</StyledLoading>;
  }

  // TODO: empty state if no rooms?

  return (
    <>
      <StyledForm>
        <StyledLabel htmlFor="plant-name">Give your plant a name!</StyledLabel>
        <StyledInput type="text" id="plant-name" required placeholder="Name" />
        <StyledLabel htmlFor="room">Choose a room for your plant</StyledLabel>
        <StyledSelect id="room" name="room" required="required">
          {rooms.map((room, index) => (
            <option key={index} value={index}>
              {room.title}
            </option>
          ))}
        </StyledSelect>
        <Button type="submit" href="/add-plants">
          Add to my garden!
        </Button>
      </StyledForm>
    </>
  );
}
