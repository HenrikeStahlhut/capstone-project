import {
  StyledAddButton,
  StyledCloseModalBtn,
  StyledModal,
  StyledModalContent,
  StyledModalHeadline,
  StyledOpenBtn,
  StyledOverlay,
} from "@/components/AddRoomModal/AddRoomModal.Styled";
import { useState } from "react";
import { useSWRConfig } from "swr";
import {
  StyledForm,
  StyledInput,
  StyledLabel,
  StyledSelect,
} from "../AddPlantForm/AddPlantForm.Styled";
import { RoomType } from "../RoomTile/RoomTile";

// Modal Component
export default function AddRoomModal() {
  const { mutate } = useSWRConfig();

  const [modalOpen, setModalOpen] = useState(false);
  const [title, setTitle] = useState("");
  const [type, setType] = useState(undefined);
  const [error, setError] = useState(null);

  // Toggle modal state from true to false
  const toggleModal = () => {
    setModalOpen(!modalOpen);
  };

  // Add room function
  const handleAddRoom = () => {
    if (!title || !type) {
      setError("Please fill in all fields");
      return;
    }

    fetch("/api/rooms", {
      method: "POST",
      body: JSON.stringify({
        title,
        type,
      }),
    }).then(() => {
      mutate("/api/rooms");
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
          <StyledForm>
            <StyledModalContent>
              <StyledModalHeadline>Add Room</StyledModalHeadline>
              {error && <p>{error}</p>}
              <StyledLabel htmlFor="name">Name</StyledLabel>
              <StyledInput
                type="text"
                id="name"
                name="name"
                required
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              ></StyledInput>
              <StyledLabel htmlFor="room">Choose Room</StyledLabel>
              <StyledSelect
                id="room"
                name="room"
                required="required"
                value={type}
                onChange={(e) => setType(e.target.value)}
              >
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
              <StyledAddButton type="submit" onClick={handleAddRoom}>
                Add!
              </StyledAddButton>

              <StyledCloseModalBtn onClick={toggleModal}>✕</StyledCloseModalBtn>
            </StyledModalContent>
          </StyledForm>
        </StyledModal>
      )}
    </>
  );
}
