import { useState } from "react";
import { RoomType } from "../RoomTile/RoomTile";
import {
  StyledOpenBtn,
  StyledModal,
  StyledModalContent,
  StyledCloseModalBtn,
  StyledModalHeadline,
  StyledAddButton,
  StyledOverlay,
} from "@/components/AddRoomModal/AddRoomModal.Styled";
import {
  StyledInput,
  StyledSelect,
  StyledLabel,
} from "../AddPlantForm/AddPlantForm.Styled";

// Modal Component
export default function AddRoomModal({ rooms, addRoom }) {
  const [modalOpen, setModalOpen] = useState(false);

  // Toggle modal state from true to false
  const toggleModal = () => {
    setModalOpen(!modalOpen);
  };

  // Add room function
  const handleAddRoom = (event) => {
    event.preventDefault();
    addRoom({
      title: event.target.name.value,
      type: event.target.room.value,
    });
    toggleModal();
  };

  return (
    <>
      <StyledOpenBtn onClick={toggleModal}>Add Room</StyledOpenBtn>
      {/* If modal true, then return modal html, else return nothing*/}
      {modalOpen && (
        <StyledModal>
          <StyledOverlay onClick={toggleModal}></StyledOverlay>
          <StyledModalContent>
            <form onSubmit={handleAddRoom}>
              <StyledModalHeadline>Add Room</StyledModalHeadline>
              <StyledLabel htmlFor="name">Name</StyledLabel>
              <StyledInput
                type="text"
                id="name"
                name="name"
                required
              ></StyledInput>
              <StyledLabel htmlFor="room">Choose Room</StyledLabel>
              <StyledSelect id="room" name="room" required="required">
                <option value={RoomType.INVALID} disabled selected>
                  Select room type
                </option>
                <option value={RoomType.KITCHEN}>Kitchen</option>
                <option value={RoomType.BEDROOM}>Bedroom</option>
                <option value={RoomType.LIVING_ROOM}>Living Room</option>
                <option value={RoomType.HALLWAY}>Hallway</option>
                <option value={RoomType.DINING_ROOM}>Dining Room</option>
                <option value={RoomType.OFFICE}>Office</option>
                <option value={RoomType.BATHROOM}>Bathroom</option>
              </StyledSelect>
              <StyledAddButton type="submit">Add!</StyledAddButton>
            </form>
            <StyledCloseModalBtn onClick={toggleModal}>✕</StyledCloseModalBtn>
          </StyledModalContent>
        </StyledModal>
      )}
    </>
  );
}
