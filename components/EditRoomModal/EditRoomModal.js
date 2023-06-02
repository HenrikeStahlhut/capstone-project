import styled from "styled-components";
import { useState } from "react";
import { HiPencilAlt } from "react-icons/hi";
import {
  StyledAddButton,
  StyledCloseModalBtn,
  StyledModal,
  StyledModalContent,
  StyledModalHeadline,
  StyledOverlay,
  StyledLabel,
} from "../EditRoomModal/EditRoomModal.Styled";
import { StyledInput } from "../AddPlantForm/AddPlantForm.Styled";
import { useRouter } from "next/router";
import useSWRMutation from "swr/mutation";

const StyledButton = styled.button`
  border: none;
  background-color: transparent;
  cursor: pointer;
`;

async function sendRequest(url, { arg }) {
  // here we set the request method
  const response = await fetch(url, {
    method: "PUT",
    body: JSON.stringify(arg),
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (!response.ok) {
    console.error(`Error: ${response.status}`);
  }
}

export default function EditRoomModal({ room }) {
  const router = useRouter();
  const { id } = router.query;
  const { trigger } = useSWRMutation(`/api/rooms/${id}`, sendRequest);

  const [modalOpen, setModalOpen] = useState(false);
  const [title, setTitle] = useState(room.title);

  const toggleModal = () => {
    setModalOpen(!modalOpen);
  };

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  async function handleEdit(event) {
    event.preventDefault();

    await trigger({ title });

    toggleModal();
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
              name="title"
              required
              value={title}
              onChange={handleTitleChange}
              autoComplete="off"
            />

            <StyledAddButton type="submit" onClick={handleEdit}>
              Save edits
            </StyledAddButton>

            <StyledCloseModalBtn onClick={toggleModal}>✕</StyledCloseModalBtn>
          </StyledModalContent>
        </StyledModal>
      )}
    </>
  );
}
