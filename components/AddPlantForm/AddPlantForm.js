import styled from "styled-components";
import { RoomType } from "@/components/RoomTile/RoomTile";
import Button from "@/components/Button/Button";

// Styled Components

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 15em;
  margin: 0 auto;
`;

const StyledLabel = styled.label`
  margin-top: 20px;
  margin-bottom: 10px;
`;

export default function AddPlantsForm() {
  return (
    <>
      <StyledForm>
        <StyledLabel htmlFor="plant-name">Give your plant a name!</StyledLabel>
        <input type="text" id="plant-name" required placeholder="Name" />
        <StyledLabel htmlFor="room">Which room is your plant in</StyledLabel>
        <select id="room" name="room" required="required">
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
        </select>
        <Button type="submit" href="/add-own-plant">
          Add to my garden!
        </Button>
      </StyledForm>
    </>
  );
}
