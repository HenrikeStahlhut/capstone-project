import styled from "styled-components";
import { useState } from "react";
import { HiPencilAlt } from "react-icons/hi";
import {
  StyledAddButton,
  StyledCloseModalBtn,
  StyledModal,
  StyledModalContent,
  StyledModalHeadline,
  StyledOpenBtn,
  StyledOverlay,
} from "../AddRoomModal/AddRoomModal.Styled";
import {
  StyledInput,
  StyledLabel,
  StyledSelect,
} from "../AddPlantForm/AddPlantForm.Styled";
import { RoomType } from "../RoomTile/RoomTile";
import { useSWRConfig } from "swr";

const StyledButton = styled.button`
  border: none;
  background-color: transparent;
`;

export default function EditRoomModal({ room }) {
  const { mutate } = useSWRConfig();

  const [modalOpen, setModalOpen] = useState(false);
  const [title, setTitle] = useState(room.title);
  const [error, setError] = useState(null);

  const toggleModal = () => {
    setModalOpen(!modalOpen);
  };

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  async function handleSubmitEdit(event) {
    event.preventDefault();
    const formData = new FormData();
  }

  return (
    <>
      <StyledButton>
        <HiPencilAlt size="20px" onClick={toggleModal} />
      </StyledButton>
      {modalOpen && (
        <StyledModal>
          <StyledOverlay onClick={toggleModal}></StyledOverlay>
          <StyledModalContent>
            <StyledModalHeadline>Edit Room</StyledModalHeadline>
            <StyledLabel htmlFor="name">Name</StyledLabel>
            <StyledInput
              type="text"
              id="name"
              name="name"
              required
              value={title}
              onChange={handleTitleChange}
            ></StyledInput>
            <StyledAddButton type="submit">Save edits</StyledAddButton>

            <StyledCloseModalBtn onClick={toggleModal}>✕</StyledCloseModalBtn>
          </StyledModalContent>
        </StyledModal>
      )}
    </>
  );
}
