import styled from "styled-components";
import { RoomType } from "@/components/RoomTile/RoomTile";
import {
  StyledForm,
  StyledLabel,
  StyledInput,
  StyledSelect,
} from "../AddPlantForm/AddPlantForm.Styled";
import Button from "@/components/Button/Button";

//TODO not list of RoomTypes --> user rooms need to be displayed, map over initialUserRooms[] in select
export default function AddPlantForm() {
  return (
    <>
      <StyledForm>
        <StyledLabel htmlFor="plant-name">Give your plant a name!</StyledLabel>
        <StyledInput type="text" id="plant-name" required placeholder="Name" />
        <StyledLabel htmlFor="room">Choose a room for your plant</StyledLabel>
        <StyledSelect id="room" name="room" required="required">
          <option value={RoomType.INVALID} disabled selected>
            Select room
          </option>
          <option value={RoomType.KITCHEN}>Kitchen</option>
          <option value={RoomType.BEDROOM}>Bedroom</option>
          <option value={RoomType.LIVING_ROOM}>Living Room</option>
          <option value={RoomType.HALLWAY}>Hallway</option>
          <option value={RoomType.DINING_ROOM}>Dining Room</option>
          <option value={RoomType.OFFICE}>Office</option>
          <option value={RoomType.BATHROOM}>Bathroom</option>
          {/* Map over Roomslist  */}
        </StyledSelect>
        <Button type="submit" href="/add-plants">
          Add to my garden!
        </Button>
      </StyledForm>
    </>
  );
}
